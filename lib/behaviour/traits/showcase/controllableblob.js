define([
	"behaviour/trait",
	"behaviour/traits/itrait",
	"physics/jello"
], function (Trait, ITrait, Jello) {

	var controllableBlob = ITrait.subclass({
		update: function(entity) {
			var body = entity.getBody();
			
			// move by pressing into the desired direction
			if(env.input.state(env.game.Left)) {
				//body.addGlobalForce(body.getDerivedPosition(), new Jello.Vector2(-3, 0));
				body.addGlobalRotationForce(10);
			} else if(env.input.state(env.game.Right)) {
				//body.addGlobalForce(body.getDerivedPosition(), new Jello.Vector2(3, 0));
				body.addGlobalRotationForce(-10);
			} else if(env.input.state(env.game.Up)) {
				body.addGlobalForce(body.getDerivedPosition(), new Jello.Vector2(0, 3));
			} else if(env.input.state(env.game.Down)) {
				body.addGlobalForce(body.getDerivedPosition(), new Jello.Vector2(0, -3));
			};
			
			if(body.isSpringBody() && body.isPressureBody()) {
				var springPhysics = body.getSpringPhysics();
				var pressurePhysics = body.getPressurePhysics();
				// compress by pressing down
				if(env.input.pressed(env.game.Down)) {
					Bloob.mark("compress");
					pressurePhysics.setGasPressure(pressurePhysics.getGasPressure() / 10);
					springPhysics.setShapeMatchingConstants(250, 5);
				} else if(env.input.released(env.game.Down)) {
					Bloob.mark("decompress");
					pressurePhysics.setGasPressure(pressurePhysics.getGasPressure() * 10);
					springPhysics.setShapeMatchingConstants(150, 1);
				};
			}
		}
	});

	return controllableBlob;
});
