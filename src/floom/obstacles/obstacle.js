import Vector2 from "./../../external/vector2.js";

	var Obstacle = function() {};

	Obstacle.prototype.isIntersection = function() {};

	Obstacle.prototype.ifIntersectionGetForce = function() {};

	Obstacle.prototype.toJSON = function() {};

	Obstacle.fromJSON = function() {
		return new Obstacle();
	};

	export default Obstacle;
