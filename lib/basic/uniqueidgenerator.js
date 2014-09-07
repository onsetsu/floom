define([

], function() {
	var UniqueIdGenerator = mini.Class.subclass({
		initialize: function(prefix) {
			this.store = {
				"prefix": prefix || "",
				"nextId": 0
			};
		},
		nextId: function() {
			return this.store.prefix + this.store.nextId++;
		}
	});

	return UniqueIdGenerator;
});
