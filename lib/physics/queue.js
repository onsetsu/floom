define([

], function() {
	var QueueItem = function(func, args) {
		this.func = func;
		this.args = args;
	};

	var Queue = function(obj) {

		this.__events__ = [];
		this.object = obj;
		
		// mimic objs interface
		for(var prop in obj) {
			(function(that, prop) {
				that[prop] = function() {
					// safe the call for later execution
					that.__events__.push(
						new QueueItem(
							prop,
							arguments
						)
					);
					// provide chainability
					return that;
				};
			})(this, prop);
		}
	};

	Queue.prototype.fire = function() {
		// process all collected events
		for(var i = 0; i < this.__events__.length; i++) {
			var func = this.object[this.__events__[i].func];
			var context = this.object;
			var args = this.__events__[i].args;
			func.apply(context, args);
		}
		
		// reset event
		this.__events__.length = 0;
	};
	
	return Queue;
});
