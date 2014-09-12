requirejs.config({
    baseUrl: 'src'
});

require([
	"engine/input/input",
	"engine/view/viewport",
	"engine/rendering/renderer/combinedrenderer",
	"external/vector2",
	"debug/debug",
	"floom/floom",
	"interaction/tool"
], function(
	Input,
	Viewport,
	CombinedRenderer,
	Vector2,
	Debug,
	Floom,
	Tool
) {
	function initTools(input, viewport, system) {
		this.system = system;
		this.currentInteraction = 0;

		var dragTool = new Tool(input);
		dragTool.onMouseDrag((function(event) {
			_.each(this.system.particles, function(p) {
				if(p.position.sub(event.getPositionInWorld(viewport)).lengthSquared() < 50)
					p.velocity.lerpSelf(event.getLastDeltaInWorld(viewport), 0.2);
			}, this);
		}).bind(this));
		dragTool.name = "drag";

		var attractTool = new Tool(input);
		attractTool.onMouseDrag((function(event) {
			_.each(this.system.particles, function(p) {
				var vectorToMouse = event.getPositionInWorld(viewport).sub(p.position);
				var distanceToMouse = vectorToMouse.lengthSquared();
				if(distanceToMouse < 50)
					p.velocity.weightedAddSelf(vectorToMouse, (1/distanceToMouse) * (Math.log(1+distanceToMouse)));
			}, this);
		}).bind(this));
		attractTool.name = "attract";

		var repelTool = new Tool(input);
		repelTool.onMouseDrag((function(event) {
			_.each(this.system.particles, function(p) {
				var vectorToMouse = event.getPositionInWorld(viewport).sub(p.position);
				var distanceToMouse = vectorToMouse.lengthSquared();
				if(distanceToMouse < 50)
					p.velocity.weightedAddSelf(vectorToMouse, 0.1 * Math.log(1/(1+distanceToMouse)));
			}, this);
		}).bind(this));
		repelTool.name = "repel";
		
		function getRandomPointInCircleUniformly() {
			var TWO_PI = (3.14159265 * 2.0);
			var t = TWO_PI*Math.random();
			var u = Math.random()+Math.random();
			var r = u>1 ? 2-u : u;
			return new Vector2(r*Math.cos(t), r*Math.sin(t));
		}
		var spawnTool = new Tool(input);
		spawnTool.onMouseDrag((function(event) {
			var spawnPosition = event.getPositionInWorld(viewport);
			for(var i = 0; i < 10; i++) {
				var noise = getRandomPointInCircleUniformly().mulFloat(5);
				this.system.particles.push(
					new Floom.Particle(
						spawnPosition.x + noise.x,
						spawnPosition.y + noise.y,
						0,
						0,
						this.system.materials[0]
					)
				);
			}
		}).bind(this));
		spawnTool.name = "spawn";
		
		var consumeTool = new Tool(input);
		consumeTool.onMouseDrag((function(event) {
			for(var i = 0; i < this.system.getNumberOfParticles();) {
				if(this.system.particles[i].position.sub(event.getPositionInWorld(viewport)).lengthSquared() < 4)
					this.system.particles.splice(i, 1);
				else
					i++;
			}
		}).bind(this));
		consumeTool.name = "consume";

		var keyToolMap = {
			D: dragTool,
			A: attractTool,
			R: repelTool,
			S: spawnTool,
			C: consumeTool
		};
		_.each(keyToolMap, function(tool, key, map) {
			env.input.bind(Input.KEY[key], key);
			var toTool = function() {
				console.log("its " + key);
				tool.activate();
			};
			
			_.each(map, function(fromTool) {
				fromTool.onKeyUp(key, toTool);
			});
		});

		// activate default tool
		dragTool.activate();
	};

	function drawTool(renderer, input) {
		var color = "pink";

		// draw mouse cursor
		renderer.drawDot(input.mouse, 10, color, 0.5);
		
		// draw current interaction name
		renderer.drawText(
			input.tool.name,
			new Vector2(5, 5).add(input.mouse),
			color,
			1.0,
			"bottom"
		);
	};

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

	initTools(env.input, env.viewport, env.fluidSystem);
	
	// update routine
	var lastPoint = Vector2.Zero.copy();
	update = function(timePassed) {
		// entities/map
		if(graph)
			graph.beginClock('update');

		env.input.update();
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
		env.viewport.update();
		if(graph)
			graph.endClock('update');
		// rendering
		if(graph)
			graph.beginClock('draw');
		env.renderer.clear();
		env.renderer.withViewport(env.viewport, function() {
			env.renderer.draw(env.fluidSystem);
		});
		drawTool(env.renderer, env.input);
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
			debug.afterRun(env.renderer, env.fluidSystem);

		requestAnimationFrame(animate);
	}

	$().ready(function() {
		debug = new Debug.Menu();
		debug.addPanel({
			type: Debug.Performance,
			name: 'graph',
			label: 'Performance'
		});
		animate();
	});
});