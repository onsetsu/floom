define(["physics/jello"], function(Jello) {
	var Layer = mini.Class.subclass({
		initialize: function(name) {
			this.name = name || "";
			this.enabled = true;
			
			this.zIndex = 0;
			this.scrollFactor = Jello.Vector2.One.copy();
			this.scale = Jello.Vector2.One.copy();
			
			this._canvas = document.createElement('canvas');
		},
		
		update: function(timePassed) {
			if(this.enabled) {
				env.camera.pushLayer(this);
				env.renderer.updateCanvasWorldAABB();
				
				// update Floom fluid system
				if(typeof this.getFluidSystem() !== "undefined")
					this.getFluidSystem().update(timePassed);
				
				if(typeof this.interaction === "function")
					this.interaction.call(this);

				env.camera.popLayer();
			}
		},
		
		draw: function(renderer) {
			env.camera.pushLayer(this);
			env.renderer.updateCanvasWorldAABB();
			renderer.pushLayer(this);

			renderer.clear();
			this.getFluidSystem().draw(renderer);

			
			renderer.popLayer();
			env.camera.popLayer();
		},

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

		return layer;
	};
	
	return Layer;
});
