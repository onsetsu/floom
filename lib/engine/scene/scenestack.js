define([
	"engine/scene/mapscene",
	"assets/loader",
	"engine/map/map"
], function(MapScene, Loader, Map) {
	
	var SceneStack = mini.Class.subclass({
		initialize: function() {
			this._stack = [];
			this._paused = false;
		},
		run: function(scene) {
			var stackSize = this._stack.length;
			if(stackSize == 0) {
				this._stack.push(scene);
				Bloob.mark(scene.sceneID);
			} else {
				Bloob.mark(this._stack[stackSize - 1].sceneID + " -> " + scene.sceneID);
				this._stack[stackSize - 1].stop();
				this._stack[stackSize - 1] = scene;
			}
			scene.run();
			this._paused = false;
		},
		loadAndRun: function(mapName) {
			this._removeTopFolder();
			this.pause();

			// TODO: use preloaded transition.json in Loader
			var transitionMap = new Map("transition");
			Loader.load(function() {
				this.run(new MapScene().setMap(transitionMap));

				// actual loading of requested map
				var map = new Map(mapName);
				Loader.load(function() {
					this._removeTopFolder();
					this.pause();
			
					Bloob.log("Change map to '" + mapName + "'");
					this.run(new MapScene().setMap(map));
				}, this);
			}, this);
		},
		push: function(scene) {
			var stackSize = this._stack.length;
			if(stackSize > 0) {
				this._stack[stackSize - 1].stop();
				Bloob.mark(this._stack[stackSize - 1].sceneID + " -> " + scene.sceneID);
			}
			this._stack.push(scene);
			scene.run();
			this._paused = false;
		},
		loadAndPush: function(mapName) {
			this._removeTopFolder();
			this.pause();
			
			// actual loading of requested map
			var map = new Map(mapName);
			Loader.load(function() {
				Bloob.log("Push map to '" + mapName + "'");
				this.push(new MapScene().setMap(map));
			}, this);
		},
		pop: function() {
			this._removeTopFolder();
			var prevId = this._stack[this._stack.length - 1].sceneID;
			this._stack.pop().stop();
			var stackSize = this._stack.length;
			if(stackSize > 0) {
				var nextId = this._stack[stackSize - 1].sceneID;
				Bloob.mark(prevId + " -> " + nextId);
				if(Bloob.debug && Bloob.debug.datGui) {
					Bloob.debug.datGui.attachFolder(this._stack[stackSize - 1].datGuiFolder, nextId);
				}
				this._stack[stackSize - 1].run();
				this._paused = false;
			}
		},
		top: function() {
			return this._stack[this._stack.length - 1];
		},
		inBetween: function(scene) {
			// TODO: define semantics
		},
		pause: function() {
			this.top().stop();
			this._paused = true;
		},
		resume: function() {
			if(this._paused)
				this.top().run();
		},
		_removeTopFolder: function() {
			if(Bloob.debug && Bloob.debug.datGui)
				Bloob.debug.datGui.removeFolder(this.top().sceneID);
		}
	});
	
	// enhance MapScene debug gui
	MapScene.prototype.testChangeMap = function() {
		env.sceneStack.loadAndRun("untitled");
	};
	
	return SceneStack;
	
});
