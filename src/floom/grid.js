import forEach from 'lodash.foreach';

import Node from '@/floom/node';
import Vector2 from '@/utils/vector2';
import AABB from '@/utils/aabb';

function Grid(settings = {}) {
  this.arr = settings.arr ? settings.arr : [];
  this.activeCount = settings.activeCount ? settings.activeCount : 0;
  this.gsizeY = settings.gsizeY ? settings.gsizeY : 0;
  this.boundaries = settings.boundaries ? new AABB(
    new Vector2(settings.boundaries.Min.x, settings.boundaries.Min.y),
    new Vector2(settings.boundaries.Max.x, settings.boundaries.Max.y),
  ) : new AABB();
  this.cellSize = settings.cellSize ? settings.cellSize : Vector2.One.copy();
}

Grid.prototype.update = function update(system) {
  this.recalculateBoundaries(system);
  this.clear();
  this.recalculateSizeY();
};

// TODO: reuse old grid
Grid.prototype.clear = function clear() {
  this.arr.length = 0;
  this.activeCount = 0;
};

Grid.prototype.iterate = function iterate(fn, context) {
  const numberOfNodes = this.arr.length;
  for (let nIndex = 0; nIndex < numberOfNodes; nIndex += 1) {
    const n = this.arr[nIndex];
    if (n) { fn.call(context, n); }
  }
};

Grid.prototype.getAt = function getAt(cellX, cellY) {
  return this.arr[cellX * this.gsizeY + cellY];
};

Grid.prototype.getOrCreateAt = function getOrCreateAt(cellX, cellY) {
  const cell = cellX * this.gsizeY + cellY;
  let node = this.arr[cell];

  if (node === undefined) {
    node = new Node();
    this.arr[cell] = node;
    this.activeCount += 1;
  }

  return node;
};

Grid.prototype.recalculateBoundaries = function recalculateBoundaries(system) {
  // expand boundaries to include all particles
  this.boundaries.clear();
  forEach(system.particles, (p) => {
    this.boundaries.expandToInclude(p.position);
  });

  // expand boundaries a bit further
  this.boundaries.Min.x = Math.floor(this.boundaries.Min.x - 1);
  this.boundaries.Min.y = Math.floor(this.boundaries.Min.y - 1);
  this.boundaries.Max.x = Math.floor(this.boundaries.Max.x + 3);
  this.boundaries.Max.y = Math.floor(this.boundaries.Max.y + 3);
};

Grid.prototype.recalculateSizeY = function recalculateSizeY() {
  this.gsizeY = Math.floor(this.boundaries.Max.y - this.boundaries.Min.y);
};

// snapshotting logic:
Grid.prototype.toJSON = function toJSON() {
  const settings = {
    // arr: this.arr,
    // activeCount: this.activeCount,
    // gsizeY: this.gsizeY,
    // boundaries: this.boundaries,
    // cellSize: this.cellSize
  };
  return { ...settings };
};

Grid.fromJSON = function fromJSON() {
  // TODO: a cleaner way would be to initialize the Grid
  // and after that fill it with the data from settings
  // return new Grid(JSON.parse(settings));
  // Let's throw away the grid...
  return new Grid();
};

export default Grid;
