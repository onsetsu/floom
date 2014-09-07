define([

], function() {
	var InternalSpring = function(pmA, pmB, d, k, damp) {
		this.pointMassA = pmA || 0;
		this.pointMassB = pmB || 0;
		this.springD = d || 0.0;
		this.springK = k || 0.0;
		this.damping = damp || 0.0;
	};

	InternalSpring.prototype.debugDraw = function(debugDraw, body) {
		debugDraw.drawLine(
			body.getPointMass(this.pointMassA).Position,
			body.getPointMass(this.pointMassB).Position,
			"green",
			0.6,
			1
		);
	};

	InternalSpring.prototype.toJson = function() {
		var resultJson = {
			"pointA": this.pointMassA,
			"pointB": this.pointMassB,
			"springD": this.springD,
			"springK": this.springK,
			"damping": this.damping
		};
			
		return resultJson;
	};
	
	InternalSpring.fromJson = function(springJson, bodyBluePrint) {
		bodyBluePrint.addInternalSpring(
			springJson.pointA,
			springJson.pointB,
			springJson.springK,
			springJson.damping
		);
	};
	
	return InternalSpring;
});
