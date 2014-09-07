define([
	"engine/time/time"
], function(Loop) {
	var Timer = mini.Class.subclass({
		initialize: function(value) {
			this.set(value);
			Timer.addInstance(this);
		},
		set: function(value) {
			this.targetTime = value;
			value = value || 0;
			this.timeSinceTargetTime = -value;
		},
		// Returns the time since the target time.
		get: function() {
			return this.timeSinceTargetTime;
		},
		reset: function() {
			this.set(this.targetTime);
		}
	});
	
	Timer.instances = [];
	Timer.addInstance = function(timer) {
		Timer.instances.push(timer);
	};
	Timer.update = function() {
		for(var instanceIndex in Timer.instances) {
			Timer.instances[instanceIndex].timeSinceTargetTime += env.time.timePassed;
		}
	};
	
	return Timer;
});
