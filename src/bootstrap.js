import Floom, { Input, Viewport, CombinedRenderer, Vector2, Debug, Tool } from "./index.js";

	const MAX_NUMBER_OF_FLUID_SYSTEMS = 100;

	function initTools(input, viewport, system) {
		var dragTool = new Tool(input);
		dragTool.onMouseDrag(function(event) {
			system.particles.forEach(function(p) {
				if(p.position.sub(event.getPositionInWorld(viewport)).lengthSquared() < 50)
					p.velocity.lerpSelf(event.getLastDeltaInWorld(viewport), 0.2);
			});
		});
		dragTool.name = "drag";

		var attractTool = new Tool(input);
		attractTool.onMouseDrag(function(event) {
			system.particles.forEach(function(p) {
				var vectorToMouse = event.getPositionInWorld(viewport).sub(p.position);
				var distanceToMouse = vectorToMouse.lengthSquared();
				if(distanceToMouse < 150)
					p.velocity.weightedAddSelf(vectorToMouse, (1/distanceToMouse) * (Math.log(1+distanceToMouse)));
			});
		});
		attractTool.name = "attract";

		var repelTool = new Tool(input);
		repelTool.onMouseDrag(function(event) {
			system.particles.forEach(function(p) {
				var vectorToMouse = event.getPositionInWorld(viewport).sub(p.position);
				var distanceToMouse = vectorToMouse.lengthSquared();
				if(distanceToMouse < 150)
					p.velocity.weightedAddSelf(vectorToMouse, 0.1 * Math.log(1/(1+distanceToMouse)));
			});
		});
		repelTool.name = "repel";

		function getRandomPointInCircleUniformly() {
			var TWO_PI = (3.14159265 * 2.0);
			var t = TWO_PI*Math.random();
			var u = Math.random()+Math.random();
			var r = u>1 ? 2-u : u;
			return new Vector2(r*Math.cos(t), r*Math.sin(t));
		}
		var spawnTool = new Tool(input);
        var spawnMaterialIndex = 0;
		spawnTool.onMouseDrag(function(event) {
			var spawnPosition = event.getPositionInWorld(viewport);
			for(var i = 0; i < 10; i++) {
				var noise = getRandomPointInCircleUniformly().mulFloat(5);
				system.particles.push(
					new Floom.Particle(
						spawnPosition.x + noise.x,
						spawnPosition.y + noise.y,
						0,
						0,
						system.materials[spawnMaterialIndex]
					)
				);
			}
		});
        spawnTool.onMouseUp(function(event) {
            spawnMaterialIndex = (spawnMaterialIndex + 1) % system.materials.length;
        });
		spawnTool.name = "spawn";

		var consumeTool = new Tool(input);
		consumeTool.onMouseDrag(function(event) {
			for(var i = 0; i < system.getNumberOfParticles();) {
				if(system.particles[i].position.sub(event.getPositionInWorld(viewport)).lengthSquared() < 4)
					system.particles.splice(i, 1);
				else
					i++;
			}
		});
		consumeTool.name = "consume";

		var keyToolMap = {
			D: dragTool,
			A: attractTool,
			R: repelTool,
			S: spawnTool,
			C: consumeTool
		};

		Object.entries(keyToolMap).forEach(function([key, tool]) {
			input.bind(Input.KEY[key], key);
			function toTool() {
				console.log("its " + key);
				tool.activate();
			}
			Object.values(keyToolMap).forEach(fromTool => fromTool.onKeyUp(key, toTool));
		});

		// activate default tool
		dragTool.activate();
	}

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
	}

	// datGui
	function datGuiForSystem(fluidSystem, timeMachine) {
		var datGui = new dat.GUI();

        var gravityFolder = datGui.addFolder("Gravity");
        gravityFolder.open();
        gravityFolder.add(fluidSystem.gravity, "x").min(-0.2).max(0.2).step(-0.01);
        gravityFolder.add(fluidSystem.gravity, "y").min(-0.2).max(0.2).step(-0.01);

		datGui.add(fluidSystem, "implementationType", {
			"Surface Tension": "surfaceTension",
			"Simple Implementation": "simple",
			"Elasticity Implementation": "elasticity",
			"MLS Implementation": "mls" }).name('Implementation Type');
		datGui.add(fluidSystem, "drawGrid").name('Draw Grid');
		datGui.add(fluidSystem, "doObstacles").name('Obstacles');
		datGui.add(fluidSystem, "doSprings").name('Compute Springs');
		datGui.add(fluidSystem, "drawSprings").name('Draw Springs');

		datGui.add(timeMachine, "paused").name('Pause').listen();
		datGui.add({stepForewards: () => {
			if (timeMachine.renderIndex < timeMachine.simulateIndex) timeMachine.renderIndex++
			}}, "stepForewards").name("⏭️ ")
		datGui.add({stepBackwards: () => {
				if (timeMachine.renderIndex > 0 && timeMachine.renderIndex > timeMachine.simulateIndex - MAX_NUMBER_OF_FLUID_SYSTEMS) timeMachine.renderIndex--
			}}, "stepBackwards").name("⏮️ ")

		datGui.add(timeMachine, "renderIndex").name('Render Index');
		let inspectedParticleController = datGui.add(window, "inspectedParticleIndex");
		let drawTraceController = datGui.add(window, "drawTrace");

		datGuiForMaterials(fluidSystem.materials, datGui);
	}

	function datGuiForMaterials(materials, parent) {
		var materialFolder = parent.addFolder("Materials");
		materialFolder.open();

		// #TODO, #BUG: `materials` are currently not defined
		if (!Array.isArray(materials)) {
			return;
		}
		materials.forEach(material => datGuiForMaterial(material, materialFolder));
	}

	function datGuiForMaterial(material, parent) {
		var folder = parent.addFolder("Mat" + material.materialIndex);
		folder.open();

		folder.addColor(material, "color").onChange(material.setColor.bind(material));
		folder.add(material, "particleMass").min(0.01).max(5.0).step(0.1);
		folder.add(material, "restDensity").min(0.1).max(5.0).step(0.1);
		folder.add(material, "stiffness").min(0).max(1).step(0.05);
		folder.add(material, "bulkViscosity").min(0).max(1).step(0.05);
		folder.add(material, "elasticity").min(-1).max(5).step(0.05);
		folder.add(material, "surfaceTension").min(0).max(1).step(0.05);
		folder.add(material, "viscosity").min(0).max(1).step(0.05);
		folder.add(material, "meltRate").min(0).max(1).step(0.05);
		folder.add(material, "damping").min(0).max(1).step(0.05);
		folder.add(material, "smoothing").min(0).max(1).step(0.05);
		folder.add(material, "springK").min(0).max(5).step(0.05);
	}

	var canvasId = "floom";
	var canvas = document.getElementById(canvasId);
	canvas.style.position = "absolute";
	canvas.style.top = "0px";
	canvas.style.left = "0px";
	canvas.style["z-index"] = -1;

	var renderer = new CombinedRenderer(canvas);

	var stats = new Stats();
	$(stats.domElement)
		.css("position", "absolute")
		.css("top", $(window).scrollTop() + "px")
		.prependTo($("body"));
	$(window).scroll(function() {
		$(stats.domElement).css('top', $(this).scrollTop() + "px");
	});

	// prepare input
	var input = new Input(canvasId);
	input.initMouse();
	input.bind(Input.KEY.MOUSE1, "leftclick");
	input.bind(Input.KEY.MOUSE2, "rightclick");
	input.bind(Input.KEY.MWHEEL_UP, "zoomIn");
	input.bind(Input.KEY.MWHEEL_DOWN, "zoomOut");
	input.initKeyboard();
	input.bind(Input.KEY.N, "nextAction");

	const timeMachine = new Floom.TimeMachine();
	let pauseAfterUpdateCycle = false;
	let breakCallback = () => { pauseAfterUpdateCycle = true };

	// create fluid System
	var fluidSystem = new Floom.System({}, breakCallback);

	// create and customize Materials
	var mat0 = fluidSystem.createNewMaterial()
		.setParticleMass(0.5);
	var mat1 = fluidSystem.createNewMaterial()
		.setParticleMass(1.0);
	var mat2 = fluidSystem.createNewMaterial()
		.setParticleMass(2.0);
	var mat3 = fluidSystem.createNewMaterial()
		.setParticleMass(4.0);
	var mat4 = fluidSystem.createNewMaterial()
		.setParticleMass(8.0)
		.setIsElastic(true);

	// create Particles of these Materials
	new Floom.Group(fluidSystem, -45,  5,  0, 25,  0.1, 0, mat0);
	new Floom.Group(fluidSystem,   5,  5, 50, 25, -0.1, 0, mat1);
	new Floom.Group(fluidSystem, -45, 30,  0, 50,  0.1, 0, mat2);
	new Floom.Group(fluidSystem,   5, 30, 50, 50, -0.1, 0, mat3);
	new Floom.Group(fluidSystem, -10, 55, 10, 75,    0, 0, mat4);


	window.inspectedParticleIndex = 0;
	window.drawTrace = false;

    // example to spawn individual particles
	// var p = new Floom.Particle(-45.00001,  55.000001,  0.100001, 0.000001, mat3);
    // fluidSystem.addParticle(p);

	// create obstacles
	// fluidSystem.doObstacles = true;
	fluidSystem.obstacles.push(
		new Floom.Obstacle(-20, 20, 5),
		new Floom.Obstacle( 20,  0, 9)
	);

	// configure grid rendering
	// fluidSystem.drawGrid = true;

	// configure spring calculation and rendering
    fluidSystem.doSprings = true;
    fluidSystem.drawSprings = false;



	// choose, which subset of the world should be displayed
	var viewport = new Viewport(
		canvas,
		Vector2.Zero.copy(),
		new Vector2(136.6, 76.8)
	);
	viewport.jumpToPoint(new Vector2(0, 35));
	initTools(input, viewport, fluidSystem);


	// insert first fluidSystem into timeMachine
	timeMachine.fluidSystems.push(fluidSystem.toJSON());
	// initialize specific datGui for the fluid System
	datGuiForSystem(fluidSystem, timeMachine);

	// update routine
	var lastPoint = Vector2.Zero.copy();
	function update(timePassed) {
		let shouldUpdate = timeMachine.renderIndex === timeMachine.simulateIndex;
		if (!shouldUpdate) {
			// replay
			fluidSystem = Floom.System.fromJSON(timeMachine.fluidSystems[timeMachine.renderIndex], breakCallback);
		}
		// entities/map
		if(graph)
			graph.beginClock('update');

		if (!timeMachine.paused && shouldUpdate){
			input.update();
			// viewport manipulation
			if(input.pressed("rightclick")) {
				lastPoint.set(input.mouse);
			}
			if(input.state("rightclick")) {
				viewport.translateBy(lastPoint.sub(input.mouse));
				lastPoint.set(input.mouse);
			}
			if(input.state("zoomIn")) {
				viewport.zoomIn();
			}
			if(input.state("zoomOut")) {
				viewport.zoomOut();
			}

			fluidSystem.update(timePassed);
		}

		if(graph)
			graph.endClock('update');
		// rendering
		if(graph)
			graph.beginClock('draw');
		renderer.clear();
		renderer.withViewport(viewport, function() {
			renderer.drawSystem(timeMachine);
		});
		drawTool(renderer, input);
		if(graph)
			graph.endClock('draw');

		// interaction
		input.clearPressed();
		if (!timeMachine.paused) {
			if (shouldUpdate) {
				timeMachine.fluidSystems.push(fluidSystem.toJSON());
				if(timeMachine.fluidSystems.length > MAX_NUMBER_OF_FLUID_SYSTEMS) {
					// throw away one fluidSystem
					timeMachine.fluidSystems[timeMachine.simulateIndex - MAX_NUMBER_OF_FLUID_SYSTEMS] = false;
				}
				timeMachine.simulateIndex++
			}
			timeMachine.renderIndex++;
		}
		if (pauseAfterUpdateCycle) {
			timeMachine.pause();
			pauseAfterUpdateCycle = false;
		}
	}

	const debug = new Debug.Menu();
	debug.addPanel({
		type: Debug.Performance,
		name: 'graph',
		label: 'Performance'
	}, timeMachine);
	debug.addPanel({
		type: Debug.Particle,
		name: 'particle',
		label: 'Particle'
	}, timeMachine);
	debug.addPanel({
		type: Debug.Plot,
		name: 'plot',
		label: 'Plot Determinant'
	}, timeMachine);

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
			debug.afterRun(renderer, timeMachine);

		requestAnimationFrame(animate);
	}

	animate();
