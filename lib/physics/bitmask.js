define([

], function() {
	var Bitmask = function() {
		this.clear();
	};

	Bitmask.prototype.clear = function() {
		this.mask = 0x00;
	};

	Bitmask.prototype.setOn = function(bit) {
		this.mask |= (0x01 << (bit));
	};

	Bitmask.prototype.setOff = function(bit) {
		this.mask &= ~(0x01 << (bit));
	};

	Bitmask.prototype.getBit = function(bit) {
		return ((this.mask & (0x01 << (bit))) != 0);
	};

	Bitmask.prototype.intersects = function(bitmask) {
		return (this.mask & bitmask.mask) != 0;
	};

	Bitmask.prototype.toString = function() {
		var str = "";
		for(var i = 0; i < 32; i++) {
			str += this.getBit(i) ? 1 : 0;
		}
		return str;
	};
	
	return Bitmask;
});
