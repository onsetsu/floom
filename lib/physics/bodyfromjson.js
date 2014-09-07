define([
	"physics/internalspring",
	"physics/vector2",
	"physics/closedshape",
	"physics/body",
	"physics/bodyfactory"
], function(
	InternalSpring,
	Vector2,
	ClosedShape,
	Body,
	BodyFactory
) {
	var JsonToBodyConverter = {};

	JsonToBodyConverter.convertJsonToBody = function(bodyJson, world) {
		// read bluePrint
		var bluePrint = BodyFactory.createBluePrint();

		if(typeof bodyJson.shape !== "undefined")
			bluePrint.shape(ClosedShape.fromJson(bodyJson.shape));

		JsonToBodyConverter.readBodyParameters(bluePrint, bodyJson);
		
		var body = bluePrint
			.world(world)
			.build();

		return body;
	};

	JsonToBodyConverter.readBodyParameters = function(bluePrint, jsonWithParameters) {
		var parameterNames = [
	       "pointMasses",
	       "translate",
	       "rotate",
	       "scale",
	       "isKinematic",
	       "edgeSpringK",
	       "edgeSpringDamp",
	       "shapeSpringK",
	       "shapeSpringDamp",
	       "gasPressure",
	       "internalSprings"
		];
		
		// iterate all possible parameter names
		for(var index in parameterNames) {
			if(!parameterNames.hasOwnProperty(index)) continue;

			var parameterName = parameterNames[index];
			
			// if parameter is defined in json...
			if(typeof jsonWithParameters[parameterName] !== "undefined") {
				// annotate blueprint
				if(parameterName == "translate" || parameterName == "scale") {
					// need to convert into Vector2
					var parameterValue = Vector2.fromJson(jsonWithParameters[parameterName]);
					bluePrint[parameterName](parameterValue);
				}
				else if(parameterName == "internalSprings") {
					// iterate over internalSprings array; attach each spring to bluePrint
					for(var index in jsonWithParameters["internalSprings"]) {
						if(!jsonWithParameters["internalSprings"].hasOwnProperty(index)) continue;
						var springParameters = jsonWithParameters["internalSprings"][index];
						InternalSpring.fromJson(springParameters, bluePrint);
					};
				}
				else
				{
					var parameterValue = jsonWithParameters[parameterName];
					bluePrint[parameterName](parameterValue);
				}
			};
		};
	};

	Body.fromJson = function(bodyJson, world) {
		return JsonToBodyConverter.convertJsonToBody(bodyJson, world);
	};

	return JsonToBodyConverter;
});
