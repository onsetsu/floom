import Vector2 from "./../external/vector2.js";
import Node from "./node.js";
import Material from "./material.js"

const mat2 = glMatrix.mat2;

	var defaultNode = new Node(new Vector2(0,0));

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

	    this.affineMomentum = glMatrix.mat2.fromValues(0,0,0,0);
	    this.deformationGradient = glMatrix.mat2.create();
	    this.initialVolume = -1;

		if (window.proxy) {
			return this.asProxy();
		}
	};

	// TODO: make this method check implicitly check all properties (and infer the right method to call, e.g. for a matrix math.isNaN...)
	Particle.prototype.isAnyPropertyNaN = function() {
		return isNaN(this.velocity.x) || isNaN(this.velocity.y) || isNaN(this.position.x) || isNaN(this.position.y) ||
			isNaN(this.gridVelocity.x) || isNaN(this.gridVelocity.y);
	};

	Particle.prototype.asProxy = function() {
		// Replacing all nodes and vector2s with their respective proxy
		for (const property in this) {
			if (!this.hasOwnProperty(property)) {
				continue;
			}
			if (Array.isArray(this[property])) {
				if (typeof this[property][0].asProxy === 'function') {
					this[property] = this[property].map((element) => element.asProxy());
				} else {
					continue;
				}
			}

			if (typeof this[property].asProxy === 'function') {
				this[property] = this[property].asProxy();
			}
		}

		return new Proxy(this, {
			set(target, name, value) {
				target[name] = value;

				if (value.constructor.name === "Float32Array") {
					if (value.some((element)=>isNaN(element))) {
						debugger
					}
					return true
				}

				if (isNaN(value)) {
					debugger
				}

				return true;
			}
		});
	};

	// snapshotting logic:
	Particle.prototype.toJSON = function() {
		let settings = {
			position: Object.assign({}, this.position),
			// prevPosition: this.prevPosition,
			velocity: Object.assign({}, this.velocity),
			// gridVelocity: this.gridVelocity,
			material: this.material,

			affineMomentum: [...this.affineMomentum],
			deformationGradient: [...this.deformationGradient],
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
		particle.affineMomentum = mat2.fromValues(...settings.affineMomentum);
		particle.deformationGradient = mat2.fromValues(...settings.deformationGradient);
		particle.initialVolume = settings.initialVolume;
		return particle;
	};



	export default Particle;
