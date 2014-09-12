requirejs.config({
    baseUrl: 'src'
});

require([
	"engine/input/input",
	"engine/view/viewport",
	"engine/rendering/renderer/combinedrenderer",
	"external/vector2",
	"debug/debug",
	"floom/floom"
], function(
	Input,
	Viewport,
	CombinedRenderer,
	Vector2,
	Debug,
	Floom
) {
	env = {};
	
	var canvasId = "floom";
	var canvas = document.getElementById(canvasId);
	canvas.style.position = "absolute";
	canvas.style.top = "0px";
	canvas.style.left = "0px";
	canvas.style["z-index"] = -1;

	env.input = new Input(canvasId);

	// choose, which subset of the world should be displayed
	var viewport = new Viewport(
		canvas,
		Vector2.Zero.copy(),
		new Vector2(100, 40)
	);
	env.viewport = viewport;
	
	env.renderer = new CombinedRenderer(canvas);

	var stats = new Stats();
	$(stats.domElement)
		.css("position", "absolute")
		.css("top", $(window).scrollTop() + "px")
		.prependTo($("body"));
	$(window).scroll(function() {
		$(stats.domElement).css('top', $(this).scrollTop() + "px");
	});
	
	// prepare input
	env.input.initMouse();
	env.input.bind(Input.KEY.MOUSE1, "leftclick");
	env.input.bind(Input.KEY.MOUSE2, "rightclick");
	env.input.bind(Input.KEY.MWHEEL_UP, "zoomIn");
	env.input.bind(Input.KEY.MWHEEL_DOWN, "zoomOut");
	env.input.initKeyboard();
	env.input.bind(Input.KEY.N, "nextAction");

	env.viewport.jumpToPoint(new Vector2(0, 15));

	// create fluid System
	env.fluidSystem = new Floom.System();
	// create custom Materials
	var mat0 = env.fluidSystem.createNewMaterial()
		.setParticleMass(0.5);
	var mat1 = env.fluidSystem.createNewMaterial()
		.setParticleMass(1.0);
	var mat2 = env.fluidSystem.createNewMaterial()
		.setParticleMass(2.0)
		.setIsElastic(true);
	var mat3 = env.fluidSystem.createNewMaterial()
		.setParticleMass(4.0);
	// create Particles of these Materials
	new Floom.Group(env.fluidSystem, -45,  5,  0, 25,  0.1, 0, mat0);
	new Floom.Group(env.fluidSystem,   5,  5, 50, 25, -0.1, 0, mat1);
	new Floom.Group(env.fluidSystem, -45, 30,  0, 50,  0.1, 0, mat2);
	new Floom.Group(env.fluidSystem,   5, 30, 50, 50, -0.1, 0, mat3);
	// initialize specific datGui for the fluid System
	env.fluidSystem.createDatGui();
	
	// update routine
	var lastPoint = Vector2.Zero.copy();
	update = function(timePassed) {
		// entities/map
		if(graph)
			graph.beginClock('update');

		// viewport manipulation
		if(env.input.pressed("rightclick")) {
			lastPoint.set(env.input.mouse);
		}
		if(env.input.state("rightclick")) {
			env.viewport.translateBy(lastPoint.sub(env.input.mouse));
			lastPoint.set(env.input.mouse);
		}
		if(env.input.state("zoomIn")) {
			env.viewport.zoomIn();
		}
		if(env.input.state("zoomOut")) {
			env.viewport.zoomOut();
		}
		
		env.fluidSystem.update(timePassed);
		if(graph)
			graph.endClock('update');
		// rendering
		if(graph)
			graph.beginClock('draw');
		env.viewport.update();
		env.renderer.clear();
		env.renderer.withViewport(env.viewport, function() {
			env.renderer.draw(env.fluidSystem);
		});
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

	$().ready(animate);
});