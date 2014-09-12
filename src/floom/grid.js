define(["floom/node", "external/vector2", "physics/aabb"], function(Node, Vector2, AABB) {
	var Grid = function(){
		this.arr = [];
		this.activeCount = 0;
		this.gsizeY = 0;
		this.boundaries = new AABB();
		this.cellSize = Vector2.One.copy();
	};

	Grid.prototype.update = function(system) {
	    this.recalculateBoundaries(system);
		this.clear();
		this.recalculateSizeY();
	};

	// TODO: reuse old grid
	Grid.prototype.clear = function() {
		this.arr.length = 0;
		this.activeCount = 0;
	};

	Grid.prototype.iterate = function(fn, context) {
		var numberOfNodes = this.arr.length;
		for(var nIndex = 0; nIndex < numberOfNodes; nIndex++) {
			var n = this.arr[nIndex];
			if (n) { fn.call(context, n); }
		}
	};

	Grid.prototype.getAt = function(cellX, cellY) {
		return this.arr[cellX * this.gsizeY + cellY];
	};
	
	Grid.prototype.getOrCreateAt = function(cellX, cellY) {
		var cell = cellX * this.gsizeY + cellY;
		var node = this.arr[cell];
		
		if(node === undefined) {
			this.arr[cell] = node = new Node();
			this.activeCount++;
		}
		
		return node;
	};
	
	Grid.prototype.recalculateBoundaries = function(system) {
	    // expand boundaries to include all particles
	    this.boundaries.clear();
	    _.each(system.particles, function(p) {
	    	this.boundaries.expandToInclude(p.position);
	    }, this);

		// expand boundaries a bit further
		this.boundaries.Min.x = Math.floor(this.boundaries.Min.x-1);
		this.boundaries.Min.y = Math.floor(this.boundaries.Min.y-1);
		this.boundaries.Max.x = Math.floor(this.boundaries.Max.x+3);
		this.boundaries.Max.y = Math.floor(this.boundaries.Max.y+3);
	};
	
	Grid.prototype.recalculateSizeY = function() {
		this.gsizeY = Math.floor(this.boundaries.Max.y-this.boundaries.Min.y);
	};
	
	Grid.prototype.draw = function(renderer) {
		// draw boundaries
		this.boundaries.debugDraw(renderer);

		// draw grid nodes
		var numberOfNodes = this.arr.length;
		for(var nIndex = 0; nIndex < numberOfNodes; nIndex++) {
			var n = this.arr[nIndex];
			var x = Math.floor(nIndex / this.gsizeY);
			var y = nIndex - (x * this.gsizeY);

			if (n) {
				var position = new Vector2(x,y);
				position.addSelf(this.boundaries.Min);
				renderer.drawDot(position, 1, "red", 0.5);
			}
		}
	};
	
	return Grid;
});
