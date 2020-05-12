import Vector2 from "./../external/vector2.js";

export default class Viewport {

	constructor(canvas, middlePoint, extent) {
		this.canvas = canvas;
		this.point = middlePoint;
		this.extent = extent;

		// scaling
		this.scaleX = d3.scale.linear();
		this.scaleY = d3.scale.linear();

		this.resetScaleRange();
		this.updateScales();
	}

	screenToWorldCoordinates(vector) {
		return new Vector2(
			this.scaleX.invert(vector.x),
			this.scaleY.invert(vector.y)
		);
	}

	worldToScreenCoordinates(vector) {
		return new Vector2(
			this.scaleX(vector.x),
			this.scaleY(vector.y)
		);
	}

	jumpToPoint(vector) {
		this.point.set(vector);
		this.updateScales();
	}

	translateBy(vector) {
		this.point.addSelf(this.extent.divVector(
			new Vector2(this.canvas.width, -this.canvas.height)
		).mulVector(vector));
		this.updateScales();
	}

	zoomIn() {
		this.extent.mulFloatSelf(1.1);
		this.updateScales();
	}

	zoomOut() {
		this.extent.mulFloatSelf(0.9);
		this.updateScales();
	}

	updateScales() {
		const middlePoint = this.point;
		const extend = this.extent;

		this.scaleX.domain([
			middlePoint.x - extend.x / 2,
			middlePoint.x + extend.x / 2
		]);
		this.scaleY.domain([
			middlePoint.y - extend.y / 2,
			middlePoint.y + extend.y / 2
		]);
	}

	// Ranges are given in screen coordinates.
	resetScaleRange() {
		this.scaleX.range([0, this.canvas.width]);
		this.scaleY.range([this.canvas.height, 0]);
	}
}

