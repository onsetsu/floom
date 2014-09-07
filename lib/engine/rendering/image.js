define(["assets/resource"], function(Resource) {
	var Image = Resource.subclass({
		initialize: function(path) {
			Resource.prototype.initialize.apply(this, arguments);
			this.path = path;
		},
		
		load: function(callback) {
			this.data = new window.Image();
			this.data.onload = callback;
			this.data.onerror = callback;
			this.data.src = "data/graphics/" + this.path;
		},
		
		draw: function(aabb, sourceX, sourceY, width, height) {
			env.renderer.drawImageOnWorldAABB(this.data, aabb, sourceX, sourceY, width, height);
		}
	});
	
	Image.cache = {};
	Image.get = function(path) {
		if(typeof Image.cache[path] === "undefined") {
			Image.cache[path] = new Image(path);
		};
		
		return Image.cache[path];
	};
	
	return Image;
});
