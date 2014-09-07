define([], function() {
	
	var Signal = mini.Class.subclass({
		initialize: function(eventManager, messageTag) {
			this._eventManager = eventManager;
			this._messageTag = messageTag;
		},
		emit: function(/* arguments */) {
			this._eventManager.send(this._messageTag, arguments);
		}
	});
	
	var Slot = mini.Class.subclass({
		initialize: function() {
			this._callback = function() {};
			this._filter = function() { return true; };
			this._map = function(/* arguments */) { return arguments; };
		},
		callback: function(callback) {
			this._callback = callback;
			
			return this;
		},
		filter: function(filter) {
			this._filter = filter;
			
			return this;
		},
		map: function(map) {
			this._map = map;
			
			return this;
		},
		process: function(args) {
			var a = this._map.apply(this, args);
			if(this._filter.apply(this, a))
				this._callback.apply(this, a);
		}
	});
	
	var EventManager = mini.Class.subclass({
		initialize: function() {
			this.clear();
		},
		signal: function(messageTag) {
			this._signals[messageTag] = this._signals[messageTag] || new Signal(this, messageTag);
			
			return this._signals[messageTag];
		},
		slot: function(messageTag) {
			var slot = new Slot();
			
			if(!this._slots[messageTag])
				this._slots[messageTag] = [slot];
			else
				this._slots[messageTag].push(slot);
			
			return slot;
		},
		clear: function() {
			this._signals = {};
			this._slots = {};
		},
		send: function(messageTag, args) {
			var slots = this._slots[messageTag];
			if(slots)
				for(var i = 0; i < slots.length; i++) {
					var slot = slots[i];
					
					slot.process(args);
				}
		}
	});
	
	return EventManager;
});
