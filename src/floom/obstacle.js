import Vector2 from "./../external/vector2.js";

	var Obstacle = function(x, y, radius) {
		this.position = new Vector2(x, y);
		this.radius = radius;
	};

	Obstacle.prototype.toJSON = function() {
		let settings = {
			position: this.position,
			radius: this.radius
		};

		return Object.assign({}, settings)
	};

	Obstacle.fromJSON = function(settings) {
		return new Obstacle(settings.position.x, settings.position.y, settings.radius)
	};
	
	export default Obstacle;
