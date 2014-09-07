define(["assets/resource"], function(Resource) {
	
	var DrawCallback = Resource.subclass({
		initialize: function(filePath, additionalArgument) {
			this.path = filePath;
			this.additionalArgument = additionalArgument;
			Resource.prototype.initialize.apply(this, arguments);
		},
		
		load: function(callback) {
			var that = this;
			var url = "engine/rendering/drawcallbacks/" + this.path;
			var onLoaded = function(drawcb) {
				that.onDraw(drawcb);
                callback();
			};
			
			// load via anonymous module
			var req = require.config({
				baseUrl: 'lib'
			});
			setTimeout(function() {
				req([url], onLoaded);
			}, 100);
		},

		// react to update
		onDraw: function(callback) {
			this.__callback = new callback(this.additionalArgument);
			
			return this;
		},
		
		draw: function(entity, renderer) {
			if(this.__callback)
				this.__callback.draw.apply(this.__callback, arguments);
		}
	});
	
	DrawCallback.prototype.toJson = function() {
		var json = {
			path: this.path
		};
		
		return json;
	};
	
	DrawCallback.fromJson = function(json) {
		var drawCallback = new DrawCallback(json.path);
		
		return drawCallback;
	};
	
	return DrawCallback;
});
