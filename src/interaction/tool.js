import Vector2 from "./../external/vector2.js";

class ToolEvent {
	constructor(tool) {
		this.tool = tool;
	}

	setScreenPosition(pos) { this._position = pos; }
	setLastScreenPosition(pos) { this._lastPosition = pos; }
	setDownScreenPosition(pos) { this._downPosition = pos; }

	getScreenPosition() { return this._position; }
	getLastScreenPosition() { return this._lastPosition; }
	getDownScreenPosition() { return this._downPosition; }

	getLastScreenMiddlePoint() {
		const position = this.getScreenPosition();
		const lastPosition = this.getLastScreenPosition();
		return position.add(lastPosition).mulFloat(0.5);
	}
	getDownScreenMiddlePoint() {
		const position = this.getScreenPosition();
		const downPosition = this.getDownScreenPosition();
		return position.add(downPosition).mulFloat(0.5);
	}

	_transformToViewport(vector, viewport) {
		return viewport.screenToWorldCoordinates(vector);
	}

	getPositionInWorld(viewport) {
		return this._transformToViewport(this._position, viewport);
	}
	getLastPositionInWorld(viewport) {
		return this._transformToViewport(this._lastPosition, viewport);
	}
	getDownPositionInWorld(viewport) {
		return this._transformToViewport(this._downPosition, viewport);
	}

	getLastMiddlePointInWorld(viewport) {
		var positionInWorld = this.getPositionInWorld(viewport);
		var lastPositionInWorld = this.getLastPositionInWorld(viewport);
		return positionInWorld.add(lastPositionInWorld).mulFloat(0.5);
	}
	getDownMiddlePointInWorld(viewport) {
		var positionInWorld = this.getPositionInWorld(viewport);
		var downPositionInWorld = this.getDownPositionInWorld(viewport);
		return positionInWorld.add(downPositionInWorld).mulFloat(0.5);
	}

	getLastDelta() { return this._position.sub(this._lastPosition); }
	getDownDelta() { return this._position.sub(this._downPosition); }
	getLastDeltaInWorld(viewport) {
		var positionInWorld = this.getPositionInWorld(viewport);
		var lastPositionInWorld = this.getLastPositionInWorld(viewport);
		return positionInWorld.sub(lastPositionInWorld);
	}
	getDownDeltaInWorld(viewport) {
		var positionInWorld = this.getPositionInWorld(viewport);
		var downPositionInWorld = this.getDownPositionInWorld(viewport);
		return positionInWorld.sub(downPositionInWorld);
	}

	getLastDistance() { return this._position.distance(this._lastPosition); }
	getDownDistance() { return this._position.distance(this._downPosition); }
	getLastDistanceInWorld(viewport) {
		var positionInWorld = this.getPositionInWorld(viewport);
		var lastPositionInWorld = this.getLastPositionInWorld(viewport);
		return positionInWorld.distance(lastPositionInWorld);
	}
	getDownDistanceInWorld(viewport) {
		var positionInWorld = this.getPositionInWorld(viewport);
		var downPositionInWorld = this.getDownPositionInWorld(viewport);
		return positionInWorld.distance(downPositionInWorld);
	}

	getDistanceToPoint(point) { return this._position.distance(point); }
	getDistanceToPointInWorld(point, viewport) {
		var toolPositionInWorld = this.getPositionInWorld(viewport);
		return toolPositionInWorld.distance(point);
	}
	// TODO: implement more convenient methods
	getDownCount() {}
	getDownTime() {}
	hitTest(viewport) {}
	nearest(viewport) {}
	getDownPath() {}
	getDownPathInWorld(viewport) {}
}
	
export default class Tool {
	constructor(input) {
		this.input = input;
		this.input.initMouse();

		this._downCount = 0;

		this._lastPosition = new Vector2(this.input.mouse.x, this.input.mouse.y);

		this._activateCallback = function() {};
		this._deactivateCallback = function() {};
		this._mouseDownCallback = function() {};
		this._mouseDragCallback = function() {};
		this._mouseMoveCallback = function() {};
		this._mouseUpCallback = function() {};
		this._keyDownCallbacks = {};
		this._keyUpCallbacks = {};
	}

	onActivate(callback) { this._activateCallback = callback; }
	onDeactivate(callback) { this._deactivateCallback = callback; }
	onMouseDown(callback) { this._mouseDownCallback = callback; }
	onMouseDrag(callback) { this._mouseDragCallback = callback; }
	onMouseMove(callback) { this._mouseMoveCallback = callback; }
	onMouseUp(callback) { this._mouseUpCallback = callback; }
	onKeyDown(key, callback) { this._keyDownCallbacks[key] = callback; }
	onKeyUp(key, callback) { this._keyUpCallbacks[key] = callback; }

	activate() {
		//this.input.tool.deactivate();
		this.input.tool = this;
		this._activateCallback.call(this);
	}

	deactivate() {
		this._deactivateCallback.call(this);
	}

	update() {
		const mouseButton = "leftclick";
		const position = new Vector2(this.input.mouse.x, this.input.mouse.y);
		if(this.input.pressed(mouseButton)) {
			this._downPosition = position.copy();
		}

		const event = new ToolEvent(this);
		event.setScreenPosition(position);
		event.setLastScreenPosition(this._lastPosition || position);
		event.setDownScreenPosition(this._downPosition);

		// down
		if(this.input.pressed(mouseButton)) {
			this._mouseDownCallback.call(this, event);
		}

		// drag
		if(this.input.state(mouseButton)) {
			this._mouseDragCallback.call(this, event);
		}

		// move
		if(!this.input.state(mouseButton)) {
			this._mouseMoveCallback.call(this, event);
		}

		// up
		if(this.input.released(mouseButton)) {
			this._mouseUpCallback.call(this, event);
		}

		// key down
		const downKeys = Object.keys(this._keyDownCallbacks);
		downKeys.forEach(key => {
			if(this.input.pressed(key)) {
				this._keyDownCallbacks[key].call(this, event);
			}
		});

		// key up
		const upKeys = Object.keys(this._keyUpCallbacks);
		upKeys.forEach(key => {
			if(this.input.released(key)) {
				this._keyUpCallbacks[key].call(this, event);
			}
		});

		this._lastPosition = position.copy();
	}
}

