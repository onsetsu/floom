define([
	"basic/mapbuilder",
	"physics/jello"
], function(
	MapBuilder,
	Jello
) {
	var Layer = mini.Class.subclass({
		initialize: function(name) {
			this.name = name || "";
			this.enabled = true;
			
			this.zIndex = 0;
			this.scrollFactor = Jello.Vector2.One.copy();
			this.scale = Jello.Vector2.One.copy();
			
			this._canvas = document.createElement('canvas');
			
			if(this.name === "fluid")
				MapBuilder.setUpTestMap(this);
		},
		
		update: function() {
			if(this.enabled) {
				env.camera.pushLayer(this);
				env.renderer.updateCanvasWorldAABB();
				
				// update Floom fluid system
				if(typeof this.getFluidSystem() !== "undefined")
					this.getFluidSystem().update(); // env.time.timePassed
				
				if(typeof this.interaction === "function")
					this.interaction.call(this);
				
				env.camera.popLayer();
			}
		},

		_prepareRendering: function() {
			this._canvas.width = env.canvas.extent.x;
			this._canvas.height = env.canvas.extent.y;
			env.renderer.renderToTexture(this._canvas);
			env.renderer.pushLayer(this);
		},

		_finishRendering: function() {
			env.renderer.popLayer();
			env.renderer.renderNormally();
		},
		
		draw: function(renderer) {
			if(this.enabled) {
				env.camera.pushLayer(this);
				env.renderer.updateCanvasWorldAABB();
				this._prepareRendering();

				renderer.clear();
				this._normalDraw(renderer);
				this._debugDraw(renderer);
				
				this._finishRendering();
				env.camera.popLayer();
			}
		},

		/**
		 * 
		 * @private
		 * @param renderer
		 */
		_normalDraw: function(renderer) {
			// draw Floom fluid system
			if(typeof this.getFluidSystem() !== "undefined")
				this.getFluidSystem().draw(renderer);
		},

		/**
		 * 
		 * @private
		 * @param renderer
		 */
		_debugDraw: function(renderer) {},

		/*
		 * Fluid System
		 */
		setFluidSystem: function(fluidSystem) {
			this.fluidSystem = fluidSystem;
		},
		
		getFluidSystem: function() {
			return this.fluidSystem;
		},

		/*
		 * Interactions
		 */
		setInteraction: function(callback) {
			this.interaction = callback;
		},
		
		/*
		 * Interaction and debug
		 */
		initDatGui: function(mapFolder, index) {
			if(!Bloob.debug || !Bloob.debug.datGui) return;
			var layerFolder = mapFolder.addFolder('Layer' + index);
			layerFolder.open();
			layerFolder.add(this, 'zIndex').listen().min(0.01).max(20).step(0.01);
			layerFolder.add(this.scrollFactor, 'x').name('ScrollFactor_x').listen();
			layerFolder.add(this.scrollFactor, 'y').name('ScrollFactor_y').listen();
			layerFolder.add(this.scale, 'x').name('Scale_x').listen();
			layerFolder.add(this.scale, 'y').name('Scale_y').listen();
		}
	});

	Layer.fromJson = function(json) {
		var layer = new Layer(json.name);
		
		if(typeof json.zIndex !== "undefined") {
			layer.zIndex = json.zIndex;
		}
		if(typeof json.scrollFactor !== "undefined") {
			layer.scrollFactor = Jello.Vector2.fromJson(json.scrollFactor);
		}
		if(typeof json.scale !== "undefined") {
			layer.scale = Jello.Vector2.fromJson(json.scale);
		}
		
		MapBuilder.setUpTestMap(layer);

		return layer;
	};
	
	return Layer;
});
