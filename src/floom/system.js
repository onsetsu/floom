import forEach from 'lodash.foreach';

import Vector2 from '@/utils/vector2';
import AABB from '@/utils/aabb';

import Material from '@/floom/material';
import Particle from '@/floom/particle';
import Grid from '@/floom/grid';
import Obstacle from '@/floom/obstacle';
import Integrator from '@/floom/integrator';

function System(settings = {}) {
  this.wall = settings.wall ? settings.wall : new AABB(
    new Vector2(-50, 2),
    new Vector2(50, 100),
  );
  this.gravity = settings.gravity ? settings.gravity : new Vector2(0, -0.05);// 0.004, 0.02
  this.materials = settings.materials ? settings.materials : [];
  this.particles = settings.particles ? settings.particles : [];
  this.springs = settings.springs ? settings.springs : [];
  this.grid = settings.grid ? Grid.fromJSON(settings.grid) : new Grid();
  this.integrator = new Integrator(this.grid);

  this.implementationType = 'surfaceTension';
  this.drawGrid = false;

  this.doObstacles = settings.doObstacles ? settings.doObstacles : false;
  this.obstacles = settings.obstacles ? settings.obstacles : [];

  this.doSprings = settings.doSprings ? settings.doSprings : false;
  this.drawSprings = settings.drawSprings ? settings.drawSprings : false;
}

System.prototype.getNumberOfParticles = function getNumberOfParticles() {
  return this.particles.length;
};

System.prototype.getNumberOfMaterials = function getNumberOfMaterials() {
  return this.materials.length;
};

System.prototype.createNewMaterial = function createNewMaterial() {
  const newMaterial = new Material(this.materials.length);
  this.materials.push(newMaterial);

  return newMaterial;
};

System.prototype.addParticle = function addParticle(particle) {
  this.particles.push(particle);
};

/*
   * UPDATE
   */
System.prototype.update = function update() {
  this.grid.update(this);

  if (this.implementationType === 'surfaceTension') {
    this.surfaceTensionImplementation();
  } else if (this.implementationType === 'mls') {
    this.mlsSimulation();
  } else {
    this.simpleSimulation();
  }
};


/*
   * surface tension implementation
   */
System.prototype.surfaceTensionImplementation = function surfaceTensionImplementation() {
  this.mapPropertiesToGrid();
  this.sumUpPerMaterialGradients();

  // Calculate pressure and add forces to grid
  forEach(this.particles, (p) => {
    const { material } = p;
    let dudx = 0; let dudy = 0;
    let dvdx = 0; let dvdy = 0;
    let sx = 0; let
      sy = 0;

    this.integrator.integrate(p, (particle, node, phi, gxpy, pxgy) => {
      // Surface tension
      sx += phi * node.cgx[material.materialIndex];
      sy += phi * node.cgy[material.materialIndex];

      // Velocity gradient
      dudx += node.velocity.x * gxpy;
      dudy += node.velocity.x * pxgy;
      dvdx += node.velocity.y * gxpy;
      dvdy += node.velocity.y * pxgy;
    });

    // determine cell index for mesh
    const linearCellX = Math.floor(p.position.x - this.grid.boundaries.Min.x); // get cell x
    const linearCellY = Math.floor(p.position.y - this.grid.boundaries.Min.y); // get cell y

    // linear 2x2 kernel
    // y  +-+-+
    //  1 |2|4|
    //    +-+-+
    //  0 |1|3|
    //    +-+-+
    //   /
    //  /  0 1 x
    const n1 = this.grid.getOrCreateAt(linearCellX, linearCellY);
    const n2 = this.grid.getOrCreateAt(linearCellX, linearCellY + 1);
    const n3 = this.grid.getOrCreateAt(linearCellX + 1, linearCellY);
    const n4 = this.grid.getOrCreateAt(linearCellX + 1, linearCellY + 1);

    const density = this.uscip(
      n1.particleDensity, n1.gx, n1.gy,
      n2.particleDensity, n2.gx, n2.gy,
      n3.particleDensity, n3.gx, n3.gy,
      n4.particleDensity, n4.gx, n4.gy,
      p.position.x - this.grid.boundaries.Min.x - linearCellX,
      p.position.y - this.grid.boundaries.Min.y - linearCellY,
    ); // r and s

    const { restDensity } = material;
    let pressure = (material.stiffness * (density - restDensity)) / restDensity;
    if (pressure > 2.0) { pressure = 2.0; }

    // Update stress tensor
    const w1 = dudy - dvdx;
    const wT0 = 0.5 * w1 * (p.T01 + p.T01);
    const wT1 = 0.5 * w1 * (p.T00 - p.T11);
    const D00 = dudx;
    const D01 = 0.5 * (dudy + dvdx);
    const D11 = dvdy;
    const trace = 0.5 * (D00 + D11);
    // eslint-disable-next-line no-param-reassign
    p.T00 += 0.5 * (-wT0 + (D00 - trace) - material.meltRate * p.T00);
    // eslint-disable-next-line no-param-reassign
    p.T01 += 0.5 * (wT1 + D01 - material.meltRate * p.T01);
    // eslint-disable-next-line no-param-reassign
    p.T11 += 0.5 * (wT0 + (D11 - trace) - material.meltRate * p.T11);

    // Stress tensor fracture
    const norm = p.T00 * p.T00 + 2 * p.T01 * p.T01 + p.T11 * p.T11;

    if (norm > material.maxDeformation) {
      // eslint-disable-next-line no-param-reassign
      p.T00 = 0;
      // eslint-disable-next-line no-param-reassign
      p.T01 = 0;
      // eslint-disable-next-line no-param-reassign
      p.T11 = 0;
    }

    let T00 = material.particleMass
      * (material.elasticity
          * p.T00
          + material.viscosity
          * D00
          + pressure
          + trace
          * material.bulkViscosity
      );
    let T01 = material.particleMass
      * (material.elasticity
        * p.T01
        + material.viscosity
        * D01
      );
    let T11 = material.particleMass
      * (material.elasticity
        * p.T11
        + material.viscosity
        * D11
        + pressure
        + trace
        * material.bulkViscosity
      );

    // Surface tension
    const lenSq = sx * sx + sy * sy;
    if (lenSq > 0) {
      const len = Math.sqrt(lenSq);
      const a = (material.particleMass * material.surfaceTension) / len;
      T00 -= a * (0.5 * lenSq - sx * sx);
      T01 -= a * (-sx * sy);
      T11 -= a * (0.5 * lenSq - sy * sy);
    }

    // Wall force
    const f = Vector2.Zero.copy();
    if (p.position.x < this.wall.Min.x) {
      f.x += this.wall.Min.x - p.position.x;
      // eslint-disable-next-line no-param-reassign
      p.velocity.x *= 0.1;
    }
    if (p.position.x > this.wall.Max.x) {
      f.x += this.wall.Max.x - p.position.x;
      // eslint-disable-next-line no-param-reassign
      p.velocity.x *= 0.1;
    }
    if (p.position.y < this.wall.Min.y) {
      f.y += this.wall.Min.y - p.position.y;
      // eslint-disable-next-line no-param-reassign
      p.velocity.y *= 0.1;
    }
    if (p.position.y > this.wall.Max.y) {
      f.y += this.wall.Max.y - p.position.y;
      // eslint-disable-next-line no-param-reassign
      p.velocity.y *= 0.1;
    }

    // test obstacle collision
    if (this.doObstacles) {
      // circular obstacles
      forEach(this.obstacles, (obstacle) => {
        const obstacleRadius = obstacle.radius;
        const obstacleRadiusSquared = obstacleRadius * obstacleRadius;
        const particleDistanceToMiddlePoint = obstacle.position.sub(p.position);
        const distanceSquared = particleDistanceToMiddlePoint.lengthSquared();
        if (distanceSquared < obstacleRadiusSquared) {
          const distance = Math.sqrt(distanceSquared);
          const dR = obstacleRadius - distance;
          f.subSelf(particleDistanceToMiddlePoint.mulFloat(dR / distance));
        }
      });
    }

    this.integrator.integrate(p, (particle, node, phi, gxpy, pxgy) => {
      // eslint-disable-next-line no-param-reassign
      node.acceleration.x += -(gxpy * T00 + pxgy * T01) + f.x * phi;
      // eslint-disable-next-line no-param-reassign
      node.acceleration.y += -(gxpy * T01 + pxgy * T11) + f.y * phi;
    });
  });

  // Update acceleration of nodes
  this.grid.iterate((node) => {
    if (node.mass > 0.0) {
      node.acceleration.divFloatSelf(node.mass);
    }
  }, this);

  forEach(this.particles, (p) => {
    const { material } = p;

    // Update particle velocities
    this.integrator.integrate(p, (particle, node, phi) => {
      particle.velocity.weightedAddSelf(node.acceleration, phi);
    });

    p.velocity.addSelf(this.gravity);
    p.velocity.mulFloatSelf(1 - material.damping);

    // Add particle velocities back to the grid
    this.integrator.integrate(p, (particle, node, phi) => {
      node.velocity2.weightedAddSelf(particle.velocity, material.particleMass * phi);
    });
  });

  // Update node velocities
  this.grid.iterate((node) => {
    if (node.mass > 0.0) {
      node.velocity2.divFloatSelf(node.mass);
    }
  }, this);

  this.advanceParticles();
  this.springDisplacement();
  this.boundaryCorrection();
};

System.prototype.mapPropertiesToGrid = function mapPropertiesToGrid() {
  forEach(this.particles, (p) => {
    const { material } = p;

    // Update grid cell index and kernel weights
    this.integrator.updateStateAndGradientOf(p);
    this.integrator.prepareParticle(p);

    // Add particle mass, velocity and density gradient to grid
    this.integrator.integrate(p, (particle, node, phi, gxpy, pxgy) => {
      // eslint-disable-next-line no-param-reassign
      node.mass += phi * material.particleMass;
      // eslint-disable-next-line no-param-reassign
      node.particleDensity += phi;
      node.velocity.weightedAddSelf(particle.velocity, material.particleMass * phi);
      // eslint-disable-next-line no-param-reassign
      node.cgx[material.materialIndex] += gxpy;
      // eslint-disable-next-line no-param-reassign
      node.cgy[material.materialIndex] += pxgy;
    });
  });
};

System.prototype.sumUpPerMaterialGradients = function sumUpPerMaterialGradients() {
  const numMaterials = this.getNumberOfMaterials();
  this.grid.iterate((node) => {
    if (node.mass > 0.0) {
      node.acceleration.clear();
      // eslint-disable-next-line no-param-reassign
      node.gx = 0;
      // eslint-disable-next-line no-param-reassign
      node.gy = 0;
      node.velocity.divFloatSelf(node.mass);
      // sum up gradients of all materials
      for (let i = 0; i < numMaterials; i += 1) {
        // eslint-disable-next-line no-param-reassign
        node.gx += node.cgx[i];
        // eslint-disable-next-line no-param-reassign
        node.gy += node.cgy[i];
      }
      for (let i = 0; i < numMaterials; i += 1) {
        // eslint-disable-next-line no-param-reassign
        node.cgx[i] -= node.gx - node.cgx[i];
        // eslint-disable-next-line no-param-reassign
        node.cgy[i] -= node.gy - node.cgy[i];
      }
    }
  }, this);
};

System.prototype.uscip = function uscip(
  p00, x00, y00,
  p01, x01, y01,
  p10, x10, y10,
  p11, x11, y11,
  u, v,
) {
  const dx = x00 - x01;
  const dy = y00 - y10;
  const a = p01 - p00;
  const b = p11 - p10 - a;
  const c = p10 - p00;
  const d = y11 - y01;
  return ((((d - 2 * b - dy) * u - 2 * a + y00 + y01)
    * v + ((3 * b + 2 * dy - d) * u + 3 * a - 2 * y00 - y01))
    * v + ((((2 * c - x00 - x10) * u + (3 * b + 2 * dx + x10 - x11)) * u - b - dy - dx) * u + y00))
    * v + (((x11 - 2 * (p11 - p01 + c) + x10 + x00 + x01) * u + (3 * c - 2 * x00 - x10)) * u + x00)
    * u + p00;
};

System.prototype.advanceParticles = function advanceParticles() {
  forEach(this.particles, (p) => {
    const { material } = p;

    const gVelocity = Vector2.Zero.copy();
    let dudx = 0; let dudy = 0; let dvdx = 0; let
      dvdy = 0;

    this.integrator.integrate(p, (particle, node, phi, gxpy, pxgy) => {
      gVelocity.weightedAddSelf(node.velocity2, phi);

      // Velocity gradient
      dudx += node.velocity2.x * gxpy;
      dudy += node.velocity2.x * pxgy;
      dvdx += node.velocity2.y * gxpy;
      dvdy += node.velocity2.y * pxgy;
    });

    // Update stress tensor
    const w1 = dudy - dvdx;
    const wT0 = 0.5 * w1 * (p.T01 + p.T01);
    const wT1 = 0.5 * w1 * (p.T00 - p.T11);
    const D00 = dudx;
    const D01 = 0.5 * (dudy + dvdx);
    const D11 = dvdy;
    const trace = 0.5 * (D00 + D11);
    // eslint-disable-next-line no-param-reassign
    p.T00 += 0.5 * (-wT0 + (D00 - trace) - material.meltRate * p.T00);
    // eslint-disable-next-line no-param-reassign
    p.T01 += 0.5 * (wT1 + D01 - material.meltRate * p.T01);
    // eslint-disable-next-line no-param-reassign
    p.T11 += 0.5 * (wT0 + (D11 - trace) - material.meltRate * p.T11);

    // Stress tensor fracture
    const norm = p.T00 * p.T00 + 2 * p.T01 * p.T01 + p.T11 * p.T11;

    if (norm > material.maxDeformation) {
      // eslint-disable-next-line no-param-reassign
      p.T00 = 0;
      // eslint-disable-next-line no-param-reassign
      p.T01 = 0;
      // eslint-disable-next-line no-param-reassign
      p.T11 = 0;
    }

    // advance particle
    p.prevPosition.set(p.position);
    p.position.addSelf(gVelocity);
    p.gridVelocity.set(gVelocity);
    p.velocity.weightedAddSelf(gVelocity.sub(p.velocity), material.smoothing);
  });
};

System.prototype.springDisplacement = function springDisplacement() {
  if (this.doSprings) {
    forEach(this.springs, (s) => {
      s.update();
      s.solve();
    });
  }
};

// hard boundary correction
System.prototype.boundaryCorrection = function boundaryCorrection() {
  forEach(this.particles, (p) => {
    if (p.position.x < this.wall.Min.x - 4) {
      // eslint-disable-next-line no-param-reassign
      p.position.x = this.wall.Min.x - 4 + 0.01 * Math.random();
    } else if (p.position.x > this.wall.Max.x + 4) {
      // eslint-disable-next-line no-param-reassign
      p.position.x = this.wall.Max.x + 4 - 0.01 * Math.random();
    }
    if (p.position.y < this.wall.Min.y - 4) {
      // eslint-disable-next-line no-param-reassign
      p.position.y = this.wall.Min.y - 4 + 0.01 * Math.random();
    } else if (p.position.y > this.wall.Max.y + 4) {
      // eslint-disable-next-line no-param-reassign
      p.position.y = this.wall.Max.y + 4 - 0.01 * Math.random();
    }
  });
};

// snapshotting logic:
System.prototype.toJSON = function toJSON() {
  const settings = {
    // we leave this for now, walls don't change and will be recreated with default vallues
    // wall: this.wall,
    // we can recreate materials using
    // the index since values are never changed at runtime (I guess??)
    materials: this.materials,
    // TODO: is using .map valid?
    particles: this.particles.map((particle) => particle.toJSON()),
    // skipping springs for now since we need to reference particles for them to work
    // springs: ...
    // TODO: for now we skip the grid and recreate it
    // grid: Grid.toJSON(),
    useSurfaceTensionImplementation: this.useSurfaceTensionImplementation,
    drawGrid: this.drawGrid,
    doObstacles: this.doObstacles,
    obstacles: this.obstacles.map((obstacle) => obstacle.toJSON()),
    doSprings: this.doSprings,
    drawSprings: this.drawSprings,
  };

  return { ...settings };
};

System.fromJSON = function fromJSON(settings) {
  // TODO: a cleaner way would be to initialize the Grid
  // and after that fill it with the data from settings
  const system = new System(settings);
  system.materials = settings.materials;
  system.particles = settings.particles.map((particle) => Particle.fromJSON(particle));
  system.obstacles = settings.obstacles.map((obstacle) => Obstacle.fromJSON(obstacle));
  return system;
};

export default System;
