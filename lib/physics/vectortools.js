define(["physics/vector2"], function(Vector2) {
	var VectorTools = {
		// should project v onto n and subtract the vector twice to get the reflected vector
		// TODO: at least thats the plan
		"reflectVector": function(v, n, out) {
			throw Error("TODO: implement: reflect Vector");
			if(typeof out === "undefined") {
				var ret = v.sub(n.mulFloat(v.dotProduct(n) * 2.0));
				return ret;
			} else {
				var dot = v.dotProduct(n);
	            out.set(v.sub(n.mulFloat(2.0 * dot)));
			};
		},
		"isCCW": function(a, b) {
			var perp = a.getPerpendicular();
			var dot = b.dotProduct(perp);
			return (dot >= 0.0);
		},
		"degToRad": function(deg) { return deg * (PI_OVER_ONE_EIGHTY); },
		"radToDeg": function(rad) { return rad * (ONE_EIGHTY_OVER_PI); },
		"lineIntersect": function(ptA, ptB, ptC, ptD, 
									hitPt, Ua, Ub) {
			Ua = 0.0;
			Ub = 0.0;
			
			var denom = ((ptD.y - ptC.y) * (ptB.x - ptA.x)) - ((ptD.x - ptC.x) * (ptB.y - ptA.y));
			
			// if denom == 0, lines are parallel - being a bit generous on this one..
			if (absf(denom) < 0.000001)
				return false;

			var UaTop = ((ptD.x - ptC.x) * (ptA.y - ptC.y)) - ((ptD.y - ptC.y) * (ptA.x - ptC.x));
			var UbTop = ((ptB.x - ptA.x) * (ptA.y - ptC.y)) - ((ptB.y - ptA.y) * (ptA.x - ptC.x));

			Ua = UaTop / denom;
			Ub = UbTop / denom;			
				
			if ((Ua >= 0.0) && (Ua <= 1.0) && (Ub >= 0.0) && (Ub <= 1.0))
			{
				// these lines intersect!
				// hitPt as out parameter
				hitPt.set(ptA.add((ptB.sub(ptA)).mulFloat(Ua)));
				return true;
			};
			
			hitPt.set(Vector2.Zero);
			return false;
		},
		"calculateSpringForceVelAVelB": function(posA, velA, posB, velB, springD, springK, damping) {
			var BtoA = posA.sub(posB);
			var dist = BtoA.length();
			if (dist > 0.0001)
				BtoA.divFloatSelf(dist);
			else
				BtoA.set(Vector2.Zero);
			
			dist = springD - dist;
			
			var relVel = velA.sub(velB);
			var totalRelVel = relVel.dotProduct(BtoA);
			
			BtoA.mulFloatSelf((dist * springK) - (totalRelVel * damping));
			
			return BtoA;  	
		}
	};

	return VectorTools;
});
