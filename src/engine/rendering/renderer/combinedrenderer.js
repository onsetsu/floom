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
		},

		withViewport: function(viewport, func, ctx) {
			this.pushViewport(viewport);
			func.call(ctx);
			this.popViewport();
		},

		/*
		 * Drawing
		 */
		draw: function(objectToDraw, viewport) {
			this.drawCount = 0;

			this.clear();
			
			// Draw given object.
			objectToDraw.draw(this, viewport);
		},
		
		// clear canvas
		clear: function() {
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

		drawPathSegments: function(path, color) {
			this.drawCount++;
			
			this.configuration.setStrokeStyle(color);
			var ctx = this.context;

			ctx.beginPath();
			this.applyPathToContext(path, ctx);
			ctx.stroke();
			ctx.closePath();
		},
		
		applyPathToContext: function(path, ctx) {
			var segments = path.getSegments();
			var length = segments.length,
				first = true,
				cur = Vector2.Zero.copy(),
				prev = Vector2.Zero.copy(),
				inHandle = Vector2.Zero.copy(),
				outHandle = Vector2.Zero.copy();

			function drawSegment(i) {
				var segment = segments[i];
				cur.set(segment.point);
				if (first) {
					ctx.moveTo(cur.x, cur.y);
					first = false;
				} else {
					inHandle.set(cur);
					inHandle.addSelf(segment.inHandle);
					if (inHandle.x == cur.x && inHandle.y == cur.y && outHandle.x == prev.x && outHandle.y == prev.y) {
						ctx.lineTo(cur.x, cur.y);
					} else {
						ctx.bezierCurveTo(outHandle.x, outHandle.y, inHandle.x, inHandle.y, cur.x, cur.y);
					}
				}
				prev.set(cur);
				outHandle.set(prev);
				outHandle.addSelf(segment.outHandle);
			}

			for (var i = 0; i < length; i++)
				drawSegment(i);
			if(path.closed() && length > 0)
				drawSegment(0);
		},
		
		/*
		 * Render images
		 */
		drawImageOnWorldAABB: function(image, aabb, sourceX, sourceY, width, height) {
			this.drawCount++;
			
			var targetPosition = aabb.Min;
			var targetExtend = aabb.getSize();

			var targetX = targetPosition.x;
			var targetY = targetPosition.y;
			var targetWidth = targetExtend.x;
			var targetHeight = targetExtend.y;

			// need to rescale in order to flip the image
			this.context.save();
			// translate the origin to the middle point of the aabb
			this.context.translate(
				targetX + targetWidth / 2,
				targetY + targetHeight / 2
			);
			// flip over x-axis
			this.context.scale(1, -1);
			// translate to top-left point of the aabb
			this.context.translate(
				-targetWidth / 2,
				-targetHeight / 2
			);
			
			this.context.drawImage(
				image,
				sourceX, sourceY,
				width, height,
				0, 0,
				targetWidth, targetHeight
			);
			this.context.restore();
		},
		
		drawImageTriangleOnWorldTriangle: function(body, image, textureMapping) {
			this.drawCount++;
			
			/*
			 *  Draw a triangle segment of an image to an arbitrary other triangle
			 *  
			 *  algorithm resources (affinity transformation):
			 *  	http://www.math.ucla.edu/~baker/149.1.02w/handouts/i_affine_II.pdf
			 *  	http://people.sc.fsu.edu/~jburkardt/presentations/cg_lab_mapping_triangles.pdf
			 *  html canvas 2d transform description:
			 *  	http://www.w3.org/TR/2dcontext/#dom-context-2d-transform
			 *  original idea (but far too slow at runtime):
			 *  	http://codeslashslashcomment.com/2012/12/12/dynamic-image-distortion-html5-canvas/
			 */
			
			// create shortcuts
			var context = this.context;
			var image = image.data;
			
			// get source triangle (in image coordinates)
			var srcA = textureMapping.coordinates[0];
			var srcB = textureMapping.coordinates[1];
			var srcC = textureMapping.coordinates[2];
			var srcAminusC = srcA.sub(srcC);
			var srcBminusC = srcB.sub(srcC);
			
			// get destination triangle (in world coordinates)
			var dstA = body.getPointMass(textureMapping.indices[0]).Position;
			var dstB = body.getPointMass(textureMapping.indices[1]).Position;
			var dstC = body.getPointMass(textureMapping.indices[2]).Position;
			var dstAminusC = dstA.sub(dstC);
			var dstBminusC = dstB.sub(dstC);
			
			// save current context for later restoration
			context.save();
			
			// apply transformation
			// idea:
			// transform the source triangle to the destination triangle using matrices
			// also use a reference triangle ((0,0), (1,0), (0,1)) as an intermediate stage
			
			// transformations (note inverted order):
			
			// translate from origin
			context.translate(dstC.x, dstC.y);
			
			// affine transformation from reference triangle to destination triangle
			context.transform(dstAminusC.x, dstAminusC.y, dstBminusC.x, dstBminusC.y, 0, 0);
			
			// intermediate
			// set clipping to a triangular viewport
			// that way, only the given triangle will be drawn
			// use reference triangle to clip
			context.beginPath();
			context.moveTo(0, 0);
			context.lineTo(1, 0);
			context.lineTo(0, 1);
			context.lineTo(0, 0);
			context.clip();
			
			// affine transformation from source triangle to reference triangle
			context.transform(srcBminusC.y, -(srcAminusC.y), -(srcBminusC.x), srcAminusC.x, 0, 0);
			var determinant = ((srcAminusC.x)*(srcBminusC.y)) - ((srcAminusC.y)*(srcBminusC.x));
			context.scale(1/determinant, 1/determinant);
			
			// translate source triangle to origin
			context.translate(-(srcC.x), -(srcC.y));

			// draw test image(texture)
			var sourceX = 0;
			var sourceY = 0;
			var width = image.width;
			var height = image.height;
			var targetX = 0;
			var targetY = 0;
			var targetWidth = image.width;
			var targetHeight = image.height;
			
			context.drawImage(
				image,
				sourceX, sourceY,
				width, height,
				targetX, targetY,
				targetWidth, targetHeight
			);
			
			// restore saved context state to revert all done changes
			context.restore();
		},
		
		drawLayer: function(layer) {
			this.drawCount++;
			this.context.drawImage(layer._canvas, 0, 0);
		}
	});
	
	return CombinedRenderer;
});
