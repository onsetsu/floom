define([
	"engine/rendering/animation",
	"engine/rendering/texture",
	"engine/rendering/drawcallback",
	"engine/rendering/texture/smarttexture",
	"physics/jello"
], function(
	Animation,
	Texture,
	DrawCallback,
	SmartTexture,
	Jello
) {
	var Entity = mini.Class.subclass({
		initialize: function(name) {
			this.name = name;
			this.zIndex = 0;
			this.stateAnimations = {};
			
			this.setState("idle");
			this.tags = [];
			
			// Draw callbacks
			this.drawCallbacks = [];
		},
		
		addToLayer: function (layer) {
			layer.addEntity(this);
			
			return this;
		},

		/*
		 *  zIndex
		 */
		setZIndex: function(zIndex) {
			this.zIndex = zIndex;
		},
		
		getZIndex: function() {
			return this.zIndex;
		},
		
		/*
		 *  State
		 */
		setState: function(name) {
			if(typeof name === "string") {
				this.__state__ = name;
			} else if(typeof name === "function") {
				this.__state__ = name(this);
			} else {
				throw "incompatible state data type";
			};

			if(this.hasAnimationForState(name)) this.setAnimationForState(name);
		},
		
		getState: function() {
			return this.__state__;
		},
		
		/*
		 * Tags
		 */
		addTag: function(tag) {
			// check for already existing.
			var exists = false;
			for(var i = 0; i < this.tags.length; i++)
				if(this.tags[i] == tag) {
					exists = true;
					break;
				};
			
			// do not add an already existing tag
			if (!exists) {
				this.tags.push(tag);
			}
		},

		removeTag: function(tag) {
			var index = this.tags.indexOf(tag);
			if (index !== - 1) {
				this.tags.splice( index, 1 );
			}
		},
		
		hasTag: function(tag) {
			return this.tags.indexOf(tag) !== -1;
		},

		getTags: function() {
			return this.tags;
		},

		/*
		 * Rendering/Animation
		 */
		
		// body.aabb AnimationSheet for StateAnimation
		addStateAnimation: function(name, sheetOrAnimation, frameTime, order) {
			if(sheetOrAnimation instanceof Animation)
				this.stateAnimations[name] = sheetOrAnimation;
			else
				this.stateAnimations[name] = new Animation(sheetOrAnimation, frameTime, order);
			
			// Use newly created Animation if set for current state.
			if(name == this.getState())
				this.setAnimationForState(name);
		},
		
		hasAnimationForState: function(name) {
			return typeof this.stateAnimations[name] !== "undefined";
		},
		
		getAnimationForState: function(name) {
			if(!this.hasAnimationForState(name)) throw "Entity has no StateAnimation for state \"" + name + "\".";
			return this.stateAnimations[name];
		},
		
		setAnimationForState: function(name) {
			this.setAnimation(this.getAnimationForState(name));
		},
		
		setAnimation: function(animation) {
			this.animation = animation;
		},
		
		// Texturing
		setTexture: function(texture) {
			this.texture = texture;
		},

		getTexture: function() {
			return this.texture;
		},

		drawTexture: function(renderer) {
			this.getTexture().drawOn(this.getBody(), renderer);
		},
		
		// DrawCallbacks
		addDrawCallback: function(callback) {
			this.drawCallbacks.push(callback);
		},
		
		clearDrawCallbacks: function() {
			this.drawCallbacks.length = 0;
		},
		
		applyDrawCallbacks: function(renderer) {
			for(var drawCallbackIndex in this.drawCallbacks) {
				this.drawCallbacks[drawCallbackIndex].draw(this, renderer);
			}
		},
		
		/*
		 * Physics
		 */
		setBody: function(body) {
			this.body = body;
		},

		getBody: function() {
			return this.body;
		},

		// Checks, whether a point given in world coordinates is contained in the Body.
		contains: function(point) {
			// does not contains any point without a body
			var body = this.getBody();
			if(typeof body === "undefined") return false;
			// check first for aabb
			if(!(body.getAABB().contains(point))) return false;
			return body.contains(point);
		},
		
		/*
		 * Behavior
		 */
		isHovered: function() {
			var worldMouse = env.camera.screenToWorldCoordinates(env.input.mouse);
			return this.contains(worldMouse);
		},
		
		isClicked: function() {
			if(!env.input.state(env.game.LeftButton)) return false;
			return this.isHovered();
		},
		
		/*
		 *  Updating
		 */
		update: function() {
			if(typeof this.animation !== "undefined")
				this.animation.update();
		},
		
		// draw in order:
		// 1. AnimationSheet on bodies bounding box
		// 2. Texture
		// 3. drawCallbacks
		// 4. smart texture
		draw: function(renderer, layer) {
			if(typeof this.animation !== "undefined")
				this.animation.draw(this.getBody().getAABB());
			if(typeof this.getTexture() !== "undefined")
				this.drawTexture(renderer);
			this.applyDrawCallbacks(renderer);
			if(this.smartTexture)
				this.smartTexture.draw(this, renderer, layer);
		},
		
		debugDraw: function(debugDraw) {
			this.debugDrawName(debugDraw);
		},
		
		debugDrawName: function(debugDraw) {
			var body = this.getBody();
			if(body && body.isVisible(debugDraw))
				debugDraw.drawTextWorld(
					this.name,
					body.getAABB().getBottomLeft(),
					"lightgreen",
					0.8,
					'bottom'
				);
		}
		
	});

	Entity.prototype.toJson = function() {
		var json = {
			name: this.name,
			zIndex: this.getZIndex(),
			state: this.getState(),
			tags: this.getTags()
		};
		
		// Rendering
		json.stateAnimations = {};
		for(var state in this.stateAnimations)
			// TODO: refactor this line
			json.stateAnimations[state] = this.stateAnimations[state].toJson();

		if(typeof this.getTexture() !== "undefined")
			json.texture = this.getTexture().toJson();
		
		if(this.drawCallbacks.length > 0) {
			json.drawCallbacks = [];
			for(var index in this.drawCallbacks)
				json.drawCallbacks[index] = this.drawCallbacks[index].toJson();
		}

		// Physics
		if(typeof this.getBody() !== "undefined")
			json.body = this.getBody().toJson();
		
		return json;
	};
	
	Entity.fromJson = function(json, world) {
		var entity = new Entity(json.name);
		entity.setZIndex(json.zIndex);
		entity.setState(json.state);
		for(var index in json.tags)
			entity.addTag(json.tags[index]);
		
		// Rendering
		for(var state in json.stateAnimations)
			entity.addStateAnimation(state, Animation.fromJson(json.stateAnimations[state]));
		
		if(typeof json.texture !== "undefined")
			entity.setTexture(Texture.fromJson(json.texture));

		if(typeof json.drawCallbacks !== "undefined")
			for(var index in json.drawCallbacks)
				entity.addDrawCallback(DrawCallback.fromJson(json.drawCallbacks[index]));
		
		// Physics
		if(typeof json.body !== "undefined")
			entity.setBody(Jello.Body.fromJson(json.body, world));
		
		return entity;
	};
	
	return Entity;
});
