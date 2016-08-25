(function () {
'use strict';

var Material = function(materialIndex) {
		this.colorScale = d3.scale.linear()
			.domain([0,5]);
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

var Vector2 = function(x, y) {
		if(typeof y === "undefined")
			throw Error("initialize Vector2 with less than 2 parameter");

		this.x = x;
		this.y = y;
	};

	Vector2.Zero = new Vector2(0, 0);
	Vector2.One = new Vector2(1, 1);
	Vector2.XAxis = new Vector2(1, 0);
	Vector2.YAxis = new Vector2(0, 1);
	Vector2.fromAngle = function(theta) {
		return new Vector2(Math.cos(theta), Math.sin(theta));
	};
	
	Vector2.prototype.copy = function() {
		return new Vector2(this.x, this.y);
	};

	Vector2.prototype.set = function(vector) {
		this.x = vector.x;
		this.y = vector.y;
		return this;
	};

	Vector2.prototype.setXY = function(x, y) {
		this.x = x;
		this.y = y;
		return this;
	};

	Vector2.prototype.clear = function() {
		this.x = 0;
		this.y = 0;
	};

	Vector2.prototype.floor = function() {
		return new Vector2(
			Math.floor(this.x),
			Math.floor(this.y)
		);
	};

	Vector2.prototype.floorSelf = function() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
	};

	Vector2.prototype.frac = function() {
		return new Vector2(
			this.x - Math.floor(this.x),
			this.y - Math.floor(this.y)
		);
	};

	Vector2.prototype.fracSelf = function() {
		this.x -= Math.floor(this.x);
		this.y -= Math.floor(this.y);
	};

	Vector2.prototype.equals = function(vector) {
		return this.x == vector.x && this.y == vector.y;
	};

	Vector2.prototype.notEquals = function(vector) {
		return this.x != vector.x || this.y != vector.y;
	};

	Vector2.prototype.add = function(vector) {
		return new Vector2(
			this.x + vector.x,
			this.y + vector.y
		);
	};
	Vector2.prototype.addSelf = function(vector) {
		this.x += vector.x;
		this.y += vector.y;
		return this;
	};
		
	Vector2.prototype.weightedAddSelf = function(vector, scalar) {
		this.x += vector.x * scalar;
		this.y += vector.y * scalar;
		return this;
	};
		
	Vector2.prototype.sub = function(vector) {
		return new Vector2(
			this.x - vector.x,
			this.y - vector.y
		);
	};
	Vector2.prototype.subSelf = function(vector) {
		this.x -= vector.x;
		this.y -= vector.y;
		return this;
	};
		
	// scaling!
	Vector2.prototype.mulFloat = function(right) {
		return new Vector2(
			this.x * right,
			this.y * right
		);
	};
	Vector2.prototype.mulFloatSelf = function(right) {
		this.x *= right;
		this.y *= right;
		return this;
	};
		
	Vector2.prototype.divFloat = function(right) {
		var inv = 1.0 / right;
		return new Vector2(
			this.x * inv,
			this.y * inv
		);
	};
	Vector2.prototype.divFloatSelf = function(right) {
		this.x /= right;
		this.y /= right;
		return this;
	};

	// per-element multiplication
	Vector2.prototype.mulVector = function(right) {
		return new Vector2(
			this.x * right.x,
			this.y * right.y
		);
	};
	Vector2.prototype.mulVectorSelf = function(right) {
		this.x *= right.x;
		this.y *= right.y;
		return this;
	};

	Vector2.prototype.divVector = function(right) {
		return new Vector2(
			this.x / right.x,
			this.y / right.y
		);
	};
	Vector2.prototype.divVectorSelf = function(right) {
		this.x /= right.x;
		this.y /= right.y;
		return this;
	};

	Vector2.prototype.positive = function() { return this; };
	Vector2.prototype.negative = function() {
		return new Vector2(-this.x, -this.y);
	};

	// helpers

	Vector2.prototype.length = function() {
		return Math.sqrt(this.x*this.x + this.y*this.y);
	};
	Vector2.prototype.lengthSquared = function() {
		return this.x*this.x + this.y*this.y;
	};
	Vector2.prototype.distance = function(right) {
		var x = this.x - right.x;
		var y = this.y - right.y;
		return Math.sqrt(x*x + y*y);
	};
	Vector2.prototype.distanceSquared = function(right) {
		var x = this.x - right.x;
		var y = this.y - right.y;
		return x*x + y*y;
	};
	Vector2.prototype.normalize = function() {
		var length = Math.sqrt(this.x*this.x + this.y*this.y);
		if(length > 1e-08) {
			var invL = 1.0 / length;
			this.x *= invL;
			this.y *= invL;
		}
		return length;
	};

	Vector2.prototype.normalizedCopy = function() {
		var ret = this.copy();
		ret.normalize();
		return ret;
	};

	Vector2.prototype.dotProduct = function(vector) {
		return this.x*vector.x + this.y*vector.y;
	};

	Vector2.prototype.getPerpendicular = function() {
		return this.getRightPerpendicular();
	};

	Vector2.prototype.getLeftPerpendicular = function() {
		var x = this.y;
		var y = -1 * this.x;
		return new Vector2(x, y);
	};

	Vector2.prototype.getRightPerpendicular = function() {
		var x = -1 * this.y;
		var y = this.x;
		return new Vector2(x, y);
	};

	Vector2.prototype.makePerpendicular = function() {
		var tempX = this.x;
		this.x = -this.y;
		this.y = tempX;
	};

	Vector2.prototype.crossProduct = function(vector) {
		return this.x * vector.y + this.y * vector.x;
	};

	Vector2.prototype.lerp = function(to, i) {
		return this.add(to.sub(this).mulFloat(i));
	};

	Vector2.prototype.lerpSelf = function(to, i) {
		return this.weightedAddSelf(to.sub(this), i);
	};

	Vector2.prototype.slerp = function(to, i) {
		return this.add(to.sub(this).mulFloat(
			0.5 + (Math.sin((3.141592654 * i) - 1.570796) * 0.5)));
	};

	Vector2.prototype.rotate = function(theta) {
		var co = Math.cos(theta);
		var si = Math.sin(theta);
		return new Vector2(
			co * this.x - si * this.y,
			si * this.x + co * this.y
		);
	};

	Vector2.prototype.rotateSelf = function(theta) {
		var co = Math.cos(theta);
		var si = Math.sin(theta);
		var xx = co * this.x - si * this.y;
		this.y = si * this.x + co * this.y;
		this.x = xx;
	};
	
	// get (signed and directional) angle between this and the given vector in degrees 
	Vector2.prototype.getDirectedAngle = function(point) {
		return Math.atan2(this.crossProduct(point), this.dotProduct(point)) * 180 / Math.PI;
	};

	Vector2.prototype.reflectOnNormal = function(normal) {
		//v' = 2 * (v . n) * n - v
		var newVector =
			this.sub(
				normal
				.mulFloat(this.dotProduct(normal))
				.mulFloat(2)
			);
		return newVector;
		
	};

	Vector2.prototype.toCartesian = function() {
		return new Vector2(
			this.x * Math.cos(this.y),
			this.x * Math.sin(this.y)
		);
	};

	Vector2.prototype.toPolar = function() {
		return new Vector2(
			Math.sqrt(this.x * this.x + this.y * this.y),
			Math.atan2(this.y, this.x)
		);
	};

	Vector2.prototype.signum = function() {
		return new Vector2(
			this.x.sign(),
			this.y.sign()
		);
	};

	Vector2.prototype.absolute = function() {
		return new Vector2(
			Math.abs(this.x),
			Math.abs(this.y)
		);
	};


	Vector2.prototype.toJson = function() {
		var resultJson = {
			"x": this.x,
			"y": this.y
		};

		return resultJson;
	};
	
	Vector2.fromJson = function(vectorJson) {
		return new Vector2(vectorJson.x, vectorJson.y);
	};

var Node = function() {
	    this.mass = 0;
	    this.d = 0;
	    this.gx = 0;
	    this.gy = 0;
	    this.cgx = [0, 0, 0, 0];
	    this.cgy = [0, 0, 0, 0];
	    this.velocity = Vector2.Zero.copy();
	    this.velocity2 = Vector2.Zero.copy();
	    this.acceleration = Vector2.Zero.copy();
	    
	    this.particleDensity = 0;
	};

var defaultNode = new Node();
	
	var Particle = function(x, y, u, v, material){
	    this.position = new Vector2(x, y);
	    this.prevPosition = new Vector2(x, y);
	    this.velocity = new Vector2(u, v);
	    // velocity gathered by the filter over the grid
	    this.gridVelocity = this.velocity.copy(); // or gradient x, y????

	    this.material = material;
	    
	    this.cellX = 0; // belongs to cell at x
	    this.cellY = 0; // belongs to cell at y

	    this.px = [0,0,0]; // deformation gradient?
	    this.py = [0,0,0];
	    this.gx = [0,0,0];
	    this.gy = [0,0,0];
	    
	    this.s = [0,0,0,0,0,0,0,0,0];
	    this.sx = [0,0,0,0,0,0,0,0,0];
	    this.sy = [0,0,0,0,0,0,0,0,0];
	    
	    this.node = [defaultNode, defaultNode, defaultNode, 
	                 defaultNode, defaultNode, defaultNode, 
	                 defaultNode, defaultNode, defaultNode];
	    
	    this.T00 = 0;
	    this.T01 = 0;
	    this.T11 = 0;
	};

var Obstacle = function(x, y, radius) {
		this.position = new Vector2(x, y);
		this.radius = radius;
	};

var Invalid = true;
	var Valid = false;

	var AABB = function(minPt, maxPt) {
		this.Min = minPt || Vector2.Zero.copy();
		this.Max = maxPt || Vector2.Zero.copy();
		this.Validity = typeof minPt === "undefined" ? Invalid : Valid;
	};	

	AABB.prototype.clear = function() {
		this.Min.set(Vector2.Zero);
		this.Max.set(Vector2.Zero);
		this.Validity = Invalid;
	};	

	AABB.prototype.expandToInclude = function(pt) {
		if (this.Validity == Valid) {
			if (pt.x < this.Min.x) {
				this.Min.x = pt.x;
			} else if (pt.x > this.Max.x) {
				this.Max.x = pt.x;
			}
			
			if (pt.y < this.Min.y) {
				this.Min.y = pt.y;
			} else if (pt.y > this.Max.y) {
				this.Max.y = pt.y;
			}
		} else {
			this.Min.set(pt);
			this.Max.set(pt);
			this.Validity = Valid;
		};
	};	

	AABB.prototype.contains = function(pt) {
		if (this.Validity == Invalid) { return false; };

		return ((pt.x >= this.Min.x) && (pt.x <= this.Max.x) && (pt.y >= this.Min.y) && (pt.y <= this.Max.y));
	};
	
	AABB.prototype.containsAABB = function(other) {
		if (this.Validity == Invalid) { return false; };
		if (other.Validity == Invalid) { return false; };
		
		return (other.Min.x >= this.Min.x) &&
			(other.Max.x <= this.Max.x) &&
			(other.Min.y >= this.Min.y) &&
			(other.Max.y <= this.Max.y);
	};
	
	AABB.prototype.intersects = function(box) {
			var overlapX = ((this.Min.x <= box.Max.x) && (this.Max.x >= box.Min.x));
			var overlapY = ((this.Min.y <= box.Max.y) && (this.Max.y >= box.Min.y));
			
			return (overlapX && overlapY);
	};	

	AABB.prototype.getSize = function() { return this.Max.sub(this.Min); };

	AABB.prototype.getMiddle = function() {
		return this.Min.add(this.Max.sub(this.Min).mulFloat(0.5));
	};
	AABB.prototype.getTopLeft = function() {
		return this.Min;
	};
	AABB.prototype.getTopRight = function() {
		return new Vector2(this.Max.x, this.Min.y);
	};
	AABB.prototype.getBottomLeft = function() {
		return new Vector2(this.Min.x, this.Max.y);
	};
	AABB.prototype.getBottomRight = function() {
		return this.Max;
	};
	AABB.prototype.subdivide = function() {
		var min = this.Min,
			middle = this.getMiddle(),
			max = this.Max;
		
		var i = new AABB(min, middle);
		return [
		    new AABB(min, middle),
		    new AABB(new Vector2(middle.x, min.y), new Vector2(max.x, middle.y)),
		    new AABB(new Vector2(min.x, middle.y), new Vector2(middle.x, max.y)),
		    new AABB(middle, max)
		];
	};

var Grid = function(){
		this.arr = [];
		this.activeCount = 0;
		this.gsizeY = 0;
		this.boundaries = new AABB();
		this.cellSize = Vector2.One.copy();
	};

	Grid.prototype.update = function(system) {
	    this.recalculateBoundaries(system);
		this.clear();
		this.recalculateSizeY();
	};

	// TODO: reuse old grid
	Grid.prototype.clear = function() {
		this.arr.length = 0;
		this.activeCount = 0;
	};

	Grid.prototype.iterate = function(fn, context) {
		var numberOfNodes = this.arr.length;
		for(var nIndex = 0; nIndex < numberOfNodes; nIndex++) {
			var n = this.arr[nIndex];
			if (n) { fn.call(context, n); }
		}
	};

	Grid.prototype.getAt = function(cellX, cellY) {
		return this.arr[cellX * this.gsizeY + cellY];
	};
	
	Grid.prototype.getOrCreateAt = function(cellX, cellY) {
		var cell = cellX * this.gsizeY + cellY;
		var node = this.arr[cell];
		
		if(node === undefined) {
			this.arr[cell] = node = new Node();
			this.activeCount++;
		}
		
		return node;
	};
	
	Grid.prototype.recalculateBoundaries = function(system) {
	    // expand boundaries to include all particles
	    this.boundaries.clear();
	    _.each(system.particles, function(p) {
	    	this.boundaries.expandToInclude(p.position);
	    }, this);

		// expand boundaries a bit further
		this.boundaries.Min.x = Math.floor(this.boundaries.Min.x-1);
		this.boundaries.Min.y = Math.floor(this.boundaries.Min.y-1);
		this.boundaries.Max.x = Math.floor(this.boundaries.Max.x+3);
		this.boundaries.Max.y = Math.floor(this.boundaries.Max.y+3);
	};
	
	Grid.prototype.recalculateSizeY = function() {
		this.gsizeY = Math.floor(this.boundaries.Max.y-this.boundaries.Min.y);
	};

var Integrator = function(grid) {
		this.grid = grid;
	};

	Integrator.prototype.updateStateAndGradientOf = function(particle) {
		var p = particle;
		// determine cell index for mesh
		p.cellX = Math.floor(p.position.x - this.grid.boundaries.Min.x - 0.5); // get cell x
		p.cellY = Math.floor(p.position.y - this.grid.boundaries.Min.y - 0.5); // get cell y

		var x = p.cellX - (p.position.x - this.grid.boundaries.Min.x);
		p.px[0] = (0.5 * x * x + 1.5 * x + 1.125);
		p.gx[0] = (x++ + 1.5);
		p.px[1] = (-x * x + 0.75);
		p.gx[1] = (-2.0 * (x++));
		p.px[2] = (0.5 * x * x - 1.5 * x + 1.125);
		p.gx[2] = (x - 1.5);

		var y = p.cellY - (p.position.y - this.grid.boundaries.Min.y);
		p.py[0] = (0.5 * y * y + 1.5 * y + 1.125);
		p.gy[0] = (y++ + 1.5);
		p.py[1] = (-y * y + 0.75);
		p.gy[1] = (-2.0 * (y++));
		p.py[2] = (0.5 * y * y - 1.5 * y + 1.125);
		p.gy[2] = (y - 1.5);

		// using quadratic interpolation
		// indices refer to corresponding adjacent cell
		
		// y  +-+-+-+
		//  2 |4|3|2|
		//    +-+-+-+
		//  1 |5|0|1|
		//    +-+-+-+
		//  0 |6|7|8|
		//    +-+-+-+
		//   /
		//  /  0 1 2 x
		
		// state variable
		p.s[0] = p.px[1] * p.py[1];
		p.s[1] = p.px[2] * p.py[1];
		p.s[2] = p.px[2] * p.py[2];
		p.s[3] = p.px[1] * p.py[2];
		p.s[4] = p.px[0] * p.py[2];
		p.s[5] = p.px[0] * p.py[1];
		p.s[6] = p.px[0] * p.py[0];
		p.s[7] = p.px[1] * p.py[0];
		p.s[8] = p.px[2] * p.py[0];
		
		// gradient in x axis
		p.sx[0] = p.gx[1] * p.py[1];
		p.sx[1] = p.gx[2] * p.py[1];
		p.sx[2] = p.gx[2] * p.py[2];
		p.sx[3] = p.gx[1] * p.py[2];
		p.sx[4] = p.gx[0] * p.py[2];
		p.sx[5] = p.gx[0] * p.py[1];
		p.sx[6] = p.gx[0] * p.py[0];
		p.sx[7] = p.gx[1] * p.py[0];
		p.sx[8] = p.gx[2] * p.py[0];

		// gradient in y axis
		p.sy[0] = p.px[1] * p.gy[1];
		p.sy[1] = p.px[2] * p.gy[1];
		p.sy[2] = p.px[2] * p.gy[2];
		p.sy[3] = p.px[1] * p.gy[2];
		p.sy[4] = p.px[0] * p.gy[2];
		p.sy[5] = p.px[0] * p.gy[1];
		p.sy[6] = p.px[0] * p.gy[0];
		p.sy[7] = p.px[1] * p.gy[0];
		p.sy[8] = p.px[2] * p.gy[0];
	};
	
	// cache the nodes a particle is adjacent to as a particles attribute
	Integrator.prototype.prepareParticle = function(particle) {
		particle.node[0] = this.grid.getOrCreateAt(particle.cellX+1, particle.cellY+1);
		particle.node[1] = this.grid.getOrCreateAt(particle.cellX+2, particle.cellY+1);
		particle.node[2] = this.grid.getOrCreateAt(particle.cellX+2, particle.cellY+2);
		particle.node[3] = this.grid.getOrCreateAt(particle.cellX+1, particle.cellY+2);
		particle.node[4] = this.grid.getOrCreateAt(particle.cellX,   particle.cellY+2);
		particle.node[5] = this.grid.getOrCreateAt(particle.cellX,   particle.cellY+1);
		particle.node[6] = this.grid.getOrCreateAt(particle.cellX,   particle.cellY  );
		particle.node[7] = this.grid.getOrCreateAt(particle.cellX+1, particle.cellY  );
		particle.node[8] = this.grid.getOrCreateAt(particle.cellX+2, particle.cellY  );
	};
	
	Integrator.prototype.integrate = function(particle, fn) {
		for(var i = 0; i < 9; i++)
			fn.call(undefined, particle, particle.node[i], particle.s[i], particle.sx[i], particle.sy[i]);
	};

var System = function() {
		this.wall = new AABB(
			new Vector2(-50, 2),
			new Vector2(50, 100)
		);
		this.gravity = new Vector2(0,-0.05);// 0.004, 0.02
		this.materials = [];
		this.particles = [];
		this.springs = [];
		this.grid = new Grid();
		this.integrator = new Integrator(this.grid);
		
		this.useSurfaceTensionImplementation = true;
		this.drawGrid = true;
		
		this.doObstacles = true;
		this.obstacles = [
			new Obstacle(-20, 20, 5),
			new Obstacle( 20,  0, 9)
		];
		
		this.doSprings = true;
		this.drawSprings = true;
	};

	System.prototype.getNumberOfParticles = function() {
		return this.particles.length;
	};

	System.prototype.getNumberOfMaterials = function() {
		return this.materials.length;
	};

	System.prototype.createNewMaterial = function() {
		var newMaterial = new Material(this.materials.length);
		this.materials.push(newMaterial);
		
		return newMaterial;
	};

	System.prototype.addParticle = function(particle) {
    	this.particles.push(particle);
	};

	/*
	 * UPDATE
	 */
	System.prototype.update = function() {
		this.grid.update(this);

		if(this.useSurfaceTensionImplementation) {
			this.surfaceTensionImplementation();
		} else {
			this.simpleSimulation();
		}
	};

	
	/*
	 * surface tension implementation
	 */
	System.prototype.surfaceTensionImplementation = function() {
		this.mapPropertiesToGrid();
		this.sumUpPerMaterialGradients();
		
		// Calculate pressure and add forces to grid
		_.each(this.particles, function(p, pIndex) {
			var material = p.material;
			var dudx = 0, dudy = 0,
				dvdx = 0, dvdy = 0,
				sx = 0, sy = 0;
			
			this.integrator.integrate(p, function(particle, node, phi, gxpy, pxgy) {
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
			var linearCellX = Math.floor(p.position.x - this.grid.boundaries.Min.x); // get cell x
			var linearCellY = Math.floor(p.position.y - this.grid.boundaries.Min.y); // get cell y
			
			// linear 2x2 kernel
			// y  +-+-+
			//  1 |2|4|
			//    +-+-+
			//  0 |1|3|
			//    +-+-+
			//   /
			//  /  0 1 x
			var n1 = this.grid.getOrCreateAt(linearCellX  , linearCellY  );
			var n2 = this.grid.getOrCreateAt(linearCellX  , linearCellY+1);
			var n3 = this.grid.getOrCreateAt(linearCellX+1, linearCellY  );
			var n4 = this.grid.getOrCreateAt(linearCellX+1, linearCellY+1);
			
			var density = this.uscip(
				n1.particleDensity, n1.gx, n1.gy,
				n2.particleDensity, n2.gx, n2.gy,
				n3.particleDensity, n3.gx, n3.gy,
				n4.particleDensity, n4.gx, n4.gy,
				p.position.x - this.grid.boundaries.Min.x - linearCellX, p.position.y - this.grid.boundaries.Min.y - linearCellY); // r and s

			var restDensity = material.restDensity;
			var pressure = material.stiffness*(density-restDensity)/restDensity;
			if (pressure > 2.0)
				pressure = 2.0;

			// Update stress tensor
			var w1 = dudy - dvdx;
			var wT0 = .5 * w1 * (p.T01 + p.T01);
			var wT1 = .5 * w1 * (p.T00 - p.T11);
			var D00 = dudx;
			var D01 = .5 * (dudy + dvdx);
			var D11 = dvdy;
			var trace = .5 * (D00 + D11);
			p.T00 += .5 * (-wT0 + (D00 - trace) - material.meltRate * p.T00);
			p.T01 += .5 * (wT1 + D01 - material.meltRate * p.T01);
			p.T11 += .5 * (wT0 + (D11 - trace) - material.meltRate * p.T11);
			
			// Stress tensor fracture
			var norm = p.T00 * p.T00 + 2 * p.T01 * p.T01 + p.T11 * p.T11;
			
			if (norm > material.maxDeformation)
			{
				p.T00 = p.T01 = p.T11 = 0;
			}
			
			var T00 = material.particleMass * (material.elasticity * p.T00 + material.viscosity * D00 + pressure + trace * material.bulkViscosity);
			var T01 = material.particleMass * (material.elasticity * p.T01 + material.viscosity * D01);
			var T11 = material.particleMass * (material.elasticity * p.T11 + material.viscosity * D11 + pressure + trace * material.bulkViscosity);
			
			// Surface tension
			var lenSq = sx * sx + sy * sy;
			if (lenSq > 0)
			{
				var len = Math.sqrt(lenSq);
				var a = material.particleMass * material.surfaceTension / len;
				T00 -= a * (.5 * lenSq - sx * sx);
				T01 -= a * (-sx * sy);
				T11 -= a * (.5 * lenSq - sy * sy);
			}
			
			// Wall force
			var f = Vector2.Zero.copy();
			if (p.position.x < this.wall.Min.x) {
				f.x += this.wall.Min.x - p.position.x;
	            p.velocity.x *= 0.1;
			}
			if (p.position.x > this.wall.Max.x) {
				f.x += this.wall.Max.x - p.position.x;
	            p.velocity.x *= 0.1;
			}
			if (p.position.y < this.wall.Min.y) {
				f.y += this.wall.Min.y - p.position.y;
	            p.velocity.y *= 0.1;
			}
			if (p.position.y > this.wall.Max.y) {
				f.y += this.wall.Max.y - p.position.y;
	            p.velocity.y *= 0.1;
			}
			
			// test obstacle collision
			if (this.doObstacles){
				
				// circular obstacles
				_.each(this.obstacles, function(obstacle) {
					var obstacleRadius  = obstacle.radius;
					var obstacleRadiusSquared = obstacleRadius * obstacleRadius;
					var particleDistanceToMiddlePoint = obstacle.position.sub(p.position);
					var distanceSquared = particleDistanceToMiddlePoint.lengthSquared();
					if (distanceSquared < obstacleRadiusSquared){
						var distance = Math.sqrt(distanceSquared);
						var dR = obstacleRadius-distance;
						f.subSelf(particleDistanceToMiddlePoint.mulFloat(dR/distance));
					}
				}, this);
			}
			
			this.integrator.integrate(p, function(particle, node, phi, gxpy, pxgy) {
				node.acceleration.x += -(gxpy * T00 + pxgy * T01) + f.x * phi;
				node.acceleration.y += -(gxpy * T01 + pxgy * T11) + f.y * phi;
			});
		}, this);

		// Update acceleration of nodes
		this.grid.iterate(function(node) {
			if (node.mass > 0.0) {
				node.acceleration.divFloatSelf(node.mass);
			}
		}, this);

		_.each(this.particles, function(p, pIndex) {
			var material = p.material;

			// Update particle velocities
			this.integrator.integrate(p, function(particle, node, phi, gxpy, pxgy) {
				particle.velocity.weightedAddSelf(node.acceleration, phi);
			});
			
			p.velocity.addSelf(this.gravity);
			p.velocity.mulFloatSelf(1 - material.damping);

			// Add particle velocities back to the grid
			this.integrator.integrate(p, function(particle, node, phi, gxpy, pxgy) {
				node.velocity2.weightedAddSelf(particle.velocity, material.particleMass * phi);
			});
		}, this);

		// Update node velocities
		this.grid.iterate(function(node) {
			if (node.mass > 0.0) {
				node.velocity2.divFloatSelf(node.mass);
			}
		}, this);
		
		this.advanceParticles();
		this.springDisplacement();
		this.boundaryCorrection();
	};

	System.prototype.mapPropertiesToGrid = function() {
		_.each(this.particles, function(p, pIndex) {
			var material = p.material;

			// Update grid cell index and kernel weights
			this.integrator.updateStateAndGradientOf(p);
			this.integrator.prepareParticle(p);

			// Add particle mass, velocity and density gradient to grid
			this.integrator.integrate(p, function(particle, node, phi, gxpy, pxgy) {
				node.mass += phi * material.particleMass;
				node.particleDensity += phi;
				node.velocity.weightedAddSelf(particle.velocity, material.particleMass * phi);
				node.cgx[material.materialIndex] += gxpy;
				node.cgy[material.materialIndex] += pxgy;
			});
		}, this);
	};
	
	System.prototype.sumUpPerMaterialGradients = function() {
		var numMaterials = this.getNumberOfMaterials();
		this.grid.iterate(function(node) {
			if (node.mass > 0.0) {
				node.acceleration.clear();
				node.gx = 0;
				node.gy = 0;
				node.velocity.divFloatSelf(node.mass);
				// sum up gradients of all materials
				for(var i = 0; i < numMaterials; i++) {
					node.gx += node.cgx[i];
					node.gy += node.cgy[i];
				}
				for(var i = 0; i < numMaterials; i++) {
					node.cgx[i] -= node.gx - node.cgx[i];
					node.cgy[i] -= node.gy - node.cgy[i];
				}
			}
		}, this);
	};
	
	System.prototype.uscip = function(
		p00, x00, y00,
		p01, x01, y01,
		p10, x10, y10,
		p11, x11, y11,
		u, v
	) {
		var dx = x00 - x01;
		var dy = y00 - y10;
		var a = p01 - p00;
		var b = p11 - p10 - a;
		var c = p10 - p00;
		var d = y11 - y01;
		return ((((d - 2 * b - dy) * u - 2 * a + y00 + y01) * v +
				 ((3 * b + 2 * dy - d) * u + 3 * a - 2 * y00 - y01)) * v +
				((((2 * c - x00 - x10) * u + (3 * b + 2 * dx + x10 - x11)) * u - b - dy - dx) * u + y00)) * v +
		(((x11 - 2 * (p11 - p01 + c) + x10 + x00 + x01) * u +
		  (3 * c - 2 * x00 - x10)) * u +
		 x00) * u + p00;
	};

	System.prototype.advanceParticles = function() {
		_.each(this.particles, function(p, pIndex) {
			var material = p.material;
			
			var gVelocity = Vector2.Zero.copy();
			var dudx = 0, dudy = 0, dvdx = 0, dvdy = 0;
			
			this.integrator.integrate(p, function(particle, node, phi, gxpy, pxgy) {
				gVelocity.weightedAddSelf(node.velocity2, phi);
				
				// Velocity gradient
				dudx += node.velocity2.x * gxpy;
				dudy += node.velocity2.x * pxgy;
				dvdx += node.velocity2.y * gxpy;
				dvdy += node.velocity2.y * pxgy;
			});
			
			// Update stress tensor
			var w1 = dudy - dvdx;
			var wT0 = .5 * w1 * (p.T01 + p.T01);
			var wT1 = .5 * w1 * (p.T00 - p.T11);
			var D00 = dudx;
			var D01 = .5 * (dudy + dvdx);
			var D11 = dvdy;
			var trace = .5 * (D00 + D11);
			p.T00 += .5 * (-wT0 + (D00 - trace) - material.meltRate * p.T00);
			p.T01 += .5 * (wT1 + D01 - material.meltRate * p.T01);
			p.T11 += .5 * (wT0 + (D11 - trace) - material.meltRate * p.T11);
			
			// Stress tensor fracture
			var norm = p.T00 * p.T00 + 2 * p.T01 * p.T01 + p.T11 * p.T11;
			
			if (norm > material.maxDeformation)
			{
				p.T00 = p.T01 = p.T11 = 0;
			}
			
			// advance particle
			p.prevPosition.set(p.position);
			p.position.addSelf(gVelocity);
			p.gridVelocity.set(gVelocity);
			p.velocity.weightedAddSelf(gVelocity.sub(p.velocity), material.smoothing);
		}, this);
	};

	System.prototype.springDisplacement = function() {
		if(this.doSprings) {
			_.each(this.springs, function(s, sIndex) {
				s.update();
				s.solve();
			}, this);
		}
	};
	
	// hard boundary correction
	System.prototype.boundaryCorrection = function() {
		_.each(this.particles, function(p, pIndex) {
			if (p.position.x < this.wall.Min.x - 4)
				p.position.x = this.wall.Min.x - 4 + .01 * Math.random();
			else if (p.position.x > this.wall.Max.x + 4)
				p.position.x = this.wall.Max.x + 4 - .01 * Math.random();
			if (p.position.y < this.wall.Min.y - 4)
				p.position.y = this.wall.Min.y - 4 + .01 * Math.random();
			else if (p.position.y > this.wall.Max.y + 4)
				p.position.y = this.wall.Max.y + 4 - .01 * Math.random();
		}, this);
	};

var Spring = function(particle1, particle2, restLength) {
		this.particle1 = particle1;
		this.particle2 = particle2;
		this.restLength = restLength;
		this.currentDistance = 0;
	};
	
	Spring.prototype.update = function() {
		this.currentDistance = this.particle1.position.distance(this.particle2.position);
	};
	
	Spring.prototype.solve = function() {
		var p2position = this.particle2.position;
		var p1position = this.particle1.position;
		var rij = p2position.sub(p1position);
		rij.mulFloatSelf(1 / this.currentDistance);
		var D = this.particle1.material.springK * (this.restLength - this.currentDistance);
		rij.mulFloatSelf(D * 0.5);
		p1position.subSelf(rij);
		p2position.addSelf(rij);
	};
	
	Spring.prototype.contains = function(particle) {
		return this.particle1 === particle || this.particle2 === particle;
	};

var Group = function(system, minX, minY, maxX, maxY, u, v, material) {
		this.material = material;
		
		var map = [];
		for (var i = minX; i < maxX; i++) {
			map[map.length] = [];
	        for (var j = minY; j < maxY; j++) {
	        	var p = new Particle(i, j, u, v, material);
	        	system.addParticle(p);
	        	if(material.isElastic) {
	        		map[map.length-1].push(p);
	        	}
	        }
		}
    	if(material.isElastic) {
    		for(var i = 0; i < map.length; i++) {
    			for(var j = 1; j < map[0].length; j++) {
        			system.springs.push(new Spring(map[i][j-1], map[i][j], map[i][j-1].position.distance(map[i][j].position)));
    			}
    		}
    		for(var j = 0; j < map[0].length; j++) {
    			for(var i = 1; i < map.length; i++) {
        			system.springs.push(new Spring(map[i-1][j], map[i][j], map[i-1][j].position.distance(map[i][j].position)));
    			}
    		}
    		for(var i = 1; i < map.length; i++) {
    			for(var j = 1; j < map[0].length; j++) {
        			system.springs.push(new Spring(map[i-1][j-1], map[i][j], map[i-1][j-1].position.distance(map[i][j].position)));
    			}
    		}
    		for(var i = 0; i < map.length - 1; i++) {
    			for(var j = 1; j < map[0].length; j++) {
        			system.springs.push(new Spring(map[i+1][j-1], map[i][j], map[i+1][j-1].position.distance(map[i][j].position)));
    			}
    		}
    	}
	};

System.prototype.simpleSimulation = function() {
		this.__calculateParticleKernels();
		this.__sumParticleDensityFromGridAndAddPressureansElasticForcesToGrid();
		this.__divideGridAccelerationByMass();
		this.__accelerateParticlesAndInterpolateVelocityBackToGrid();
		this.__divideGridVelocityByMass();
		this.__advanceParticles();
	};

	System.prototype.__calculateParticleKernels = function() {
		// calculate particle kernels, and add density and density gradients to the grid
		_.each(this.particles, function(p, pIndex) {
			this.integrator.updateStateAndGradientOf(p);
			this.integrator.prepareParticle(p);
			
			this.integrator.integrate(p, function(particle, node, phi, gxpy, pxgy) {
				node.mass += phi;
			});
		}, this);
	};
	
	System.prototype.__sumParticleDensityFromGridAndAddPressureansElasticForcesToGrid = function() {
		// Sum particle density from grid, and add pressure and elastic forces to grid
		_.each(this.particles, function(p, pIndex) {
	        var density = 0;
			this.integrator.integrate(p, function(particle, node, phi, gxpy, pxgy) {
				density += phi*node.mass;
			});

			var restDensity = p.material.restDensity;
			var pressure = (density-restDensity)/restDensity;
			if (pressure > 4.0)
				pressure = 4.0;

			var f = Vector2.Zero.copy();
			if (p.position.x < this.wall.Min.x) {
				f.x += this.wall.Min.x - p.position.x;
	            p.velocity.x *= 0.1;
			}
			if (p.position.x > this.wall.Max.x) {
				f.x += this.wall.Max.x - p.position.x;
	            p.velocity.x *= 0.1;
			}
			if (p.position.y < this.wall.Min.y) {
				f.y += this.wall.Min.y - p.position.y;
	            p.velocity.y *= 0.1;
			}
			if (p.position.y > this.wall.Max.y) {
				f.y += this.wall.Max.y - p.position.y;
	            p.velocity.y *= 0.1;
			}
			
			this.integrator.integrate(p, function(particle, node, phi, gxpy, pxgy) {
				node.acceleration.x += -(gxpy * pressure) + f.x * phi;
				node.acceleration.y += -(pxgy * pressure) + f.y * phi;
			});
		}, this);
	};

	// divide grid acceleration by mass
	System.prototype.__divideGridAccelerationByMass = function() {
		this.grid.iterate(function(n) {
			if (n.mass > 0.0) {
				n.acceleration.divFloatSelf(n.mass);
				n.acceleration.addSelf(this.gravity);
			}
		}, this);
	};
	
	// accelerate particles and interpolate velocity back to grid
	System.prototype.__accelerateParticlesAndInterpolateVelocityBackToGrid = function() {
		_.each(this.particles, function(p, pIndex) {
			this.integrator.integrate(p, function(particle, node, phi, gxpy, pxgy) {
				particle.velocity.weightedAddSelf(node.acceleration, phi);
			});
			this.integrator.integrate(p, function(particle, node, phi, gxpy, pxgy) {
				node.velocity.weightedAddSelf(particle.velocity, phi);
			});
		}, this);
	};
	
	// divide grid velocity by mass
	System.prototype.__divideGridVelocityByMass = function() {
		this.grid.iterate(function(n) {
			if (n.mass > 0.0) {
				n.velocity.divFloatSelf(n.mass);
			}
		}, this);
	};
	
	System.prototype.__advanceParticles = function() {
		// advance particles
		_.each(this.particles, function(p, pIndex) {
	        p.gridVelocity.clear();
			this.integrator.integrate(p, function(particle, node, phi, gxpy, pxgy) {
				particle.gridVelocity.weightedAddSelf(node.velocity, phi);
			});
			p.position.addSelf(p.gridVelocity);
			p.velocity.weightedAddSelf(p.gridVelocity.sub(p.velocity), p.material.smoothing);
		}, this);
	};

var Floom = function() {};

Floom.Material = Material;
Floom.Particle = Particle;
Floom.Group = Group;
Floom.Node = Node;
Floom.Spring = Spring;
Floom.Obstacle = Obstacle;
Floom.System = System;

var Input = mini.Class.subclass({
		initialize: function(domElementId) {
			var that = this;
			
			this.bindings = {};
			this.actions = {};
			this.presses = {};
			this.locks = {};
			this.delayedKeyup = {};
			
			this.isUsingMouse = false;
			this.isUsingKeyboard = false;
			this.isUsingAccelerometer = false;
			this.mouse = {
				x: 0,
				y: 0
			};
			this.accel = {
				x: 0,
				y: 0,
				z: 0
			};
			this.domElementId = domElementId;
			this.domElement = document.getElementById(domElementId);
			
			//helpers:
			//http://js-tut.aardon.de/js-tut/tutorial/position.html
			function getElementPosition(element) {
				var elem=element, tagname="", x=0, y=0;
				while((typeof(elem) == "object") && (typeof(elem.tagName) != "undefined")) {
					y += elem.offsetTop;
					x += elem.offsetLeft;
					tagname = elem.tagName.toUpperCase();

					if(tagname == "BODY")
						elem=0;

					if(typeof(elem) == "object") {
						if(typeof(elem.offsetParent) == "object")
							elem = elem.offsetParent;
					}
				}
				return {x: x, y: y};
			};
			
			this.canvasPosition = getElementPosition(document.getElementById(domElementId));
			
			document.addEventListener("mousedown", function(e) {
	            that.isMouseDown = true;
	            handleMouseMove(e);
	            document.addEventListener("mousemove", handleMouseMove, true);
	         }, true);
	         
	         document.addEventListener("mouseup", function() {
	            document.removeEventListener("mousemove", handleMouseMove, true);
	            that.isMouseDown = false;
	            that. x = undefined;
	            that. y = undefined;
	         }, true);

			 this._rightClickHandler = [];
			document.addEventListener('contextmenu', function(e) {
				for(var i = 0; i < that._rightClickHandler.length; i++) {
					that._rightClickHandler[i](e);
				}
			});

	         function handleMouseMove(e) {
	            that.x = (e.clientX - that.canvasPosition.x) / 30;
	            that.y = (e.clientY - that.canvasPosition.y) / 30;
	         };
		},

		onRightClick: function(callback) {
			this._rightClickHandler.push(callback);
		},
		
		initMouse: function() {
			if( this.isUsingMouse ) { return; }
			this.isUsingMouse = true;
			var mouseWheelBound = this.mousewheel.bind(this);
			this.domElement.addEventListener('mousewheel', mouseWheelBound, false );
			this.domElement.addEventListener('DOMMouseScroll', mouseWheelBound, false );
			
			this.domElement.addEventListener('contextmenu', this.contextmenu.bind(this), false );
			this.domElement.addEventListener('mousedown', this.keydown.bind(this), false );
			this.domElement.addEventListener('mouseup', this.keyup.bind(this), false );
			this.domElement.addEventListener('mousemove', this.mousemove.bind(this), false );
			
			this.domElement.addEventListener('touchstart', this.keydown.bind(this), false );
			this.domElement.addEventListener('touchend', this.keyup.bind(this), false );
			this.domElement.addEventListener('touchmove', this.mousemove.bind(this), false );
		},
		
		initKeyboard: function() {
			if( this.isUsingKeyboard ) { return; }
			this.isUsingKeyboard = true;
			window.addEventListener('keydown', this.keydown.bind(this), false );
			window.addEventListener('keyup', this.keyup.bind(this), false );
		},
		
		initAccelerometer: function() {
			if( this.isUsingAccelerometer ) { return; }
			window.addEventListener('devicemotion', this.devicemotion.bind(this), false );
		},
		
		mousewheel: function(event) {
			var delta = event.wheelDelta ? event.wheelDelta : (event.detail * -1);
			var code = delta > 0 ? Input.KEY.MWHEEL_UP : Input.KEY.MWHEEL_DOWN;
			var action = this.bindings[code];
			if( action ) {
				this.actions[action] = true;
				this.presses[action] = true;
				this.delayedKeyup[action] = true;
				event.stopPropagation();
				event.preventDefault();
			};
		},
		
		mousemove: function(event) {
			var el = this.domElement;
			var pos = {left: 0, top: 0};
			while( el != null ) {
				pos.left += el.offsetLeft;
				pos.top += el.offsetTop;
				el = el.offsetParent;
			}
			var tx = event.pageX;
			var ty = event.pageY;
			if( event.touches ) {
				tx = event.touches[0].clientX;
				ty = event.touches[0].clientY;
			}
			
			this.mouse.x = (tx - pos.left) / 1; //ig.system.scale;
			this.mouse.y = (ty - pos.top) / 1; //ig.system.scale;
		},
		
		contextmenu: function(event) {
			if( this.bindings[Input.KEY.MOUSE2] ) {
				event.stopPropagation();
				event.preventDefault();
			}
		},
		
		keydown: function(event) {
			if( event.target.type == 'text' ) { return; }
			
			var code = event.type == 'keydown' 
				? event.keyCode 
				: (event.button == 2 ? Input.KEY.MOUSE2 : Input.KEY.MOUSE1);
			
			if( event.type == 'touchstart' || event.type == 'mousedown' ) {
				this.mousemove( event );
			}
				
			var action = this.bindings[code];
			if( action ) {
				this.actions[action] = true;
				if( !this.locks[action] ) {
					this.presses[action] = true;
					this.locks[action] = true;
				}
				event.stopPropagation();
				event.preventDefault();
			};
		},
		
		keyup: function(event) {
			if( event.target.type == 'text' ) { return; }
			
			var code = event.type == 'keyup' 
				? event.keyCode 
				: (event.button == 2 ? Input.KEY.MOUSE2 : Input.KEY.MOUSE1);
			
			var action = this.bindings[code];
			if( action ) {
				this.delayedKeyup[action] = true;
				event.stopPropagation();
				event.preventDefault();
			}
		},
		
		devicemotion: function(event) {
			this.accel = event.accelerationIncludingGravity;
		},
		
		bind: function(key, action) {
			if( key < 0 ) { this.initMouse(); }
			else if( key > 0 ) { this.initKeyboard(); }
			this.bindings[key] = action;
		},
		
		bindTouch: function(selector, action) {
			var element = ig.$( selector );
			
			var that = this;
			element.addEventListener('touchstart', function(ev) {
				that.touchStart( ev, action );
			}, false);
			
			element.addEventListener('touchend', function(ev) {
				that.touchEnd( ev, action );
			}, false);
		},
		
		unbind: function(key) {
			var action = this.bindings[key];
			this.delayedKeyup[action] = true;
			
			this.bindings[key] = null;
		},
		
		unbindAll: function() {
			this.bindings = {};
			this.actions = {};
			this.presses = {};
			this.locks = {};
			this.delayedKeyup = {};
		},
		
		state: function(action) {
			return this.actions[action];
		},
		
		pressed: function(action) {
			return this.presses[action];
		},
		
		released: function(action) {
			return this.delayedKeyup[action];
		},
		
		clearPressed: function() {
			for( var action in this.delayedKeyup ) {
				if(!this.delayedKeyup.hasOwnProperty(action)) continue;

				this.actions[action] = false;
				this.locks[action] = false;
			}
			this.delayedKeyup = {};
			this.presses = {};
		},
		
		touchStart: function(event, action) {
			this.actions[action] = true;
			this.presses[action] = true;
			
			event.stopPropagation();
			event.preventDefault();
			return false;
		},
		
		touchEnd: function(event, action) {
			this.delayedKeyup[action] = true;
			event.stopPropagation();
			event.preventDefault();
			return false;
		},
		
		update: function() {
			if(this.tool)
				this.tool.update();
		}
	});

	Input.KEY = {
		'MOUSE1': -1,
		'MOUSE2': -3,
		'MWHEEL_UP': -4,
		'MWHEEL_DOWN': -5,
		
		'BACKSPACE': 8,
		'TAB': 9,
		'ENTER': 13,
		'PAUSE': 19,
		'CAPS': 20,
		'ESC': 27,
		'SPACE': 32,
		'PAGE_UP': 33,
		'PAGE_DOWN': 34,
		'END': 35,
		'HOME': 36,
		'LEFT_ARROW': 37,
		'UP_ARROW': 38,
		'RIGHT_ARROW': 39,
		'DOWN_ARROW': 40,
		'INSERT': 45,
		'DELETE': 46,
		'_0': 48,
		'_1': 49,
		'_2': 50,
		'_3': 51,
		'_4': 52,
		'_5': 53,
		'_6': 54,
		'_7': 55,
		'_8': 56,
		'_9': 57,
		'A': 65,
		'B': 66,
		'C': 67,
		'D': 68,
		'E': 69,
		'F': 70,
		'G': 71,
		'H': 72,
		'I': 73,
		'J': 74,
		'K': 75,
		'L': 76,
		'M': 77,
		'N': 78,
		'O': 79,
		'P': 80,
		'Q': 81,
		'R': 82,
		'S': 83,
		'T': 84,
		'U': 85,
		'V': 86,
		'W': 87,
		'X': 88,
		'Y': 89,
		'Z': 90,
		'NUMPAD_0': 96,
		'NUMPAD_1': 97,
		'NUMPAD_2': 98,
		'NUMPAD_3': 99,
		'NUMPAD_4': 100,
		'NUMPAD_5': 101,
		'NUMPAD_6': 102,
		'NUMPAD_7': 103,
		'NUMPAD_8': 104,
		'NUMPAD_9': 105,
		'MULTIPLY': 106,
		'ADD': 107,
		'SUBSTRACT': 109,
		'DECIMAL': 110,
		'DIVIDE': 111,
		'F1': 112,
		'F2': 113,
		'F3': 114,
		'F4': 115,
		'F5': 116,
		'F6': 117,
		'F7': 118,
		'F8': 119,
		'F9': 120,
		'F10': 121,
		'F11': 122,
		'F12': 123,
		'SHIFT': 16,
		'CTRL': 17,
		'ALT': 18,
		'PLUS': 187,
		'COMMA': 188,
		'MINUS': 189,
		'PERIOD': 190
	};

var Viewport = mini.Class.subclass({
		initialize: function(canvas, middlePoint, extent) {
			this.canvas = canvas;
			this.point = middlePoint;
			this.extent = extent;

			// scaling
			this.scaleX = d3.scale.linear();
			this.scaleY = d3.scale.linear();

			this.resetScaleRange();
			this.updateScales();
		},
	
		screenToWorldCoordinates: function(vector) {
			return new Vector2(
				this.scaleX.invert(vector.x),
				this.scaleY.invert(vector.y)
			);
		},
	
		worldToScreenCoordinates: function(vector) {
			return new Vector2(
				this.scaleX(vector.x),
				this.scaleY(vector.y)
			);
		},
	
		jumpToPoint: function(vector) {
			this.point.set(vector);
			this.updateScales();
		},
	
		translateBy: function(vector) {
			this.point.addSelf(this.extent.divVector(
				new Vector2(this.canvas.width, -this.canvas.height)
			).mulVector(vector));
			this.updateScales();
		},
		
		zoomIn: function() {
			this.extent.mulFloatSelf(1.1);
			this.updateScales();
		},

		zoomOut: function() {
			this.extent.mulFloatSelf(0.9);
			this.updateScales();
		},
		
		updateScales: function() {
			var middlePoint = this.point;
			var extend = this.extent;
			
			this.scaleX.domain([
				middlePoint.x - extend.x / 2,
				middlePoint.x + extend.x / 2
			]);
			this.scaleY.domain([
				middlePoint.y - extend.y / 2,
				middlePoint.y + extend.y / 2
			]);
		},
		
		// Ranges are given in screen coordinates.
		resetScaleRange: function() {
			this.scaleX.range([0, this.canvas.width]);
			this.scaleY.range([this.canvas.height, 0]);
		}
	});

var Configuration = mini.Class.subclass({
		initialize: function(renderer) {
			this.renderer = renderer;
		},
		
		/*
		 * Configure Drawing
		 */
		setFillStyle: function(color) {
			this.color = color || "white";
			this.renderer.context.fillStyle = this.color;
		},
		
		setStrokeStyle: function(color) {
			this.color = color || "white";
			this.renderer.context.strokeStyle = this.color;
		},
		
		setGlobalAlpha: function(opacity) {
			this.opacity = opacity || 1.0;
			this.renderer.context.globalAlpha = this.opacity;
		},
		
		setLineWidth: function(lineWidth) {
			this.lineWidth = this.renderer.singlePixelExtent.x * (lineWidth || 1.0);
			this.renderer.context.lineWidth = this.lineWidth;
		},
		
		setTextBaseline: function(baseline) {
			this.baseline = baseline || "bottom";
			this.renderer.context.textBaseline = this.baseline;
		}
	});
	
	var Renderer = mini.Class.subclass({
		/*
		 * Init
		 */
		initialize: function(canvas) {
			this.canvas = canvas;
			this.context = canvas.getContext('2d');
			
			this.drawCount = 0;
			
			// set default pixel extent to allow setOptions
			this.singlePixelExtent = Vector2.One.copy();
			
			this.configuration = new Configuration(this);
		},

		pushViewport: function(viewport) {
			// create shortcuts
			var context = this.context;

			// save current context for later restoration
			context.save();

			// create transformation matrix (note the inverse order):
			// move the coordinate system's origin to the middle of the canvas
			this.context.translate(
				this.canvas.width / 2,
				this.canvas.height / 2
			);
			// rescale 1 by 1 box to canvas size
			this.context.scale(
				this.canvas.width,
				this.canvas.height
			);
			// invert y-axis
			this.context.scale(1, -1);
			// scale the current view into a 1 by 1 box
			this.context.scale(
				1 / viewport.extent.x,
				1 / viewport.extent.y
			);
			// move current world camera point to the coordinate system's origin
			this.context.translate(
				-viewport.point.x,
				-viewport.point.y
			);
			
			this.singlePixelExtent = viewport.screenToWorldCoordinates(Vector2.One.copy()).sub(
				viewport.screenToWorldCoordinates(Vector2.Zero.copy())
			);
			this.singlePixelExtentLength = this.singlePixelExtent.length();
		},
		
		popViewport: function() {
			// restore saved context state to revert adding layer
			this.context.restore();
			this.singlePixelExtent.set(Vector2.One.copy());
		},

		withViewport: function(viewport, func, ctx) {
			this.pushViewport(viewport);
			func.call(ctx);
			this.popViewport();
		},

		/*
		 * Drawing
		 */
		clear: function() {
			this.drawCount = 0;

			this.context.clearRect(
				0,
				0, 
				this.canvas.width,
				this.canvas.height
			);
		},
		
		/*
		 * Graphical primitives
		 */
		drawRectangle: function(vec, size, color, opacity) {
			this.drawCount++;
			
			this.configuration.setFillStyle(color);
			this.configuration.setGlobalAlpha(opacity);
			
			size = size || 2;
			this.context.fillRect(
				vec.x - this.singlePixelExtent.x * size / 2,
				vec.y - this.singlePixelExtent.y * size / 2,
				this.singlePixelExtent.x * size,
				this.singlePixelExtent.y * size
			);
		},
	
		drawDot: function(vec, size, color, opacity) {
			this.drawCount++;
			
			this.configuration.setFillStyle(color);
			this.configuration.setGlobalAlpha(opacity);

			size = size || 2;
			this.context.beginPath();
			this.context.arc(
				vec.x,
				vec.y,
				this.singlePixelExtent.x * size, // radius
				0,
				2 * Math.PI,
				false
			);
			this.context.closePath();
			this.context.fill();
		},
		
		drawLine: function(from, to, color, opacity, lineWidth) {
			this.drawCount++;
			
			this.configuration.setStrokeStyle(color);
			this.configuration.setGlobalAlpha(opacity);
			this.configuration.setLineWidth(lineWidth);

			// draw a line
			this.context.beginPath();
	
			this.context.moveTo(from.x, from.y);
			this.context.lineTo(to.x, to.y);
			
			this.context.stroke();
			
			this.context.closePath();
		},

		drawPolyline: function(vList, color, opacity, lineWidth) {
			this.drawCount++;
			
			this.configuration.setStrokeStyle(color);
			this.configuration.setGlobalAlpha(opacity);
			this.configuration.setLineWidth(lineWidth);

			// draw a polyline
			this.context.beginPath();
	
			this.context.moveTo(vList[0].x, vList[0].y);
			for(var i = 1; i < vList.length; i++)
				this.context.lineTo(vList[i].x, vList[i].y);
			this.context.lineTo(vList[0].x, vList[0].y);
			
			this.context.stroke();
			
			this.context.closePath();
		},

		drawPlus: function(point, size, color, opacity, lineWidth) {
			this.drawCount++;
			
			this.configuration.setStrokeStyle(color);
			this.configuration.setGlobalAlpha(opacity);
			this.configuration.setLineWidth(lineWidth);
			
			size = size || 3;
			
			this.context.beginPath();
			
			// draw a polyline
			this.context.moveTo(
				point.x - this.singlePixelExtent.x * size,
				point.y
			);
			this.context.lineTo(
				point.x + this.singlePixelExtent.x * size,
				point.y
			);
			this.context.moveTo(
				point.x,
				point.y - this.singlePixelExtent.y * size
			);
			this.context.lineTo(
				point.x,
				point.y + this.singlePixelExtent.y * size
			);
	
			this.context.stroke();
			this.context.closePath();
		},

		drawTextWorld: function(text, worldPoint, color, opacity, baseline) {
			this.drawCount++;
			
			this.configuration.setFillStyle(color);
			this.configuration.setStrokeStyle(color);
			this.configuration.setGlobalAlpha(opacity);
			this.configuration.setTextBaseline(baseline);
			
			this.context.save();

			this.context.translate(
				worldPoint.x,
				worldPoint.y
			);
			this.context.scale(
				this.singlePixelExtent.x,
				this.singlePixelExtent.y
			);
			this.context.fillText(
				text,
				0,
				0
			);
			this.context.restore();
		},

		drawText: function(text, screenPoint, color, opacity, baseline) {
			this.drawCount++;
			
			this.configuration.setFillStyle(color);
			this.configuration.setStrokeStyle(color);
			this.configuration.setGlobalAlpha(opacity);
			this.configuration.setTextBaseline(baseline);
			
			this.context.fillText(
				text,
				screenPoint.x,
				screenPoint.y
			);
		},

		/*
		 * Draw fluid system
		 */
		drawSystem: function(system) {
			// draw grid nodes
			if(system.drawGrid)
				this.drawGrid(system.grid);

			// draw obstacles
			if(system.doObstacles) {
				_.each(system.obstacles, function(obstacle) {
					this.drawObstacle(obstacle)
				}, this);
			}
			
			// draw all particles in the system
			_.each(system.particles, function(p) {
				this.drawParticle(p);
			}, this);
			
			// draw all springs in the system
			if(system.drawSprings) {
				_.each(system.springs, function(s) {
					this.drawSpring(s);
				}, this);
			}
		},
		drawGrid: function(grid) {
			// draw boundaries
			this.drawAABB(grid.boundaries);

			// draw grid nodes
			var numberOfNodes = grid.arr.length;
			for(var nIndex = 0; nIndex < numberOfNodes; nIndex++) {
				var n = grid.arr[nIndex];
				var x = Math.floor(nIndex / grid.gsizeY);
				var y = nIndex - (x * grid.gsizeY);

				if (n) {
					var position = new Vector2(x,y);
					position.addSelf(grid.boundaries.Min);
					this.drawDot(position, 1, "red", 0.5);
				}
			}
		},
		drawAABB: function(aabb) {
			this.drawPolyline([
					aabb.Min,
					new Vector2(aabb.Min.x, aabb.Max.y),
					aabb.Max,
					new Vector2(aabb.Max.x, aabb.Min.y),
					aabb.Min
				],
				"red",
				1.0,
				1
			);
		},
		drawObstacle: function(obstacle) {
			this.drawDot(obstacle.position, obstacle.radius, "pink", 0.8);
		},
		drawParticle: function(particle) {
			// ensure that a particle is visible even at low velocity
			var dirLength = Math.max(this.singlePixelExtentLength, particle.gridVelocity.length());

			this.drawLine(
				particle.position,
				particle.position.add(particle.gridVelocity.normalizedCopy().mulFloat(dirLength)),
				particle.material.colorScale(particle.velocity.lengthSquared()),
				1.0,
				1
			);
		},
		drawSpring: function(spring) {
			this.drawLine(
				spring.particle1.position,
				spring.particle2.position,
				Renderer.springColorScale(spring.restLength - spring.currentDistance),
				1.0,
				1
			);
		}
	});
	
	Renderer.springColorScale = d3.scale.linear()
		.domain([-3,3])
		.range(["#ff0000", "#0000ff"]);

var DebugOption = mini.Class.subclass({
	name: '',
	labelName: '',
	className: 'ig_debug_option',
	label: null,
	mark: null,
	container: null,
	active: false,
	
	colors: {
		enabled: '#fff',
		disabled: '#444'
	},
	
	
	initialize: function( name, object, property ) {
		this.name = name;
		this.object = object;
		this.property = property;
		
		this.active = this.object[this.property];
		
		this.container = $('<div />');
		this.container.addClass('ig_debug_option');
		
		this.label = $('<span />');
		this.label.addClass('ig_debug_label');
		this.label.text(this.name);
		
		this.mark = $('<span />');
		this.mark.addClass('ig_debug_label_mark');
		
		this.container.append( this.mark );
		this.container.append( this.label );
		var that = this;
		this.container.click(function() {
			that.click.apply(that, arguments);
		});
		
		this.setLabel();
	},
	
	
	setLabel: function() {
		this.mark.css("backgroundColor", this.active ? this.colors.enabled : this.colors.disabled);
	},
	
	
	click: function( ev ) {
		this.active = !this.active;
		this.object[this.property] = this.active;
		this.setLabel();
		
		ev.stopPropagation();
		ev.preventDefault();
		return false;
	}
});

var Menu = mini.Class.subclass({
		options: {},
		panels: {},
		numbers:{},
		container: null,
		panelMenu: null,
		activePanel: null,
		
		debugTime: 0,
		debugTickAvg: 0.016,
		debugRealTime: window.performance.now(),
		
		initialize: function() {
			// Inject the Stylesheet
			var style = $("<link />");
			console.log(style);
			style.attr("rel", 'stylesheet');
			style.attr("type", 'text/css');
			style.attr("href", 'src/debug/debug.css');
			$("body").append(style);

			// Create the Debug Container
			this.container = $('<div />');
			this.container.addClass("ig_debug");
			$("body").prepend( this.container );
			
			// Create and add the Menu Container
			this.panelMenu = $('<div />');
			this.panelMenu.innerHTML = '<div class="ig_debug_head">Impact.Debug:</div>';
			this.panelMenu.addClass("ig_debug_panel_menu");
			
			this.container.append( this.panelMenu );
			
			// Create and add the Stats Container
			this.numberContainer = $('<div />');
			this.numberContainer.addClass('ig_debug_stats');
			this.panelMenu.append( this.numberContainer );
		},
		
		
		addNumber: function( name, width ) {
			var number = $('<span />');		
			this.numberContainer.append( number );
			this.numberContainer.append( document.createTextNode(name) );
			
			this.numbers[name] = number;
		},
		
		
		showNumber: function( name, number, width ) {
			if( !this.numbers[name] ) {
				this.addNumber( name, width );
			}
			this.numbers[name].text(number);
		},
		
		
		addPanel: function( panelDef ) {
			// Create the panel and options
			var panel = new (panelDef.type)( panelDef.name, panelDef.label );
			if( panelDef.options ) {
				for( var i = 0; i < panelDef.options.length; i++ ) {
					var opt = panelDef.options[i];
					panel.addOption( new DebugOption(opt.name, opt.object, opt.property) );
				}
			}
			
			this.panels[ panel.name ] = panel;
			panel.container.hide();//.css("display", 'none');
			this.container.append( panel.container );
			
			var that = this;
			// Create the menu item
			var menuItem = $('<div />');
			menuItem.addClass('ig_debug_menu_item');
			menuItem.text(panel.label);
			menuItem.click(function(ev) {
				that.togglePanel(panel);
			});
			panel.menuItem = menuItem;
			
			// Insert menu item in alphabetical order into the menu
			var inserted = false;
			for( var i = 1; i < this.panelMenu.children().length; i++ ) {
				var cn = this.panelMenu.children()[i];
				if( cn.textContent > panel.label ) {
					menuItem.insertBefore( cn );
					inserted = true;
					break;
				}
			}
			if( !inserted ) {
				// Not inserted? Append at the end!
				this.panelMenu.append( menuItem );
			}
		},
		
		
		showPanel: function( name ) {
			this.togglePanel( this.panels[name] );
		},
		
		
		togglePanel: function( panel ) {
			if( panel != this.activePanel && this.activePanel ) {
				this.activePanel.toggle( false );
				this.activePanel.menuItem.addClass('ig_debug_menu_item');
				this.activePanel.menuItem.removeClass('active');
				this.activePanel = null;
			}
			
			var active = !(panel.container.is(":visible"));
			panel.toggle( active );
			panel.menuItem.addClass('ig_debug_menu_item');
			if(active) {
				panel.container.show();
				panel.menuItem.addClass('active');
			} else {
				panel.container.hide();
				panel.menuItem.removeClass('active');
			}

			if( active ) {
				this.activePanel = panel;
			}
		},
		
		
		ready: function() {
			for( var p in this.panels ) {
				if(!this.panels.hasOwnProperty(p)) continue;

				this.panels[p].ready();
			}
		},
		
		
		beforeRun: function() {
			var timeBeforeRun = window.performance.now();
			this.debugTickAvg = this.debugTickAvg * 0.8 + (timeBeforeRun - this.debugRealTime) * 0.2;
			this.debugRealTime = timeBeforeRun;
			
			if( this.activePanel ) {
				this.activePanel.beforeRun();
			}
		},
		
		
		afterRun: function(renderer, fluidSystem) {
			var frameTime = window.performance.now() - this.debugRealTime;
			
			this.debugTime = this.debugTime * 0.8 + frameTime * 0.2;
			
			if( this.activePanel ) {
				this.activePanel.afterRun();
			}
			
			this.showNumber( 'ms',  this.debugTime.toFixed(2) );
			this.showNumber( 'fps',  Math.round(1000/this.debugTickAvg) );
			if( renderer ) {
				this.showNumber( 'draws', renderer.drawCount );
			}
			if( fluidSystem ) {
				// calculate number of particles in all layers
				var numberOfParticles = fluidSystem.getNumberOfParticles();
				this.showNumber( 'particles', numberOfParticles );
			}
		}
	});

var DebugPanel = mini.Class.subclass({
	active: false,
	container: null,
	options: [],
	panels: [],
	label: '',
	name: '',
	
	
	initialize: function( name, label ) {
		this.name = name;
		this.label = label;
		this.container = $('<div />');
		this.container.addClass('ig_debug_panel ' + this.name);
		this.container.show();
	},
	
	
	toggle: function( active ) {
		this.active = active;
		if(active)
			this.container.show();
		else
			this.container.hide();
	},
	
	
	addPanel: function( panel ) {
		this.panels.push( panel );
		this.container.append( panel.container );
	},
	
	
	addOption: function( option ) {
		this.options.push( option );
		this.container.append( option.container );
	},
	
	
	ready: function(){},
	beforeRun: function(){},
	afterRun: function(){}
});

var round = function(number, precision) {
	precision = Math.pow(10, precision || 0);
	return Math.round(number * precision) / precision;
};

var ig$1 = ig$1 || {};
ig$1.system = ig$1.system || {};
ig$1.system.fps = ig$1.system.fps || 60;
/**
 *  ---------------------------- GRAPH PANEL ----------------------------
 */
var DebugGraphPanel = DebugPanel.subclass({
	clocks: {},
	marks: [],
	textY: 0,
	height: 128,
	ms: 64,
	timeBeforeRun: 0,
	
	
	initialize: function( name, label ) {
		DebugPanel.prototype.initialize.apply(this, arguments);
		
		this.mark16ms = round((this.height - (this.height/this.ms) * 16));
		this.mark33ms = round((this.height - (this.height/this.ms) * 33));
		this.msHeight = this.height/this.ms;
		
		this.graph = $('<canvas />');
		this.graph.attr("width", window.innerWidth);
		this.graph.attr("height", this.height);
		this.container.append( this.graph );
		this.ctx = this.graph[0].getContext('2d');
		
		this.ctx.fillStyle = '#444';
		this.ctx.fillRect( 0, this.mark16ms, this.graph.attr("width"), 1 );
		this.ctx.fillRect( 0, this.mark33ms, this.graph.attr("width"), 1 );
		
		this.addClock( 'draw', 'Draw', '#13baff');//caca25' );
		this.addClock( 'update', 'Update', '#bb0fff');//25ca72' );
		this.addClock( 'lag', 'System Lag', '#f26900');//ca258f' );
		
		window.graph = this;
	},
	
	
	addClock: function( name, description, color ) {		
		var mark = $('<span />');
		mark.addClass('ig_debug_legend_color');
		mark.css("backgroundColor", color);
		
		var number = $('<span />');
		number.addClass('ig_debug_legend_number');
		number.append( document.createTextNode('0') );
		
		var legend = $('<span />');
		legend.addClass('ig_debug_legend');
		legend.append( mark );
		legend.append( document.createTextNode(description +' (') );
		legend.append( number );
		legend.append( document.createTextNode('ms)') );
		
		this.container.append( legend );
		
		this.clocks[name] = {
			description: description,
			color: color,
			current: 0,
			start: window.performance.now(),
			avg: 0,
			html: number
		};
	},
	
	
	beginClock: function( name, offset ) {
		this.clocks[name].start = window.performance.now() + (offset || 0);
	},
	
	
	endClock: function( name ) {
		var c = this.clocks[name];
		c.current = Math.round(window.performance.now() - c.start);
		c.avg = c.avg * 0.8 + c.current * 0.2;
	},
	
	
	mark: function( msg, color ) {
		if( this.active ) {
			this.marks.push( {msg:msg, color:(color||'#fff')} );
		}
	},
	
	
	beforeRun: function() {
		this.endClock('lag');
		this.timeBeforeRun = window.performance.now();
	},
	
	
	afterRun: function() {
		var frameTime = window.performance.now() - this.timeBeforeRun;
		var nextFrameDue = (1000/ig$1.system.fps) - frameTime;
		this.beginClock('lag', Math.max(nextFrameDue, 0));
		
		var x = this.graph.attr("width") -1;
		var y = this.height;
		
		this.ctx.drawImage( this.graph.get(0), -1, 0 );
		
		this.ctx.fillStyle = '#000';
		this.ctx.fillRect( x, 0, 1, this.height );
		
		this.ctx.fillStyle = '#444';
		this.ctx.fillRect( x, this.mark16ms, 1, 1 );
		
		this.ctx.fillStyle = '#444';
		this.ctx.fillRect( x, this.mark33ms, 1, 1 );
		
		for( var ci in this.clocks ) {
			if(!this.clocks.hasOwnProperty(ci)) continue;

			var c = this.clocks[ci];
			c.html.text(c.avg.toFixed(2));
			
			if( c.color && c.current > 0 ) {
				this.ctx.fillStyle = c.color;
				var h = c.current * this.msHeight;
				y -= h;
				this.ctx.fillRect(	x, y, 1, h );
				c.current = 0;
			}
		}
		
		this.ctx.textAlign = 'right';
		this.ctx.textBaseline = 'top';
		this.ctx.globalAlpha = 0.5;
		
		for( var i = 0; i < this.marks.length; i++ ) {
			var m = this.marks[i];
			this.ctx.fillStyle = m.color;
			this.ctx.fillRect(	x, 0, 1, this.height );
			if( m.msg ) {
				this.ctx.fillText( m.msg, x-1, this.textY );
				this.textY = (this.textY+8)%32;
			}
		}
		this.ctx.globalAlpha = 1;
		this.marks = [];
	}
});
/*
$().ready(function() {
});
*/

var Debug = {
		Menu: Menu,
		Performance: DebugGraphPanel
	};

var ToolEvent = mini.Class.subclass({
		initialize: function ToolEvent(tool) {
			this.tool = tool;
		},

		setScreenPosition: function(pos) { this._position = pos; },
		setLastScreenPosition: function(pos) { this._lastPosition = pos; },
		setDownScreenPosition: function(pos) { this._downPosition = pos; },

		getScreenPosition: function() { return this._position; },
		getLastScreenPosition: function() { return this._lastPosition; },
		getDownScreenPosition: function() { return this._downPosition; },

		getLastScreenMiddlePoint: function() {
			var position = this.getScreenPosition();
			var lastPosition = this.getLastScreenPosition();
			return position.add(lastPosition).mulFloat(0.5);
		},
		getDownScreenMiddlePoint: function() {
			var position = this.getScreenPosition();
			var downPosition = this.getDownScreenPosition();
			return position.add(downPosition).mulFloat(0.5);
		},

		_transformToViewport: function(vector, viewport) {
			var worldPos = viewport.screenToWorldCoordinates(vector);
			return worldPos;
		},
		
		getPositionInWorld: function(viewport) {
			return this._transformToViewport(this._position, viewport);
		},
		getLastPositionInWorld: function(viewport) {
			return this._transformToViewport(this._lastPosition, viewport);
		},
		getDownPositionInWorld: function(viewport) {
			return this._transformToViewport(this._downPosition, viewport);
		},
		
		getLastMiddlePointInWorld: function(viewport) {
			var positionInWorld = this.getPositionInWorld(viewport);
			var lastPositionInWorld = this.getLastPositionInWorld(viewport);
			return positionInWorld.add(lastPositionInWorld).mulFloat(0.5);
		},
		getDownMiddlePointInWorld: function(viewport) {
			var positionInWorld = this.getPositionInWorld(viewport);
			var downPositionInWorld = this.getDownPositionInWorld(viewport);
			return positionInWorld.add(downPositionInWorld).mulFloat(0.5);
		},
		
		getLastDelta: function() { return this._position.sub(this._lastPosition); },
		getDownDelta: function() { return this._position.sub(this._downPosition); },
		getLastDeltaInWorld: function(viewport) {
			var positionInWorld = this.getPositionInWorld(viewport);
			var lastPositionInWorld = this.getLastPositionInWorld(viewport);
			return positionInWorld.sub(lastPositionInWorld);
		},
		getDownDeltaInWorld: function(viewport) {
			var positionInWorld = this.getPositionInWorld(viewport);
			var downPositionInWorld = this.getDownPositionInWorld(viewport);
			return positionInWorld.sub(downPositionInWorld);
		},

		getLastDistance: function() { return this._position.distance(this._lastPosition); },
		getDownDistance: function() { return this._position.distance(this._downPosition); },
		getLastDistanceInWorld: function(viewport) {
			var positionInWorld = this.getPositionInWorld(viewport);
			var lastPositionInWorld = this.getLastPositionInWorld(viewport);
			return positionInWorld.distance(lastPositionInWorld);
		},
		getDownDistanceInWorld: function(viewport) {
			var positionInWorld = this.getPositionInWorld(viewport);
			var downPositionInWorld = this.getDownPositionInWorld(viewport);
			return positionInWorld.distance(downPositionInWorld);
		},

		getDistanceToPoint: function(point) { return this._position.distance(point); },
		getDistanceToPointInWorld: function(point, viewport) {
			var toolPositionInWorld = this.getPositionInWorld(viewport);
			return toolPositionInWorld.distance(point);
		},
		// TODO: implement more convenient methods
		getDownCount: function() {},
		getDownTime: function() {},
		hitTest: function(viewport) {},
		nearest: function(viewport) {},
		getDownPath: function() {},
		getDownPathInWorld: function(viewport) {}
	});
	
	var Tool = mini.Class.subclass({
		initialize: function Tool(input) {
			this.input = input;
			this.input.initMouse();
			
			this._downCount = 0;
			
			this._lastPosition = new Vector2(this.input.mouse.x, this.input.mouse.y);
			
			this._activateCallback = function() {};
			this._deactivateCallback = function() {};
			this._mouseDownCallback = function() {};
			this._mouseDragCallback = function() {};
			this._mouseMoveCallback = function() {};
			this._mouseUpCallback = function() {};
			this._keyDownCallbacks = {};
			this._keyUpCallbacks = {};
		},
		
		onActivate: function(callback) { this._activateCallback = callback; },
		onDeactivate: function(callback) { this._deactivateCallback = callback; },
		onMouseDown: function(callback) { this._mouseDownCallback = callback; },
		onMouseDrag: function(callback) { this._mouseDragCallback = callback; },
		onMouseMove: function(callback) { this._mouseMoveCallback = callback; },
		onMouseUp: function(callback) { this._mouseUpCallback = callback; },
		onKeyDown: function(key, callback) { this._keyDownCallbacks[key] = callback; },
		onKeyUp: function(key, callback) { this._keyUpCallbacks[key] = callback; },
		
		activate: function() {
			//this.input.tool.deactivate();
			this.input.tool = this;
			this._activateCallback.call(this);
		},

		deactivate: function() {
			this._deactivateCallback.call(this);
		},

		update: function() {
			var mouseButton = "leftclick";
			var position = new Vector2(this.input.mouse.x, this.input.mouse.y);
			if(this.input.pressed(mouseButton))
				this._downPosition = position.copy();

			var event = new ToolEvent(this);
			event.setScreenPosition(position);
			event.setLastScreenPosition(this._lastPosition || position);
			event.setDownScreenPosition(this._downPosition);
			
			// down
			if(this.input.pressed(mouseButton))
				this._mouseDownCallback.call(this, event);

			// drag
			if(this.input.state(mouseButton))
				this._mouseDragCallback.call(this, event);

			// move
			if(!this.input.state(mouseButton))
				this._mouseMoveCallback.call(this, event);
			
			// up
			if(this.input.released(mouseButton))
				this._mouseUpCallback.call(this, event);
			
			// key down
			var downKeys = Object.keys(this._keyDownCallbacks);
			for(var i = 0; i < downKeys.length; i++) {
				var key = downKeys[i];
				if(this.input.pressed(key))
					this._keyDownCallbacks[key].call(this, event);
			}
			
			// key up
			var upKeys = Object.keys(this._keyUpCallbacks);
			for(var i = 0; i < upKeys.length; i++) {
				var key = upKeys[i];
				if(this.input.released(key))
					this._keyUpCallbacks[key].call(this, event);
			}
			
			this._lastPosition = position.copy();
		}
	});

var debug;

	function initTools(input, viewport, system) {
		var dragTool = new Tool(input);
		dragTool.onMouseDrag(function(event) {
			_.each(system.particles, function(p) {
				if(p.position.sub(event.getPositionInWorld(viewport)).lengthSquared() < 50)
					p.velocity.lerpSelf(event.getLastDeltaInWorld(viewport), 0.2);
			});
		});
		dragTool.name = "drag";

		var attractTool = new Tool(input);
		attractTool.onMouseDrag(function(event) {
			_.each(system.particles, function(p) {
				var vectorToMouse = event.getPositionInWorld(viewport).sub(p.position);
				var distanceToMouse = vectorToMouse.lengthSquared();
				if(distanceToMouse < 50)
					p.velocity.weightedAddSelf(vectorToMouse, (1/distanceToMouse) * (Math.log(1+distanceToMouse)));
			});
		});
		attractTool.name = "attract";

		var repelTool = new Tool(input);
		repelTool.onMouseDrag(function(event) {
			_.each(system.particles, function(p) {
				var vectorToMouse = event.getPositionInWorld(viewport).sub(p.position);
				var distanceToMouse = vectorToMouse.lengthSquared();
				if(distanceToMouse < 50)
					p.velocity.weightedAddSelf(vectorToMouse, 0.1 * Math.log(1/(1+distanceToMouse)));
			});
		});
		repelTool.name = "repel";
		
		function getRandomPointInCircleUniformly() {
			var TWO_PI = (3.14159265 * 2.0);
			var t = TWO_PI*Math.random();
			var u = Math.random()+Math.random();
			var r = u>1 ? 2-u : u;
			return new Vector2(r*Math.cos(t), r*Math.sin(t));
		}
		var spawnTool = new Tool(input);
		spawnTool.onMouseDrag(function(event) {
			var spawnPosition = event.getPositionInWorld(viewport);
			for(var i = 0; i < 10; i++) {
				var noise = getRandomPointInCircleUniformly().mulFloat(5);
				system.particles.push(
					new Floom.Particle(
						spawnPosition.x + noise.x,
						spawnPosition.y + noise.y,
						0,
						0,
						system.materials[0]
					)
				);
			}
		});
		spawnTool.name = "spawn";
		
		var consumeTool = new Tool(input);
		consumeTool.onMouseDrag(function(event) {
			for(var i = 0; i < system.getNumberOfParticles();) {
				if(system.particles[i].position.sub(event.getPositionInWorld(viewport)).lengthSquared() < 4)
					system.particles.splice(i, 1);
				else
					i++;
			}
		});
		consumeTool.name = "consume";

		var keyToolMap = {
			D: dragTool,
			A: attractTool,
			R: repelTool,
			S: spawnTool,
			C: consumeTool
		};
		_.each(keyToolMap, function(tool, key, map) {
			input.bind(Input.KEY[key], key);
			var toTool = function() {
				console.log("its " + key);
				tool.activate();
			};
			
			_.each(map, function(fromTool) {
				fromTool.onKeyUp(key, toTool);
			});
		});

		// activate default tool
		dragTool.activate();
	};

	function drawTool(renderer, input) {
		var color = "pink";

		// draw mouse cursor
		renderer.drawDot(input.mouse, 10, color, 0.5);
		
		// draw current interaction name
		renderer.drawText(
			input.tool.name,
			new Vector2(5, 5).add(input.mouse),
			color,
			1.0,
			"bottom"
		);
	};

	// datGui
	function datGuiForSystem(system) {
		var datGui = new dat.GUI();
		datGui.add(system.gravity, "x").min(-0.2).max(0.2).step(-0.01);
		datGui.add(system.gravity, "y").min(-0.2).max(0.2).step(-0.01);
		datGui.add(system, "useSurfaceTensionImplementation");
		datGui.add(system, "drawGrid");
		datGui.add(system, "doObstacles");
		datGui.add(system, "doSprings");
		datGui.add(system, "drawSprings");
		
		_.each(system.materials, function(material) {
			datGuiForMaterial(material, datGui);
		}, system);
	};
	
	
	function datGuiForMaterial(material, datGui) {
		var folder = datGui.addFolder("Mat" + material.materialIndex);
		folder.open();
		
		folder.addColor(material, "color").onChange(material.setColor.bind(material));
		folder.add(material, "particleMass").min(0.01).max(5.0).step(0.1);
		folder.add(material, "restDensity").min(0.1).max(5.0).step(0.1);
		folder.add(material, "stiffness").min(0).max(1).step(0.05);
		folder.add(material, "bulkViscosity").min(0).max(1).step(0.05);
		folder.add(material, "elasticity").min(-1).max(5).step(0.05);
		folder.add(material, "surfaceTension").min(0).max(1).step(0.05);
		folder.add(material, "viscosity").min(0).max(1).step(0.05);
		folder.add(material, "meltRate").min(0).max(1).step(0.05);
		folder.add(material, "damping").min(0).max(1).step(0.05);
		folder.add(material, "smoothing").min(0).max(1).step(0.05);
		folder.add(material, "springK").min(0).max(5).step(0.05);
	};

	var canvasId = "floom";
	var canvas = document.getElementById(canvasId);
	canvas.style.position = "absolute";
	canvas.style.top = "0px";
	canvas.style.left = "0px";
	canvas.style["z-index"] = -1;

	var renderer = new Renderer(canvas);

	var stats = new Stats();
	$(stats.domElement)
		.css("position", "absolute")
		.css("top", $(window).scrollTop() + "px")
		.prependTo($("body"));
	$(window).scroll(function() {
		$(stats.domElement).css('top', $(this).scrollTop() + "px");
	});
	
	// prepare input
	var input = new Input(canvasId);
	input.initMouse();
	input.bind(Input.KEY.MOUSE1, "leftclick");
	input.bind(Input.KEY.MOUSE2, "rightclick");
	input.bind(Input.KEY.MWHEEL_UP, "zoomIn");
	input.bind(Input.KEY.MWHEEL_DOWN, "zoomOut");
	input.initKeyboard();
	input.bind(Input.KEY.N, "nextAction");

	// create fluid System
	var fluidSystem = new Floom.System();
	// create and customize Materials
	var mat0 = fluidSystem.createNewMaterial()
		.setParticleMass(0.5);
	var mat1 = fluidSystem.createNewMaterial()
		.setParticleMass(1.0);
	var mat2 = fluidSystem.createNewMaterial()
		.setParticleMass(2.0)
		.setIsElastic(true);
	var mat3 = fluidSystem.createNewMaterial()
		.setParticleMass(4.0);
	// create Particles of these Materials
	new Floom.Group(fluidSystem, -45,  5,  0, 25,  0.1, 0, mat0);
	new Floom.Group(fluidSystem,   5,  5, 50, 25, -0.1, 0, mat1);
	new Floom.Group(fluidSystem, -45, 30,  0, 50,  0.1, 0, mat2);
	new Floom.Group(fluidSystem,   5, 30, 50, 50, -0.1, 0, mat3);
	// initialize specific datGui for the fluid System
	datGuiForSystem(fluidSystem);

	// choose, which subset of the world should be displayed
	var viewport = new Viewport(
		canvas,
		Vector2.Zero.copy(),
		new Vector2(100, 40)
	);
	viewport.jumpToPoint(new Vector2(0, 15));
	initTools(input, viewport, fluidSystem);
	
	// update routine
	var lastPoint = Vector2.Zero.copy();
	function update(timePassed) {
		// entities/map
		if(graph)
			graph.beginClock('update');

		input.update();
		// viewport manipulation
		if(input.pressed("rightclick")) {
			lastPoint.set(input.mouse);
		}
		if(input.state("rightclick")) {
			viewport.translateBy(lastPoint.sub(input.mouse));
			lastPoint.set(input.mouse);
		}
		if(input.state("zoomIn")) {
			viewport.zoomIn();
		}
		if(input.state("zoomOut")) {
			viewport.zoomOut();
		}
		
		fluidSystem.update(timePassed);
		if(graph)
			graph.endClock('update');
		// rendering
		if(graph)
			graph.beginClock('draw');
		renderer.clear();
		renderer.withViewport(viewport, function() {
			renderer.drawSystem(fluidSystem);
		});
		drawTool(renderer, input);
		if(graph)
			graph.endClock('draw');

		// interaction
		input.clearPressed();
	}

	
	// main loop
	var lastFrame = window.performance.now();
	function animate() {
		if(debug)
			debug.beforeRun();

		stats.update();

		// setup time since last call
		var time = window.performance.now();
		var dt = (time - lastFrame) / 1000;
		lastFrame = time;

		update(dt);

		if(debug)
			debug.afterRun(renderer, fluidSystem);

		requestAnimationFrame(animate);
	}

	$().ready(function() {
		debug = new Debug.Menu();
		debug.addPanel({
			type: Debug.Performance,
			name: 'graph',
			label: 'Performance'
		});
		animate();
	});

}());