define([
	"floom/material",
	"floom/particle",
	"floom/group",
	"floom/node",
	"floom/spring",
	"floom/obstacle",
	"floom/simulator",
	"floom/system",
	"floom/simplesimulation"
], function(
	Material,
	Particle,
	Group,
	Node,
	Spring,
	Obstacle,
	Simulator,
	System,
	SimpleSimulation
) {
	var Floom = Floom || function() {};

	Floom.Material = Material;
	Floom.Particle = Particle;
	Floom.Group = Group;
	Floom.Node = Node;
	Floom.Spring = Spring;
	Floom.Obstacle = Obstacle;
	Floom.Simulator = Simulator;
	Floom.System = System;
	
	return Floom;
});
