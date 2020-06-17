import Vector2 from "./../external/vector2.js";

class Configuration {

	constructor(renderer) {
		this.renderer = renderer;
	}

	/*
	 * Configure Drawing
	 */
	setFillStyle(color = "white") {
		this.color = color;
		this.renderer.context.fillStyle = this.color;
	}

	setStrokeStyle(color = "white") {
		this.color = color;
		this.renderer.context.strokeStyle = this.color;
	}

	setGlobalAlpha(opacity = 1.0) {
		this.opacity = opacity;
		this.renderer.context.globalAlpha = this.opacity;
	}

	setLineWidth(lineWidth = 1.0) {
		this.lineWidth = this.renderer.singlePixelExtent.x * (lineWidth);
		this.renderer.context.lineWidth = this.lineWidth;
	}

	setTextBaseline(baseline = "bottom") {
		this.baseline = baseline;
		this.renderer.context.textBaseline = this.baseline;
	}

}

export default class Renderer {

	/*
	 * Init
	 */
	constructor(canvas) {
		this.canvas = canvas;
		this.context = canvas.getContext('2d');

		this.drawCount = 0;

		this.traceCount = 30;

		// set default pixel extent to allow setOptions
		this.singlePixelExtent = Vector2.One.copy();

		this.configuration = new Configuration(this);
	}

	pushViewport(viewport) {
		// create shortcuts
		const context = this.context;

		// save current context for later restoration
		context.save();

		// create transformation matrix (note the inverse order):
		// move the coordinate system's origin to the middle of the canvas
		this.context.translate(
			this.canvas.width / 2,
			this.canvas.height / 2
		);
		// rescale 1 by 1 box to canvas size
		this.context.scale(
			this.canvas.width,
			this.canvas.height
		);
		// invert y-axis
		this.context.scale(1, -1);
		// scale the current view into a 1 by 1 box
		this.context.scale(
			1 / viewport.extent.x,
			1 / viewport.extent.y
		);
		// move current world camera point to the coordinate system's origin
		this.context.translate(
			-viewport.point.x,
			-viewport.point.y
		);

		this.singlePixelExtent = viewport.screenToWorldCoordinates(Vector2.One.copy()).sub(
			viewport.screenToWorldCoordinates(Vector2.Zero.copy())
		);
		this.singlePixelExtentLength = this.singlePixelExtent.length();
	}

	popViewport() {
		// restore saved context state to revert adding layer
		this.context.restore();
		this.singlePixelExtent.set(Vector2.One.copy());
	}

	withViewport(viewport, func, ctx) {
		this.pushViewport(viewport);
		func.call(ctx);
		this.popViewport();
	}

	/*
	 * Drawing
	 */
	clear() {
		this.drawCount = 0;

		this.context.clearRect(
			0,
			0,
			this.canvas.width,
			this.canvas.height
		);
	}

	/*
	 * Graphical primitives
	 */
	drawRectangle(vec, size, color, opacity){
		this.drawCount++;

		this.configuration.setFillStyle(color);
		this.configuration.setGlobalAlpha(opacity);

		size = size || 2;
		this.context.fillRect(
			vec.x - this.singlePixelExtent.x * size / 2,
			vec.y - this.singlePixelExtent.y * size / 2,
			this.singlePixelExtent.x * size,
			this.singlePixelExtent.y * size
		);
	}

	drawCircle(vec, radius, color, opacity){
		this.drawCount++;

		this.configuration.setGlobalAlpha(opacity);

		this.context.beginPath();
		this.context.arc(
			vec.x,
			vec.y,
			this.singlePixelExtent.x * radius,
			0,
			2 * Math.PI,
			false
		);
		this.context.closePath();
		this.context.lineWidth = 0.2;
		this.context.strokeStyle = color;
		this.context.stroke();
	}

	drawDot(vec, size, color, opacity){
		this.drawCount++;

		this.configuration.setFillStyle(color);
		this.configuration.setGlobalAlpha(opacity);

		size = size || 2;
		this.context.beginPath();
		this.context.arc(
			vec.x,
			vec.y,
			this.singlePixelExtent.x * size, // radius
			0,
			2 * Math.PI,
			false
		);
		this.context.closePath();
		this.context.fill();
	}

	drawLine(from, to, color, opacity, lineWidth){
		this.drawCount++;

		this.configuration.setStrokeStyle(color);
		this.configuration.setGlobalAlpha(opacity);
		this.configuration.setLineWidth(lineWidth);

		// draw a line
		this.context.beginPath();

		this.context.moveTo(from.x, from.y);
		this.context.lineTo(to.x, to.y);

		this.context.stroke();

		this.context.closePath();
	}

	drawPolyline(vList, color, opacity, lineWidth){
		this.drawCount++;

		this.configuration.setStrokeStyle(color);
		this.configuration.setGlobalAlpha(opacity);
		this.configuration.setLineWidth(lineWidth);

		// draw a polyline
		this.context.beginPath();

		this.context.moveTo(vList[0].x, vList[0].y);
		vList.forEach(v => this.context.lineTo(v.x, v.y));

		this.context.stroke();

		this.context.closePath();
	}

	drawPlus(point, size, color, opacity, lineWidth){
		this.drawCount++;

		this.configuration.setStrokeStyle(color);
		this.configuration.setGlobalAlpha(opacity);
		this.configuration.setLineWidth(lineWidth);

		size = size || 3;

		this.context.beginPath();

		// draw a polyline
		this.context.moveTo(
			point.x - this.singlePixelExtent.x * size,
			point.y
		);
		this.context.lineTo(
			point.x + this.singlePixelExtent.x * size,
			point.y
		);
		this.context.moveTo(
			point.x,
			point.y - this.singlePixelExtent.y * size
		);
		this.context.lineTo(
			point.x,
			point.y + this.singlePixelExtent.y * size
		);

		this.context.stroke();
		this.context.closePath();
	}

	drawTextWorld(text, worldPoint, color, opacity, baseline){
		this.drawCount++;

		this.configuration.setFillStyle(color);
		this.configuration.setStrokeStyle(color);
		this.configuration.setGlobalAlpha(opacity);
		this.configuration.setTextBaseline(baseline);

		this.context.save();

		this.context.translate(
			worldPoint.x,
			worldPoint.y
		);
		this.context.scale(
			this.singlePixelExtent.x,
			this.singlePixelExtent.y
		);
		this.context.fillText(
			text,
			0,
			0
		);
		this.context.restore();
	}

	drawText(text, screenPoint, color, opacity, baseline){
		this.drawCount++;

		this.configuration.setFillStyle(color);
		this.configuration.setStrokeStyle(color);
		this.configuration.setGlobalAlpha(opacity);
		this.configuration.setTextBaseline(baseline);

		this.context.fillText(
			text,
			screenPoint.x,
			screenPoint.y
		);
	}

	/*
	 * Draw fluid system
	 */
	drawSystem(timeMachine) {
		let renderedSystem = timeMachine.getRenderedFluidSystem();
		// draw grid nodes
		if(renderedSystem.drawGrid) {
			this.drawGrid(renderedSystem.grid);
		}

		// draw obstacles
		if(renderedSystem.doObstacles) {
			renderedSystem.obstacles.forEach(obstacle => this.drawObstacle(obstacle));
		}

		// draw all particles in the system
		renderedSystem.particles.forEach(p => this.drawParticle(p));

		// highlight inspected particle
		let inspectedParticle = renderedSystem.particles[window.inspectedParticleIndex];
		this.drawCircle(inspectedParticle.position, 5, "white", 1.0);

		// draw trace for inspected particle
		if(window.drawTrace){
			const lowerIndex = (timeMachine.renderIndex - this.traceCount) < 0 ? 0 : timeMachine.renderIndex - this.traceCount;
			for (let traceIndex = lowerIndex; traceIndex < timeMachine.renderIndex; traceIndex++){
				const traceSystem = timeMachine.fluidSystems[traceIndex];
				if (!traceSystem) {
					break
				}
				const traceParticle = traceSystem.particles[window.inspectedParticleIndex];
				this.drawCircle(traceParticle.position, 5, "white", 0.2);
			}
		}

		// draw all springs in the system
		if(renderedSystem.drawSprings) {
			renderedSystem.springs.forEach(s => this.drawSpring(s));
		}
	}

	drawGrid(grid) {
		// draw boundaries
		this.drawAABB(grid.boundaries);

		// draw grid nodes
		const numberOfNodes = grid.arr.length;
		for(var nIndex = 0; nIndex < numberOfNodes; nIndex++) {
			var n = grid.arr[nIndex];
			var x = Math.floor(nIndex / grid.gsizeY);
			var y = nIndex - (x * grid.gsizeY);

			if (n) {
				var position = new Vector2(x,y);
				position.addSelf(grid.boundaries.Min);
				this.drawDot(position, 1, "red", 0.5);
			}
		}
	}

	drawAABB(aabb) {
		this.drawPolyline([
				aabb.Min,
				new Vector2(aabb.Min.x, aabb.Max.y),
				aabb.Max,
				new Vector2(aabb.Max.x, aabb.Min.y),
				aabb.Min
			],
			"red",
			1.0,
			1
		);
	}

	drawObstacle(obstacle) {
		this.drawDot(obstacle.position, obstacle.radius, "pink", 0.8);
	}

	drawParticle(particle) {
		// ensure that a particle is visible even at low velocity
		const dirLength = Math.max(this.singlePixelExtentLength, particle.gridVelocity.length());

		this.drawLine(
			particle.position,
			particle.position.add(particle.gridVelocity.normalizedCopy().mulFloat(dirLength)),
			particle.material.colorScale(particle.velocity.lengthSquared()),
			1.0,
			1
		);
	}

	drawSpring(spring) {
		this.drawLine(
			spring.particle1.position,
			spring.particle2.position,
			Renderer.springColorScale(spring.restLength - spring.currentDistance),
			1.0,
			1
		);
	}

}

Renderer.springColorScale = d3.scale.linear()
	.domain([-3,3])
	.range(["#ff0000", "#0000ff"]);
