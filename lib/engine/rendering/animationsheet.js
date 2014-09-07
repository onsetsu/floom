define([
	"engine/rendering/image"
], function(Image) {
	var AnimationSheet = mini.Class.subclass({
		initialize: function(path, frameWidth, frameHeight) {
			this.image = Image.get(path);
			this.frameWidth = frameWidth;
			this.frameHeight = frameHeight;
		},
		
		draw: function(aabb, tileNumber) {
			var tilesPerRow = Math.floor(this.image.data.width / this.frameWidth);
			var sourceX = this.frameWidth * (tileNumber % tilesPerRow);
			var sourceY = this.frameHeight * Math.floor(tileNumber / tilesPerRow);
			this.image.draw(
				aabb,
				sourceX,
				sourceY,
				this.frameWidth,
				this.frameHeight
			);
		}
	});
	
	AnimationSheet.prototype.toJson = function() {
		var json = {
			imagePath: this.image.path,
			frameWidth: this.frameWidth,
			frameHeight: this.frameHeight
		};
		
		return json;
	};
	
	AnimationSheet.fromJson = function(json) {
		var animationSheet = new AnimationSheet(json.imagePath, json.frameWidth, json.frameHeight);
		
		return animationSheet;
	};
	
	return AnimationSheet;
});
