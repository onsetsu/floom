define([
	"behaviour/trait",
	"behaviour/traits/itrait"
], function (Trait, ITrait) {
	
	var basicGUIElement = ITrait.subclass({
		update: function(entity) {
			if(entity.isClicked()) {
				entity.getBody().getPointMass(0).Position.x++;
				return;
			}
			if(entity.isHovered())
				entity.getBody().getPointMass(0).Position.x--;
		}
	});
	
	return basicGUIElement;
});
