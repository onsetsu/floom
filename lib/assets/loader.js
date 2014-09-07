define([
	"assets/loadassembler"
], function(LoadAssembler) {
	var Loader = {
		loadMap: function(filePath, onSuccess) {
			LoadAssembler.loadMap(filePath, onSuccess);
		},
		resources: [],
		addResource: function(path) {
			Loader.resources.push(path);
		},
		// Load all required resources, then call given callback.
		load: function(onFinished, onFinishedContext) {
			
			// If no resources have to be loaded, call given callback.
			if(Loader.resources.length == 0) {
				onFinished.apply(onFinishedContext);
				return;
			};

			// Fetch current resources.
			var currentResources = [];
			for(var resourceIndex in Loader.resources) {
				if(!Loader.resources.hasOwnProperty(resourceIndex)) continue;

				currentResources.push(Loader.resources[resourceIndex]);
			};
			Loader.resources.length = 0;

			var numberOfResourcesToLoad = currentResources.length;
			var singleLoadingFinished = function() {
				numberOfResourcesToLoad--;
				// if all currently loaded resources are loaded
				if(numberOfResourcesToLoad == 0)
					// load newly required resources
					Loader.load(onFinished, onFinishedContext);
			};
			
			for(var resourceIndex in currentResources) {
				if(!currentResources.hasOwnProperty(resourceIndex)) continue;
				
				currentResources[resourceIndex].load(function() {
					singleLoadingFinished();
				});
			};
		}
	};
	
	return Loader;
});
