define([
	"basic/utils"
], function(Utils) {
	var _Loop = function(callback, desiredTime) {
		var that = this;
		// -----------------------------------------------------------------------------

		// use requestAnimationFrame if available or setInterval otherwise

		// Find vendor prefix, if any
		var vendors = ['ms', 'moz', 'webkit', 'o'];
		for( var i = 0; i < vendors.length && !window.requestAnimationFrame; i++ ) {
			window.requestAnimationFrame = window[vendors[i]+'RequestAnimationFrame'];
		}

		// Use requestAnimationFrame if available
		if( window.requestAnimationFrame ) {
			var next = 1,
				anims = {},
				lastFrame = {};

			that.start = function( callback, element ) {
				var current = next++;
				anims[current] = true;
				lastFrame[current] = window.performance.now();

				var animate = function() {
					if( !anims[current] ) { return; } // deleted?
					window.requestAnimationFrame( animate, element );
					
					// setup time since last call
					var tm = window.performance.now();
					var dt = (tm - lastFrame[current]) / 1000;
					lastFrame[current] = tm;

					callback(dt);
				};
				window.requestAnimationFrame( animate, element );
				return current;
			};

			that.stop = function( id ) {
				delete anims[id];
			};
		}

		// [set/clear]Interval fallback
		else {
			that.start = function( callback, element ) {
				return window.setInterval( callback, 1000/60 );
			};
			that.stop = function( id ) {
				window.clearInterval( id );
			};
		}
	};
	
	var Loop = mini.Class.subclass({
		initialize: function() {
			this.loop = new _Loop();
			this.callbacks = [];
			this.removals = {};
		},

		start: function(fn) {
			var fn = Utils.Function.bind(this.update, this);
			this.__loopId__ = this.loop.start(fn);
			return this;
		},
	
		stop: function() {
			this.loop.stop(this.__loopId__);
			return this;
		},
	
		update: function(timePassed) {
			for(var index in this.callbacks) {
				if(!this.callbacks.hasOwnProperty(index)) continue;

				this.callbacks[index](timePassed);
			}
		},
	
		add: function(context, func, keyForRemoval) {
			var bindFunction = Utils.Function.bind(func, context);
			
			if(typeof keyForRemoval !== "undefined") {
				this.removals[keyForRemoval] = bindFunction;
			}
			this.callbacks.push(bindFunction);
			return this;
		},
	
		remove: function(keyForRemoval) {
			var functionToRemove = this.removals[keyForRemoval];
			var index = this.callbacks.indexOf(functionToRemove);
			if (index !== - 1) {
				this.callbacks.splice( index, 1 );
			}
			return this;
		},
	
		clear: function() {
			this.callbacks.length = 0;
			return this;
		}
	});

	return Loop;
});
