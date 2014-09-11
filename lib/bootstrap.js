requirejs.config({
    baseUrl: 'lib'
});

require([
	"engine/input/input",
	"engine/view/camera",
	"engine/view/viewport",
	"engine/rendering/renderer/combinedrenderer",
	"physics/jello",
	"debug/debug",
	"floom/floom",
	"engine/map/layer"
], function(
	Input,
	Camera,
	Viewport,
	CombinedRenderer,
	Jello,
	Debug,
	Floom,
	Layer
) {
	var BloobGame = mini.Class.subclass({
		initialize: function() {
			env.game = this;
			
			var stats = new Stats();
			$(stats.domElement)
				.css("position", "absolute")
				.css("top", $(window).scrollTop() + "px")
				.prependTo($("body"));
			$(window).scroll(function() {
				$(stats.domElement).css('top', $(this).scrollTop() + "px");
			});
			
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

			env.input.initMouse();
			env.input.bind(Input.KEY.MOUSE1, this.LeftButton);
			env.input.bind(Input.KEY.MOUSE2, this.RightButton);

			env.camera.jumpToPoint(new Jello.Vector2(0, 15));

			layer = new Layer("fluid");
			layer.initDatGui();

			// create fluid System
			var fluidSystem = new Floom.System(layer);
			
			// create custom Materials
			var mat0 = fluidSystem.createNewMaterial()
				.setParticleMass(0.5);
	
			var mat1 = fluidSystem.createNewMaterial()
				.setParticleMass(1.0);
	
			var mat2 = fluidSystem.createNewMaterial()
				.setParticleMass(2.0)
				.setIsElastic(true);
	
			var mat3 = fluidSystem.createNewMaterial()
				.setParticleMass(4.0);
			
			// create Particles of these Materials
			new Floom.Group(fluidSystem, -45,  5,  0, 25,  0.1, 0, mat0);
			new Floom.Group(fluidSystem,   5,  5, 50, 25, -0.1, 0, mat1);
			new Floom.Group(fluidSystem, -45, 30,  0, 50,  0.1, 0, mat2);
			new Floom.Group(fluidSystem,   5, 30, 50, 50, -0.1, 0, mat3);
		    
		    // initialize specific datGui for the fluid System
			fluidSystem.createDatGui();
			
			layer.setFluidSystem(fluidSystem);
			
			// update routine
			update = function(timePassed) {
				// entities/map
				if(graph)
					graph.beginClock('update');
				layer.update(timePassed);
				if(graph)
					graph.endClock('update');
				// rendering
				if(graph)
					graph.beginClock('draw');
				env.camera.update();
				env.renderer.draw(layer);
				//env.renderer.drawLayer(layer);
				if(graph)
					graph.endClock('draw');
				// interaction
				env.input.clearPressed();
			}

			
			// main loop
			var lastFrame = window.performance.now();
			function animate() {
				if(debug)
					debug.beforeRun();

				stats.update();

				// setup time since last call
				var time = window.performance.now();
				var dt = (time - lastFrame) / 1000;
				lastFrame = time;

				update(dt);

				if(debug)
					debug.afterRun();

				requestAnimationFrame(animate);
			}

			// start update
			animate();
		},
		
		Left: "left",
		Right: "right",
		Up: "up",
		Down: "down",
		
		LeftButton: "leftclick",
		RightButton: "rightclick"
	});

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