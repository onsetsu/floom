import Vector2 from '@/utils/vector2';

const INVALID = true;
const VALID = false;

const AABB = function AABB(minPt, maxPt) {
  this.Min = minPt || Vector2.Zero.copy();
  this.Max = maxPt || Vector2.Zero.copy();
  this.Validity = typeof minPt === 'undefined' ? INVALID : VALID;
};

AABB.prototype.clear = function clear() {
  this.Min.set(Vector2.Zero);
  this.Max.set(Vector2.Zero);
  this.Validity = INVALID;
};

AABB.prototype.expandToInclude = function expandToInclude(pt) {
  if (this.Validity === VALID) {
    if (pt.x < this.Min.x) {
      this.Min.x = pt.x;
    } else if (pt.x > this.Max.x) {
      this.Max.x = pt.x;
    }

    if (pt.y < this.Min.y) {
      this.Min.y = pt.y;
    } else if (pt.y > this.Max.y) {
      this.Max.y = pt.y;
    }
  } else {
    this.Min.set(pt);
    this.Max.set(pt);
    this.Validity = VALID;
  }
};

AABB.prototype.contains = function contains(pt) {
  if (this.Validity === INVALID) { return false; }

  return (pt.x >= this.Min.x)
    && (pt.x <= this.Max.x)
    && (pt.y >= this.Min.y)
    && (pt.y <= this.Max.y);
};

AABB.prototype.containsAABB = function containsAABB(other) {
  if (this.Validity === INVALID) { return false; }
  if (other.Validity === INVALID) { return false; }

  return (other.Min.x >= this.Min.x)
      && (other.Max.x <= this.Max.x)
      && (other.Min.y >= this.Min.y)
      && (other.Max.y <= this.Max.y);
};

AABB.prototype.intersects = function intersects(box) {
  const overlapX = ((this.Min.x <= box.Max.x) && (this.Max.x >= box.Min.x));
  const overlapY = ((this.Min.y <= box.Max.y) && (this.Max.y >= box.Min.y));

  return (overlapX && overlapY);
};

AABB.prototype.getSize = function getSize() { return this.Max.sub(this.Min); };

AABB.prototype.getMiddle = function getMiddle() {
  return this.Min.add(this.Max.sub(this.Min).mulFloat(0.5));
};
AABB.prototype.getTopLeft = function getTopLeft() {
  return this.Min;
};
AABB.prototype.getTopRight = function getTopRight() {
  return new Vector2(this.Max.x, this.Min.y);
};
AABB.prototype.getBottomLeft = function getBottomLeft() {
  return new Vector2(this.Min.x, this.Max.y);
};
AABB.prototype.getBottomRight = function getBottomRight() {
  return this.Max;
};
AABB.prototype.subdivide = function subdivide() {
  const min = this.Min;
  const middle = this.getMiddle();
  const max = this.Max;

  return [
    new AABB(min, middle),
    new AABB(new Vector2(middle.x, min.y), new Vector2(max.x, middle.y)),
    new AABB(new Vector2(min.x, middle.y), new Vector2(middle.x, max.y)),
    new AABB(middle, max),
  ];
};

export default AABB;
