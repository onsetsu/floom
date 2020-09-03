export default class Vector2 {

	constructor(x, y) {
		if (typeof y === "undefined")
			throw Error("initialize Vector2 with less than 2 parameter");

		this.x = x;
		this.y = y;
	}

	static fromAngle(theta) {
		return new Vector2(Math.cos(theta), Math.sin(theta));
	}

	copy() {
		return new Vector2(this.x, this.y);
	}

	set(vector) {
		this.x = vector.x;
		this.y = vector.y;
		return this;
	}

	setXY(x, y) {
		this.x = x;
		this.y = y;
		return this;
	}

	clear() {
		this.x = 0;
		this.y = 0;
	}

	floor() {
		return new Vector2(
			Math.floor(this.x),
			Math.floor(this.y)
		);
	}

	floorSelf() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
	}

	frac() {
		return new Vector2(
			this.x - Math.floor(this.x),
			this.y - Math.floor(this.y)
		);
	}

	fracSelf() {
		this.x -= Math.floor(this.x);
		this.y -= Math.floor(this.y);
	}

	equals(vector) {
		return this.x === vector.x && this.y === vector.y;
	}

	notEquals(vector) {
		return this.x !== vector.x || this.y !== vector.y;
	}

	add(vector) {
		return new Vector2(
			this.x + vector.x,
			this.y + vector.y
		);
	}
	addSelf(vector) {
		this.x += vector.x;
		this.y += vector.y;
		return this;
	}
		
	weightedAddSelf(vector, scalar) {
		this.x += vector.x * scalar;
		this.y += vector.y * scalar;
		return this;
	}
		
	sub(vector) {
		return new Vector2(
			this.x - vector.x,
			this.y - vector.y
		);
	}
	subSelf(vector) {
		this.x -= vector.x;
		this.y -= vector.y;
		return this;
	}
		
	// scaling!
	mulFloat(scalar) {
		return new Vector2(
			this.x * scalar,
			this.y * scalar
		);
	}
	mulFloatSelf(scalar) {
		this.x *= scalar;
		this.y *= scalar;
		return this;
	}
		
	divFloat(scalar) {
		const inv = 1.0 / scalar;
		return new Vector2(
			this.x * inv,
			this.y * inv
		);
	}
	divFloatSelf(scalar) {
		this.x /= scalar;
		this.y /= scalar;
		return this;
	}

	// per-element multiplication
	mulVector(right) {
		return new Vector2(
			this.x * right.x,
			this.y * right.y
		);
	}
	mulVectorSelf(right) {
		this.x *= right.x;
		this.y *= right.y;
		return this;
	}

	divVector(right) {
		return new Vector2(
			this.x / right.x,
			this.y / right.y
		);
	}
	divVectorSelf(right) {
		this.x /= right.x;
		this.y /= right.y;
		return this;
	}

	positive() { return this; }
	negative() {
		return new Vector2(-this.x, -this.y);
	}

	// helpers

	length() {
		return Math.sqrt(this.x*this.x + this.y*this.y);
	}
	lengthSquared() {
		return this.x*this.x + this.y*this.y;
	}
	distance(right) {
		const x = this.x - right.x;
		const y = this.y - right.y;
		return Math.sqrt(x*x + y*y);
	}
	distanceSquared(right) {
		const x = this.x - right.x;
		const y = this.y - right.y;
		return x*x + y*y;
	}
	normalize() {
		const length = Math.sqrt(this.x * this.x + this.y * this.y);
		if(length > 1e-08) {
			var invL = 1.0 / length;
			this.x *= invL;
			this.y *= invL;
		}
		return length;
	}

	normalizedCopy() {
		const ret = this.copy();
		ret.normalize();
		return ret;
	}

	dotProduct(vector) {
		return this.x*vector.x + this.y*vector.y;
	}

	getPerpendicular() {
		return this.getRightPerpendicular();
	}

	getLeftPerpendicular() {
		return new Vector2(this.y, -1 * this.x);
	}

	getRightPerpendicular() {
		return new Vector2(-1 * this.y, this.x);
	}

	makePerpendicular() {
		const temp = this.x;
		this.x = -this.y;
		this.y = temp;
	}

	crossProduct(vector) {
		return this.x * vector.y + this.y * vector.x;
	}

	lerp(to, i) {
		return this.add(to.sub(this).mulFloat(i));
	}

	lerpSelf(to, i) {
		return this.weightedAddSelf(to.sub(this), i);
	}

	slerp(to, i) {
		return this.add(to.sub(this).mulFloat(
			0.5 + (Math.sin((3.141592654 * i) - 1.570796) * 0.5)));
	}

	rotate(theta) {
		const co = Math.cos(theta);
		const si = Math.sin(theta);
		return new Vector2(
			co * this.x - si * this.y,
			si * this.x + co * this.y
		);
	}

	rotateSelf(theta) {
		const co = Math.cos(theta);
		const si = Math.sin(theta);
		const temp = co * this.x - si * this.y;
		this.y = si * this.x + co * this.y;
		this.x = temp;
	}
	
	// get (signed and directional) angle between this and the given vector in degrees 
	getDirectedAngle(point) {
		return Math.atan2(this.crossProduct(point), this.dotProduct(point)) * 180 / Math.PI;
	}

	reflectOnNormal(normal) {
		//v' = 2 * (v . n) * n - v
		return this.sub(
			normal
				.mulFloat(this.dotProduct(normal))
				.mulFloat(2)
		);
		
	}

	toCartesian() {
		return new Vector2(
			this.x * Math.cos(this.y),
			this.x * Math.sin(this.y)
		);
	}

	toPolar() {
		return new Vector2(
			Math.sqrt(this.x * this.x + this.y * this.y),
			Math.atan2(this.y, this.x)
		);
	}

	signum() {
		return new Vector2(
			this.x.sign(),
			this.y.sign()
		);
	}

	absolute() {
		return new Vector2(
			Math.abs(this.x),
			Math.abs(this.y)
		);
	}


	toJson() {
		return {
			"x": this.x,
			"y": this.y
		};
	}

	static fromJson(vectorJson) {
		return new Vector2(vectorJson.x, vectorJson.y);
	}

}

Vector2.Zero = new Vector2(0, 0);
Vector2.One = new Vector2(1, 1);
Vector2.XAxis = new Vector2(1, 0);
Vector2.YAxis = new Vector2(0, 1);
