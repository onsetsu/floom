define([
	"engine/game",
	"engine/scene/scenestack",
	"engine/loop",
	"engine/time/time",
	"engine/time/timer",
	"engine/input/input",
	"engine/view/canvas",
	"engine/view/camera",
	"engine/view/viewport",
	"engine/input/tool",
	"messaging/eventmanager",
	"engine/rendering/renderer/combinedrenderer",
	"physics/jello",
	"engine/map/map",
	"engine/core/environment",
	"assets/loader",
	"engine/domready"
], function(
	Game,
	SceneStack,
	Loop,
	Time,
	Timer,
	Input,
	Canvas,
	Camera,
	Viewport,
	Tool,
	EventManager,
	CombinedRenderer,
	Jello,
	Map,
	Environment,
	Loader,
	domReady
) {
	var main = function(game, canvas) {
		domReady(function() {
			env = {};
			
			// Setup SceneStack.
			env.sceneStack = new SceneStack();
			
			// Setup EventManager.
			env.eventManager = new EventManager();
			
			// Configure and start the game loop.
			env.loop = new Loop().clear().start();
			
			// Add global time listener.
			env.time = new Time();
			env.loop.add(env.time, env.time.update);
			
			// Single point to update all Timers.
			env.loop.add(Timer, Timer.update);
			
			// Single point to update all Tweens.
			env.loop.add(createjs.Tween, createjs.Tween.tick);
			
			env.canvas = canvas;
			env.input = new Input(env.canvas.canvasId);
			env.input.tool = new Tool();
			env.loop.add(env.input, env.input.updateTool);

			// choose, which subset of the world should be displayed
			var viewport = new Viewport(
				Jello.Vector2.Zero.copy(),
				new Jello.Vector2(100, 40)
			);
			env.camera = new Camera(viewport);
			
			env.renderer = new CombinedRenderer();

			// TODO: preload title and transition maps
			new Map("title");
			new Map("transition");
			
			/*
			var queue = new createjs.LoadQueue(true);
			queue.on("fileload", handleFileLoad, this);
			queue.on("complete", handleComplete, this);
			queue.loadFile("filePath/file.jpg");
			queue.loadFile({id:"image", src:"filePath/file.jpg"});
			queue.loadManifest(["filePath/file.jpg", {id:"image", src:"filePath/file.jpg"}]);
			queue.load();
			*/
			
			Loader.load(function() {
				new (game)();
			});
		});
	};
	
	return main;
});
