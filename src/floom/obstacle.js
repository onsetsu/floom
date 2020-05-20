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

		return JSON.stringify(settings);
	};

	Obstacle.fromJSON = function(settings) {
		let parsedSettings = JSON.parse(settings);
		return new Obstacle(parsedSettings.position.x, parsedSettings.position.y, parsedSettings.radius)
	};
	
	export default Obstacle;
