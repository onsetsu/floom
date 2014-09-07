define(["physics/jello"], function(Jello) {
	var Node = function() {
	    this.mass = 0;
	    this.d = 0;
	    this.gx = 0;
	    this.gy = 0;
	    this.cgx = [0, 0, 0, 0];
	    this.cgy = [0, 0, 0, 0];
	    this.velocity = Jello.Vector2.Zero.copy();
	    this.velocity2 = Jello.Vector2.Zero.copy();
	    this.acceleration = Jello.Vector2.Zero.copy();
	    
	    this.particleDensity = 0;
	};
	
	return Node;
});
