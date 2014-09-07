define([
	"engine/rendering/texturemapping",
	"engine/rendering/image"
], function(TextureMapping, Image) {

	var Texture = mini.Class.subclass({
		initialize: function(imagePath) {
			this.image = Image.get(imagePath);
			this.mappings = [];
		},

		from: function(coordinates) {
			this.currentMapping = new TextureMapping(this.image).from(coordinates);
			
			return this;
		},

		to: function(indices) {
			this.currentMapping.to(indices);
			this.mappings.push(this.currentMapping);
			
			return this;
		},

		drawOn: function(body, renderer) {
			for(var index in this.mappings)
				this.mappings[index].drawOn(body, this.image, renderer);
		}
	});
	
	Texture.prototype.toJson = function() {
		var json = {
			image: this.image.path,
			mappings: []
		};
		
		for(var index in this.mappings)
			json.mappings.push(this.mappings[index].toJson());
		
		return json;
	};
	
	Texture.fromJson = function(json) {
		var texture = new Texture(json.image);
		
		for(var index in json.mappings)
			TextureMapping.fromJson(texture, json.mappings[index]);

		return texture;
	};
	
	return Texture;
});
