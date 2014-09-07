define([

], function() {
	// Enable pooling of a specific class.
	var ObjectPool = function(constructor) {
		this.objectClass = constructor;
		this.factoryFunction = constructor;
		this.objects = [];
		this.count = 0;
	};

	// Factory function: Creates an object of the given class, thereby tries to revive an existing one.
	ObjectPool.prototype.createObject = function(/*arguments*/) {
		if(this.count > 0) {
			// can revive an existing  object
			this.count--;
			this.objectClass.prototype.Clear.apply(this.objects[this.count], arguments);
			return this.objects[this.count];
		} else {
			// have to create a new object
			var instance = Object.create(this.objectClass.prototype);
			this.objectClass.apply(instance, arguments);

			return instance;
		}
	};

	// Free an object of a given class for reuse.
	ObjectPool.prototype.freeForUse = function(object) {
		this.objects[this.count] = object;
		this.count++;
	};
	
	return ObjectPool;
});
