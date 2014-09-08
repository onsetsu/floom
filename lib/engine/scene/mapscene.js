define([
	"engine/scene/scene",
	"basic/utils",
	"engine/map/map"
], function(
	Scene,
	Utils,
	Map
) {
	var MapScene = Scene.subclass({
		initialize: function() {
			Scene.prototype.initialize.apply(this, arguments);
			
			if(Bloob.debug && Bloob.debug.datGui) {
				this.datGuiFolder = Bloob.debug.datGui.addFolder(this.sceneID);
				this.datGuiFolder.open();
				if(this.testChangeMap)
					this.datGuiFolder.add(this, "testChangeMap").name('change map');
			}
		},

		getMap: function() {
			return this.map;
		},

		setMap: function(map) {
			this.map = map;
			if(Bloob.debug && Bloob.debug.datGui)
				this.map.initDatGui(this.datGuiFolder);
			return this;
		},

		update: function() {
			// entities/map
			if(Bloob.graph)
				Bloob.graph.beginClock('update');
			this.map.update();
			if(Bloob.graph)
				Bloob.graph.endClock('update');
			// rendering
			if(Bloob.graph)
				Bloob.graph.beginClock('draw');
			env.camera.update();
			env.renderer.draw(this.map);
			if(Bloob.graph)
				Bloob.graph.endClock('draw');
			// interaction
			env.input.clearPressed();
		}
	});
	
	return MapScene;
});
