export default class Material {
	constructor(materialIndex) {
		this.setColor(Material.getColor(materialIndex));

		this.materialIndex = materialIndex;
		this.particleMass = 1;
		this.restDensity = 1;
		this.stiffness = 1;
		this.bulkViscosity = 1 ;
		this.surfaceTension = 0.2;
		this.elasticity = 0.05;
		this.maxDeformation = 0;
		this.meltRate = 0;
		this.shearViscosity = 0;
		this.viscosity = 0.02;
		this.damping = 0.1;
		this.wallFriction = 0;
		this.wallAttraction = 1;
		this.smoothing = 1;
		this.isElastic = false;
		this.springK = 0.3;

		this.yieldPoint = 0;
		this.yieldRate = 1;
	};

	// debug colors
	static getColor(index) {
		const materialColors = [
			'#1f78b4',
			'#e31a1c',
			'#fdbf6f',
			'#b2df8a',
			'#fb9a99',
			'#ff7f00',
			'#33a02c',
			'#cab2d6',
			'#6a3d9a',
			'#ffff99',
			'#b15928'
		];

		return materialColors[index % materialColors.length];
	};

	// Property setters
	setColor(color) {
		this.color = color;
		return this;
	}

	setParticleMass(particleMass) {
		this.particleMass = particleMass;

		return this;
	}

	setRestDensity(restDensity) {
		this.restDensity = restDensity;

		return this;
	}

	setStiffness(stiffness) {
		this.stiffness = stiffness;

		return this;
	}

	setBulkViscosityfunction(bulkViscosity) {
		this.bulkViscosity = bulkViscosity ;

		return this;
	}

	setSurfaceTensionfunction(surfaceTension) {
		this.surfaceTension = surfaceTension ;

		return this;
	}

	setElasticity(elasticity) {
		this.elasticity = elasticity;

		return this;
	}

	setMaxDeformation(maxDeformation) {
		this.maxDeformation = maxDeformation;

		return this;
	}

	setMeltRate(meltRate) {
		this.meltRate = meltRate;

		return this;
	}

	setShearViscosity(shearViscosity) {
		this.shearViscosity = shearViscosity;

		return this;
	}

	setViscosity(viscosity) {
		this.viscosity = viscosity;

		return this;
	}

	setDamping(damping) {
		this.damping = damping;

		return this;
	}

	setWallFrictiong(wallFriction) {
		this.wallFriction = wallFriction;

		return this;
	}

	setWallAttraction(wallAttraction) {
		this.wallAttraction = wallAttraction;

		return this;
	}

	setSmoothing(smoothing) {
		this.smoothing = smoothing;

		return this;
	}

	setIsElastic(isElastic) {
		this.isElastic = isElastic;

		return this;
	}

	setSpringK(springK) {
		this.springK = springK;

		return this;
	}

	setYieldPoint(yieldPoint) {
		this.yieldPoint = yieldPoint;

		return this;
	}

	setYieldRate(yieldRate) {
		this.yieldRate = yieldRate;

		return this;
	}

}
