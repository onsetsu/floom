define([

], function() {
	var AssetManager = {
		maps: {},
		
		hasMap: function(mapPath) {
			return typeof AssetManager.maps[mapPath] !== "undefined";
		},
	
		addMap: function(mapPath, mapJson) {
			AssetManager.maps[mapPath] = mapJson;
		},
	
		getMap: function(mapPath) {
			return AssetManager.maps[mapPath];
		}
	};

	return AssetManager;
});

