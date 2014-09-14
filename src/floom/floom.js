define([
	"floom/material",
	"floom/particle",
	"floom/group",
	"floom/node",
	"floom/spring",
	"floom/obstacle",
	"floom/system",
	"floom/simplesimulation"
], function(
	Material,
	Particle,
	Group,
	Node,
	Spring,
	Obstacle,
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
	Floom.System = System;
	
	return Floom;
});
