define([

], function() {
	
	// Extensions to native Objects.

	Number.prototype.times = function(callback) {
		var i = 0;
		while(i < this) {
			callback(i++);
		}
	};
	
	Number.prototype.map = function(istart, istop, ostart, ostop) {
		return ostart + (ostop - ostart) * ((this - istart) / (istop - istart));
	};

	Number.prototype.limit = function(min, max) {
		return Math.min(max, Math.max(min, this));
	};

	Number.prototype.round = function(precision) {
		precision = Math.pow(10, precision || 0);
		return Math.round(this * precision) / precision;
	};

	Number.prototype.floor = function() {
		return Math.floor(this);
	};

	Number.prototype.ceil = function() {
		return Math.ceil(this);
	};

	Number.prototype.toInt = function() {
		return (this | 0);
	};

	Number.prototype.toRad = function() {
		return (this / 180) * Math.PI;
	};

	Number.prototype.toDeg = function() {
		return (this * 180) / Math.PI;
	};

	Number.prototype.sign = function() {
		return this?this<0?-1:1:0;
	};

	// Further utility functions.
	
	var Utils = {
	
		Function: {
			
			bind: function(func, obj) {
				return function() {
					return func.apply(obj, arguments);
				};
			}
	
		},
		
		Array: {
			
			fill: function(value, length) {
				arr = [];
				for(var i = 0; i < length; i++)
					arr.push(value);
				return arr;
			},
			
			sort: function(arr, propOrAcc, context) {
				if(typeof propOrAcc === "string") {
					return _.sortBy(arr, function(element) { return element[propOrAcc]; }, context);
				} else if(typeof propOrAcc === "function") {
					return _.sortBy(arr, propOrAcc, context);
				} else {
					return _.sortBy(arr, function(element) { return element; } , context);
				}
			}
			
		},
		
		Object: {
			
			// Calls given function for each property in object with key and value as parameters.
			each: function(obj, func) {
				for(var propertyName in obj) {
					if(!obj.hasOwnProperty(propertyName)) continue;
					
					func(propertyName, obj[propertyName]);
				}
			},
			
			// Extends given object with properties of second object.
			merge: function(original, extended) {
				for(var key in extended) {
					if(!extended.hasOwnProperty(key)) continue;

					var ext = extended[key];
					if(
						typeof(ext) != 'object' ||
						ext instanceof HTMLElement ||
						ext instanceof mini.Class
					) {
						original[key] = ext;
					}
					else {
						if( !original[key] || typeof(original[key]) != 'object' ) {
							original[key] = (ext instanceof Array) ? [] : {};
						}
						Utils.Object.merge( original[key], ext );
					}
				}
				return original;
			}
		},
		
		String: {
			
			// Checks whether given String str ends with the given suffix.
			endsWith: function( str, suffix ) {
			    return str.indexOf(suffix, str.length - suffix.length) !== -1;
			},
			
			// Checks whether given String str starts with the given prefix.
			startsWith: function( str, prefix ) {
				return str.slice(0, prefix.length) == prefix;
			}
			
		}

	};

	return Utils;
});
