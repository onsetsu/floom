import forEach from 'lodash.foreach';
import $ from 'jquery';
import Stats from 'stats.js';
import d3 from 'd3';

import dat from '@/demo/vendor/dat.gui';

import Floom from '@/floom/index';

import Input from '@/demo/interaction/input';
import Viewport from '@/demo/visualization/viewport';
import CombinedRenderer from '@/demo/visualization/renderer';
import Vector2 from '@/utils/vector2';
import Debug from '@/demo/debug/debug';
import Tool from '@/demo/interaction/tool';

let debug;

function initTools(input, viewport, system) {
  const dragTool = new Tool(input);
  dragTool.onMouseDrag((event) => {
    forEach(system.particles, (p) => {
      if (p.position.sub(event.getPositionInWorld(viewport)).lengthSquared() < 50) { p.velocity.lerpSelf(event.getLastDeltaInWorld(viewport), 0.2); }
    });
  });
  dragTool.name = 'drag';

  const attractTool = new Tool(input);
  attractTool.onMouseDrag((event) => {
    forEach(system.particles, (p) => {
      const vectorToMouse = event.getPositionInWorld(viewport).sub(p.position);
      const distanceToMouse = vectorToMouse.lengthSquared();
      if (distanceToMouse < 150) { p.velocity.weightedAddSelf(vectorToMouse, (1 / distanceToMouse) * (Math.log(1 + distanceToMouse))); }
    });
  });
  attractTool.name = 'attract';

  const repelTool = new Tool(input);
  repelTool.onMouseDrag((event) => {
    forEach(system.particles, (p) => {
      const vectorToMouse = event.getPositionInWorld(viewport).sub(p.position);
      const distanceToMouse = vectorToMouse.lengthSquared();
      if (distanceToMouse < 150) { p.velocity.weightedAddSelf(vectorToMouse, 0.1 * Math.log(1 / (1 + distanceToMouse))); }
    });
  });
  repelTool.name = 'repel';

  function getRandomPointInCircleUniformly() {
    const TWO_PI = (Math.PI * 2.0);
    const t = TWO_PI * Math.random();
    const u = Math.random() + Math.random();
    const r = u > 1 ? 2 - u : u;
    return new Vector2(r * Math.cos(t), r * Math.sin(t));
  }
  const spawnTool = new Tool(input);
  let spawnMaterialIndex = 0;
  spawnTool.onMouseDrag((event) => {
    const spawnPosition = event.getPositionInWorld(viewport);
    for (let i = 0; i < 10; i++) {
      const noise = getRandomPointInCircleUniformly().mulFloat(5);
      system.particles.push(
        new Floom.Particle(
          spawnPosition.x + noise.x,
          spawnPosition.y + noise.y,
          0,
          0,
          system.materials[spawnMaterialIndex],
        ),
      );
    }
  });
  spawnTool.onMouseUp((event) => {
    spawnMaterialIndex = (spawnMaterialIndex + 1) % system.materials.length;
  });
  spawnTool.name = 'spawn';

  const consumeTool = new Tool(input);
  consumeTool.onMouseDrag((event) => {
    for (let i = 0; i < system.getNumberOfParticles();) {
      if (system.particles[i].position.sub(event.getPositionInWorld(viewport)).lengthSquared() < 4) { system.particles.splice(i, 1); } else { i++; }
    }
  });
  consumeTool.name = 'consume';

  const keyToolMap = {
    D: dragTool,
    A: attractTool,
    R: repelTool,
    S: spawnTool,
    C: consumeTool,
  };
  forEach(keyToolMap, (tool, key, map) => {
    input.bind(Input.KEY[key], key);
    const toTool = function () {
      tool.activate();
    };

    forEach(map, (fromTool) => {
      fromTool.onKeyUp(key, toTool);
    });
  });

  // activate default tool
  dragTool.activate();
}

function drawTool(renderer, input) {
  const color = 'pink';

  // draw mouse cursor
  renderer.drawDot(input.mouse, 10, color, 0.5);

  // draw current interaction name
  renderer.drawText(
    input.tool.name,
    new Vector2(5, 5).add(input.mouse),
    color,
    1.0,
    'bottom',
  );
}

// datGui
function datGuiForSystem(system) {
  const datGui = new dat.GUI();

  const gravityFolder = datGui.addFolder('Gravity');
  gravityFolder.open();
  gravityFolder.add(system.gravity, 'x').min(-0.2).max(0.2).step(-0.01);
  gravityFolder.add(system.gravity, 'y').min(-0.2).max(0.2).step(-0.01);

  datGui.add(system, 'implementationType', {
    'Surface Tension': 'surfaceTension',
    'Simple Implementation': 'simple',
    'MLS Implementation': 'mls',
  }).name('Implementation Type');
  datGui.add(system, 'drawGrid').name('Draw Grid');
  datGui.add(system, 'doObstacles').name('Obstacles');
  datGui.add(system, 'doSprings').name('Compute Springs');
  datGui.add(system, 'drawSprings').name('Draw Springs');
  window.renderIndex = 0;

  // TODO: move both indices from window and put into e.g. bootstrap or system scope
  datGui.add(window, 'renderIndex').name('Render Index');
  const inspectedParticleController = datGui.add(window, 'inspectedParticleIndex');

  datGuiForMaterials(system.materials, datGui);
}

function datGuiForMaterials(materials, parent) {
  const materialFolder = parent.addFolder('Materials');
  materialFolder.open();

  forEach(materials, (material) => {
    datGuiForMaterial(material, materialFolder);
  });
}

function datGuiForMaterial(material, parent) {
  const folder = parent.addFolder(`Mat${material.materialIndex}`);
  folder.open();

  folder.addColor(material, 'color').onChange(material.setColor.bind(material));
  folder.add(material, 'particleMass').min(0.01).max(5.0).step(0.1);
  folder.add(material, 'restDensity').min(0.1).max(5.0).step(0.1);
  folder.add(material, 'stiffness').min(0).max(1).step(0.05);
  folder.add(material, 'bulkViscosity').min(0).max(1).step(0.05);
  folder.add(material, 'elasticity').min(-1).max(5).step(0.05);
  folder.add(material, 'surfaceTension').min(0).max(1).step(0.05);
  folder.add(material, 'viscosity').min(0).max(1).step(0.05);
  folder.add(material, 'meltRate').min(0).max(1).step(0.05);
  folder.add(material, 'damping').min(0).max(1).step(0.05);
  folder.add(material, 'smoothing').min(0).max(1).step(0.05);
  folder.add(material, 'springK').min(0).max(5).step(0.05);
}

const canvasId = 'floom';
const canvas = document.getElementById(canvasId);
canvas.style.position = 'absolute';
canvas.style.top = '0px';
canvas.style.left = '0px';
canvas.style['z-index'] = -1;

const renderer = new CombinedRenderer(canvas);

const stats = new Stats();
$(stats.domElement)
  .css('position', 'absolute')
  .css('top', `${$(window).scrollTop()}px`)
  .prependTo($('body'));
$(window).scroll(function () {
  $(stats.domElement).css('top', `${$(this).scrollTop()}px`);
});

// prepare input
const input = new Input(canvasId);
input.initMouse();
input.bind(Input.KEY.MOUSE1, 'leftclick');
input.bind(Input.KEY.MOUSE2, 'rightclick');
input.bind(Input.KEY.MWHEEL_UP, 'zoomIn');
input.bind(Input.KEY.MWHEEL_DOWN, 'zoomOut');
input.initKeyboard();
input.bind(Input.KEY.N, 'nextAction');

// create fluid System
const fluidSystem = new Floom.System();

// create and customize Materials
const mat0 = fluidSystem.createNewMaterial()
  .setParticleMass(0.5);
const mat1 = fluidSystem.createNewMaterial()
  .setParticleMass(1.0);
const mat2 = fluidSystem.createNewMaterial()
  .setParticleMass(2.0);
const mat3 = fluidSystem.createNewMaterial()
  .setParticleMass(4.0);
const mat4 = fluidSystem.createNewMaterial()
  .setParticleMass(8.0)
  .setIsElastic(true);

forEach([mat0, mat1, mat2, mat3, mat4], (matterial) => {
  matterial.colorScale = d3.scale.linear().domain([0, 5]);
  matterial.colorScale.range([matterial.color, d3.rgb(matterial.color).brighter(3)]);
});

// create Particles of these Materials
new Floom.Group(fluidSystem, -45, 5, 0, 25, 0.1, 0, mat0);
new Floom.Group(fluidSystem, 5, 5, 50, 25, -0.1, 0, mat1);
new Floom.Group(fluidSystem, -45, 30, 0, 50, 0.1, 0, mat2);
new Floom.Group(fluidSystem, 5, 30, 50, 50, -0.1, 0, mat3);
new Floom.Group(fluidSystem, -10, 55, 10, 75, 0, 0, mat4);

	 window.inspectedParticleIndex = 0;

// example to spawn individual particles
// var p = new Floom.Particle(-45.00001,  55.000001,  0.100001, 0.000001, mat3);
// fluidSystem.addParticle(p);

// create obstacles
// fluidSystem.doObstacles = true;
fluidSystem.obstacles.push(
  new Floom.Obstacle(-20, 20, 5),
  new Floom.Obstacle(20, 0, 9),
);

// configure grid rendering
// fluidSystem.drawGrid = true;

// configure spring calculation and rendering
fluidSystem.doSprings = true;
fluidSystem.drawSprings = false;

// initialize specific datGui for the fluid System
datGuiForSystem(fluidSystem);

// choose, which subset of the world should be displayed
const viewport = new Viewport(
  canvas,
  Vector2.Zero.copy(),
  new Vector2(136.6, 76.8),
);
viewport.jumpToPoint(new Vector2(0, 35));
initTools(input, viewport, fluidSystem);

const timeMachine = [fluidSystem.toJSON()];
window.simulateIndex = 0;
window.renderIndex = 0;
// update routine
const lastPoint = Vector2.Zero.copy();
let currentFluidSystem = fluidSystem;
function update(timePassed) {
  if (window.renderIndex < window.simulateIndex) {
    // replay
    currentFluidSystem = Floom.System.fromJSON(timeMachine[window.renderIndex]);
  } else {
    // simulate
    window.simulateIndex++;
  }
  window.renderIndex++;
  // entities/map
  if (graph) { graph.beginClock('update'); }

  input.update();
  // viewport manipulation
  if (input.pressed('rightclick')) {
    lastPoint.set(input.mouse);
  }
  if (input.state('rightclick')) {
    viewport.translateBy(lastPoint.sub(input.mouse));
    lastPoint.set(input.mouse);
  }
  if (input.state('zoomIn')) {
    viewport.zoomIn();
  }
  if (input.state('zoomOut')) {
    viewport.zoomOut();
  }

  currentFluidSystem.update(timePassed);
  if (graph) { graph.endClock('update'); }
  // rendering
  if (graph) { graph.beginClock('draw'); }
  renderer.clear();
  renderer.withViewport(viewport, () => {
    renderer.drawSystem(currentFluidSystem);
  });
  drawTool(renderer, input);
  if (graph) { graph.endClock('draw'); }

  // interaction
  input.clearPressed();
  if (window.renderIndex === window.simulateIndex) {
    timeMachine.push(currentFluidSystem.toJSON());
  }
}


// main loop
let lastFrame = window.performance.now();
function animate() {
  if (debug) { debug.beforeRun(); }

  stats.update();

  // setup time since last call
  const time = window.performance.now();
  const dt = (time - lastFrame) / 1000;
  lastFrame = time;

  update(dt);

  if (debug) { debug.afterRun(renderer, fluidSystem); }

  requestAnimationFrame(animate);
}

$().ready(() => {
  debug = new Debug.Menu();
  debug.addPanel({
    type: Debug.Performance,
    name: 'graph',
    label: 'Performance',
  }, fluidSystem);
  debug.addPanel({
    type: Debug.Particle,
    name: 'particle',
    label: 'Particle',
  }, fluidSystem);
  animate();
});
