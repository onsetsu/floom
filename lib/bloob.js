define([
	"engine/core/bloob",
	"engine/game",
	"logic/teleport",
	"basic/audio/sound",
	"basic/audio/music",
	"engine/input/input",
	"engine/view/canvas",
	"engine/scene/titlescene",
	"physics/quadtree",
	"physics/world",
	"editor/server",
	"assets/loader",
	"debug/debug"
], function(
	Bloob,
	Game,
	Teleport,
	Sound,
	Track,
	Input,
	Canvas,
	TitleScene,
	QuadTree,
	World,
	Server,
	Loader,
	Debug
) {
	var BloobGame = Game.subclass({
		testSound: new Sound("data/audio/sounds/test/cursor_sounds/water-bubble-high.wav"),
		testTrack: new Track("data/audio/music/test/217741_vibe_timid_girl.mp3"),
		
		initialize: function() {
			Game.prototype.initialize.apply(this, arguments);
			
			this.testSave();
			if(typeof env.audio.context !== "undefined") this.testAudio();
			this.testCanvas();
			this.testQuadTree();
			
			// prepare input
			env.input.initKeyboard();
			env.input.bind(Input.KEY.LEFT_ARROW, this.Left);
			env.input.bind(Input.KEY.RIGHT_ARROW, this.Right);
			env.input.bind(Input.KEY.UP_ARROW, this.Up);
			env.input.bind(Input.KEY.DOWN_ARROW, this.Down);

			env.input.bind(Input.KEY.M, "M");
			env.input.bind(Input.KEY.S, "S");
			env.input.bind(Input.KEY.D, "D");
			env.input.bind(Input.KEY.R, "R");

			// prepare input
			env.input.initMouse();
			env.input.bind(Input.KEY.MOUSE1, this.LeftButton);
			env.input.bind(Input.KEY.MOUSE2, this.RightButton);

			// TODO: make use of a preloaded title.json here to avoid the use of Loader
			var titleScene = new TitleScene();
			Loader.load(function() {
				env.sceneStack.run(titleScene);
			});
		},
		
		Left: "left",
		Right: "right",
		Up: "up",
		Down: "down",
		
		LeftButton: "leftclick",
		RightButton: "rightclick",

		testAudio: function() {
			if(Bloob.debug && Bloob.debug.datGui) {
				var audioFolder = Bloob.debug.datGui.addFolder("Audio");
				audioFolder.open();
				audioFolder.add(env.audio.trackParent.gain, 'value').name('TrackVolume').min(0.0).max(1.0).listen().step(0.1);
				audioFolder.add(env.audio.soundParent.gain, 'value').name('SoundVolume').min(0.0).max(1.0).listen().step(0.1);
	
				audioFolder.add(this.testSound, "play").name('play test sound');
	
				audioFolder.add(this.testTrack, "play").name('play test track');
				audioFolder.add(this.testTrack, '_volume')
					.name('track volume')
					.min(0.0)
					.max(1.0)
					.listen()
					.step(0.1)
					.onChange(function(volume) {
						testTrack.setVolume(volume);
					});
			}
		},

		testCanvas: function() {
			var testCanvas = {
				width: env.canvas.extent.x,
				height: env.canvas.extent.y,
				fixedSize: function() {
					env.canvas.fixedSize(testCanvas.width, testCanvas.height);
				},
				ratio: env.canvas.extent.x / env.canvas.extent.y,
				screenFit: function() {
					env.canvas.screenFit(testCanvas.ratio);
				}
			};
			if(Bloob.debug && Bloob.debug.datGui) {
				var canvasFolder = Bloob.debug.datGui.addFolder("Canvas");
				canvasFolder.open();
				canvasFolder.add(testCanvas, 'width');
				canvasFolder.add(testCanvas, 'height');
				canvasFolder.add(testCanvas, 'fixedSize');
				canvasFolder.add(testCanvas, 'ratio');
				canvasFolder.add(testCanvas, 'screenFit');
				canvasFolder.add(env.canvas, 'stretch');
				canvasFolder.add(env.canvas, 'fullScreen');
			}
		},

		testQuadTree: function() {
			if(Bloob.debug && Bloob.debug.datGui) {
				var quadTreeFolder = Bloob.debug.datGui.addFolder("QuadTree");
				quadTreeFolder.open();
				quadTreeFolder.add(QuadTree.Node, 'shouldDraw');
				quadTreeFolder.add(World, 'useQuadTree');
			}
		},

		testSave: function() {
			// test for map to json conversion
			var that = this;
			var toJson = {
				"save as": "untitled.json",
				"SAVE": function() {
					Bloob.log(env.sceneStack.top());
					Server.save(
						"data/maps/" + toJson["save as"],
						JSON.stringify(env.sceneStack.top().getMap().toJson(), undefined, 2)
					);
				}
			};
			if(Bloob.debug && Bloob.debug.datGui) {
				Bloob.debug.datGui.add(toJson, "save as");
				Bloob.debug.datGui.add(toJson, "SAVE");
			}
		}
	});
	
	return BloobGame;
});
