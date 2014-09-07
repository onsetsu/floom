define([
	"engine/scene/scene",
	"engine/scene/mapscene",
	"engine/map/map",
	"assets/loader"
], function(Scene, MapScene, Map, Loader) {
	var TitleScene = MapScene.subclass({
		initialize: function() {
			MapScene.prototype.initialize.apply(this, arguments);
			
			this.setMap(new Map("title"));
		},
		
		update: function() {
			// check for transition to MapScene
			if(env.input.pressed(env.game.LeftButton))
				env.sceneStack.loadAndRun("twoMaps");
			else
				MapScene.prototype.update.apply(this, arguments);
		}
	});
	
	return TitleScene;
});
