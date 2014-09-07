define([
	"physics/queue",
	"physics/objectpool",
	"physics/vector2",
	"physics/aabb",
	"physics/quadtree",
	"physics/grid",
	"physics/bodycollisioninfo",
	"physics/contactmanager"
], function(
	Queue,
	ObjectPool,
	Vector2,
	AABB,
	QuadTree,
	Grid,
	BodyCollisionInfo,
	ContactManager
) {
	var World = function() {
		// default values
		this.mBodies = [];
		this.mJoints = [];
		this.mRays = [];
		this._triggerFields = [];

		this._grid = new Grid(this);
		
		this.mCollisionList = []; // array of BodyCollisionInfo
		this.collisionPool = new ObjectPool(BodyCollisionInfo);

		this.contactManager = new ContactManager();

		var min = new Vector2(-20,-20);
		var max = new Vector2(20,20);
		this.setWorldLimits(min, max);
		this._quadTree = new QuadTree(this, new AABB(min.mulFloat(10), max.mulFloat(10)));
		
		this.mPenetrationThreshold = 0.3;
		this.mPenetrationCount = 0;
		
		this.gravitation = World.defaultGravitation.copy();
		var that = this;
		this.gravitationCallback = function() { that.applyGravitationTo.apply(that, arguments); };
	};

	World.defaultGravitation = new Vector2(0, -9.81);
	World.useQuadTree = true;
	
	World.prototype.setWorldLimits = function(min, max) {
		this._grid.setWorldLimits(min, max);
		
		// update bitmasks for all bodies.
		for(var i = 0; i < this.mBodies.length; i++)
			this.updateBodyBitmask(this.mBodies[i]);
	};

	// Idea: Divide the world into a 32x32 grid
	// determine in which grid spaces the object is present
	// adjust its bitmask like this
	World.prototype.updateBodyBitmask = function(body) {
		this._grid.updateBodyBitmask(body);
	};

	// TODO: move to utility methods
	World.prototype.pushIfMissing = function(array, item) {
		// check for already existing.
		var exists = false;
		var len = array.length;
		for(var i = 0; i < len; i++)
			if(array[i] == item) {
				exists = true;
				break;
			};
		
		// do not add an already existing item
		if (!exists) {
			array.push(item);
		}
		
		// return true if the given element was pushed, otherwise false
		return !exists;
	};

	// TODO: move to utility methods
	World.prototype.removeIfExisting = function(array, item) {
		var index = array.indexOf(item);
		if (index !== -1) {
			array.splice(index, 1);
			return true;
		}
		return false;
	};

	World.prototype.addBody = function(body) {
		if(this.pushIfMissing(this.mBodies, body)) {
			this._quadTree.addBody(body);
			// TODO: introduce possibility to not be affected by gravity
			body.addExternalForce(this.gravitationCallback);
		}
	};

	World.prototype.removeBody = function(body) {
		if(this.removeIfExisting(this.mBodies, body)) {
			this._quadTree.removeBody(body);
		};
	};

	World.prototype.addJoint = function(joint) {
		this.pushIfMissing(this.mJoints, joint);
	};

	World.prototype.removeJoint = function(joint) {
		this.removeIfExisting(this.mJoints, joint);
	};

	World.prototype.addRay = function(ray) {
		this.pushIfMissing(this.mRays, ray);
	};

	World.prototype.removeRay = function(ray) {
		this.removeIfExisting(this.mRays, ray);
	};

	World.prototype.addTriggerField = function(triggerField) {
		this.pushIfMissing(this._triggerFields, triggerField);
	};

	World.prototype.removeTriggerField = function(triggerField) {
		this.removeIfExisting(this._triggerFields, triggerField);
	};

	World.prototype.getBodies = function() {
		return this.mBodies;
	};

	World.prototype.getBody = function(index) {
		if ((index >= 0) && (index < this.mBodies.length))
			return this.mBodies[index];
		return undefined;
	};

	World.prototype.getBodyById = function(id) {
		for(var i = 0; i < this.mBodies.length; i++)
			if(this.mBodies[i].id == id) {
				return this.mBodies[i];
			};
		return undefined;
	};

	World.prototype.applyGravitationTo = function(body) {
		body.addGlobalForce(
			body.getDerivedPosition().copy(),
			this.gravitation
		);
	};

	World.prototype.update = function(timePassed) {
		this.mPenetrationCount = 0;
		
		// Free all existing collisions for reuse.
		for (var i in this.mCollisionList)
			this.collisionPool.freeForUse(this.mCollisionList[i]);
		this.mCollisionList.length = 0;

		for (var i in this.mBodies)
			this.mBodies[i].callBeforeUpdate(timePassed);
		
		// first, accumulate all forces acting on PointMasses.
		for(var i in this.mBodies)
		{
			var body = this.mBodies[i];

			if(body.getIsStatic() || body.getIgnoreMe()) { continue; }
			
			body.derivePositionAndAngle(timePassed);
			body.accumulateExternalForces();
			body.accumulateInternalForces();
		}
		
		// accumulate distance joints
		for(var i in this.mJoints)
			this.mJoints[i].applyForce(timePassed);
		
		// now integrate.
		for(var i in this.mBodies)
		{
			//if this.mBodies[i].getIsStatic()) { continue; }
			
			this.mBodies[i].integrate(timePassed);
		}
		
		if(World.useQuadTree) this._quadTree.clear();

		// update all bounding boxes, then bitmasks and update quadtree node.
		for(var i in this.mBodies)
		{
			var body = this.mBodies[i];

			if(body.getIsStatic() || body.getIgnoreMe()) { continue; }
			
			body.updateAABB(timePassed);
			this.updateBodyBitmask(body);
			body.updateEdgeInfo();
			if(World.useQuadTree) this._quadTree.processBody(body);
		}

		this._grid.adjust(this);
		
		this._broadPhaseCollision();
		
		// now handle all collisions found during the update at once.
		this._handleCollisions();

		this.contactManager.processCollisions(this);
		
		// now dampen velocities.
		for (var i in this.mBodies)
		{
			if(this.mBodies[i].getIsStatic()) { continue; }
			this.mBodies[i].dampenVelocity();
		}

		for (var i in this.mBodies)
			this.mBodies[i].callWithUpdate(timePassed);

		for (var i in this.mBodies)
			this.mBodies[i].callAfterUpdate(timePassed);
		
		// update rays
		for (var i in this.mRays)
			this.mRays[i].update();
		
		// update trigger fields
		for (var i in this._triggerFields)
			this._triggerFields[i].update();
		
		// fire queued events
		this.queue().fire();
	};

	World.prototype.queue = function() {
		if(typeof this.__queue__ === "undefined")
			this.__queue__ = new Queue(this);
		return this.__queue__;
	};

	World.prototype._broadPhaseCollision = function() {

		// now check for collision.
		//for (var i in this.mBodies)
		//{
			//var bA = this.mBodies[i]; // Body* 
			//if (bA.getIsStatic() || bA.getIgnoreMe())
				//continue;
			
			
			// // OLD, BRUTE-FORCE COLLISION CHECKS USING BITMASKS ONLY FOR OPTIMIZATION.
			////for (int j = i + 1; j < mBodies.size(); j++)
			////{
			////	_goNarrowCheck( mBodies[i], mBodies[j] );
			////}
			
			
			//var bS = bA.mBoundStart; // Body::BodyBoundary*
			//var bE = bA.mBoundEnd; // Body::BodyBoundary*
			//var cur = bS.next; // Body::BodyBoundary*
			
			//var passedMyEnd = false; // bool
			//while (cur)
			//{
				//if (cur == bE)
				//{
				//	passedMyEnd = true;
				//}
				//else if ((cur.type == Begin) && (!passedMyEnd))
				//{
					// overlapping, do narrow-phase check on this body pair.
				//	this._goNarrowCheck(bA, cur.body);
				//}
				//else if (cur.type == End)
				//{
					// this is an end... the only situation in which we didn't already catch this body from its "begin",
					// is if the begin of this body starts before our own begin.
					//if (cur.body.mBoundStart.value <= bS.value)
					//{
						// overlapping, do narrow-phase check on this body pair.
					//	this._goNarrowCheck(bA, cur.body);
					//}
				//}
				//else if (cur.type == VoidMarker)
				//{
					//break;
				//}
				
				//cur = cur.next;
			//}
		//}
		
		if(World.useQuadTree)
			this._quadTree.broadPhaseCollision();
		else
			for (var i = 0; i < this.mBodies.length; i++) {
				var bA = this.mBodies[i];
				if (bA.getIsStatic() || bA.getIgnoreMe())
					continue;
				for (var j = i+1; j < this.mBodies.length; j++) {
					this._goNarrowCheck(bA, this.mBodies[j]);
				}
			}
	};

	World.prototype._goNarrowCheck = function(bI, bJ) {

		// grid-based early out.
		if (bI.getBitmaskX().intersects(bJ.getBitmaskX()) && 
			bI.getBitmaskY().intersects(bJ.getBitmaskY())) {
			// pass
		} else
			return;

		// EARLY OUT - these bodies do not share any collision types, so they do NOT collide
		if(!bI.getCollisionType().collidesWith(bJ.getCollisionType()))
			return;

		// broad-phase collision via AABB.
		var boxA = bI.getAABB(); // const AABB&
		var boxB = bJ.getAABB(); // const AABB& 

		// early out - do the AABBs intersect
		if (!boxA.intersects(boxB))
		{
			//printf("update - no AABB overlap.\n");
			return;
		}

		// okay, the AABB's of these 2 are intersecting.  now check for collision of A against B.
		this.bodyCollide(bI, bJ, this.mCollisionList);
		
		// and the opposite case, B colliding with A
		this.bodyCollide(bJ, bI, this.mCollisionList);
	};

	World.prototype.bodyCollide = function(bA, bB, infoList) { // Body*, Body*, std::vector<BodyCollisionInfo>&
		var bApmCount = bA.getBoundaryCount();
		
		var boxB = bB.getAABB();
		
		// check all PointMasses on bodyA for collision against bodyB.  if there is a collision, return detailed info.
		for (var i = 0; i < bApmCount; i++)
		{
			var pt = bA.getPointMass(i).Position; // Vector2
			
			// early out - if this point is outside the bounding box for bodyB, skip it!
			if (!boxB.contains(pt))
			{
				//printf("bodyCollide - bodyB AABB does not contain pt\n");
				continue;
			}
			
			// early out - if this point is not inside bodyB, skip it!
			if (!bB.contains(pt))
			{
				//printf("bodyCollide - bodyB does not contain pt\n");
				continue;
			}
			
			var collisionInfo = this._collisionPointBody(bB, bA, i);
			if(collisionInfo)
				infoList.push(collisionInfo);
			continue;
		}
	};

	World.prototype._getNormalOfPenetrationPoint = function(body, i, pointInPolygon) {
		// get index of the previous and next point in pointmasslist
		var numberOfPointMasses = body.getBoundaryCount();
		var previosPointIndex = (i > 0) ? i-1 : numberOfPointMasses - 1; // int
		var nextPointIndex = (i < numberOfPointMasses - 1) ? i + 1 : 0; // int
		
		// get previous and next point in pointmasslist
		var previosPoint = body.getPointMass(previosPointIndex).Position; // Vector2
		var nextPoint = body.getPointMass(nextPointIndex).Position; // Vector2
		
		// now get the normal for this point. (NOT A UNIT VECTOR)
		var fromPreviosPoint = pointInPolygon.sub(previosPoint); // Vector2
		var toNextPoint = nextPoint.sub(pointInPolygon); // Vector2
		
		var normalForPoint = fromPreviosPoint.add(toNextPoint); // Vector2
		normalForPoint.makePerpendicular();
	
		return normalForPoint;
	};
	
	World.prototype._collisionPointBody = function(penetratedBody, bodyOfPoint, indexOfPoint) {
		
		// penetration point variables	
		var pointInPolygon = bodyOfPoint.getPointMass(indexOfPoint).Position;
		var normalForPointInPolygon = this._getNormalOfPenetrationPoint(bodyOfPoint, indexOfPoint, pointInPolygon);
		
		// penetrated body variables
		var numberOfPointMasses = penetratedBody.getBoundaryCount();
		var indexEdgeStart = numberOfPointMasses;
		var indexEdgeEnd = 0;
		var edgeStart;
		var edgeEnd;
		var normalForEdge;
		
		// result variables
		var resultIndexEdgeStart = -1;
		var resultIndexEdgeEnd = -1;
		var resultPercentageToClosestPoint;
		var resultClosestPointOnEdge;
		var resultDistance = 1000000000.0;
		var resultEdgeNormal;
		
		var opposingEdgeAlreadyFound = false;
		var opposingEdge = false;
		
		while(indexEdgeStart--) {
		
			// Calculate closest point on the line that is tangent to each edge of the polygon.
			edgeStart = penetratedBody.getPointMass(indexEdgeStart).Position;
			edgeEnd = penetratedBody.getPointMass(indexEdgeEnd).Position;
			
			var percentageToClosestPoint = 
				(
					((pointInPolygon.x - edgeStart.x)*(edgeEnd.x - edgeStart.x))
					+
					((pointInPolygon.y - edgeStart.y)*(edgeEnd.y - edgeStart.y))
				)
				/
				(
					Math.pow((edgeEnd.x - edgeStart.x), 2)
					+
					Math.pow((edgeEnd.y - edgeStart.y), 2)
				);
			
			// Calculate closest point on each line segment (edge of the polygon) to the point in question.
			if(percentageToClosestPoint < 0)
				var closestPointOnEdge = edgeStart.copy();
			else if(percentageToClosestPoint > 1)
				var closestPointOnEdge = edgeEnd.copy();
			else
				var closestPointOnEdge = new Vector2(
					edgeStart.x + percentageToClosestPoint * (edgeEnd.x - edgeStart.x),
					edgeStart.y + percentageToClosestPoint * (edgeEnd.y - edgeStart.y)
				);
			
			// Calculate the distance from the closest point on each line segment to the point in question.
			var distance = Math.sqrt(
				Math.pow((pointInPolygon.x - closestPointOnEdge.x), 2) +
				Math.pow((pointInPolygon.y - closestPointOnEdge.y), 2)
			);
			
			var edgeNormal = edgeEnd.sub(edgeStart);
			edgeNormal = /*new Vector2(edgeNormal.y * -1, edgeNormal.x).copy();//*/edgeNormal.getPerpendicular();
			edgeNormal.normalize();
			
			var dot = normalForPointInPolygon.dotProduct(edgeNormal); // float

			opposingEdge = dot <= 0.0;

			// Find the minimum distance.
			if(
				// TODO: is this condition right????
				((!(opposingEdgeAlreadyFound)) && (opposingEdge || distance < resultDistance)) ||
				(opposingEdgeAlreadyFound && opposingEdge && distance < resultDistance)
			) {
				resultDistance = distance;
				resultIndexEdgeStart = indexEdgeStart;
				resultIndexEdgeEnd = indexEdgeEnd;
				resultPercentageToClosestPoint = percentageToClosestPoint;
				resultClosestPointOnEdge = closestPointOnEdge;
				resultEdgeNormal = edgeNormal;
			};
			if(opposingEdge) opposingEdgeAlreadyFound = true;
			
			indexEdgeEnd = indexEdgeStart;
		}

		var collisionInfo = this.collisionPool.createObject();
		collisionInfo.bodyA = bodyOfPoint; // Body
		collisionInfo.bodyB = penetratedBody; // Body

		collisionInfo.bodyApm = indexOfPoint; // int
		collisionInfo.bodyBpmA = resultIndexEdgeStart; // int
		collisionInfo.bodyBpmB = resultIndexEdgeEnd; // int

		collisionInfo.hitPt = resultClosestPointOnEdge; // Vector2	
		collisionInfo.edgeD = resultPercentageToClosestPoint; // float
		collisionInfo.norm = resultEdgeNormal; // Vector2	
		collisionInfo.penetration = resultDistance; // float
		return collisionInfo;
	};

	World.prototype._handleCollisions = function() {
		//printf("handleCollisions - count %d\n", mCollisionList.size());
		
		// handle all collisions!
		for (var i = 0; i < this.mCollisionList.length; i++)
		{
			var info = this.mCollisionList[i]; // BodyCollisionInfo
			
			var A = info.bodyA.getPointMass(info.bodyApm); // PointMass*
			var B1 = info.bodyB.getPointMass(info.bodyBpmA); // PointMass*
			var B2 = info.bodyB.getPointMass(info.bodyBpmB); // PointMass*

			// velocity changes as a result of collision.
			var bVel = (B1.Velocity.add(B2.Velocity)).mulFloat(0.5); // Vector2
			var relVel = A.Velocity.sub(bVel); // Vector2

			var relDot = relVel.dotProduct(info.norm); // float

			//printf("handleCollisions - relVel:[x:%f][y:%f] relDot:%f\n",
			//	   relVel.X, relVel.Y, relDot);
			
			// collision filter!
			//if (!mMaterialPairs[info.bodyA.Material, info.bodyB.Material].CollisionFilter(info.bodyA, info.bodyApm, info.bodyB, info.bodyBpmA, info.bodyBpmB, info.hitPt, relDot))
			//	continue;
			/*
			var cf = this.materialManager.getMaterialPair(info.bodyA.getMaterial(), info.bodyB.getMaterial()).Callback; // CollisionCallback*
			if (cf)
			{
				if (!cf.collisionFilter(info.bodyA, info.bodyApm, info.bodyB, info.bodyBpmA, info.bodyBpmB, info.hitPt, relDot))
					continue;
			}
			*/

			if (info.penetration > this.mPenetrationThreshold)
			{
				//Console.WriteLine("penetration above Penetration Threshold!!  penetration={0}  threshold={1} difference={2}",
				//    info.penetration, mPenetrationThreshold, info.penetration-mPenetrationThreshold);
				//printf("handleCollisions - penetration above threshold! threshold:%f penetration:%f diff:%f\n",
				//	   mPenetrationThreshold, info.penetration, info.penetration - mPenetrationThreshold);
				
				this.mPenetrationCount++;
				continue;
			}

			var b1inf = 1.0 - info.edgeD; // float
			var b2inf = info.edgeD; // float
			
			var b2MassSum = ((B1.Mass == 0.0) || (B2.Mass == 0.0)) ? 0.0 : (B1.Mass + B2.Mass); // float
			
			var massSum = A.Mass + b2MassSum; // float
			
			var Amove; // float
			var Bmove; // float
			if (A.Mass == 0.0)
			{
				Amove = 0.0;
				Bmove = (info.penetration) + 0.001;
			}
			else if (b2MassSum == 0.0)
			{
				Amove = (info.penetration) + 0.001;
				Bmove = 0.0;
			}
			else
			{
				Amove = (info.penetration * (b2MassSum / massSum));
				Bmove = (info.penetration * (A.Mass / massSum));
			}
			
			var B1move = Bmove * b1inf; // float
			var B2move = Bmove * b2inf; // float
			
			//printf("handleCollisions - Amove:%f B1move:%f B2move:%f\n",
			//	   Amove, B1move, B2move)
			//if(false) {
			if (A.Mass != 0.0)
			{
				A.Position.weightedAddSelf(info.norm, Amove);
			}
			
			if (B1.Mass != 0.0)
			{
				B1.Position.subSelf(info.norm.mulFloat(B1move));
			}
			
			if (B2.Mass != 0.0)
			{
				B2.Position.subSelf(info.norm.mulFloat(B2move));
			}
			//}
			var AinvMass = (A.Mass == 0.0) ? 0.0 : 1.0 / A.Mass; // float
			var BinvMass = (b2MassSum == 0.0) ? 0.0 : 1.0 / b2MassSum; // float
			
			var jDenom = AinvMass + BinvMass; // float
			var elas = 1.0 + info.bodyA.getMaterial().getCombineElasticity()(
				info.bodyA.getMaterial().getElasticity(),
				info.bodyB.getMaterial().getElasticity()
			);
			var numV = relVel.mulFloat(elas); // Vector2
			
			var jNumerator = numV.dotProduct(info.norm); // float
			jNumerator = -jNumerator;
			
			var j = jNumerator / jDenom; // float
			
			
			var tangent = info.norm.getPerpendicular(); // Vector2
			var friction = info.bodyA.getMaterial().getCombineFriction()(
				info.bodyA.getMaterial().getFriction(),
				info.bodyB.getMaterial().getFriction()
			);
			var fNumerator = relVel.dotProduct(tangent); // float
			fNumerator *= friction;
			var f = fNumerator / jDenom; // float

			// adjust velocity if relative velocity is moving toward each other.
			if (relDot <= 0.0001)
			{
				if (A.Mass != 0.0)
				{
					A.Velocity.addSelf((info.norm.mulFloat(j / A.Mass)).sub(tangent.mulFloat(f / A.Mass)));
				}
				
				if (b2MassSum != 0.0)
				{
					B1.Velocity.subSelf((info.norm.mulFloat((j / b2MassSum) * b1inf)).sub(tangent.mulFloat((f / b2MassSum) * b1inf)));
				}
				
				if (b2MassSum != 0.0)
				{
					B2.Velocity.subSelf((info.norm.mulFloat((j / b2MassSum) * b2inf)).sub(tangent.mulFloat((f / b2MassSum) * b2inf)));
				}
			}
		}
	};

	World.prototype.getClosestPointMass = function(pt, bodyID, pmID ) { //  Vector2, int, int
		bodyID = -1;
		pmID = -1;
		
		var closestD = 100000.0; // float
		for (var i = 0; i < this.mBodies.length; i++)
		{
			var dist = 0.0; // float
			var answer = this.mBodies[i].getClosestPointMass(pt, dist);
			pm = answer.pointMassId; // int
			dist = answer.distance; // float
			if (dist < closestD)
			{
				closestD = dist;
				bodyID = i;
				pmID = pm;
			}
		}
		
		return {
			"bodyId": bodyID,
			"pointMassId": pmID
		};
	};

	World.prototype.getBodyContaining = function(point) {
		for(var i = 0; i < this.mBodies.length; i++)
		{
			if (this.mBodies[i].contains(point))
				return mBodies[i];
		}
		return undefined;
	};

	World.prototype.getPenetrationThreshold = function() { return this.mPenetrationThreshold; };
	World.prototype.setPenetrationThreshold = function(val) { this.mPenetrationThreshold = val; };
	World.prototype.getPenetrationCount = function() { return this.mPenetrationCount; };

	World.prototype.debugDraw = function(debugDraw) {
		
		// draw quad tree
		if(World.useQuadTree) this._quadTree.debugDraw(debugDraw);
		
		// draw Grid
		this._grid.debugDraw(debugDraw);
		
		// draw Joints
		for(var i = 0; i < this.mJoints.length; i++) {
			this.mJoints[i].debugDraw(debugDraw);
		};
		
		// draw Bodies
		for(var i = 0; i < this.mBodies.length; i++) {
			this.mBodies[i].debugDraw(debugDraw);
		};
		
		// draw CollisionList
		for(var i = 0; i < this.mCollisionList.length; i++) {
			this.mCollisionList[i].debugDraw(debugDraw);
		};

		// draw Rays
		for(var i = 0; i < this.mRays.length; i++) {
			this.mRays[i].debugDraw(debugDraw);
		};

		// draw TriggerFields
		for(var i = 0; i < this._triggerFields.length; i++) {
			this._triggerFields[i].debugDraw(debugDraw);
		};
	};

	World.prototype.toJson = function() {
		var resultJson = {
			"bodies": {}
		};

		// convert each body
		/*
		for(var index in world.mBodies) {
			if(!world.mBodies.hasOwnProperty(index)) continue;

			var body = world.getBody(index);
			resultJson.bodies[body.id] = body.toJson();
		}
		*/
		
		return resultJson;
	};
	
	World.fromJson = function(worldJson) {
		var world = new World();
		
		/*
		for(var bodyName in worldJson.bodies) {
			if(!worldJson.bodies.hasOwnProperty(bodyName)) continue;
			var bodyJson = worldJson.bodies[bodyName];
			Body.fromJson(bodyJson, world);
		};
		*/
		
		return world;
	};
	
	return World;
});
