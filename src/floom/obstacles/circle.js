import Vector2 from "./../../external/vector2.js";
import Obstacle from "./obstacle.js";

	var Circle = function(x, y, r) {
		this.radius = r;
		this.position = new Vector2(x, y);
	};

	Circle.prototype.isIntersection = function(vector) {
		var radius  = this.radius;
		var radiusSquared = radius * radius;
		var vectorDistanceToMiddlePoint = this.position.sub(vector);
		var distanceSquared = vectorDistanceToMiddlePoint.lengthSquared();

		return distanceSquared < radiusSquared;
	};

	Circle.prototype = Object.create(Obstacle.prototype, {
		constructor: {
			value: Circle, 
			enumerable: false,
			writable: true 
		}
	});

	Circle.prototype.ifIntersectionGetForce = function(vector) {
		var radius  = this.radius;
		var radiusSquared = radius * radius;
		var vectorDistanceToMiddlePoint = this.position.sub(vector);
		var distanceSquared = vectorDistanceToMiddlePoint.lengthSquared();

		var force;
		if (distanceSquared < radiusSquared) {
			var distance = Math.sqrt(distanceSquared);
			var dR = radius - distance;

			force = vectorDistanceToMiddlePoint.mulFloat(dR / distance);
		}

		return force;
	};

	Circle.prototype.toJSON = function() {
		return {
			constructor: Circle.name,
			data: [
				this.position.x,
				this.position.y,
				this.radius,
			]
		};
	};

	Circle.fromJSON = function(setting) {
		return new Circle(...setting.data);
	};


	export default Circle;
