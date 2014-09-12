define(["external/vector2"], function(Vector2) {
	var Obstacle = function(x, y, radius) {
		this.position = new Vector2(x, y);
		this.radius = radius;
	};
	
	Obstacle.prototype.draw = function(renderer) {
		renderer.drawDot(this.position, this.radius, "pink", 0.8);
	};
	
	return Obstacle;
});
