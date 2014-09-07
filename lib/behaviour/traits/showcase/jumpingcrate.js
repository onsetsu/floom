define([
	"behaviour/trait",
	"behaviour/traits/itrait",
	"engine/time/timer",
	"physics/jello"
], function (Trait, ITrait, Timer, Jello) {

	var jumpingCrate = ITrait.subclass({
		initialize: function() {
			this.jumpTimer =  new Timer(5);
		},
		update: function jump(entity) {
	
			if(this.jumpTimer.get() > 0) {
				this.jumpTimer.reset();
				var body = entity.getBody();
				body.addGlobalForce(body.getDerivedPosition().add(new Jello.Vector2(0.1, 0)), new Jello.Vector2(0, 1000));
			}
			
			// add additional force, if clicked on crate
			if(entity.isClicked()) {
				var body = entity.getBody();
				body.addGlobalForce(body.getDerivedPosition().add(new Jello.Vector2(0.1, 0)), new Jello.Vector2(1000, 0));
			} else if(entity.isHovered()) {
				// add additional force, if hovered over crate 
				var body = entity.getBody();
				body.addGlobalForce(body.getDerivedPosition().add(new Jello.Vector2(0.1, 0)), new Jello.Vector2(0, 100));
			}
		}
	});

	return jumpingCrate;
});
