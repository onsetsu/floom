define(["external/vector2"], function(Vector2) {
	var Obstacle = function(x, y, radius) {
		this.position = new Vector2(x, y);
		this.radius = radius;
	};
	
	return Obstacle;
});
