define(["floom/particle", "external/vector2"], function(Particle, Vector2) {
	var Tool = function(system) {
		this.system = system;
		this.interactions = ["drag", "attract", "repel", "spawn", "consume"];
		this.currentInteraction = 0;
	};

	/*
	 * UPDATE
	 */
	Tool.prototype.update = function() {
		this.interactionLastPoint = this.interactionCurrentPoint || env.viewport.screenToWorldCoordinates(env.input.mouse);
		this.interactionCurrentPoint = env.viewport.screenToWorldCoordinates(env.input.mouse);

		// use current interaction
		if(env.input.state("leftclick")) {
			this.handleInteraction();
		} else {
			this.interactionLastPoint = undefined;
			this.interactionCurrentPoint = undefined;
		};

		// change current interaction
		if(env.input.pressed("nextAction")) {
			this.currentInteraction += 1;
			this.currentInteraction %= this.interactions.length;
		};
	};

	Tool.prototype.handleInteraction = function() {
		this[this.interactions[this.currentInteraction]]();
	};

	/*
	 * interactions
	 */
	Tool.prototype.drag = function() {
		_.each(this.system.particles, function(p) {
			if(p.position.sub(this.interactionCurrentPoint).lengthSquared() < 50)
				p.velocity.lerpSelf(this.interactionCurrentPoint.sub(this.interactionLastPoint), 0.2);
		}, this);
	};

	Tool.prototype.attract = function() {
		_.each(this.system.particles, function(p) {
			var vectorToMouse = this.interactionCurrentPoint.sub(p.position);
			var distanceToMouse = vectorToMouse.lengthSquared();
			if(distanceToMouse < 50)
				p.velocity.weightedAddSelf(vectorToMouse, (1/distanceToMouse) * (Math.log(1+distanceToMouse)));
		}, this);
	};

	Tool.prototype.repel = function() {
		_.each(this.system.particles, function(p) {
			var vectorToMouse = this.interactionCurrentPoint.sub(p.position);
			var distanceToMouse = vectorToMouse.lengthSquared();
			if(distanceToMouse < 50)
				p.velocity.weightedAddSelf(vectorToMouse, 0.1 * Math.log(1/(1+distanceToMouse)));
		}, this);
	};

	Tool.prototype.spawn = function() {
		function getRandomPointInCircleUniformly() {
			var TWO_PI = (3.14159265 * 2.0);
			var t = TWO_PI*Math.random();
			var u = Math.random()+Math.random();
			var r = u>1 ? 2-u : u;
			return new Vector2(r*Math.cos(t), r*Math.sin(t));
		}

		for(var i = 0; i < 10; i++) {
			var noise = getRandomPointInCircleUniformly().mulFloat(5);
			this.system.particles.push(
				new Particle(
					this.interactionCurrentPoint.x + noise.x,
					this.interactionCurrentPoint.y + noise.y,
					0,
					0,
					this.system.materials[0]
				)
			);
		}
	};

	Tool.prototype.consume = function() {
		for(var i = 0; i < this.system.getNumberOfParticles();) {
			if(this.system.particles[i].position.sub(this.interactionCurrentPoint).lengthSquared() < 4)
				this.system.particles.splice(i, 1);
			else
				i++;
		}
	};

	/*
	 * DRAWING
	 */
	Tool.prototype.draw = function(renderer) {
		var color = "pink";

		// draw mouse cursor
		renderer.drawDot(env.input.mouse, 10, color, 0.5);
		
		// draw current interaction name
		renderer.drawText(
			this.interactions[this.currentInteraction],
			new Vector2(5, 5).add(env.input.mouse),
			color,
			1.0,
			"bottom"
		);
	};
	
	return Tool;
});
