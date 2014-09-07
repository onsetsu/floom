define([
	"engine/game",
	"engine/scene/scenestack",
	"engine/loop",
	"engine/time/time",
	"engine/input/input",
	"engine/view/canvas",
	"engine/view/camera",
	"engine/view/viewport",
	"engine/rendering/renderer/combinedrenderer",
	"physics/jello",
	"engine/map/map",
	"engine/core/environment",
	"assets/loader"
], function(
	Game,
	SceneStack,
	Loop,
	Time,
	Input,
	Canvas,
	Camera,
	Viewport,
	CombinedRenderer,
	Jello,
	Map,
	Environment,
	Loader
) {
	var main = function(game, canvas) {
		$().ready(function() {
			env = {};
			
			// Setup SceneStack.
			env.sceneStack = new SceneStack();
			
			// Configure and start the game loop.
			env.loop = new Loop().clear().start();
			
			// Add global time listener.
			env.time = new Time();
			env.loop.add(env.time, env.time.update);
			
			env.canvas = canvas;
			env.input = new Input(env.canvas.canvasId);

			// choose, which subset of the world should be displayed
			var viewport = new Viewport(
				Jello.Vector2.Zero.copy(),
				new Jello.Vector2(100, 40)
			);
			env.camera = new Camera(viewport);
			
			env.renderer = new CombinedRenderer();
			
			Loader.load(function() {
				new (game)();
			});
		});
	};
	
	return main;
});
