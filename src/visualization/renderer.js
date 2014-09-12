define(["external/vector2"], function(Vector2) {

	var Configuration = mini.Class.subclass({
		initialize: function(renderer) {
			this.renderer = renderer;
		},
		
		/*
		 * Configure Drawing
		 */
		setFillStyle: function(color) {
			this.color = color || "white";
			this.renderer.context.fillStyle = this.color;
		},
		
		setStrokeStyle: function(color) {
			this.color = color || "white";
			this.renderer.context.strokeStyle = this.color;
		},
		
		setGlobalAlpha: function(opacity) {
			this.opacity = opacity || 1.0;
			this.renderer.context.globalAlpha = this.opacity;
		},
		
		setLineWidth: function(lineWidth) {
			this.lineWidth = this.renderer.singlePixelExtent.x * (lineWidth || 1.0);
			this.renderer.context.lineWidth = this.lineWidth;
		},
		
		setTextBaseline: function(baseline) {
			this.baseline = baseline || "bottom";
			this.renderer.context.textBaseline = this.baseline;
		}
	});
	
	var CombinedRenderer = mini.Class.subclass({
		/*
		 * Init
		 */
		initialize: function(canvas) {
			this.canvas = canvas;
			this.context = canvas.getContext('2d');
			
			this.drawCount = 0;
			
			// set default pixel extent to allow setOptions
			this.singlePixelExtent = Vector2.One.copy();
			
			this.configuration = new Configuration(this);
		},

		pushViewport: function(viewport) {
			// create shortcuts
			var context = this.context;

			// save current context for later restoration
			context.save();

			// create transformation matrix (note the inverse order):
			// move the coordinate system's origin to the middle of the canvas
			this.context.translate(
				this.canvas.width / 2,
				this.canvas.height / 2
			);
			// rescale 1 by 1 box to canvas size
			this.context.scale(
				this.canvas.width,
				this.canvas.height
			);
			// invert y-axis
			this.context.scale(1, -1);
			// scale the current view into a 1 by 1 box
			this.context.scale(
				1 / viewport.extent.x,
				1 / viewport.extent.y
			);
			// move current world camera point to the coordinate system's origin
			this.context.translate(
				-viewport.point.x,
				-viewport.point.y
			);
			
			this.singlePixelExtent = viewport.screenToWorldCoordinates(Vector2.One.copy()).sub(
				viewport.screenToWorldCoordinates(Vector2.Zero.copy())
			);
		},
		
		popViewport: function() {
			// restore saved context state to revert adding layer
			this.context.restore();
			this.singlePixelExtent.set(Vector2.One.copy());
		},

		withViewport: function(viewport, func, ctx) {
			this.pushViewport(viewport);
			func.call(ctx);
			this.popViewport();
		},

		/*
		 * Drawing
		 */
		// clear canvas
		clear: function() {
			this.drawCount = 0;

			this.context.clearRect(
				0,
				0, 
				this.canvas.width,
				this.canvas.height
			);
		},
		
		/*
		 * Graphical primitives
		 */
		drawRectangle: function(vec, size, color, opacity) {
			this.drawCount++;
			
			this.configuration.setFillStyle(color);
			this.configuration.setGlobalAlpha(opacity);
			
			size = size || 2;
			this.context.fillRect(
				vec.x - this.singlePixelExtent.x * size / 2,
				vec.y - this.singlePixelExtent.y * size / 2,
				this.singlePixelExtent.x * size,
				this.singlePixelExtent.y * size
			);
		},
	
		drawDot: function(vec, size, color, opacity) {
			this.drawCount++;
			
			this.configuration.setFillStyle(color);
			this.configuration.setGlobalAlpha(opacity);

			size = size || 2;
			this.context.beginPath();
			this.context.arc(
				vec.x,
				vec.y,
				this.singlePixelExtent.x * size, // radius
				0,
				2 * Math.PI,
				false
			);
			this.context.closePath();
			this.context.fill();
		},
		
		drawLine: function(from, to, color, opacity, lineWidth) {
			this.drawCount++;
			
			this.configuration.setStrokeStyle(color);
			this.configuration.setGlobalAlpha(opacity);
			this.configuration.setLineWidth(lineWidth);

			// draw a line
			this.context.beginPath();
	
			this.context.moveTo(from.x, from.y);
			this.context.lineTo(to.x, to.y);
			
			this.context.stroke();
			
			this.context.closePath();
		},

		drawPolyline: function(vList, color, opacity, lineWidth) {
			this.drawCount++;
			
			this.configuration.setStrokeStyle(color);
			this.configuration.setGlobalAlpha(opacity);
			this.configuration.setLineWidth(lineWidth);

			// draw a polyline
			this.context.beginPath();
	
			this.context.moveTo(vList[0].x, vList[0].y);
			for(var i = 1; i < vList.length; i++)
				this.context.lineTo(vList[i].x, vList[i].y);
			this.context.lineTo(vList[0].x, vList[0].y);
			
			this.context.stroke();
			
			this.context.closePath();
		},

		drawPlus: function(point, size, color, opacity, lineWidth) {
			this.drawCount++;
			
			this.configuration.setStrokeStyle(color);
			this.configuration.setGlobalAlpha(opacity);
			this.configuration.setLineWidth(lineWidth);
			
			size = size || 3;
			
			this.context.beginPath();
			
			// draw a polyline
			this.context.moveTo(
				point.x - this.singlePixelExtent.x * size,
				point.y
			);
			this.context.lineTo(
				point.x + this.singlePixelExtent.x * size,
				point.y
			);
			this.context.moveTo(
				point.x,
				point.y - this.singlePixelExtent.y * size
			);
			this.context.lineTo(
				point.x,
				point.y + this.singlePixelExtent.y * size
			);
	
			this.context.stroke();
			this.context.closePath();
		},

		drawTextWorld: function(text, worldPoint, color, opacity, baseline) {
			this.drawCount++;
			
			this.configuration.setFillStyle(color);
			this.configuration.setStrokeStyle(color);
			this.configuration.setGlobalAlpha(opacity);
			this.configuration.setTextBaseline(baseline);
			
			this.context.save();

			this.context.translate(
				worldPoint.x,
				worldPoint.y
			);
			this.context.scale(
				this.singlePixelExtent.x,
				this.singlePixelExtent.y
			);
			this.context.fillText(
				text,
				0,
				0
			);
			this.context.restore();
		},

		drawText: function(text, screenPoint, color, opacity, baseline) {
			this.drawCount++;
			
			this.configuration.setFillStyle(color);
			this.configuration.setStrokeStyle(color);
			this.configuration.setGlobalAlpha(opacity);
			this.configuration.setTextBaseline(baseline);
			
			this.context.fillText(
				text,
				screenPoint.x,
				screenPoint.y
			);
		}
	});
	
	return CombinedRenderer;
});
