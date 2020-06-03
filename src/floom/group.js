import Particle from '@/floom/particle';
import Spring from '@/floom/spring';

// eslint-disable-next-line sonarjs/cognitive-complexity
function Group(system, minX, minY, maxX, maxY, u, v, material) {
  this.material = material;

  const map = [];
  for (let i = minX; i < maxX; i += 1) {
    map[map.length] = [];
    for (let j = minY; j < maxY; j += 1) {
      const p = new Particle(i, j, u, v, material);
      system.addParticle(p);
      if (material.isElastic) {
        map[map.length - 1].push(p);
      }
    }
  }
  if (material.isElastic) {
    for (let i = 0; i < map.length; i += 1) {
      for (let j = 1; j < map[0].length; j += 1) {
        system.springs.push(
          new Spring(map[i][j - 1], map[i][j], map[i][j - 1].position.distance(map[i][j].position)),
        );
      }
    }
    for (let j = 0; j < map[0].length; j += 1) {
      for (let i = 1; i < map.length; i += 1) {
        system.springs.push(
          new Spring(map[i - 1][j], map[i][j], map[i - 1][j].position.distance(map[i][j].position)),
        );
      }
    }
    for (let i = 1; i < map.length; i += 1) {
      for (let j = 1; j < map[0].length; j += 1) {
        system.springs.push(
          new Spring(map[i - 1][j - 1], map[i][j], map[i - 1][j - 1]
            .position.distance(map[i][j].position)),
        );
      }
    }
    for (let i = 0; i < map.length - 1; i += 1) {
      for (let j = 1; j < map[0].length; j += 1) {
        system.springs.push(
          new Spring(map[i + 1][j - 1], map[i][j], map[i + 1][j - 1]
            .position.distance(map[i][j].position)),
        );
      }
    }
  }
}

export default Group;
