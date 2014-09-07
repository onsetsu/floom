define([
	"physics/bitmask"
], function(
	Bitmask
) {
	/*
	 * CollisionType
	 * 
	 * Convenient wrapper for a collision bitmask.
	 */
	var CollisionType = function() {
		this.bitmask = new Bitmask();
	};

	// Define with bit is affected by the given type.
	CollisionType.Player = 0;
	CollisionType.Ground = 1;
	CollisionType.Object = 2;
	// ...
	CollisionType.EffectParticle = 31;

	//Check whether to collide with the given type.
	CollisionType.getDefault = function() {
		return new CollisionType()
			.setCollisionOn(CollisionType.Player)
			.setCollisionOn(CollisionType.Ground)
			.setCollisionOn(CollisionType.Object);
	};

	//Check whether to collide with the given type.
	CollisionType.prototype.collidesWith = function(collisionType) {
		return this.bitmask.intersects(collisionType.bitmask);
	};

	CollisionType.prototype.setCollisionOn = function(type) {
		this.bitmask.setOn(type);
		
		return this;
	};

	CollisionType.prototype.setCollisionOff = function(type) {
		this.bitmask.setOff(type);
		
		return this;
	};

	return CollisionType;
});
