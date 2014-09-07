define([
	"behaviour/trait",
	"behaviour/traits/itrait",
	"physics/jello"
], function (Trait, ITrait, Jello) {

	var movingGround = ITrait.subclass({
		initialize: function(entity) {
			// TODO: include additional arguments in toJson or enable call with entity as standard case
			if(!entity) return;
			
			var body = entity.getBody();
			for(var i = 0; i < 9; i++) {
				var pos = body.getPointMass(i).Position;
				createjs.Tween.get(pos)
					.to({x: pos.x - 100}, 20.0)
					.wait(2.0)
					.to({x: pos.x}, 20.0)
					.wait(2.0)
					.loop = true;
			}
		}
	});

	return movingGround;
});
