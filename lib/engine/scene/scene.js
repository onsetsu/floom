define([], function() {
	
	var Scene = mini.Class.subclass({
		initialize: function() {
			this.sceneID = "Scene" + Scene.nextSceneID++;
		},
		run: function() {
			env.loop.add(this, this.update, this.sceneID);
			return this;
		},
		stop: function() {
			env.loop.remove(this.sceneID);
			return this;
		}
	});

	Scene.nextSceneID = 0;
	
	return Scene;
	
});
