define([
	"physics/vectortools"
], function(VectorTools) {
	var DistanceJoint = function(
		world,
		bodyA, pointMassIndexA,
		bodyB, pointMassIndexB,
		distance, k, damp
	) {
		this.world = world;
		this.bodyA = bodyA;
		this.bodyB = bodyB;
		this.pointMassIndexA = pointMassIndexA || 0;
		this.pointMassIndexB = pointMassIndexB || 0;
		this.springDistance = distance || 0.0;
		this.springK = k || 0.0;
		this.damping = damp || 0.0;
		
		world.addJoint(this);
	};

	DistanceJoint.prototype.applyForce = function(timePassed) {
		var pointMassA = this.bodyA.getPointMass(this.pointMassIndexA);
		var pointMassB = this.bodyB.getPointMass(this.pointMassIndexB);

		var force = VectorTools.calculateSpringForceVelAVelB(
			pointMassA.Position, pointMassA.Velocity,
			pointMassB.Position, pointMassB.Velocity, 
			this.springDistance, this.springK, this.damping
		);

		pointMassA.Force.addSelf(force);
		pointMassB.Force.subSelf(force);
	};

	DistanceJoint.prototype.debugDraw = function(debugDraw) {
		debugDraw.drawLine(
			this.bodyA.getPointMass(this.pointMassIndexA).Position,
			this.bodyB.getPointMass(this.pointMassIndexB).Position,
			"lightgreen",
			1.0,
			1
		);
	};

	return DistanceJoint;
});
