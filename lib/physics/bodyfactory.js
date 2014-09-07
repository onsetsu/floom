define(["physics/bodyblueprint"], function(BodyBlueprint) {
	var BodyFactory = function() {};

	BodyFactory.createBluePrint = function() {
		return new BodyBlueprint();
	};
	
	return BodyFactory;
});
