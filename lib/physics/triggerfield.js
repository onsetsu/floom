define([

], function() {
	var TriggerField = function(world, aabb) {
		this.aabb = aabb;
		this._world = world;
		
		world.addTriggerField(this);
	};

	TriggerField.prototype.update = function() {
		// overlap Body (one pointMass should be inside the AABB)
		if(this._overlapBodyCallback || this._containBodyCallback) {
			// TODO: use Quadtree and Bitmask for optimization
			for(var i = 0; i < this._world.mBodies.length; i++) {
				var body = this._world.getBody(i);
				
				var containsAllPointMasses = true;
				var containsAPointMass = false;
				// iterate each pointMass in given body
				for(var j = 0; j < body.getBoundaryCount(); j++) {
					if(this.aabb.contains(body.getPointMass(j).Position))
						containsAPointMass = true;
					else
						containsAllPointMasses = false;
				}
				if(containsAPointMass && this._overlapBodyCallback)
					this._overlapBodyCallback(body);
				if(containsAllPointMasses && this._containBodyCallback)
					this._containBodyCallback(body);
			}
		}
	};

	TriggerField.prototype.onOverlapBody = function(callback) {
		this._overlapBodyCallback = callback;
		return this;
	};

	TriggerField.prototype.onContainBody = function(callback) {
		this._containBodyCallback = callback;
		return this;
	};

	TriggerField.prototype.debugDraw = function(debugDraw) {
		this.aabb.debugDraw(debugDraw);
	};
	
	return TriggerField;
});
