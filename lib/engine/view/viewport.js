define(["physics/jello"], function(Jello) {
	var Viewport = mini.Class.subclass({
		initialize: function(middlePoint, extent) {
			this.point = middlePoint;
			this.extent = extent;
		}
	});
	
	return Viewport;
});
