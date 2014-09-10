define([
	"engine/game",
	"engine/loop",
	"engine/input/input",
	"engine/view/canvas",
	"engine/view/camera",
	"engine/view/viewport",
	"engine/rendering/renderer/combinedrenderer",
	"physics/jello",
	"engine/map/map"
], function(
	Game,
	Loop,
	Input,
	Canvas,
	Camera,
	Viewport,
	CombinedRenderer,
	Jello,
	Map
) {
	var main = function(game, canvas) {
		$().ready(function() {
			env = {};
			
			// Configure and start the game loop.
			env.loop = new Loop().clear().start();
			
			env.canvas = canvas;
			env.input = new Input(env.canvas.canvasId);

			// choose, which subset of the world should be displayed
			var viewport = new Viewport(
				Jello.Vector2.Zero.copy(),
				new Jello.Vector2(100, 40)
			);
			env.camera = new Camera(viewport);
			
			env.renderer = new CombinedRenderer();

			new (game)();
		});
	};
	
	return main;
});
