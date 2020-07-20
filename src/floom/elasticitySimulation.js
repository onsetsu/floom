import System from "./system.js";
import Vector2 from "../external/vector2.js";
// import * as glMatrix from "../external/glMatrix.js";

// Lamé parameters for stress-strain relationship
const elastic_lambda = 10.0;
const elastic_mu = 20.0;
// TODO: calculate this dynamically, depending on FPS. CAUTION: when this value is too low, NaNs will occur.
const timeStep = 1/20;
const mat2 = glMatrix.mat2;
const vec2 = glMatrix.vec2;

/*
 * Simple elasticity implementation of MPM taken from https://github.com/nialltl/incremental_mpm
 */
System.prototype.elasticitySimulation = function() {
	this.drawGrid = true;

	if (this.particles[0].initialVolume === -1) {
		this.__elasticParticleToGrid();
		this.__calculateInitialVolume()
	}
	this.__elasticParticleToGrid();
	this.__elasticGridVelocityUpdate();
	this.__elasticGridToParticle();
	// this.boundaryCorrection();
};

System.prototype.__calculateInitialVolume = function() {

	this.particles.forEach(function(p, particleIndex) {

		this.integrator.updateStateAndGradientOf(p);
		this.integrator.prepareParticle(p);

		let density = 0;

		this.integrator.integrate(p, function(particle, node, phi, gxpy, pxgy){
			density += node.mass * phi
		});

		p.initialVolume = p.material.particleMass / density;
	}, this);
};

System.prototype.__elasticParticleToGrid = function() {

	this.particles.forEach(function(p, particleIndex) {

		const J = mat2.determinant(p.deformationGradient);
		// TODO: what's the volume about? There also seems to be am
		const volume = p.initialVolume * J;
		const F_T = mat2.transpose(mat2.create(), p.deformationGradient);
		const F_inv_T = mat2.invert(mat2.create(), F_T);
		const F_minus_F_inv_T = mat2.subtract(mat2.create(), p.deformationGradient, F_inv_T);

		// MPM course equation 48
		const P_term_0 = mat2.multiplyScalar(mat2.create(), F_minus_F_inv_T ,elastic_mu);
		const P_term_1 = mat2.multiplyScalar(mat2.create(), F_inv_T, elastic_lambda * Math.log(J));
		const P = mat2.add(mat2.create(), P_term_0, P_term_1);



		// cauchy_stress = (1 / det(F)) * P * F_T
		// equation 38, MPM course
		const stress = mat2.multiplyScalar(
			mat2.create(),
			mat2.multiply(mat2.create(), P, F_T),
			(1.0 / J));


		// (M_p)^-1 = 4, see APIC paper and MPM course page 42
		// this term is used in MLS-MPM paper eq. 16. with quadratic weights, Mp = (1/4) * (delta_x)^2.
		// in this simulation, delta_x = 1, because i scale the rendering of the domain rather than the domain itself.
		// we multiply by dt as part of the process of fusing the momentum and force update for MLS-MPM
		const eq_16_term_0 = mat2.multiplyScalar(mat2.create(), stress, -volume * 4 * timeStep);

		this.integrator.updateStateAndGradientOf(p);
		this.integrator.prepareParticle(p);

		this.integrator.integrate(p, function(particle, node, phi, gxpy, pxgy){
			const cell_dist_vector = node.cellPosition.sub(particle.position);
			const cell_dist = new vec2.fromValues(cell_dist_vector.x, cell_dist_vector.y);
			const Q = Vector2.fromGlMatrixVec2(
				vec2.transformMat2(
					vec2.create(),
					cell_dist,
					p.affineMomentum));

			// const Q = Vector2.fromMathMatrix(math.multiply(p.affineMomentum, cell_dist));

			const weightedMass = phi * particle.material.particleMass;
			node.mass += weightedMass;
			node.velocity.addSelf((particle.velocity.add(Q).mulFloat(weightedMass)));


			// fused force/momentum update from MLS-MPM
			// see MLS-MPM paper, equation listed after eqn. 28
			const momentum = Vector2.fromGlMatrixVec2(vec2.transformMat2(
				vec2.create(),
				cell_dist,
				mat2.multiplyScalar(mat2.create(), eq_16_term_0, phi)));
			node.velocity.addSelf(momentum);


			// total update on cell.v is now:
			// weight * (dt * M^-1 * p.volume * p.stress + p.mass * p.C)
			// this is the fused momentum + force from MLS-MPM. however, instead of our stress being derived from the energy density,
			// i use the weak form with cauchy stress. converted:
			// p.volume_0 * (dΨ/dF)(Fp)*(Fp_transposed)
			// is equal to p.volume * σ

			// note: currently "cell.v" refers to MOMENTUM, not velocity!
			// this gets converted in the UpdateGrid step below.
		});
	}, this);
};


System.prototype.__elasticGridVelocityUpdate = function() {
	this.grid.iterate(function(node) {
		// convert momentum to velocity, apply gravity
		if (node.mass > 0) {
			node.velocity.divFloatSelf(node.mass);
			node.velocity.addSelf(this.gravity.mulFloat(timeStep));

			if (node.cellPosition.x < this.wall.Min.x + 2 || node.cellPosition.x > this.wall.Max.x - 2) {
				node.velocity.x = 0;
			}
			if (node.cellPosition.y < this.wall.Min.y + 2 || node.cellPosition.y > this.wall.Max.y - 2) {
				node.velocity.y = 0;
			}
		}


		// if(isNaN(node.velocity.x) || isNaN(node.velocity.y)) {
		// 	debugger
		// }
	}, this);
};

System.prototype.__elasticGridToParticle = function() {
	this.particles.forEach(function(p, particleIndex) {
		// reset particle velocity. we calculate it from scratch each step using the grid
		p.velocity.clear();


		// constructing affine per-particle momentum matrix from APIC / MLS-MPM.
		// see APIC paper (https://web.archive.org/web/20190427165435/https://www.math.ucla.edu/~jteran/papers/JSSTS15.pdf), page 6
		// below equation 11 for clarification. this is calculating C = B * (D^-1) for APIC equation 8,
		// where B is calculated in the inner loop at (D^-1) = 4 is a constant when using quadratic interpolation functions
		let B = mat2.fromValues(0,0,0,0);;

		this.integrator.integrate(p, function(particle, node, phi, gxpy, pxgy){

			const weighted_velocity = new Vector2(node.velocity.x * phi, node.velocity.y * phi);


			const cell_dist_vector = node.cellPosition.sub(particle.position);

			// APIC paper equation 10, constructing inner term for B
			const term = mat2.fromValues(
				weighted_velocity.x * cell_dist_vector.x, weighted_velocity.x * cell_dist_vector.y,
				weighted_velocity.y * cell_dist_vector.y, weighted_velocity.y * cell_dist_vector.y);

			B = mat2.add(B, B, term);
			particle.velocity.addSelf(weighted_velocity);
		});

		p.affineMomentum = mat2.multiplyScalar(p.affineMomentum, B, 4);
		p.position.addSelf(p.velocity.mulFloat(timeStep));

		// safety clamp to ensure particles don't exit simulation domain
		// p.x = math.clamp(p.x, 1, grid_res - 2);
		p.position.clampSelf(this.wall.Min, this.wall.Max);


		let newDeformationGradient = mat2.create();

		newDeformationGradient = mat2.add(
			newDeformationGradient,
			newDeformationGradient,
			mat2.multiplyScalar(
				mat2.create(),
				p.affineMomentum,
				timeStep));

		p.deformationGradient = mat2.multiply(
			p.deformationGradient,
			newDeformationGradient,
			p.deformationGradient);
	}, this);
};

