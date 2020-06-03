import Vector2 from '@/utils/vector2';

function Obstacle(x, y, radius) {
  this.position = new Vector2(x, y);
  this.radius = radius;
}

Obstacle.prototype.toJSON = function toJSON() {
  const settings = {
    position: this.position,
    radius: this.radius,
  };

  return { ...settings };
};

Obstacle.fromJSON = function fromJSON(settings) {
  return new Obstacle(settings.position.x, settings.position.y, settings.radius);
};

export default Obstacle;
