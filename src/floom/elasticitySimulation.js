import System from "./system.js";
import Vector2 from "../external/vector2.js";

// Lamé parameters for stress-strain relationship
const elastic_lambda = 10.0;
const elastic_mu = 20.0;
const timeStep = 0.2;

/*
 * Simple elasticity implementation of MPM taken from https://github.com/nialltl/incremental_mpm
 */
System.prototype.elasticitySimulation = function() {
	if (this.particles[0].initialVolume === -1) {
		this.__elasticParticleToGrid();
		this.__calculateInitialVolume()
	}
	this.__elasticParticleToGrid();
	this.__elasticGridVelocityUpdate();
	this.__elasticGridToParticle();
	this.boundaryCorrection();
};

System.prototype.__calculateInitialVolume = function() {

	this.particles.forEach(function(p, particleIndex) {

		this.integrator.updateStateAndGradientOf(p);
		this.integrator.prepareParticle(p);

		let density = 0;

		this.integrator.integrate(p, function(particle, node, phi, gxpy, pxgy){
			density += node.mass * phi
		});

		p.initialVolume = p.material.particleMass / density
	}, this);
};

System.prototype.__elasticParticleToGrid = function() {

	this.particles.forEach(function(p, particleIndex) {

		const J = math.det(p.deformationGradient);
		const volume = p.initialVolume * J;
		const F_T = math.transpose(p.deformationGradient);
		const F_inv_T = math.inv(F_T);
		const F_minus_F_inv_T = math.subtract(p.deformationGradient, F_inv_T);

		// MPM course equation 48
		const P_term_0 = math.multiply(F_minus_F_inv_T ,elastic_mu);
		const P_term_1 = math.multiply(F_inv_T, elastic_lambda * math.log(J));
		const P = math.add(P_term_0, P_term_1);



		// cauchy_stress = (1 / det(F)) * P * F_T
		// equation 38, MPM course
		const stress = math.multiply((1.0 / J), math.multiply(P, F_T));



		// (M_p)^-1 = 4, see APIC paper and MPM course page 42
		// this term is used in MLS-MPM paper eq. 16. with quadratic weights, Mp = (1/4) * (delta_x)^2.
		// in this simulation, delta_x = 1, because i scale the rendering of the domain rather than the domain itself.
		// we multiply by dt as part of the process of fusing the momentum and force update for MLS-MPM
		const eq_16_term_0 = math.multiply(stress, -volume * 4 * timeStep);

		this.integrator.updateStateAndGradientOf(p);
		this.integrator.prepareParticle(p);

		this.integrator.integrate(p, function(particle, node, phi, gxpy, pxgy){
			const cell_dist = [gxpy, pxgy];
			const Q = Vector2.fromMathMatrix(math.multiply(p.affineMomentum, cell_dist));

			const weightedMass = phi * particle.material.particleMass;
			node.mass += weightedMass;
			node.velocity.addSelf((particle.velocity.add(Q).mulFloat(weightedMass)));



			// fused force/momentum update from MLS-MPM
			// see MLS-MPM paper, equation listed after eqn. 28
			const momentum = Vector2.fromMathMatrix(math.multiply(math.multiply(eq_16_term_0, phi), cell_dist));
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
		node.velocity.divFloatSelf(node.mass);
		node.velocity.addSelf(this.gravity.mulFloat(timeStep));
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
		let B = math.zeros(2, 2);

		this.integrator.integrate(p, function(particle, node, phi, gxpy, pxgy){

			const weighted_velocity = new Vector2(node.velocity.x * phi, node.velocity.y * phi);

			// APIC paper equation 10, constructing inner term for B
			const term = math.matrix([
				[weighted_velocity.x * gxpy, weighted_velocity.y * gxpy],
				[weighted_velocity.x * pxgy, weighted_velocity.y * pxgy]]);

			B = math.add(B, term);
			particle.velocity.addSelf(weighted_velocity);
		});

		p.affineMomentum = math.multiply(B, 4);
		p.position.addSelf(p.velocity.mulFloat(timeStep));

		let newDeformationGradient = math.matrix([
			[1, 0],
			[0, 1]]);

		newDeformationGradient = math.add(newDeformationGradient, math.multiply(p.affineMomentum, timeStep));
		p.deformationGradient = math.multiply(newDeformationGradient, p.deformationGradient);
	}, this);
};

