define([
	"engine/map/entity",
	"basic/mapbuilder",
	"physics/jello"
], function(
	Entity,
	MapBuilder,
	Jello
) {
	var Layer = mini.Class.subclass({
		initialize: function(name) {
			this.name = name || "";
			this.entities = [];
			this.enabled = true;
			
			this.zIndex = 0;
			this.scrollFactor = Jello.Vector2.One.copy();
			this.scale = Jello.Vector2.One.copy();
			
			this._canvas = document.createElement('canvas');
		},
		
		// Update all entities.
		update: function() {
			if(this.enabled) {
				env.camera.pushLayer(this);
				env.renderer.updateCanvasWorldAABB();
				if(typeof this.getWorld() !== "undefined")
					this.getWorld().update(1/60); // env.time.timePassed
				
				// update Floom fluid system
				if(typeof this.getFluidSystem() !== "undefined")
					this.getFluidSystem().update(); // env.time.timePassed

				for(var index in this.entities) {
					if(!this.entities.hasOwnProperty(index)) continue;
					
					this.entities[index].update();
				}
				
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

			// draw Entities
			var entityCount = this.entities.length;
			for(var i = 0; i < entityCount; i++) {
				this.entities[i].draw(renderer, this);
			}
		},

		/**
		 * 
		 * @private
		 * @param renderer
		 */
		_debugDraw: function(renderer) {
			// draw Entities
			var entityCount = this.entities.length;
			for(var i = 0; i < entityCount; i++) {
				this.entities[i].debugDraw(renderer);
			}

			if(typeof this.getWorld() !== "undefined")
				this.getWorld().debugDraw(renderer);
		},

		/*
		 * Soft body engine
		 */
		setWorld: function(world) {
			this.world = world;
			if(typeof Editor === "undefined")
				MapBuilder.setUpTestMap(this, this.world);
			
			return this;
		},
		
		getWorld: function() {
			return this.world;
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
		 * Manage Entities
		 */
		addEntity: function(entity) {
			this.entities.push(entity);

			return this;
		},
		
		getEntities: function() {
			return this.entities;
		},

		getEntityWithName: function(name) {
			return this.getEntitiesWithName(name)[0];
		},

		getEntitiesWithName: function(name) {
			return _.filter(this.entities, function(entity) {
				return entity.name == name;
			}, this);
		},

		getEntityWithTag: function(tag) {
			return this.getEntitiesWithTag(tag)[0];
		},

		getEntitiesWithTag: function(tag) {
			return _.filter(this.entities, function(entity) {
				return entity.hasTag(tag);
			}, this);
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
			if(typeof this.world === "undefined") return;
			var layerFolder = mapFolder.addFolder('Layer' + index);
			layerFolder.open();
			layerFolder.add(Jello.Material.Default, 'friction').name('Friction').min(-2).max(2).listen().step(0.1);
			layerFolder.add(Jello.Material.Default, 'elasticity').name('Elasticity').min(-2).max(2).listen().step(0.1);
			layerFolder.add(this.world.gravitation, 'x').name('Gravitation_x').listen().min(-20).max(20).step(0.01);
			layerFolder.add(this.world.gravitation, 'y').name('Gravitation_y').listen().min(-20).max(20).step(0.01);
			layerFolder.add(this, 'zIndex').listen().min(0.01).max(20).step(0.01);
			layerFolder.add(this.scrollFactor, 'x').name('ScrollFactor_x').listen();
			layerFolder.add(this.scrollFactor, 'y').name('ScrollFactor_y').listen();
			layerFolder.add(this.scale, 'x').name('Scale_x').listen();
			layerFolder.add(this.scale, 'y').name('Scale_y').listen();
		}
	});
	
	Layer.prototype.toJson = function() {
		var json = {
			name: this.name,
			zIndex: this.zIndex,
			scrollFactor: this.scrollFactor.toJson(),
			scale: this.scale.toJson(),
			entities: []
		};
		
		// Serialize world if existing.
		if(typeof this.world !== "undefined")
			json.world = this.world.toJson();

		var entities = this.getEntities();
		for(var i = 0; i < entities.length; i++) {
			json.entities.push(entities[i].toJson());
		}
		return json;
	};

	Layer.fromJson = function(json) {
		var layer = new Layer(json.name);
		
		if(typeof json.world !== "undefined") {
			var world = Jello.World.fromJson(json.world);
			layer.setWorld(world);
		}
		if(typeof json.zIndex !== "undefined") {
			layer.zIndex = json.zIndex;
		}
		if(typeof json.scrollFactor !== "undefined") {
			layer.scrollFactor = Jello.Vector2.fromJson(json.scrollFactor);
		}
		if(typeof json.scale !== "undefined") {
			layer.scale = Jello.Vector2.fromJson(json.scale);
		}
		
		if(typeof json.entities !== "undefined") {
			for(var index in json.entities)
				Entity.fromJson(json.entities[index], layer.getWorld()).addToLayer(layer);
		}
		
		return layer;
	};

	Layer.WorldLayer = Layer;
	
	return Layer;
});
