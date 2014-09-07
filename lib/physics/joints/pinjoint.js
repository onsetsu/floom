define([

], function() {
	var PinJoint = function(
		world,
		bodyA, pointMassIndexA,
		bodyB, pointMassIndexB
	) {
		this.world = world;
		this.bodyA = bodyA;
		this.bodyB = bodyB;
		this.pointMassIndexA = pointMassIndexA || 0;
		this.pointMassIndexB = pointMassIndexB || 0;

		world.addJoint(this);
	};

	PinJoint.prototype.applyForce = function(timePassed) {
		var pointMassA = this.bodyA.getPointMass(this.pointMassIndexA);
		var pointMassB = this.bodyB.getPointMass(this.pointMassIndexB);

		pointMassA.Position.lerpSelf(pointMassB.Position, 0.5);
		pointMassB.Position.set(pointMassA.Position);

		pointMassA.Velocity.lerpSelf(pointMassB.Velocity, 0.5);
		pointMassB.Velocity.set(pointMassA.Velocity);

		pointMassA.Force.lerpSelf(pointMassB.Force, 0.5);
		pointMassB.Force.set(pointMassA.Force);
	};

	PinJoint.prototype.debugDraw = function(debugDraw) {
		debugDraw.drawDot(
			this.bodyA.getPointMass(this.pointMassIndexA).Position,
			6,
			"blue",
			1.0
		);
	};

	return PinJoint;
});
