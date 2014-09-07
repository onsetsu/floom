define([
	"assets/loader"
], function(Loader) {
	var Resource = mini.Class.subclass({
		initialize: function() {
			Loader.addResource(this);
		},
		load: function(callback) {
			
		}
	});
	
	return Resource;
});
