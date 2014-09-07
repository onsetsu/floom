define([
	"engine/rendering/texturemapping",
	"engine/rendering/image"
], function(TextureMapping, Image) {

	var SmartTexture = mini.Class.subclass({
		initialize: function(imagePath, path) {
			this.image = Image.get(imagePath);
			this.path = path;
			
			this.description = {
				pattern: {
					image: {
						x: 0,
						y: 0,
						width: 50,
						height: 20
					},
					scale: {
						x: 1,
						y: 1
					}
				}
			};
			var dg = new dat.gui.GUI();
			dg.add(this.description.pattern.scale, "x").min(-2.1).max(2.1).step(0.01);
			dg.add(this.description.pattern.scale, "y").min(-2.1).max(2.1).step(0.01)
		},

		draw: function(entity, renderer, layer) {
			if(this.path.closed())
				this._drawPattern(renderer);
			this.path.draw("violet");
		},

		_drawPattern: function(renderer) {
			var context = renderer.context;
			
			var patterImage = this._getPatternImage();
			var pattern = context.createPattern(patterImage, 'repeat');

			context.save();
			
			context.beginPath();
			renderer.applyPathToContext(this.path, context);
			context.closePath();
			context.clip();
			
			// TODO: scale with canvas size
			context.scale(
					env.camera.viewport.extent.x,
					env.camera.viewport.extent.y
				);
			context.scale(1, -1);
			context.scale(
					1 / env.canvas.extent.x,
					1 / env.canvas.extent.y
				);

			// texture-specific scaling
			context.scale(
				this.description.pattern.scale.x,
				this.description.pattern.scale.y
			);

			context.fillStyle = pattern;
			context.fill();

			context.restore();
			
			this.path.draw("violet");
		},
		
		_getPatternImage: function() {
			var patternCanvas = document.createElement('canvas');
			patternCanvas.width = this.description.pattern.image.width;
			patternCanvas.height = this.description.pattern.image.height;
			
			patternContext = patternCanvas.getContext('2d');
			patternContext.drawImage(
				this.image.data,
				this.description.pattern.image.x,
				this.description.pattern.image.y,
				this.description.pattern.image.width,
				this.description.pattern.image.height,
				0,
				0,
				this.description.pattern.image.width,
				this.description.pattern.image.height
			);

			return patternCanvas;
		}
	});
	
	return SmartTexture;
});
