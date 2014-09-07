define([
	"physics/vector2",
	"physics/aabb"
], function(
	Vector2,
	AABB
) {
	var Jello = Jello || function() {};

	Jello.Vector2 = Vector2;
	Jello.AABB = AABB;
	
	return Jello;
});
