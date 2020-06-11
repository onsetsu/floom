import Material from "./material.js";
import Particle from "./particle.js";
import Group from "./group.js";
import Node from "./node.js";
import Spring from "./spring.js";
import { Circle, Capsule, factory } from "./obstacles/index.js";
import System from "./system.js";
import TimeMachine from "./timeMachine.js";
import "./simplesimulation.js";
import "./elasticitySimulation.js";
import "./mlsSimulation.js";

var Floom = function() {};

Floom.Material = Material;
Floom.Particle = Particle;
Floom.Group = Group;
Floom.Node = Node;
Floom.Spring = Spring;
Floom.obstacles = { Circle, Capsule, factory };
Floom.System = System;
Floom.TimeMachine = TimeMachine;

export default Floom;
