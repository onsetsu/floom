define([

], function() {
	var Material = function(materialIndex) {
		this.colorScale = d3.scale.linear().domain([0,5]);
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
	Material.getColor = function(index) {
		var materialColors = [
	        '#1f78b4',
	        '#e31a1c',
	        '#fdbf6f',
	        '#b2df8a',
	        '#33a02c',
	        '#fb9a99',
	        '#ff7f00',
	        '#cab2d6',
	        '#6a3d9a',
	        '#ffff99',
	        '#b15928'
	    ];
		
		return materialColors[index % materialColors.length];
	};

	// debug properties
	Material.prototype.addDebugGui = function(datGui) {
		var folder = datGui.addFolder("Mat" + this.materialIndex);
		folder.open();
		
		folder.addColor(this, "color").listen().onChange(this.setColor.bind(this));
		folder.add(this, "particleMass").min(0.01).max(5.0).step(0.1).listen();
		folder.add(this, "restDensity").min(0.1).max(5.0).step(0.1).listen();
		folder.add(this, "stiffness").min(0).max(1).step(0.05).listen();
		folder.add(this, "bulkViscosity").min(0).max(1).step(0.05).listen();
		folder.add(this, "elasticity").min(-1).max(5).step(0.05).listen();
		folder.add(this, "surfaceTension").min(0).max(1).step(0.05).listen();
		folder.add(this, "viscosity").min(0).max(1).step(0.05).listen();
		folder.add(this, "meltRate").min(0).max(1).step(0.05).listen();
		folder.add(this, "damping").min(0).max(1).step(0.05).listen();
		folder.add(this, "smoothing").min(0).max(1).step(0.05).listen();
		folder.add(this, "springK").min(0).max(5).step(0.05).listen();
		
		return this;
	};

	// Property setters
	Material.prototype.setColor = function(color) {
		this.color = color;
		this.colorScale.range([this.color, d3.rgb(this.color).brighter(3)]);
		
		return this;
	};

	Material.prototype.setParticleMass = function(particleMass) {
		this.particleMass = particleMass;
		
		return this;
	};

	Material.prototype.setRestDensity = function(restDensity) {
		this.restDensity = restDensity;
		
		return this;
	};

	Material.prototype.setStiffness = function(stiffness) {
		this.stiffness = stiffness;
		
		return this;
	};

	Material.prototype.setBulkViscosity  = function(bulkViscosity) {
		this.bulkViscosity = bulkViscosity ;
		
		return this;
	};

	Material.prototype.setSurfaceTension  = function(surfaceTension) {
		this.surfaceTension = surfaceTension ;
		
		return this;
	};

	Material.prototype.setElasticity = function(elasticity) {
		this.elasticity = elasticity;
		
		return this;
	};

	Material.prototype.setMaxDeformation = function(maxDeformation) {
		this.maxDeformation = maxDeformation;
		
		return this;
	};

	Material.prototype.setMeltRate = function(meltRate) {
		this.meltRate = meltRate;
		
		return this;
	};

	Material.prototype.setShearViscosity = function(shearViscosity) {
		this.shearViscosity = shearViscosity;
		
		return this;
	};

	Material.prototype.setViscosity = function(viscosity) {
		this.viscosity = viscosity;
		
		return this;
	};

	Material.prototype.setDamping = function(damping) {
		this.damping = damping;
		
		return this;
	};

	Material.prototype.setWallFrictiong = function(wallFriction) {
		this.wallFriction = wallFriction;
		
		return this;
	};

	Material.prototype.setWallAttraction = function(wallAttraction) {
		this.wallAttraction = wallAttraction;
		
		return this;
	};

	Material.prototype.setSmoothing = function(smoothing) {
		this.smoothing = smoothing;
		
		return this;
	};

	Material.prototype.setIsElastic = function(isElastic) {
		this.isElastic = isElastic;
		
		return this;
	};

	Material.prototype.setSpringK = function(springK) {
		this.springK = springK;
		
		return this;
	};

	Material.prototype.setYieldPoint = function(yieldPoint) {
		this.yieldPoint = yieldPoint;
		
		return this;
	};

	Material.prototype.setYieldRate = function(yieldRate) {
		this.yieldRate = yieldRate;
		
		return this;
	};

	return Material;
});

