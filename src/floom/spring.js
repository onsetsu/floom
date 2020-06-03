function Spring(particle1, particle2, restLength) {
  this.particle1 = particle1;
  this.particle2 = particle2;
  this.restLength = restLength;
  this.currentDistance = 0;
}

Spring.prototype.update = function update() {
  this.currentDistance = this.particle1.position.distance(this.particle2.position);
};

Spring.prototype.solve = function solve() {
  const p2position = this.particle2.position;
  const p1position = this.particle1.position;
  const rij = p2position.sub(p1position);
  rij.mulFloatSelf(1 / this.currentDistance);
  const D = this.particle1.material.springK * (this.restLength - this.currentDistance);
  rij.mulFloatSelf(D * 0.5);
  p1position.subSelf(rij);
  p2position.addSelf(rij);
};

Spring.prototype.contains = function contains(particle) {
  return this.particle1 === particle || this.particle2 === particle;
};

export default Spring;
