define(["physics/jello", "floom/node"], function(Jello, Node) {
	var defaultNode = new Node();
	
	var Particle = function(x, y, u, v, material){
	    this.position = new Jello.Vector2(x, y);
	    this.prevPosition = new Jello.Vector2(x, y);
	    this.velocity = new Jello.Vector2(u, v);
	    // velocity gathered by the filter over the grid
	    this.gridVelocity = this.velocity.copy(); // or gradient x, y????

	    this.material = material;
	    
	    this.cellX = 0; // belongs to cell at x
	    this.cellY = 0; // belongs to cell at y

	    this.px = [0,0,0]; // deformation gradient?
	    this.py = [0,0,0];
	    this.gx = [0,0,0];
	    this.gy = [0,0,0];
	    
	    this.s = [0,0,0,0,0,0,0,0,0];
	    this.sx = [0,0,0,0,0,0,0,0,0];
	    this.sy = [0,0,0,0,0,0,0,0,0];
	    
	    this.node = [defaultNode, defaultNode, defaultNode, 
	                 defaultNode, defaultNode, defaultNode, 
	                 defaultNode, defaultNode, defaultNode];
	    
	    this.T00 = 0;
	    this.T01 = 0;
	    this.T11 = 0;
	};

	Particle.prototype.draw = function(renderer) {
		renderer.drawLine(
		    this.position,
		    this.position.sub(this.gridVelocity),
			this.material.colorScale(this.velocity.lengthSquared()),
			1.0,
			1
		);
	};
	
	return Particle;
});
