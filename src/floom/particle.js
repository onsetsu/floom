import Vector2 from "./../external/vector2.js";
import Node from "./node.js";
import Material from "./material.js"

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

	    this.affineMomentum = math.zeros(2,2);
	    this.deformationGradient = math.matrix([
	    	[1, 0],
			[0, 1]]);
	    this.initialVolume = -1;
	};

	Particle.prototype.isAnyPropertyNaN = function() {
		return isNaN(this.velocity.x) || isNaN(this.velocity.y) || isNaN(this.position.x) || isNaN(this.position.y) ||
			isNaN(this.gridVelocity.x) || isNaN(this.gridVelocity.y) || math.isNaN(this.affineMomentum) ||
			math.isNaN(this.deformationGradient);
	};

	// snapshotting logic:
	Particle.prototype.toJSON = function() {
		let settings = {
			position: Object.assign({}, this.position),
			// prevPosition: this.prevPosition,
			velocity: Object.assign({}, this.velocity),
			// gridVelocity: this.gridVelocity,
			material: this.material,

			affineMomentum: this.affineMomentum,
			deformationGradient: this.deformationGradient,
			initialVolume: this.initialVolume,

			// cellX: this.cellX,
			// cellY: this.cellY,

			// px: this.px,
			// py: this.py,
			// gx: this.gx,
			// gy: this.gy,
			//
			// s: this.s,
			// sx: this.sx,
			// sy: this.sy,
			//
			// node: this.node,
			//
			// T00: this.T00,
			// T01: this.T01,
			// T11: this.T11
		};
		return Object.assign({}, settings)
	};

	Particle.fromJSON = function(settings) {
		let particle = new Particle(settings.position.x, settings.position.y, settings.velocity.x, settings.velocity.y, settings.material);
		// TODO check if any other property has to be set to be functional
		particle.affineMomentum = settings.affineMomentum;
		particle.deformationGradient = settings.deformationGradient;
		particle.initialVolume = settings.initialVolume;
		return particle;
	};

	export default Particle;
