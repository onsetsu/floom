/* eslint-disable no-underscore-dangle */

import forEach from 'lodash.foreach';

import System from '@/floom/system';
import Vector2 from '@/utils/vector2';

/*
   * Early simple implementation of the material point method
   */
System.prototype.simpleSimulation = function simpleSimulation() {
  this.__calculateParticleKernels();
  this.__sumParticleDensityFromGridAndAddPressureansElasticForcesToGrid();
  this.__divideGridAccelerationByMass();
  this.__accelerateParticlesAndInterpolateVelocityBackToGrid();
  this.__divideGridVelocityByMass();
  this.__advanceParticles();
};

System.prototype.__calculateParticleKernels = function calculateParticleKernels() {
  // calculate particle kernels, and add density and density gradients to the grid
  forEach(this.particles, (p) => {
    this.integrator.updateStateAndGradientOf(p);
    this.integrator.prepareParticle(p);

    this.integrator.integrate(p, (particle, node, phi) => {
      // eslint-disable-next-line no-param-reassign
      node.mass += phi;
    });
  });
};

// eslint-disable-next-line max-len
System.prototype.__sumParticleDensityFromGridAndAddPressureansElasticForcesToGrid = function sumParticleDensityFromGridAndAddPressureansElasticForcesToGrid() {
  // Sum particle density from grid, and add pressure and elastic forces to grid
  forEach(this.particles, (p) => {
    let density = 0;
    this.integrator.integrate(p, (particle, node, phi) => {
      density += phi * node.mass;
    });

    const { restDensity } = p.material;
    let pressure = (density - restDensity) / restDensity;
    if (pressure > 4.0) { pressure = 4.0; }

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

    this.integrator.integrate(p, (particle, node, phi, gxpy, pxgy) => {
      // eslint-disable-next-line no-param-reassign
      node.acceleration.x += -(gxpy * pressure) + f.x * phi;
      // eslint-disable-next-line no-param-reassign
      node.acceleration.y += -(pxgy * pressure) + f.y * phi;
    });
  });
};


// divide grid acceleration by mass
System.prototype.__divideGridAccelerationByMass = function divideGridAccelerationByMass() {
  this.grid.iterate((n) => {
    if (n.mass > 0.0) {
      n.acceleration.divFloatSelf(n.mass);
      n.acceleration.addSelf(this.gravity);
    }
  }, this);
};

// accelerate particles and interpolate velocity back to grid
// eslint-disable-next-line max-len
System.prototype.__accelerateParticlesAndInterpolateVelocityBackToGrid = function accelerateParticlesAndInterpolateVelocityBackToGrid() {
  forEach(this.particles, (p) => {
    this.integrator.integrate(p, (particle, node, phi) => {
      particle.velocity.weightedAddSelf(node.acceleration, phi);
    });
    this.integrator.integrate(p, (particle, node, phi) => {
      node.velocity.weightedAddSelf(particle.velocity, phi);
    });
  });
};

// divide grid velocity by mass
System.prototype.__divideGridVelocityByMass = function divideGridVelocityByMass() {
  this.grid.iterate((n) => {
    if (n.mass > 0.0) {
      n.velocity.divFloatSelf(n.mass);
    }
  }, this);
};

System.prototype.__advanceParticles = function advanceParticles() {
  // advance particles
  forEach(this.particles, (p) => {
    p.gridVelocity.clear();
    this.integrator.integrate(p, (particle, node, phi) => {
      particle.gridVelocity.weightedAddSelf(node.velocity, phi);
    });
    p.position.addSelf(p.gridVelocity);
    p.velocity.weightedAddSelf(p.gridVelocity.sub(p.velocity), p.material.smoothing);
  });
};
