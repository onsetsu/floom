define([
	"geomath/geomath"
], function() {
	var PathText = mini.Class.subclass({
		initialize: function(path, text) {
			this.path = path;
			this.text = text;
		},
		
		draw: function() {
		}
	});
	
	return PathText;
});
