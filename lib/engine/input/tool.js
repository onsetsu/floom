define([
    "engine/input/input",
    "physics/jello"
], function(Input, Jello) {

	var ToolEvent = mini.Class.subclass({
		initialize: function ToolEvent(tool) {
			this.tool = tool;
		},

		setScreenPosition: function(pos) { this._position = pos; },
		setLastScreenPosition: function(pos) { this._lastPosition = pos; },
		setDownScreenPosition: function(pos) { this._downPosition = pos; },

		getScreenPosition: function() { return this._position; },
		getLastScreenPosition: function() { return this._lastPosition; },
		getDownScreenPosition: function() { return this._downPosition; },

		getLastScreenMiddlePoint: function() {
			var position = this.getScreenPosition();
			var lastPosition = this.getLastScreenPosition();
			return position.add(lastPosition).mulFloat(0.5);
		},
		getDownScreenMiddlePoint: function() {
			var position = this.getScreenPosition();
			var downPosition = this.getDownScreenPosition();
			return position.add(downPosition).mulFloat(0.5);
		},

		_transformToLayer: function(vector, layer) {
			env.camera.pushLayer(layer);
			var layerPos = env.camera.screenToWorldCoordinates(vector);
			env.camera.popLayer();
			return layerPos;
		},
		
		getPositionInLayer: function(layer) {
			return this._transformToLayer(this._position, layer);
		},
		getLastPositionInLayer: function(layer) {
			return this._transformToLayer(this._lastPosition, layer);
		},
		getDownPositionInLayer: function(layer) {
			return this._transformToLayer(this._downPosition, layer);
		},
		
		getLastMiddlePointInLayer: function(layer) {
			var positionInLayer = this.getPositionInLayer(layer);
			var lastPositionInLayer = this.getLastPositionInLayer(layer);
			return positionInLayer.add(lastPositionInLayer).mulFloat(0.5);
		},
		getDownMiddlePointInLayer: function(layer) {
			var positionInLayer = this.getPositionInLayer(layer);
			var downPositionInLayer = this.getDownPositionInLayer(layer);
			return positionInLayer.add(downPositionInLayer).mulFloat(0.5);
		},
		
		getLastDelta: function() { return this._position.sub(this._lastPosition); },
		getDownDelta: function() { return this._position.sub(this._downPosition); },
		getLastDeltaInLayer: function(layer) {
			var positionInLayer = this.getPositionInLayer(layer);
			var lastPositionInLayer = this.getLastPositionInLayer(layer);
			return positionInLayer.sub(lastPositionInLayer);
		},
		getDownDeltaInLayer: function(layer) {
			var positionInLayer = this.getPositionInLayer(layer);
			var downPositionInLayer = this.getDownPositionInLayer(layer);
			return positionInLayer.sub(downPositionInLayer);
		},

		getLastDistance: function() { return this._position.distance(this._lastPosition); },
		getDownDistance: function() { return this._position.distance(this._downPosition); },
		getLastDistanceInLayer: function(layer) {
			var positionInLayer = this.getPositionInLayer(layer);
			var lastPositionInLayer = this.getLastPositionInLayer(layer);
			return positionInLayer.distance(lastPositionInLayer);
		},
		getDownDistanceInLayer: function(layer) {
			var positionInLayer = this.getPositionInLayer(layer);
			var downPositionInLayer = this.getDownPositionInLayer(layer);
			return positionInLayer.distance(downPositionInLayer);
		},

		getDistanceToPoint: function(point) { return this._position.distance(point); },
		getDistanceToPointInLayer: function(point, layer) {
			var toolPositionInLayer = this.getPositionInLayer(layer);
			return toolPositionInLayer.distance(point);
		},
		// TODO: implement more convenient methods
		getDownCount: function() {},
		getDownTime: function() {},
		hitTest: function(layer) {},
		nearest: function(layer) {},
		getDownPath: function() {},
		getDownPathInLayer: function(layer) {}
	});
	
	var Tool = mini.Class.subclass({
		initialize: function Tool() {
			env.input.initMouse();
			
			this._downCount = 0;
			
			this._lastPosition = new Jello.Vector2(env.input.mouse.x, env.input.mouse.y);
			
			this._activateCallback = function() {};
			this._deactivateCallback = function() {};
			this._mouseDownCallback = function() {};
			this._mouseDragCallback = function() {};
			this._mouseMoveCallback = function() {};
			this._mouseUpCallback = function() {};
			this._keyDownCallbacks = {};
			this._keyUpCallbacks = {};
		},
		
		onActivate: function(callback) { this._activateCallback = callback; },
		onDeactivate: function(callback) { this._deactivateCallback = callback; },
		onMouseDown: function(callback) { this._mouseDownCallback = callback; },
		onMouseDrag: function(callback) { this._mouseDragCallback = callback; },
		onMouseMove: function(callback) { this._mouseMoveCallback = callback; },
		onMouseUp: function(callback) { this._mouseUpCallback = callback; },
		onKeyDown: function(key, callback) { this._keyDownCallbacks[key] = callback; },
		onKeyUp: function(key, callback) { this._keyUpCallbacks[key] = callback; },
		
		activate: function() {
			env.input.tool.deactivate();
			env.input.tool = this;
			this._activateCallback.call(this);
		},

		deactivate: function() {
			this._deactivateCallback.call(this);
		},

		update: function() {
			var position = new Jello.Vector2(env.input.mouse.x, env.input.mouse.y);
			if(env.input.pressed(Tool._mouseButton))
				this._downPosition = position.copy();

			var event = new ToolEvent(this);
			event.setScreenPosition(position);
			event.setLastScreenPosition(this._lastPosition || position);
			event.setDownScreenPosition(this._downPosition);
			
			// down
			if(env.input.pressed(Tool._mouseButton))
				this._mouseDownCallback.call(this, event);

			// drag
			if(env.input.state(Tool._mouseButton))
				this._mouseDragCallback.call(this, event);

			// move
			if(!env.input.state(Tool._mouseButton))
				this._mouseMoveCallback.call(this, event);
			
			// up
			if(env.input.released(Tool._mouseButton))
				this._mouseUpCallback.call(this, event);
			
			// key down
			var downKeys = Object.keys(this._keyDownCallbacks);
			for(var i = 0; i < downKeys.length; i++) {
				var key = downKeys[i];
				if(env.input.pressed(key))
					this._keyDownCallbacks[key].call(this, event);
			}
			
			// key up
			var upKeys = Object.keys(this._keyUpCallbacks);
			for(var i = 0; i < upKeys.length; i++) {
				var key = upKeys[i];
				if(env.input.released(key))
					this._keyUpCallbacks[key].call(this, event);
			}
			
			this._lastPosition = position.copy();
		}
	});
	
	Tool._mouseButton = "leftclick";

	return Tool;
});
