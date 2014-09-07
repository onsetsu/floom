define([
	"physics/jello"
], function(Jello) {
	var Canvas = mini.Class.subclass({
		initialize: function(canvasId) {
			this.canvasId = canvasId || "engineCanvas";
			this.extent = Jello.Vector2.Zero.copy();
			
			if ($("canvas#" + this.canvasId).length > 0) {
				this.$element = $("canvas#" + this.canvasId);
			} else {
				this.$element = $("<canvas></canvas>")
					.attr("id", this.canvasId)
					.appendTo($("body"));
			}

			this.restore();
			this.setExtentXY(
				this.$element.width(),
				this.$element.height()
			);
			
			this.domElement = document.getElementById(this.canvasId);
		},
		
		resize: function(x, y) {
			this.setExtentXY(x, y);
			
			this.$element
				.attr("width", this.extent.x)
				.attr("height", this.extent.y);
			
			if(typeof env !== "undefined" && typeof env.camera !== "undefined")
				env.camera.resetScaleRange();
		},
		
		setExtent: function(newExtent) {
			this.extent.set(newExtent);
		},
		
		setExtentXY: function(x, y) {
			this.extent.setXY(x, y);
		},
		
		color: function(backgroundColor) {
			this.$element.css("background-color", backgroundColor);
			
			return this;
		},
		
		restore: function() {
			this.$element
				.css("position", "absolute")
				.css("top", "0px")
				.css("left", "0px")
				.css("z-index", -1);

			if(this.callback) {
				$(window).off("resize", this.callback);
				this.callback = undefined;
			}
		},
		
		/*
		 * formatting methods
		 */
		
		// give the canvas a fixed size, independent of the window size
		fixedSize: function(width, height) {
			this.restore();
			this.resize(width, height);
			
			return this;
		},
		
		// give the canvas a fixed ratio, it will fit into the window
		screenFit: function(ratio) {
			this.restore();
			
			this.ratio = ratio;
			
			this.callback = this.fitOnResize.bind(this)
			$(window).resize(this.callback);
			
			this.callback();
			
			return this;
		},
		
		fitOnResize: function() {
			var windowWidth = $(window).width();
			var windowHeight = $(window).height();
			var windowRatio = windowWidth/windowHeight;
			
			if(this.ratio > windowRatio) {
				// adjust height of the canvas
				var canvasHeight = windowHeight * windowRatio / this.ratio;
				this.resize(windowWidth, canvasHeight);
				this.$element
					.css("top", (windowHeight - canvasHeight) / 2 + "px")
					.css("left", "0px");
			}
			else {
				// adjust width of the canvas
				var canvasWidth = windowWidth * this.ratio / windowRatio;
				this.resize(canvasWidth, windowHeight);
				this.$element
					.css("top", "0px")
					.css("left", (windowWidth - canvasWidth) / 2 + "px");
			}
		},
		
		// stretches the canvas to the whole window
		stretch: function() {
			this.restore();

			this.callback = this.stretchOnResize.bind(this);
			$(window).resize(this.callback);
			
			this.callback();
			
			return this;
		},
		
		stretchOnResize: function() {
		    this.resize($(window).width(), $(window).height());
		},
		
		// request a fullScreen for the canvas
		fullScreen: function() {
			this.restore();

			if (screenfull.enabled) {
			    screenfull.request(this.domElement);
			}
			
			var rect = this.domElement.getBoundingClientRect();
	        //this.resize(rect.width, rect.height);
			Bloob.log(document.body.clientWidth, document.body.clientHeight);
			Bloob.log(rect.width, rect.height);
			this.$element
				.css("width", "100%")
				.css("height", "100%");
			Bloob.log(this.$element.width(), this.$element.height());
			Bloob.log(this.domElement);
	        this.resize(this.$element.attr("height"), this.$element.attr("height"));
	        
		    return this;
		}
	});
	
	return Canvas;
});
