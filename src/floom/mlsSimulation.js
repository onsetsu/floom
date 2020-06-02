import System from "@/floom/system.js";
import Material from "@/floom/material.js";
import Particle from "@/floom/particle.js";
import Node from "@/floom/node.js";
import Grid from "@/floom/grid.js";
import Obstacle from "@/floom/obstacle.js";
import Integrator from "@/floom/integrator.js";
import Vector2 from "@/utils/vector2.js";
import Matrix from "@/utils/matrix.js";
import forEach from "lodash.foreach";


/*
 * Simple incremental implementation of MPM taken from https://github.com/nialltl/incremental_mpm
 */
System.prototype.mlsSimulation = function() {
	this.__particleToGrid();
	this.__gridVelocityUpdate();
	this.__gridToParticle();
	this.boundaryCorrection();
};

System.prototype.__particleToGrid = function() {

	forEach(this.particles, (p, particleIndex) => {

		this.integrator.updateStateAndGradientOf(p);
		this.integrator.prepareParticle(p);

		this.integrator.integrate(p, function(particle, node, phi, gxpy, pxgy){

			const cellToParticle = Matrix.fromArray([gxpy, pxgy]);
			const Q =  Vector2.fromMatrix(Matrix.mult(cellToParticle, particle.affineMomentum));

			// MPM course, equation 172
			const mass_contrib = phi * particle.material.particleMass;

			// scatter mass to the grid
			node.mass += mass_contrib;

			node.velocity.weightedAddSelf(p.velocity.add(Q), mass_contrib);
		})
	});
};


System.prototype.__gridVelocityUpdate = function() {
	this.grid.iterate(function(node) {
		// convert momentum to velocity, apply gravity
		node.velocity.divFloatSelf(node.mass);
		node.velocity.addSelf(this.gravity);

		// debugger;
		// if (node.gx < 2 || node.gx > grid_res - 3) { node.velocity.x = 0; }
		// if (node.gy < 2 || node.gy > grid_res - 3) { node.velocity.y = 0; }
	}, this);
};

System.prototype.__gridToParticle = function() {

	forEach(this.particles, (p, particleIndex) => {
		// reset particle velocity. we calculate it from scratch each step using the grid
		p.velocity.clear();


		// constructing affine per-particle momentum matrix from APIC / MLS-MPM.
		// see APIC paper (https://web.archive.org/web/20190427165435/https://www.math.ucla.edu/~jteran/papers/JSSTS15.pdf), page 6
		// below equation 11 for clarification. this is calculating C = B * (D^-1) for APIC equation 8,
		// where B is calculated in the inner loop at (D^-1) = 4 is a constant when using quadratic interpolation functions
		const B = new Matrix(2, 2, 0);

		this.integrator.integrate(p, function(particle, node, phi, gxpy, pxgy){

			const weighted_velocity = new Vector2(node.velocity.x * phi, node.velocity.y * phi);

			// APIC paper equation 10, constructing inner term for B
			const term = Matrix.fromArray( [
				[weighted_velocity.x * gxpy, weighted_velocity.y * gxpy],
				[weighted_velocity.x * pxgy, weighted_velocity.y * pxgy]]);


			B.add(term);
			particle.velocity.addSelf(weighted_velocity);
		})

		p.C = B.mult(4);
		p.position.addSelf(p.velocity);

	});
};
	
