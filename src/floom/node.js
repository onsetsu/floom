import Vector2 from "./../external/vector2.js";

	var Node = function(cellPosition) {
	    this.mass = 0;
	    this.d = 0;
	    this.gx = 0;
	    this.gy = 0;
		// TODO: this currently limits the number of different materials that are available
	    this.cgx = [0, 0, 0, 0, 0, 0];
	    this.cgy = [0, 0, 0, 0, 0, 0];
	    this.velocity = Vector2.Zero.copy();
	    this.velocity2 = Vector2.Zero.copy();
	    this.acceleration = Vector2.Zero.copy();

	    this.particleDensity = 0;

	    this.cellPosition = cellPosition;

		if (window.proxy) {
			return this.asProxy();
		}
	};

	Node.prototype.asProxy = function() {
		return new Proxy(this, {
			set(target, name, value) {
				target[name] = value;

				let nan = false;

				if(value.x !== undefined && value.y !== undefined) {
					nan = isNaN(value.x) || isNaN(value.y)
				}

				if(Array.isArray(value)) {
					nan = value.some((v) => isNaN(v))
				}

				if (nan) {
					debugger;
				}
				return true;
			}
		});
	};

	export default Node;
