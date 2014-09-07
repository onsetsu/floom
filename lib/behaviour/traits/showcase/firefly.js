define([
	"behaviour/trait",
	"behaviour/traits/itrait",
	"physics/jello"
], function (Trait, ITrait, Jello) {
	
	var firefly = ITrait.subclass({
		update: function(entity) {
			var body = entity.getBody();
	
			if(!this.initialized) {
				this.initialized = true;
				
				// make fireflies fly
				body.clearExternalForces();
				
				this.center = body.getDerivedPosition().add(
					// add some noise
					new Jello.Vector2(Math.random(), Math.random())
				);
			}

			var toCenter = this.center.sub(body.getDerivedPosition());
			var direction = toCenter.getPerpendicular();
			// add force to center
			body.addGlobalForce(body.getDerivedPosition(), toCenter.mulFloat(1.5));
			// add force perpendicular to center
			body.addGlobalForce(body.getDerivedPosition(), direction.normalizedCopy().mulFloat(0.9));
		}
	});

	return firefly;
});

