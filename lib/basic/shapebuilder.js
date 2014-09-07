define(["assets/loader", "physics/jello"], function(Loader, Jello) {
	var ShapeBuilder = {
		"load": function(file, callback) {
			Loader.loadShape(file, function(json) {
				var shape = new Jello.ClosedShape().begin();
				for(var i = 0; i < json.length; i++) {
					shape.addVertex(new Jello.Vector2(json[i].x, json[i].y));
				};
				shape.finish();
				
				callback(shape);
			});
		},
		"Shapes": {
			"Cube": new Jello.ClosedShape()
				.begin()
				.addVertex(new Jello.Vector2(-1, -1))
				.addVertex(new Jello.Vector2(-1,  1))
				.addVertex(new Jello.Vector2( 1,  1))
				.addVertex(new Jello.Vector2( 1, -1))
				.finish(),
			"Particle": new Jello.ClosedShape()
				.begin()
				.addVertex(Jello.Vector2.Zero.copy())
				.finish(),
			"Ball": (function() {
				var ballShape = new Jello.ClosedShape();
				ballShape.begin();
				for (var i = 0; i < 360; i += 20) {
					ballShape.addVertex(
						new Jello.Vector2(
							Math.cos(-i * (Math.PI / 180)),
							Math.sin(-i * (Math.PI / 180))
						)
					);
				}
				return ballShape.finish();
			})(),
			"I": new Jello.ClosedShape()
				.begin()
				.addVertex(new Jello.Vector2(-1.5, 2.0))
				.addVertex(new Jello.Vector2(-0.5, 2.0))
				.addVertex(new Jello.Vector2(0.5, 2.0))
				.addVertex(new Jello.Vector2(1.5, 2.0))
				.addVertex(new Jello.Vector2(1.5, 1.0))
				.addVertex(new Jello.Vector2(0.5, 1.0))
				.addVertex(new Jello.Vector2(0.5, -1.0))
				.addVertex(new Jello.Vector2(1.5, -1.0))
				.addVertex(new Jello.Vector2(1.5, -2.0))
				.addVertex(new Jello.Vector2(0.5, -2.0))
				.addVertex(new Jello.Vector2(-0.5, -2.0))
				.addVertex(new Jello.Vector2(-1.5, -2.0))
				.addVertex(new Jello.Vector2(-1.5, -1.0))
				.addVertex(new Jello.Vector2(-0.5, -1.0))
				.addVertex(new Jello.Vector2(-0.5, 1.0))
				.addVertex(new Jello.Vector2(-1.5, 1.0))
				.finish(),
			"Diamond": new Jello.ClosedShape()
				.begin()
				.addVertex(new Jello.Vector2( 0.5, 0.0))
				.addVertex(new Jello.Vector2( 0.0,-1.0))
				.addVertex(new Jello.Vector2(-0.5, 0.0))
				.addVertex(new Jello.Vector2( 0.0, 1.0))
				.finish()
		}
	};
	
	return ShapeBuilder;
});
