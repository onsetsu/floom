define([
	"engine/scene/mapscene",
	"engine/map/map",
	"basic/mapbuilder",
	"assets/loader",
	"physics/jello"
], function(
	MapScene,
	Map,
	MapBuilder,
	Loader,
	Jello
) {

	var Teleport = mini.Class.subclass({
		initialize: function(triggerField, targetMapName, targetLayerIndex, targetPosition) {
			//TODO: allow targetLayer and targetPosition
			triggerField.onOverlapBody(function(body) {
				if(!body.isPlayer) return;

				env.sceneStack.loadAndRun(targetMapName);
			});
		}
	});
	
	/*
	 * add sample Teleport to testMap
	 */
	MapBuilder.testMapExtensions.push(function(layer, world) {
		var teleportTrigger = new Jello.TriggerField(
			world,
			new Jello.AABB(
				new Jello.Vector2(-40, -45),
				new Jello.Vector2( 10, -40)
			));
		var teleport = new Teleport(teleportTrigger, "untitled");
	});

	return Teleport;
});
