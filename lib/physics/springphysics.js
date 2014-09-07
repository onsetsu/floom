define([
	"physics/internalspring",
	"physics/vector2",
	"physics/vectortools"
], function(
	InternalSpring,
	Vector2,
	VectorTools
) {
	/*
	 * Handle shape matching via springs physics
	 */
	var ShapeMatching = function(bodyDefinition) {
		var shapeSpringK = bodyDefinition.getShapeSpringK();
		this._active = typeof shapeSpringK != "undefined";
		this._springK = shapeSpringK || 0.0;
		this._springDamp = bodyDefinition.getShapeSpringDamp() || 0.0;
	};
	
	ShapeMatching.prototype.setActive = function(onoff) {
		this._active = onoff;
	};
	
	ShapeMatching.prototype.setConstants = function(springK, damping) {
		this._springK = springK;
		this._springDamp = damping;
	};
	
	ShapeMatching.prototype.accumulateInternalForces = function(body) {
		if(this._active) {
			var force;
			
			body._baseShape.transformVertices(
				body._derivedPosition,
				body._derivedAngle,
				body._scale,
				body._globalShape
			);
			
			for (var i = 0; i < body._pointMassCount; i++) {
				var pointMassA = body._pointMasses[i]; // PointMass
				
				if (this._springK > 0) {
					if (!body._isKinematic)
						// TODO: call with same velocities, probably optimizable
						force = VectorTools.calculateSpringForceVelAVelB(
							pointMassA.Position, pointMassA.Velocity,
							body._globalShape[i], pointMassA.Velocity,
							0.0, this._springK, this._springDamp
						);
					else
						force = VectorTools.calculateSpringForceVelAVelB(
							pointMassA.Position, pointMassA.Velocity,
							body._globalShape[i], Vector2.Zero.copy(),
							0.0, this._springK, this._springDamp
						);
					
					pointMassA.Force.addSelf(force);
				}
			}
		}
	};
	
	ShapeMatching.prototype.toJson = function(resultJson) {
		resultJson.shapeSpringK = this._springK;
		resultJson.shapeSpringDamp = this._springDamp;

		return resultJson;
	};

	
	/*
	 * Handle shape matching via springs physics
	 */
	var EdgeSprings = function(body, bodyDefinition) {
		this._springK = bodyDefinition.getEdgeSpringK();
		this._springDamp = bodyDefinition.getEdgeSpringDamp();
		
		this._calculateDistances(body);
	};
	
	EdgeSprings.prototype._calculateDistances = function(body) {
		this._distances = [];
		this._edgeCount = body._boundaryCount;
		for (var i = 0; i < this._edgeCount; i++)
		{
			var next = (i + 1) % this._edgeCount;
			var dist = body._pointMasses[i].Position.distance(body._pointMasses[next].Position);
			this._distances.push(dist);
		}
	};

	EdgeSprings.prototype.setEdgeSpringConstants = function(edgeSpringK, edgeSpringDamp) {
		this._springK = edgeSpringK;
		this._springDamp = edgeSpringDamp;
	};

	EdgeSprings.prototype.accumulateInternalForces = function(body) {
		for (var i = 0; i < this._edgeCount; i++)
		{
			var next = (i + 1) % this._edgeCount;
			var pointMassA = body._pointMasses[i];
			var pointMassB = body._pointMasses[next];
			
			var force = VectorTools.calculateSpringForceVelAVelB(
				pointMassA.Position, pointMassA.Velocity,
				pointMassB.Position, pointMassB.Velocity, 
				this._distances[i], this._springK, this._springDamp);
			
			pointMassA.Force.addSelf(force);
			pointMassB.Force.subSelf(force);
		}
	};
	
	EdgeSprings.prototype.toJson = function(resultJson) {
		resultJson.edgeSpringK = this._springK;
		resultJson.edgeSpringDamp = this._springDamp;

		return resultJson;
	};
	
	/*
	 * Spring-related physics components
	 */
	var SpringPhysics = function(body, bodyDefinition) {
		this._body = body;
		
		body.setPositionAngle(
			bodyDefinition.getPosition(),
			bodyDefinition.getAngleInRadians(),
			bodyDefinition.getScale()
		);

		this._shapeMatching = new ShapeMatching(bodyDefinition);
		this._edgeSprings = new EdgeSprings(this._body, bodyDefinition);

		this._springs = [];
		for(var i = 0; i < bodyDefinition.internalSprings.length; i++)
			this.addInternalSpring.apply(this, bodyDefinition.internalSprings[i]);
	};

	SpringPhysics.prototype.addInternalSpring = function(pointA, pointB, springK, damping ) {
		var dist = this._body._pointMasses[pointB].Position.distance(this._body._pointMasses[pointA].Position);
		var s = new InternalSpring(pointA, pointB, dist, springK, damping);
		
		this._springs.push(s);
	};

	SpringPhysics.prototype.clearAllSprings = function() {
		this._springs.length = 0;
	};

	// delegate to shapeMatching
	SpringPhysics.prototype.setShapeMatching = function(onoff) {
		this._shapeMatching.setActive(onoff);
	};
	
	SpringPhysics.prototype.setShapeMatchingConstants = function(springK, damping) {
		this._shapeMatching.setConstants(springK, damping);
	};

	// delegate to edgeSprings
	SpringPhysics.prototype.setEdgeSpringConstants = function(edgeSpringK, edgeSpringDamp) {
		this._edgeSprings.setEdgeSpringConstants(edgeSpringK, edgeSpringDamp);
	};

	SpringPhysics.prototype.setSpringConstants = function(springID, springK, springDamp) {
		this._springs[springID].springK = springK;
		this._springs[springID].damping = springDamp;
	};

	SpringPhysics.prototype.getSpringK = function(springID) {
		return this._springs[springID].springK;
	};

	SpringPhysics.prototype.getSpringDamping = function(springID) {
		return this._springs[springID].damping;
	};

	SpringPhysics.prototype.accumulateInternalForces = function() {	
		this._edgeSprings.accumulateInternalForces(this._body);
		this._shapeMatching.accumulateInternalForces(this._body);

		// internal spring forces.
		var force = Vector2.Zero.copy();
		for (var i = 0; i < this._springs.length; i++)
		{
			var s = this._springs[i];
			var pointMassA = this._body._pointMasses[s.pointMassA];
			var pointMassB = this._body._pointMasses[s.pointMassB];
			
			force = VectorTools.calculateSpringForceVelAVelB(
				pointMassA.Position, pointMassA.Velocity,
				pointMassB.Position, pointMassB.Velocity, 
				s.springD, s.springK, s.damping);
			
			pointMassA.Force.addSelf(force);
			pointMassB.Force.subSelf(force);
		}
	};

	SpringPhysics.prototype.debugDraw = function(debugDraw, body) {
		for (var i = 0; i < this._springs.length; i++)
		{
			this._springs[i].debugDraw(debugDraw, body);
		};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
	};

	SpringPhysics.prototype.toJson = function(resultJson) {
		// adjustments for spring bodies
		resultJson.class = "SpringBody";
		
		this._edgeSprings.toJson(resultJson);
		this._shapeMatching.toJson(resultJson);

		resultJson.internalSprings = [];
		for (var i = 0; i < this._springs.length; i++)
			resultJson.internalSprings.push(this._springs[i].toJson());

		return resultJson;
	};

	return SpringPhysics;
});
