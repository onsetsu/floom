define([

], function() {
	/*
	 * Helpers
	 */
	var standardEpsilon = 0.0001;
	var nearlyEquals = function(a, b, epsilon) {
		return Math.abs(a - b) <= epsilon;
	};

	/*
	 * SingleIntersection
	 */
	var SingleIntersection = function(pos, body, edgeNumber) {
		this.position = pos;
		this.body = body;
		this.edgeNumber = edgeNumber;
	};

	/*
	 * RayIntersectionObject
	 */
	var RayIntersectionObject = function() {
		this.intersections = [];
	};

	RayIntersectionObject.prototype.addIntersection = function(pos, body, edgeNumber) {
		this.intersections.push(new SingleIntersection(pos, body, edgeNumber));
	};

	RayIntersectionObject.prototype.sortByDistanceTo = function(point) {
		this.intersections = _.sortBy(
			this.intersections,
			function(intersection) {
				return intersection.position.distance(point);
			}
		);
	};

	RayIntersectionObject.prototype.flush = function() {
		this.intersections.length = 0;
	};

	/*
	 * PrivateIntersectionObject
	 */
	var PrivateIntersectionObject = function() {
		this.points = [];
	};

	PrivateIntersectionObject.prototype.InsertSolution = function(v) { // Vector2
		this.points.push(v);
	};

	PrivateIntersectionObject.prototype.NumberOfSolutions = function() { // returns int
		return this.points.length;
	};

	/*
	 * Ray
	 */
	var Ray = function(world, origin, direction) {
		this.world = world;
		this.origin = origin;
		this.direction = direction;
		
		this.intersections = new RayIntersectionObject();
	};

	Ray.prototype.update = function() {
		this.intersections.flush();

		this.intersectWorld(this.world);
	};

	Ray.prototype.intersectWorld = function(world) {
		var numberOfBodies = world.mBodies.length;
		for(var i = 0; i < numberOfBodies; i++) {
			this.intersectBody(world.getBody(i));
		};
	};

	Ray.prototype.intersectBody = function(body) {
		if(!this.intersectAABB(body.getAABB()))
			return;

		var intersects = false;
		for(var i = 0; i < body.getBoundaryCount(); i++) {
			var j = (i < (body.getBoundaryCount()-1)) ? i + 1 : 0;
			var answer = this.intersectLineSegment(
				body.getPointMass(i).Position,
				body.getPointMass(j).Position
			);
			if(answer.NumberOfSolutions() == 0)
				continue;
			intersects = true;
			this.intersections.addIntersection(answer.points[0], body, i);
		};

		return intersects;
	};

	Ray.prototype.intersectAABB = function(aabb) {
		/*
		 * check if all points of the aabb are on one side of the line (line, not ray)
		var tlAbove = aabb.getTopLeft().sub(this.origin).crossProduct(this.direction) > 0;
		var trAbove = aabb.getTopRight().sub(this.origin).crossProduct(this.direction) > 0;
		var brAbove = aabb.getBottomRight().sub(this.origin).crossProduct(this.direction) > 0;
		var blAbove = aabb.getBottomLeft().sub(this.origin).crossProduct(this.direction) > 0;
		var intersects = (!(tlAbove && trAbove && brAbove && blAbove) && (tlAbove || trAbove || brAbove || blAbove));
		*/
		
		var intersectsOriginal = false;
		if(this.intersectLineSegment(aabb.getTopLeft(), aabb.getTopRight()).NumberOfSolutions() > 0)
			intersectsOriginal = true;
		if(this.intersectLineSegment(aabb.getTopRight(), aabb.getBottomRight()).NumberOfSolutions() > 0)
			intersectsOriginal = true ;
		if(this.intersectLineSegment(aabb.getBottomRight(), aabb.getBottomLeft()).NumberOfSolutions() > 0)
			intersectsOriginal = true;
		if(this.intersectLineSegment(aabb.getBottomLeft(), aabb.getTopLeft()).NumberOfSolutions() > 0)
			intersectsOriginal = true;

		return intersectsOriginal;
	};

	// Ray to LineSegment
	Ray.prototype.intersectLineSegment = function(startPoint, endPoint) {
		var result = new PrivateIntersectionObject();
		
		var answer = this.PrivateLineToLineIntersection(this.origin, this.origin.add(this.direction), startPoint, endPoint);
		if(answer.intersects)
		{
			if (answer.r >= 0)
			{
				if (answer.s >= 0 && answer.s <= 1)
				{
					result.InsertSolution(this.origin.add(this.direction.mulFloat(answer.r)));
				}
			}
		}
		return result;
	};
	
	// Used only within this namespace
	Ray.prototype.PrivateLineToLineIntersection = function(vertex1, vertex2, vertex3, vertex4) {
		var d; // float
		
		//Make sure the lines aren't parallel
		var vertex1to2 = vertex2.sub(vertex1); // Vector2
		var vertex3to4 = vertex4.sub(vertex3); // Vector2
		if(vertex1to2.y / vertex1to2.x != vertex3to4.y / vertex3to4.x)
		{
			d = vertex1to2.x * vertex3to4.y - vertex1to2.y * vertex3to4.x;
			if (d != 0)
			{
				var vertex3to1 = vertex1.sub(vertex3); // Vector2
				return {
					"intersects": true,
					"r": (vertex3to1.y * vertex3to4.x - vertex3to1.x * vertex3to4.y) / d,
					"s": (vertex3to1.y * vertex1to2.x - vertex3to1.x * vertex1to2.y) / d
				};
			}
		}
		return {
			"intersects": false,
			"r": 0,
			"s": 0
		};
	};


	Ray.prototype.getReflection = function() {
		if(this.intersections.intersections.length == 0)
			return {
				"position": Vector2.Zero.copy(),
				"direction": Vector2.Zero.copy()
			};

		// get first intersection
		this.intersections.sortByDistanceTo(this.origin);
		var reflIntersection = this.intersections.intersections[0];
		
		var i = reflIntersection.edgeNumber;
		var j = (i + 1) % reflIntersection.body.getBoundaryCount();
		var vStart = reflIntersection.body.getPointMass(i).Position;
		var vEnd = reflIntersection.body.getPointMass(j).Position;
		var edgeDirection = vEnd.sub(vStart);
		var edgeNormal = edgeDirection.getPerpendicular();
		var reflectedDirection = this.direction.reflectOnNormal(edgeNormal);

		return {
			"position": reflIntersection.position,
			"direction": reflectedDirection
		};
	};

	Ray.prototype.debugDraw = function(debugDraw) {
		var color = "yellow";
		var opacity = 1.0;
		var lineWidth = 1;
		
		debugDraw.drawDot(this.origin, 3, color, opacity);
		debugDraw.drawLine(
			this.origin,
			this.origin.add(this.direction.mulFloat(1000)),
			color,
			opacity,
			lineWidth
		);
		
		this.intersections.sortByDistanceTo(this.origin);
		
		for(var i = 0; i < this.intersections.intersections.length; i++) {
			debugDraw.drawPlus(this.intersections.intersections[i].position, 10, color, opacity, lineWidth);
		};
		
		this.debugDrawReflection(debugDraw);
	};

	Ray.prototype.debugDrawReflection = function(debugDraw) {
		if(this.intersections.intersections.length == 0)
			return;

		var color = "lightblue";
		var opacity = 1.0;
		var lineWidth = 1;
		
		var reflection = this.getReflection();

		debugDraw.drawDot(reflection.position, 3, color, opacity);
		debugDraw.drawLine(
			reflection.position,
			reflection.position.add(reflection.direction.mulFloat(1000)),
			color,
			opacity,
			lineWidth
		);
	};
	
	return Ray;
});
