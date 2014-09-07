define([
	'engine/domready',
	'debug/menu',
	'debug/panel',
	"engine/map/entity",
	"physics/jello"
], function(domReady, Menu, DebugPanel, Entity, Jello){ "use strict";

/**
 *  ---------------------------- ENTITIES PANEL ----------------------------
 */
var bodyDebugDrawAABB = Jello.Body.prototype.debugDrawAABB;
Jello.Body.prototype.debugDrawAABB = function(debugDraw) {
	if(Jello.Body.shouldDebugDrawAABB)
		bodyDebugDrawAABB.apply(this, arguments);
};
Jello.Body.shouldDebugDrawAABB = true;

var debugDrawGlobalShape = Jello.Body.prototype.debugDrawGlobalShape;
Jello.Body.prototype.debugDrawGlobalShape = function(debugDraw) {
	if(Jello.Body.shouldDebugDrawGlobalShape)
		debugDrawGlobalShape.apply(this, arguments);
};
Jello.Body.shouldDebugDrawGlobalShape = true;

var debugDrawPolygon = Jello.Body.prototype.debugDrawPolygon;
Jello.Body.prototype.debugDrawPolygon = function(debugDraw) {
	if(Jello.Body.shouldDebugDrawPolygon)
		debugDrawPolygon.apply(this, arguments);
};
Jello.Body.shouldDebugDrawPolygon = true;

var debugDrawPointMasses = Jello.Body.prototype.debugDrawPointMasses;
Jello.Body.prototype.debugDrawPointMasses = function(debugDraw) {
	if(Jello.Body.shouldDebugDrawPointMasses)
		debugDrawPointMasses.apply(this, arguments);
};
Jello.Body.shouldDebugDrawPointMasses = true;

var debugDrawMiddlePoint = Jello.Body.prototype.debugDrawMiddlePoint;
Jello.Body.prototype.debugDrawMiddlePoint = function(debugDraw) {
	if(Jello.Body.shouldDebugDrawMiddlePoint)
		debugDrawMiddlePoint.apply(this, arguments);
};
Jello.Body.shouldDebugDrawMiddlePoint = true;//false;

var debugDrawVelocity = Jello.Body.prototype.debugDrawVelocity;
Jello.Body.prototype.debugDrawVelocity = function(debugDraw) {
	if(Jello.Body.shouldDebugDrawVelocity)
		debugDrawVelocity.apply(this, arguments);
};
Jello.Body.shouldDebugDrawVelocity = true;//false;

var debugDrawInternalSprings = Jello.InternalSpring.prototype.debugDraw;
Jello.InternalSpring.prototype.debugDraw = function(debugDraw) {
	if(Jello.InternalSpring.shouldDebugDraw)
		debugDrawInternalSprings.apply(this, arguments);
};
Jello.InternalSpring.shouldDebugDraw = true;

var debugDrawBodyCollisionInfo = Jello.BodyCollisionInfo.prototype.debugDraw;
Jello.BodyCollisionInfo.prototype.debugDraw = function(debugDraw) {
	if(Jello.BodyCollisionInfo.shouldDebugDraw)
		debugDrawBodyCollisionInfo.apply(this, arguments);
};
Jello.BodyCollisionInfo.shouldDebugDraw = true;

var debugDrawAngle = Jello.Body.prototype.debugDrawAngle;
Jello.Body.prototype.debugDrawAngle = function(debugDraw) {
	if(Jello.Body.shouldDebugDrawAngle)
		debugDrawAngle.apply(this, arguments);
};
Jello.Body.shouldDebugDrawAngle = true;//false;

var debugDrawName = Entity.prototype.debugDrawName;
Entity.prototype.debugDrawName = function(debugDraw) {
	if(Entity.shouldDebugDrawName)
		debugDrawName.apply(this, arguments);
};
Entity.shouldDebugDrawName = true;//false;

var debugDrawTypeAndId = Jello.Body.prototype.debugDrawTypeAndId;
Jello.Body.prototype.debugDrawTypeAndId = function(debugDraw) {
	if(Jello.Body.shouldDebugDrawTypeAndId)
		debugDrawTypeAndId.apply(this, arguments);
};
Jello.Body.shouldDebugDrawTypeAndId = true;//false;

var debugDrawTarget = Jello.Body.prototype.debugDrawTarget;
Jello.Body.prototype.debugDrawTarget = function(debugDraw) {
	if(Jello.Body.shouldDebugDrawTarget)
		debugDrawTarget.apply(this, arguments);
};
Jello.Body.shouldDebugDrawTarget = true;

domReady(function() {
	
	Bloob.debug.addPanel({
		type: DebugPanel,
		name: 'entities',
		label: 'Entities',
		options: [
				{
					name: 'AABB',
					object: Jello.Body,
					property: 'shouldDebugDrawAABB'
				},
				{
					name: 'GlobalShape',
					object: Jello.Body,
					property: 'shouldDebugDrawGlobalShape'
				},
				{
					name: 'Polygon',
					object: Jello.Body,
					property: 'shouldDebugDrawPolygon'
				},
				{
					name: 'PointMasses',
					object: Jello.Body,
					property: 'shouldDebugDrawPointMasses'
				},
				{
					name: 'MiddlePoint',
					object: Jello.Body,
					property: 'shouldDebugDrawMiddlePoint'
				},
				{
					name: 'Velocity',
					object: Jello.Body,
					property: 'shouldDebugDrawVelocity'
				},
				{
					name: 'InternalSprings',
					object: Jello.InternalSpring,
					property: 'shouldDebugDraw'
				},
				{
					name: 'Collision',
					object: Jello.BodyCollisionInfo,
					property: 'shouldDebugDraw'
				},
				{
					name: 'Angle',
					object: Jello.Body,
					property: 'shouldDebugDrawAngle'
				},
				{
					name: 'Name',
					object: Entity,
					property: 'shouldDebugDrawName'
				},
				{
					name: 'Type & Id',
					object: Jello.Body,
					property: 'shouldDebugDrawTypeAndId'
				},
				{
					name: 'Target',
					object: Jello.Body,
					property: 'shouldDebugDrawTarget'
				}
		]
	});
});

});