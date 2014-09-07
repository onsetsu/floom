define([
	'engine/input/input'
], function(Input){ "use strict";

var inputKeydown = Input.prototype.keydown;
var inputKeyup = Input.prototype.keyup;
var inputMousewheel = Input.prototype.mousewheel;
var inputMousemove = Input.prototype.mousemove;

Input.inject({
	mousemoveCallback: null,
	keyupCallback: null,
	keydownCallback: null,
	
	delayedKeyup: {push:function(){},length: 0},
	
	
	keydown: function( event ) {
		console.log("input-keydown");
		inputKeydown.apply(this, arguments);
		if( event.target.type == 'text' ) { return; }
		
		var code = event.type == 'keydown' 
			? event.keyCode 
			: (event.button == 2 ? Input.KEY.MOUSE2 : Input.KEY.MOUSE1);
		var action = this.bindings[code];
		if( action ) {
			if( this.presses[action] ) { //!this.actions[action]
				this.actions[action] = true;
				if( this.keydownCallback ) {
					this.keydownCallback( action );
				}
			}
			event.stopPropagation();
			event.preventDefault();
		}
	},
	
	
	keyup: function( event ) {
		console.log("input-keyup");
		inputKeyup.apply(this, arguments);
		if( event.target.type == 'text' ) { return; }
		var code = event.type == 'keyup' 
			? event.keyCode 
			: (event.button == 2 ? Input.KEY.MOUSE2 : Input.KEY.MOUSE1);
		var action = this.bindings[code];
		if( action ) {
			this.actions[action] = false;
			if( this.keyupCallback ) {
				this.keyupCallback( action );
			}
			event.stopPropagation();
			event.preventDefault();
		}
	},
	
	
	mousewheel: function( event ) {
		console.log("input-mousewheel");
		inputMousewheel.apply(this, arguments);
		var delta = event.wheelDelta ? event.wheelDelta : (event.detail * -1);
		var code = delta > 0 ? Input.KEY.MWHEEL_UP : Input.KEY.MWHEEL_DOWN;
		var action = this.bindings[code];
		if( action ) {
			if( this.keyupCallback ) {
				this.keyupCallback( action );
			}
			event.stopPropagation();
			event.preventDefault();
		}
	},
	
	
	mousemove: function( event ) {
		console.log("input-mousemove");
		inputMousemove.apply(this, arguments);
		if( this.mousemoveCallback ) {
			this.mousemoveCallback();
		}
	}
});

// Make additional behaviour public.
wm.EventedInput = Input;
return wm.EventedInput;

});