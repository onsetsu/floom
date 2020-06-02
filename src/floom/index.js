import Material from "@/floom/material.js";
import Particle from "@/floom/particle.js";
import Group from "@/floom/group.js";
import Node from "@/floom/node.js";
import Spring from "@/floom/spring.js";
import Obstacle from "@/floom/obstacle.js";
import System from "@/floom/system.js";

import "@/floom/simplesimulation.js";
import "@/floom/mlsSimulation.js";

var Floom = function() {};

Floom.Material = Material;
Floom.Particle = Particle;
Floom.Group = Group;
Floom.Node = Node;
Floom.Spring = Spring;
Floom.Obstacle = Obstacle;
Floom.System = System;

export default Floom;
