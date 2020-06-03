import Material from '@/floom/material';
import Particle from '@/floom/particle';
import Group from '@/floom/group';
import Node from '@/floom/node';
import Spring from '@/floom/spring';
import Obstacle from '@/floom/obstacle';
import System from '@/floom/system';

import '@/floom/simplesimulation';
import '@/floom/mlsSimulation';

function Floom() {}

Floom.Material = Material;
Floom.Particle = Particle;
Floom.Group = Group;
Floom.Node = Node;
Floom.Spring = Spring;
Floom.Obstacle = Obstacle;
Floom.System = System;

export default Floom;
