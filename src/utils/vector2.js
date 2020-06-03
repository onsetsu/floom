function Vector2(x, y) {
  if (typeof y === 'undefined') { throw Error('initialize Vector2 with less than 2 parameter'); }

  this.x = x;
  this.y = y;
}

Vector2.Zero = new Vector2(0, 0);
Vector2.One = new Vector2(1, 1);
Vector2.XAxis = new Vector2(1, 0);
Vector2.YAxis = new Vector2(0, 1);
Vector2.fromAngle = function fromAngle(theta) {
  return new Vector2(Math.cos(theta), Math.sin(theta));
};

Vector2.prototype.copy = function copy() {
  return new Vector2(this.x, this.y);
};

Vector2.prototype.set = function set(vector) {
  this.x = vector.x;
  this.y = vector.y;
  return this;
};

Vector2.prototype.setXY = function setXY(x, y) {
  this.x = x;
  this.y = y;
  return this;
};

Vector2.prototype.clear = function clear() {
  this.x = 0;
  this.y = 0;
};

Vector2.prototype.floor = function floor() {
  return new Vector2(
    Math.floor(this.x),
    Math.floor(this.y),
  );
};

Vector2.prototype.floorSelf = function floorSelf() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
};

Vector2.prototype.frac = function frac() {
  return new Vector2(
    this.x - Math.floor(this.x),
    this.y - Math.floor(this.y),
  );
};

Vector2.prototype.fracSelf = function fracSelf() {
  this.x -= Math.floor(this.x);
  this.y -= Math.floor(this.y);
};

Vector2.prototype.equals = function equals(vector) {
  return this.x === vector.x && this.y === vector.y;
};

Vector2.prototype.notEquals = function notEquals(vector) {
  return this.x !== vector.x || this.y !== vector.y;
};

Vector2.prototype.add = function add(vector) {
  return new Vector2(
    this.x + vector.x,
    this.y + vector.y,
  );
};
Vector2.prototype.addSelf = function addSelf(vector) {
  this.x += vector.x;
  this.y += vector.y;
  return this;
};

Vector2.prototype.weightedAddSelf = function weightedAddSelf(vector, scalar) {
  this.x += vector.x * scalar;
  this.y += vector.y * scalar;
  return this;
};

Vector2.prototype.sub = function sub(vector) {
  return new Vector2(
    this.x - vector.x,
    this.y - vector.y,
  );
};
Vector2.prototype.subSelf = function subSelf(vector) {
  this.x -= vector.x;
  this.y -= vector.y;
  return this;
};

// scaling!
Vector2.prototype.mulFloat = function mulFloat(right) {
  return new Vector2(
    this.x * right,
    this.y * right,
  );
};
Vector2.prototype.mulFloatSelf = function mulFloatSelf(right) {
  this.x *= right;
  this.y *= right;
  return this;
};

Vector2.prototype.divFloat = function divFloat(right) {
  const inv = 1.0 / right;
  return new Vector2(
    this.x * inv,
    this.y * inv,
  );
};
Vector2.prototype.divFloatSelf = function divFloatSelf(right) {
  this.x /= right;
  this.y /= right;
  return this;
};

// per-element multiplication
Vector2.prototype.mulVector = function mulVector(right) {
  return new Vector2(
    this.x * right.x,
    this.y * right.y,
  );
};
Vector2.prototype.mulVectorSelf = function mulVectorSelf(right) {
  this.x *= right.x;
  this.y *= right.y;
  return this;
};

Vector2.prototype.divVector = function divVector(right) {
  return new Vector2(
    this.x / right.x,
    this.y / right.y,
  );
};
Vector2.prototype.divVectorSelf = function divVectorSelf(right) {
  this.x /= right.x;
  this.y /= right.y;
  return this;
};

Vector2.prototype.positive = function positive() { return this; };
Vector2.prototype.negative = function negative() {
  return new Vector2(-this.x, -this.y);
};

// helpers

Vector2.prototype.length = function length() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};
Vector2.prototype.lengthSquared = function lengthSquared() {
  return this.x * this.x + this.y * this.y;
};
Vector2.prototype.distance = function distance(right) {
  const x = this.x - right.x;
  const y = this.y - right.y;
  return Math.sqrt(x * x + y * y);
};
Vector2.prototype.distanceSquared = function distanceSquared(right) {
  const x = this.x - right.x;
  const y = this.y - right.y;
  return x * x + y * y;
};
Vector2.prototype.normalize = function normalize() {
  const length = Math.sqrt(this.x * this.x + this.y * this.y);
  if (length > 1e-08) {
    const invL = 1.0 / length;
    this.x *= invL;
    this.y *= invL;
  }
  return length;
};

Vector2.prototype.normalizedCopy = function normalizedCopy() {
  const ret = this.copy();
  ret.normalize();
  return ret;
};

Vector2.prototype.dotProduct = function dotProduct(vector) {
  return this.x * vector.x + this.y * vector.y;
};

Vector2.prototype.getPerpendicular = function getPerpendicular() {
  return this.getRightPerpendicular();
};

Vector2.prototype.getLeftPerpendicular = function getLeftPerpendicular() {
  const x = this.y;
  const y = -1 * this.x;
  return new Vector2(x, y);
};

Vector2.prototype.getRightPerpendicular = function getRightPerpendicular() {
  const x = -1 * this.y;
  const y = this.x;
  return new Vector2(x, y);
};

Vector2.prototype.makePerpendicular = function makePerpendicular() {
  const tempX = this.x;
  this.x = -this.y;
  this.y = tempX;
};

Vector2.prototype.crossProduct = function crossProduct(vector) {
  return this.x * vector.y + this.y * vector.x;
};

Vector2.prototype.lerp = function lerp(to, i) {
  return this.add(to.sub(this).mulFloat(i));
};

Vector2.prototype.lerpSelf = function lerpSelf(to, i) {
  return this.weightedAddSelf(to.sub(this), i);
};

Vector2.prototype.slerp = function slerp(to, i) {
  return this.add(to.sub(this).mulFloat(
    0.5 + (Math.sin((3.141592654 * i) - 1.570796) * 0.5),
  ));
};

Vector2.prototype.rotate = function rotate(theta) {
  const co = Math.cos(theta);
  const si = Math.sin(theta);
  return new Vector2(
    co * this.x - si * this.y,
    si * this.x + co * this.y,
  );
};

Vector2.prototype.rotateSelf = function rotateSelf(theta) {
  const co = Math.cos(theta);
  const si = Math.sin(theta);
  const xx = co * this.x - si * this.y;
  this.y = si * this.x + co * this.y;
  this.x = xx;
};

// get (signed and directional) angle between this and the given vector in degrees
Vector2.prototype.getDirectedAngle = function getDirectedAngle(point) {
  return (Math.atan2(this.crossProduct(point), this.dotProduct(point)) * 180) / Math.PI;
};

Vector2.prototype.reflectOnNormal = function reflectOnNormal(normal) {
  // v' = 2 * (v . n) * n - v
  return this.sub(
    normal
      .mulFloat(this.dotProduct(normal))
      .mulFloat(2),
  );
};

Vector2.prototype.toCartesian = function toCartesian() {
  return new Vector2(
    this.x * Math.cos(this.y),
    this.x * Math.sin(this.y),
  );
};

Vector2.prototype.toPolar = function toPolar() {
  return new Vector2(
    Math.sqrt(this.x * this.x + this.y * this.y),
    Math.atan2(this.y, this.x),
  );
};

Vector2.prototype.signum = function signum() {
  return new Vector2(
    this.x.sign(),
    this.y.sign(),
  );
};

Vector2.prototype.absolute = function absolute() {
  return new Vector2(
    Math.abs(this.x),
    Math.abs(this.y),
  );
};


Vector2.prototype.toJson = function toJson() {
  return {
    x: this.x,
    y: this.y,
  };
};

Vector2.fromJson = function fromJson(vectorJson) {
  return new Vector2(vectorJson.x, vectorJson.y);
};

Vector2.fromMatrix = function fromMatrix(matrix) {
  try {
    return new Vector2(matrix.data[0][0], matrix.data[0][0]);
  } catch (e) {
    throw new Error('wrong matrix format');
  }
};

export default Vector2;
