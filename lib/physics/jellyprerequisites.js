define([

], function() {
	// TODO: List of Vectors?
	// typedef std::vector<Vector2> Vector2List;
	var JellyPrerequisites = {};
	
	JellyPrerequisites.PI = 3.14159265;
	JellyPrerequisites.TWO_PI = (3.14159265 * 2.0);
	JellyPrerequisites.HALF_PI = (3.14159265 * 0.5);
	JellyPrerequisites.PI_OVER_ONE_EIGHTY = (3.14159265 / 180.0);
	JellyPrerequisites.ONE_EIGHTY_OVER_PI = (180.0 / 3.14159265);

	JellyPrerequisites.absf = function(v) {
		return (v >= 0.0) ? v : -v;
	};

	JellyPrerequisites.Utils = {};
	JellyPrerequisites.Utils.fillArray = function(value, length) {
		arr = [];
		for(var i = 0; i < length; i++)
			arr.push(value);
		return arr;
	};
	
	return JellyPrerequisites;
});
