requirejs.config({
    baseUrl: 'lib'
});

require([
	"engine/input/input",
	"engine/view/camera",
	"engine/view/viewport",
	"engine/rendering/renderer/combinedrenderer",
	"physics/jello",
	"bloob"
], function(
	Input,
	Camera,
	Viewport,
	CombinedRenderer,
	Jello,
	BloobGame
) {
	var main = function(game) {
		$().ready(function() {
			env = {};
			
			var canvasId = "floom";
			env.canvas = document.getElementById(canvasId);
			env.canvas.style.position = "absolute";
			env.canvas.style.top = "0px";
			env.canvas.style.left = "0px";
			env.canvas.style["z-index"] = -1;

			env.input = new Input(canvasId);

			// choose, which subset of the world should be displayed
			var viewport = new Viewport(
				Jello.Vector2.Zero.copy(),
				new Jello.Vector2(100, 40)
			);
			env.camera = new Camera(viewport);
			
			env.renderer = new CombinedRenderer(env.canvas);

			new (game)();
		});
	};

	// Start Game instance.
	main(BloobGame);
});