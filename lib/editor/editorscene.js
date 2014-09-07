define([
	"engine/scene/mapscene",
	"engine/scene/scene",
	"basic/utils",
	"basic/mapbuilder",
	"engine/map/map",
	"editor/server"
], function(MapScene, Scene, Utils, MapBuilder, Map, Server) {
	var EditorScene = MapScene.subclass({
		initialize : function() {
			// call parent
			MapScene.prototype.initialize.apply(this, arguments);

			// test for map to json conversion
			var that = this;
			var toJson = {
				"save as" : "untitled.json",
				"SAVE" : function() {
					Server.save("data/maps/" + toJson["save as"], JSON
							.stringify(that.map.toJson()));
				}
			};
			if (Bloob.debug && Bloob.debug.datGui) {
				this.datGuiFolder.add(toJson, "save as");
				this.datGuiFolder.add(toJson, "SAVE");
			}
		},

		update : function() {
			// rendering
			env.camera.update();
			env.renderer.draw(this.map);
			env.editor.drawIfNeeded();
			// interaction
			env.input.clearPressed();
		},

		testChangeMap : function() {
			console.log("This does nothing for editor");
		}
	});

	return EditorScene;
});
