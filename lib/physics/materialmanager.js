define([

], function() {
	var CollisionCallback = function() {};

	CollisionCallback.prototype.collisionFilter = function(bA, bodyApm, bodyB, bodyBpm1, bodyBpm2, hitPt, normalVel) { // Body*, int, Body*, int, int, Vector2, float
		return true;
	};

	var Material = function(friction, elasticity) {
		this.friction = friction;
		this.elasticity = elasticity;
		this.combineFriction = Material.combine.average;
		this.combineElasticity = Material.combine.average;
	};

	// Define getter and setter functions for essential properties.
	Material.prototype.setFriction = function(friction) { this.friction = friction; };
	Material.prototype.getFriction = function() { return this.friction; };
	Material.prototype.setElasticity = function(elasticity) { this.elasticity = elasticity; };
	Material.prototype.getElasticity = function() { return this.elasticity; };
	Material.prototype.setCombineFriction = function(combineFriction) { this.combineFriction = combineFriction; };
	Material.prototype.getCombineFriction = function() { return this.combineFriction; };
	Material.prototype.setCombineElasticity = function(combineElasticity) { this.combineElasticity = combineElasticity; };
	Material.prototype.getCombineElasticity = function() { return this.combineElasticity; };

	// Standard functions to combine friction or elaticity values of two colliding bodies.
	Material.combine = {
		average: function(own, other) { return (own + other) / 2; },
		minimum: function(own, other) { return Math.min(own, other); },
		maximum: function(own, other) { return Math.max(own, other); },
		multiply: function(own, other) { return own * other; },
		own: function(own, other) { return own; },
		other: function(own, other) { return other; },
		fValue: function(own, other) { return 2 * own * other / (own + other); }
	};

	Material.Default = new Material();
	Material.Default.setFriction(1);
	Material.Default.setElasticity(0);
	
	return Material;
});
