define([
	"physics/bitmask",
	"physics/collisiontype",
	"physics/jellyprerequisites",
	"physics/vector2",
	"physics/pointmass",
	"physics/aabb",
	"physics/vectortools",
	"physics/closedshape",
	"physics/materialmanager",
	"physics/internalspring",
	"physics/springphysics",
	"physics/pressurephysics"
], function(
	Bitmask,
	CollisionType,
	JellyPrerequisites,
	Vector2,
	PointMass,
	AABB,
	VectorTools,
	ClosedShape,
	Material,
	InternalSpring,
	SpringPhysics,
	PressurePhysics
) {
	var EdgeInfo = function() {
		this.dir = Vector2.Zero.copy();	// normalized direction vector for this edge.
		this.length = 0;	// length of the edge.
		this.slope = 0.0;	// slope of the line described by this edge.
	};

	var Body = function(
		bodyDefinition
	) {
		// If pointMasses are given as a single value, setup an array of according length.
		if(!(bodyDefinition.getPointMasses() instanceof Array))
			bodyDefinition.setPointMasses(JellyPrerequisites.Utils.fillArray(bodyDefinition.getPointMasses(), bodyDefinition.getShape().getVertices().length));
		
		this._setDefaultValues();
		this._buildFromDefinition(bodyDefinition);
		this._buildPhysicsFromDefinition(bodyDefinition);
	};

	Body.prototype._setDefaultValues = function() {
		this._world = null;
		this._baseShape = new ClosedShape();
		this._globalShape = [];
		this._pointMasses = [];
		this._edgeInfo = [];
		this._scale = new Vector2(0.0, 0.0);
		this._derivedPosition = new Vector2(0.0, 0.0);
		this._derivedVelocity = new Vector2(0.0, 0.0);
		this._derivedAngle = 0.0;
		this._derivedOmega = 0.0;
		this._lastAngle = 0.0;
		this._aabb = new AABB();
		this._material = Material.Default;
		this._collisionType = CollisionType.getDefault();
		this._isStatic = false;
		this._isKinematic = false;
		this._objectTag = null;
		this._velocityDamping = 0.0;

		this._boundaryCount = 0;
		this._inverseBoundaryCount = 0;
		this._pointMassCount = 0;
		this._inversePointMassCount = 0;

		this._ignoreMe = false;

		this._bitmaskX = new Bitmask();
		this._bitmaskY = new Bitmask();

		this._externalForces = []; // array of force callbacks
		
		this.id = "body" + Body.nextBodyId++;
		this._userData = {};
		
		// contact listener callbacks
		this._onContactCallbacks = [];
		this._onStartContactCallbacks = [];
		this._onEndContactCallbacks = [];
		this.contactSignal = env.eventManager.signal("contact");
		this.startContactSignal = env.eventManager.signal("startContact");
		this.endContactSignal = env.eventManager.signal("endContact");

		// callbacks called with every world update
		this._withUpdateCallbacks = [];
		this._beforeUpdateCallbacks = [];
		this._afterUpdateCallbacks = [];
	};

	Body.prototype.getBitmaskX = function() { return this._bitmaskX; };
	Body.prototype.getBitmaskY = function() { return this._bitmaskY; };
	Body.prototype.getWorld = function() { return this._world; };

	Body.prototype._buildFromDefinition = function(bodyDefinition) {
		this._world = bodyDefinition.getWorld();
		this._derivedPosition = bodyDefinition.getPosition();
		this._derivedAngle = bodyDefinition.getAngleInRadians();
		this._lastAngle = this._derivedAngle;
		this._scale = bodyDefinition.getScale();
		this._material = bodyDefinition.getMaterial();
		this._collisionType = bodyDefinition.getCollisionType();
		this._pointMassCount = 0;
		this._inversePointMassCount = 0.0;

		// TODO: check for all zero masses -> static
		this._isStatic = false; // || bodyDefinition.pointMasses.all == 0.0;
		this._isKinematic = bodyDefinition.getIsKinematic();
		
		this._velocityDamping = 0.999;
		this._objectTag = null;

		this._ignoreMe = false;

		this._setShape(bodyDefinition.getShape());

		var boundaryCount = bodyDefinition.getBoundaryCount();
		this._boundaryCount = boundaryCount > 0 ? boundaryCount : this._pointMassCount;
		this._inverseBoundaryCount = 1.0 / this._boundaryCount;

		// attach mass values to each pointMass in shape
		for (var i = 0; i < this._pointMassCount; i++)
			this._pointMasses[i].Mass = bodyDefinition.getPointMasses()[i];
		
		this.updateAABB(0.0, true);
		this.updateEdgeInfo(true);
			
		// add body to world
		bodyDefinition.getWorld().addBody(this);
	};

	Body.prototype._buildPhysicsFromDefinition = function(bodyDefinition) {
		this.useSprings = bodyDefinition.getUseSprings();
		this.usePressure = bodyDefinition.getUsePressure();
		
		if(this.useSprings)
			this.springPhysics = new SpringPhysics(this, bodyDefinition);
		if(this.usePressure)
			this.pressurePhysics = new PressurePhysics(this, bodyDefinition);
	};

	Body.nextBodyId = 0;

	Body.prototype.kill = function() {
		this._world.removeBody(this);
		if(this.usePressure)
			this.pressurePhysics.kill();
	};

	Body.prototype._setShape = function(shape, forceUpdate) {
		forceUpdate = forceUpdate || false;
		
		this._baseShape = shape;
		
		if (this._baseShape.getVertices().length != this._pointMassCount || forceUpdate)
		{
			this._pointMasses.length = 0;
			this._globalShape.length = 0;
			this._edgeInfo.length = 0;
			
			for(var i = 0; i < shape.getVertices().length; i++)
				this._globalShape.push(new Vector2(0.0, 0.0));
			
			this._baseShape.transformVertices(this._derivedPosition, this._derivedAngle, this._scale, this._globalShape);
			
			for(var i = 0; i < this._baseShape.getVertices().length; i++)
				this._pointMasses.push(new PointMass(0.0, this._globalShape[i])); 
			
			var e = new EdgeInfo();
			e.dir = new Vector2(0.0, 0.0);
			e.length = 0.0;
			
			for(var i = 0; i < this._baseShape.getVertices().length; i++)
				this._edgeInfo.push(e);
			
			this._pointMassCount = this._pointMasses.length;
			this._inversePointMassCount = 1.0 / this._pointMassCount;
		}
		
		this.updateAABB(0.0, true);
		this.updateEdgeInfo(true);
	};

	Body.prototype.getBaseShape = function() {
		return this._baseShape;
	};

	Body.prototype.setMassAll = function(mass) {
		for(var i = 0; i < this._pointMassCount; i++)
			this._pointMasses[i].Mass = mass;
		
		if(mass == 0.0)
			this._isStatic = true;
	};

	Body.prototype.setMassIndividual = function(index, mass) {
		if((index >= 0) && (index < this._pointMassCount))
			this._pointMasses[index].Mass = mass;
	};

	Body.prototype.setMassFromList = function(masses) {
		if (masses.length == this._pointMassCount) {
			for (var i = 0; i < this._pointMassCount; i++)
				this._pointMasses[i].Mass = masses[i];
		};
	};

	Body.prototype.getMaterial = function() { return this._material; };
	Body.prototype.setMaterial = function(val) { this._material = val; };

	Body.prototype.getCollisionType = function() { return this._collisionType; };
	Body.prototype.setCollisionType = function(val) { this._collisionType = val; };

	Body.prototype.setPositionAngle = function(pos, angleInRadians, scale ) {
		this._baseShape.transformVertices(pos, angleInRadians, scale, this._globalShape);
		for(var i = 0; i < this._pointMassCount; i++)
			this._pointMasses[i].Position.set(this._globalShape[i]);
		
		this._derivedPosition = pos;
		this._derivedAngle = angleInRadians;
	};

	Body.prototype.setKinematicPosition = function(pos) { this._derivedPosition = pos; };
	Body.prototype.setKinematicAngle = function(angleInRadians) { this._derivedAngle = angleInRadians; };
	Body.prototype.setKinematicScale = function(scale) { this._scale = scale; };
			
	Body.prototype.derivePositionAndAngle = function(elapsed) {
		// no need if this is a static body, or kinematically controlled.
		if (this._isStatic || this._isKinematic)
			return;

		// if we are being ignored, be ignored!
		if (this._ignoreMe)
			return;
		
		// find the geometric center.
		var center = Vector2.Zero.copy();
		var vel = Vector2.Zero.copy();
		
		for(var i = 0; i < this._pointMassCount; i++)
		{
			center.addSelf(this._pointMasses[i].Position);
			vel.addSelf(this._pointMasses[i].Velocity);
		}
		
		center.mulFloatSelf(this._inversePointMassCount);
		vel.mulFloatSelf(this._inversePointMassCount);
		
		this._derivedPosition = center;
		this._derivedVelocity = vel;
		
		// find the average angle of all of the masses.
		var angle = 0;
		var originalSign = 1;
		var originalAngle = 0;
		for(var i = 0; i < this._pointMassCount; i++) {
			var baseNorm = this._baseShape.getVertices()[i].copy(); // Vector2
			baseNorm.normalize();
			
			var curNorm = this._pointMasses[i].Position.sub(this._derivedPosition); // Vector2
			curNorm.normalize();
			
			var dot = baseNorm.dotProduct(curNorm); // float
			if (dot > 1.0) { dot = 1.0; };
			if (dot < -1.0) { dot = -1.0; };
			
			var thisAngle = Math.acos(dot); // float
			if (!VectorTools.isCCW(baseNorm, curNorm)) { thisAngle = -thisAngle; };
			
			if (i == 0) {
				originalSign = (thisAngle >= 0.0) ? 1 : -1;
				originalAngle = thisAngle;
			} else {
				var diff = (thisAngle - originalAngle); // float
				var thisSign = (thisAngle >= 0.0) ? 1 : -1; // int
				
				if ((JellyPrerequisites.absf(diff) > JellyPrerequisites.PI) && (thisSign != originalSign)) {
					thisAngle = (thisSign == -1) ? (JellyPrerequisites.PI + (JellyPrerequisites.PI + thisAngle)) : ((JellyPrerequisites.PI - thisAngle) - JellyPrerequisites.PI);
				};
			};
			
			angle += thisAngle;
		};
		
		angle *= this._inversePointMassCount;
		this._derivedAngle = angle;
		
		// now calculate the derived Omega, based on change in angle over time.
		var angleChange = (this._derivedAngle - this._lastAngle); // float
		if (JellyPrerequisites.absf(angleChange) >= JellyPrerequisites.PI)
		{
			if (angleChange < 0.0)
				angleChange = angleChange + JellyPrerequisites.TWO_PI;
			else
				angleChange = angleChange - JellyPrerequisites.TWO_PI;
		}

		this._derivedOmega = angleChange / elapsed;

		this._lastAngle = this._derivedAngle;
	};

	Body.prototype.updateEdgeInfo = function(forceUpdate) { // bool(have to be updated?)
		if(((!this._isStatic) && (!this._ignoreMe)) || (forceUpdate)) {
			for (var i = 0; i < this._boundaryCount; i++) {
				var j = (i < (this._boundaryCount-1)) ? i + 1 : 0; // int

				var e = this._pointMasses[j].Position.sub(this._pointMasses[i].Position); // Vector2
				this._edgeInfo[i].length = e.normalize();
				this._edgeInfo[i].dir = e;
				// TODO: maybe here is a bug: if y is nearly zero slope should be infinite
				this._edgeInfo[i].slope = (JellyPrerequisites.absf(e.y) < 1.0e-08) ? 0.0 : (e.x / e.y);
			};
		};
	};

	Body.prototype.getDerivedPosition = function() { return this._derivedPosition; };
	Body.prototype.getDerivedAngle = function() { return this._derivedAngle; };
	Body.prototype.getDerivedVelocity = function() { return this._derivedVelocity; };
	Body.prototype.getDerivedOmega = function() { return this._derivedOmega; };

	Body.prototype.getScale = function() { return this._scale; };

	Body.prototype.accumulateInternalForces = function() {
		if(this.useSprings)
			this.springPhysics.accumulateInternalForces();
		if(this.usePressure)
			this.pressurePhysics.accumulateInternalForces(this);
	};

	// Handle external forces
	Body.prototype.accumulateExternalForces = function() {
		var length = this._externalForces.length;
		for(var i = 0; i < length; i++) {
			this._externalForces[i].call(this, this);
		};
	};

	Body.prototype.addExternalForce = function(forceCallback) {
		if (this._externalForces.indexOf(forceCallback) === - 1) {
			this._externalForces.push(forceCallback);
		};
	};

	Body.prototype.removeExternalForce = function(forceCallback) {
		var index = this._externalForces.indexOf(forceCallback);
		if (index !== - 1) {
			this._externalForces.splice(index, 1);
		};
	};

	Body.prototype.clearExternalForces = function() {
		this._externalForces.length = 0;
	};
	// End of External forces



	Body.prototype.integrate = function(elapsed) { // float
		if (this._isStatic || this._ignoreMe) { return; };
		
		for(var i = 0; i < this._pointMassCount; i++)
			this._pointMasses[i].integrateForce(elapsed);
	};

	Body.prototype.dampenVelocity = function() {
		if (this._isStatic || this._ignoreMe) { return; }

		for(var i = 0; i < this._pointMassCount; i++)
			this._pointMasses[i].Velocity.mulFloatSelf(this._velocityDamping);
	};

	Body.prototype.updateAABB = function(elapsed, forceUpdate) { // float, bool 
		forceUpdate = forceUpdate || false;
		if (((!this._isStatic) && (!this._ignoreMe)) || (forceUpdate)) {
			this._aabb.clear();
			for(var i = 0; i < this._boundaryCount; i++) {
				var p = this._pointMasses[i].Position.copy(); // Vector2
				this._aabb.expandToInclude(p);
				
				// expanding for velocity only makes sense for dynamic objects.
				if (!this._isStatic) {
					p.weightedAddSelf(this._pointMasses[i].Velocity, elapsed);
					this._aabb.expandToInclude(p);
				};
			};
		};
	};

	Body.prototype.getAABB = function() { return this._aabb; };

	Body.prototype.contains = function(pt) { // Vector2
		// basic idea: draw a line from the point to a point known to be outside the body.  count the number of
		// lines in the polygon it intersects.  if that number is odd, we are inside.  if it's even, we are outside.
		// in this implementation we will always use a line that moves off in the positive X direction from the point
		// to simplify things.
		var endPt = new Vector2(this._aabb.Max.x + 0.1, pt.y); // Vector2
		
		// line we are testing against goes from pt -> endPt.
		var inside = false; // bool
		var edgeSt = this._pointMasses[0].Position; // Vector2
		var edgeEnd = new Vector2(0.0, 0.0); // Vector2
		var c = this._boundaryCount; // int
		for(var i = 0; i < c; i++) {
			// the current edge is defined as the line from edgeSt -> edgeEnd.
			if(i < (c - 1))
				edgeEnd = this._pointMasses[i + 1].Position;
			else
				edgeEnd = this._pointMasses[0].Position;
			
			// perform check now...
			if(((edgeSt.y <= pt.y) && (edgeEnd.y > pt.y)) || ((edgeSt.y > pt.y) && (edgeEnd.y <= pt.y))) {
				// this line crosses the test line at some point... does it do so within our test range?
				var mult = (pt.y - edgeSt.y) / (edgeEnd.y - edgeSt.y);
				var hitX = edgeSt.x + (mult * (edgeEnd.x - edgeSt.x));
				//var slope = this._edgeInfo[i].slope; 
				//slope = (edgeEnd.x - edgeSt.x) / (edgeEnd.Y - edgeSt.Y); // float
				
				//var hitX = edgeSt.x + ((pt.y - edgeSt.y) * slope); // float
				
				if((hitX >= pt.x) && (hitX <= endPt.x))
					inside = !inside;
			};
			edgeSt = edgeEnd;
		};
		
		return inside;
	};

	Body.prototype.getIsStatic = function() { return this._isStatic; };
	Body.prototype.setIsStatic = function(val) { this._isStatic = val; };

	Body.prototype.getIgnoreMe = function() { return this._ignoreMe; };
	Body.prototype.setIgnoreMe = function(setting) { this._ignoreMe = setting; };

	Body.prototype.getBoundaryCount = function() { return this._boundaryCount; };
	Body.prototype.getPointMassCount = function() { return this._pointMassCount; };
	Body.prototype.getPointMasses = function() { return this._pointMasses; };
	Body.prototype.getPointMass = function(index) { return this._pointMasses[index]; };

	Body.prototype.addGlobalForce = function(pt, force) { //  const Vector2&,  const Vector2&
		var R = this._derivedPosition.sub(pt); // Vector2

		var torqueF = R.crossProduct(force); // float
		
		for (var i = 0; i < this._pointMassCount; i++)
		{
			var massPoint = this._pointMasses[i];
			var toPt = massPoint.Position.sub(this._derivedPosition); // Vector2
			var torque = toPt.rotate(-JellyPrerequisites.HALF_PI); // Vector2
			
			massPoint.Force.weightedAddSelf(torque, torqueF);
			massPoint.Force.addSelf(force);
		}
	};

	Body.prototype.addGlobalRotationForce = function(forceLength) { // float
		for (var i = 0; i < this._pointMassCount; i++)
		{
			var massPoint = this._pointMasses[i];
			var toPt = massPoint.Position.sub(this._derivedPosition); // Vector2
			var counterClockwiseDirection = toPt.getPerpendicular();

			massPoint.Force.weightedAddSelf(counterClockwiseDirection, forceLength);
		}
	};

	Body.prototype.getVelocityDamping = function() { return this._velocityDamping; }; // returns float
	Body.prototype.setVelocityDamping = function(val) { this._velocityDamping = val; }; // float

	// TODO: this is only used by mouse interaction
	Body.prototype.getClosestPointMass = function(pos, dist) { // Vector2, float
		var closestSQD = 100000.0; // float
		var closest = -1; // int

		for(var i = 0; i < this._pointMassCount; i++)
		{
			var thisD = (pos.sub(this._pointMasses[i].Position)).lengthSquared(); // float
			if (thisD < closestSQD)
			{
				closestSQD = thisD;
				closest = i;
			}
		}
		
		dist = Math.sqrt(closestSQD); // float
		return {
			"pointMassId": closest,
			"distance": dist
		};
	};

	Body.prototype.getIsKinematic = function() { return this._isKinematic; };
	Body.prototype.setIsKinematic = function(val) { this._isKinematic = val; };

	Body.prototype.getObjectTag = function() { return this._objectTag; };
	Body.prototype.setObjectTag = function(obj) { this._objectTag = obj; };

	/*
	 * user data
	 */
	Body.prototype.setUserData = function(key, data) {
		this._userData[key] = data;
		return this;
	};

	Body.prototype.getUserData = function(key) {
		return this._userData[key];
	};

	/*
	 * contact listeners
	 */
	// add callbacks
	Body.prototype.onContact = function(callback) {
		this._onContactCallbacks.push(callback);
		return this;
	};

	Body.prototype.onStartContact = function(callback) {
		this._onStartContactCallbacks.push(callback);
		return this;
	};

	Body.prototype.onEndContact = function(callback) {
		this._onEndContactCallbacks.push(callback);
		return this;
	};

	// call callback (this reference points to one body)
	Body.prototype.callOnContact = function(otherBody, contact) {
		for(var i = 0; i < this._onContactCallbacks.length; i++) {
			this._onContactCallbacks[i].apply(this, arguments);
		};
		this.contactSignal.emit(this, otherBody, contact);
	};

	Body.prototype.callOnStartContact = function(otherBody, contact) {
		for(var i = 0; i < this._onStartContactCallbacks.length; i++) {
			this._onStartContactCallbacks[i].apply(this, arguments);
		};
		this.startContactSignal.emit(this, otherBody, contact);
	};

	Body.prototype.callOnEndContact = function(otherBody) {
		for(var i = 0; i < this._onEndContactCallbacks.length; i++) {
			this._onEndContactCallbacks[i].apply(this, arguments);
		};
		this.endContactSignal.emit(this, otherBody);
	};

	/*
	 * before/after update
	 */
	//add callbacks
	Body.prototype.withUpdate = function(callback) {
		this._withUpdateCallbacks.push(callback);
		return this;
	};

	Body.prototype.beforeUpdate = function(callback) {
		this._beforeUpdateCallbacks.push(callback);
		return this;
	};

	Body.prototype.afterUpdate = function(callback) {
		this._afterUpdateCallbacks.push(callback);
		return this;
	};

	// call callback (this reference points to one body)
	Body.prototype.callWithUpdate = function(timePassed) {
		for(var i = 0; i < this._withUpdateCallbacks.length; i++) {
			this._withUpdateCallbacks[i].apply(this, arguments);
		};
	};

	Body.prototype.callBeforeUpdate = function(timePassed) {
		for(var i = 0; i < this._beforeUpdateCallbacks.length; i++) {
			this._beforeUpdateCallbacks[i].apply(this, arguments);
		};
	};

	Body.prototype.callAfterUpdate = function(timePassed) {
		for(var i = 0; i < this._afterUpdateCallbacks.length; i++) {
			this._afterUpdateCallbacks[i].apply(this, arguments);
		};
	};


	/*
	 * Drawing
	 */
	Body.prototype.debugDraw = function(debugDraw) {
		if(!this.isVisible(debugDraw)) return;
		
		if(this.useSprings)
			this.springPhysics.debugDraw(debugDraw, this);
		this.debugDrawAABB(debugDraw);
		this.debugDrawGlobalShape(debugDraw);
		this.debugDrawPolygon(debugDraw);
		this.debugDrawPointMasses(debugDraw);
		this.debugDrawMiddlePoint(debugDraw);
		this.debugDrawVelocity(debugDraw);
		this.debugDrawAngle(debugDraw);
		this.debugDrawTypeAndId(debugDraw);
		this.debugDrawTarget(debugDraw);
	};

	Body.prototype.debugDrawAABB = function(debugDraw) {
		this._aabb.debugDraw(debugDraw);
	};

	Body.prototype.debugDrawGlobalShape = function(debugDraw) {
		debugDraw.drawPolyline(this._globalShape, "gray", 0.5, 1);
	};

	Body.prototype.debugDrawPolygon = function(debugDraw) {
		var positions = _.pluck(this._pointMasses, "Position");
		positions.length = this._boundaryCount;
		debugDraw.drawPolyline(positions, "white", 1.0, 1);
	};

	Body.prototype.debugDrawPointMasses = function(debugDraw) {
		for(var i = 0; i <  this._pointMassCount; i++)
			debugDraw.drawRectangle(this._pointMasses[i].Position, 3, "white", 1.0);
	};

	Body.prototype.debugDrawMiddlePoint = function(debugDraw) {
		debugDraw.drawRectangle(this._derivedPosition, 5, "lightgreen", 1.0);
	};

	Body.prototype.debugDrawVelocity = function(debugDraw) {
		debugDraw.drawLine(
			this._derivedPosition,
			this._derivedPosition.add(this._derivedVelocity),
			"violet",
			1.0,
			1
		);
	};

	Body.prototype.debugDrawAngle = function(debugDraw) {
		var up = Vector2.YAxis.rotate(this._derivedAngle);
		debugDraw.drawLine(
			this._derivedPosition.add(up),
			this._derivedPosition,
			"red",
			1.0,
			1
		);
		
		var right = up.getLeftPerpendicular();
		debugDraw.drawLine(
			this._derivedPosition,
			this._derivedPosition.add(right),
			"lightgreen",
			1.0,
			1
		);
	};

	Body.prototype.debugDrawTypeAndId = function(debugDraw) {
		debugDraw.drawTextWorld(
			"Body" + (this.useSprings ? " : Spring" : "") + (this.usePressure ? " : Pressure": ""),
			new Vector2(this._aabb.Min.x, this._aabb.Max.y),
			"lightgrey",
			0.8,
			"top"
		);
	};

	Body.prototype.debugDrawTarget = function(debugDraw) {
		if(!this.target) return;
		var target = this._world.getBodyById(this.target);

		if(target) {
			debugDraw.drawLine(
				this._derivedPosition,
				target.getDerivedPosition(),
				"darkgrey",
				0.8,
				1
			);
		}
	};

	Body.prototype.isVisible = function(debugDraw) {
		return debugDraw.isVisible(this._aabb);
	};

	Body.prototype.toJson = function() {
		var resultJson = {
			"class": "Body",
			"shape": this.getBaseShape().toJson(),
			"pointMasses": [],
			"translate": this.getDerivedPosition().toJson(),
			"rotate": this.getDerivedAngle(),
			"scale": this.getScale().toJson(),
			"isKinematic": this.getIsKinematic()
		};

		for(var i = 0; i < this._pointMassCount; i++)
			resultJson.pointMasses.push(this._pointMasses[i].Mass);

		if(this.useSprings)
			this.springPhysics.toJson(resultJson);
		if(this.usePressure)
			this.pressurePhysics.toJson(resultJson);

		return resultJson;
	};
	
	Body.prototype.isSpringBody = function() { return this.useSprings; };
	Body.prototype.isPressureBody = function() { return this.usePressure; };
	
	Body.prototype.getSpringPhysics = function() { return this.springPhysics; };
	Body.prototype.getPressurePhysics = function() { return this.pressurePhysics; };

	return Body;
});
