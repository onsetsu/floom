import Vector2 from "./../../external/vector2.js";
import Obstacle from "./obstacle.js"

	// https://github.com/hughsk/clamp/blob/master/index.js
	function clamp(value, min, max) {
		return min < max
			? (value < min ? min : value > max ? max : value)
			: (value < max ? max : value > min ? min : value);
	}

	var Capsule = function(x1, y1, x2, y2, r) {
		this.radius = r;
		this.positions = {
			from: new Vector2(x1, y1),
			to: new Vector2(x2, y2)
		};
	};

	Capsule.prototype = Object.create(Obstacle.prototype, {
		constructor: {
			value: Capsule, 
			enumerable: false,
			writable: false 
		}
	});

	Capsule.prototype.isIntersection = function(vector) {
		var pFrom = this.positions.from;
		var pTo = this.positions.to;
		var radius = this.radius;

		var subPos = pTo.sub(pFrom);
		var t = clamp(-(pFrom.sub(vector).dotProduct(subPos)) / subPos.dotProduct(subPos), 0.0, 1.0);
		var q = pFrom.weightedAdd(subPos, t);
		var fVector = q.sub(vector).length() - radius;

		return fVector <= 0;
	};

	Capsule.prototype.ifIntersectionGetForce = function(vector) {
		var pFrom = this.positions.from;
		var pTo = this.positions.to;
		var radius = this.radius;

		var subPos = pTo.sub(pFrom);
		var t = clamp(-(pFrom.sub(vector).dotProduct(subPos)) / subPos.dotProduct(subPos), 0.0, 1.0);
		var q = pFrom.weightedAdd(subPos, t);
		var fVector = q.sub(vector).length() - radius;

		var force;
		if (fVector <= 0) {
			const xSubQ = q.sub(vector);
			const xSubQL = xSubQ.length();
			const n = xSubQ.mulFloat(-Math.sign(fVector) / xSubQL);
			const nVector = vector.weightedAdd(n, -fVector);

			force = vector.sub(nVector).negative();
		}
		return force;
	};

	Capsule.prototype.toJSON = function() {
		return {
			constructor: Capsule.name,
			data: [
				this.positions.from.x,
				this.positions.from.y,
				this.positions.to.x,
				this.positions.to.y,
				this.radius,
			]
		};
	};

	Capsule.fromJSON = function(setting) {
		return new Capsule(...setting.data);
	};
	
	export default Capsule;
