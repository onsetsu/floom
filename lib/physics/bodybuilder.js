define(["physics/body"], function(Body) {
	var BodyBuilder = {};

	BodyBuilder.build = function(bodyDefinition) {
		return new Body(bodyDefinition);
	};

	return BodyBuilder;
});
