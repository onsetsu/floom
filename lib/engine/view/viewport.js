define(["physics/jello"], function(Jello) {
	var Viewport = mini.Class.subclass({
		initialize: function(middlePoint, extent) {
			this.point = middlePoint;
			this.extent = extent;

			// scaling
			this.scaleX = d3.scale.linear();
			this.scaleY = d3.scale.linear();
			this.resetScaleRange();
			
			this.update();
		},
	
		update: function() {
			// Update frame to print in renderer.
			this.jumpToPoint(this.point);
		},
	
		screenToWorldCoordinates: function(vector) {
			return new Jello.Vector2(
				this.scaleX.invert(vector.x),
				this.scaleY.invert(vector.y)
			);
		},
	
		worldToScreenCoordinates: function(vector) {
			return new Jello.Vector2(
				this.scaleX(vector.x),
				this.scaleY(vector.y)
			);
		},
	
		jumpToPoint: function(vector) {
			this.point.set(vector);
			this.updateScales();
		},
	
		translateBy: function(vector) {
			this.point.addSelf(vector);
			this.updateScales();
		},
		
		updateScales: function() {
			var middlePoint = this.point;
			var extend = this.extent;
			
			this.scaleX.domain([
				middlePoint.x - extend.x / 2,
				middlePoint.x + extend.x / 2
			]);
			this.scaleY.domain([
				middlePoint.y - extend.y / 2,
				middlePoint.y + extend.y / 2
			]);
		},
		
		// Ranges are given in screen coordinates.
		resetScaleRange: function() {
			this.scaleX.range([0, env.canvas.width]);
			this.scaleY.range([env.canvas.height, 0]);
		}
	});
	
	return Viewport;
});
