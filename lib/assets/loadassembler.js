define([
	"assets/assetmanager"
], function(AssetManager) {
	var LoadAssembler = {
		dataPath: "data/",
		loadJson: function(filePath, onSuccess) {
			$.getJSON(LoadAssembler.dataPath + filePath, onSuccess)
				.fail(function( jqxhr, textStatus, error ) {
					var err = textStatus + ', ' + error;
					console.log( "Request Failed: " + err);
				});
		},
		// TODO: add smarter Logic: if the same file should be loaded twice at the same, only send one request
		// use additional field: mapIsLoading
		loadMap: function(filePath, onSuccess) {
			if(AssetManager.hasMap(filePath)) {
				onSuccess(AssetManager.getMap(filePath));
			}
			else
			{
				var composedOnSuccess = function(mapJson) {
					AssetManager.addMap(filePath, mapJson);
					onSuccess(mapJson);
				};
				
				if( !(filePath.match(/\.json$/)))
					filePath += '.json';
				
				LoadAssembler.loadJson("maps/" + filePath, composedOnSuccess);
			}
		}
	};
	
	return LoadAssembler;
});
