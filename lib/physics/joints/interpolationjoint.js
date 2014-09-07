define([

], function() {
	var InterpolationJoint = function(
		world,
		bodyA, pointMassIndexA,
		bodyB, pointMassIndexB,
		interpolatedBody, interpolatedPointMassIndex,
		i,
		strength
	) {
		this.world = world;
		this.bodyA = bodyA;
		this.bodyB = bodyB;
		this.interpolatedBody = interpolatedBody;

		this.pointMassIndexA = pointMassIndexA || 0;
		this.pointMassIndexB = pointMassIndexB || 0;
		this.interpolatedPointMassIndex= interpolatedPointMassIndex || 0;

		this.i = i; // interpolation factor
		this.strength = strength; // interpolation strength

		world.addJoint(this);
	};

	InterpolationJoint.prototype.applyForce = function(timePassed) {
		var pointMassA = this.bodyA.getPointMass(this.pointMassIndexA);
		var pointMassB = this.bodyB.getPointMass(this.pointMassIndexB);
		var interpolatedPointMass = this.interpolatedBody.getPointMass(this.interpolatedPointMassIndex);

		interpolatedPointMass.Position.lerpSelf(
			pointMassA.Position.lerp(pointMassB.Position, this.i),
			this.strength
		);

		interpolatedPointMass.Velocity.lerpSelf(
			pointMassA.Velocity.lerp(pointMassB.Velocity, this.i),
			this.strength
		);

		interpolatedPointMass.Force.lerpSelf(
			pointMassA.Force.lerp(pointMassB.Force, this.i),
			this.strength
		);
	};

	InterpolationJoint.prototype.debugDraw = function(debugDraw) {
		var color = "blue";
		var opacity = 1.0;
		var lineWidth = 1;
		
		debugDraw.drawLine(
			this.bodyA.getPointMass(this.pointMassIndexA).Position,
			this.bodyB.getPointMass(this.pointMassIndexB).Position,
			color,
			opacity,
			lineWidth
		);
		debugDraw.drawDot(
			this.interpolatedBody.getPointMass(this.interpolatedPointMassIndex).Position,
			6,
			color,
			opacity
		);
	};

	
	return InterpolationJoint;
});
