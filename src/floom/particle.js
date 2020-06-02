import Vector2 from "@/utils/vector2.js";
import Matrix from "@/utils/matrix.js";
import Node from "@/floom/node.js";
import Material from "@/floom/material.js"

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

	    this.affineMomentum = new Matrix(2,2,0);
	};

	// snapshotting logic:
	Particle.prototype.toJSON = function() {
		let settings = {
			position: Object.assign({}, this.position),
			// prevPosition: this.prevPosition,
			velocity: Object.assign({}, this.velocity),
			// gridVelocity: this.gridVelocity,
			material: this.material,

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
		let parsedSettings = settings;
		let particle = new Particle(parsedSettings.position.x, parsedSettings.position.y, parsedSettings.velocity.x, parsedSettings.velocity.y, parsedSettings.material);
		// TODO check if any other property has to be set to be functional
		return particle;
	};

	export default Particle;
