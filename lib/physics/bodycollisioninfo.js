define([
	"physics/vector2"
], function(
	Vector2
) {
	var BodyCollisionInfo = function() {
		this.bodyA = 0; // Body
		this.bodyB = 0; // Body

		this.bodyApm = 0; // int
		this.bodyBpmA = 0; // int
		this.bodyBpmB = 0; // int

		this.hitPt = new Vector2(0.0, 0.0); // Vector2	
		this.edgeD = 0.0; // float
		this.norm = new Vector2(0.0, 0.0); // Vector2	
		this.penetration = 0.0; // float
	};

	BodyCollisionInfo.prototype.Clear = function() {
		this.bodyA = 0; // Body
		this.bodyB = 0; // Body

		this.bodyApm = -1; // int
		this.bodyBpmA = -1; // int
		this.bodyBpmB = -1; // int

		this.hitPt = new Vector2(0.0, 0.0); // Vector2	
		this.edgeD = 0.0; // float
		this.norm = new Vector2(0.0, 0.0); // Vector2	
		this.penetration = 0.0; // float
	};

	BodyCollisionInfo.prototype.Log = function() {
		//printf("BCI bodyA:%d bodyB:%d bApm:%d bBpmA:%d, bBpmB:%d\n", bodyA, bodyB, bodyApm, bodyBpmA, bodyBpmB);
		//printf("	hitPt[%f][%f] edgeD:%f norm[%f][%f] penetration:%f\n",
		//	   hitPt.X, hitPt.Y, edgeD, norm.X, norm.Y, penetration);
	};

	/*
	 * Draw Collisions
	 */
	BodyCollisionInfo.prototype.debugDraw = function(debugDraw) {
		var color = "green";
		var opacity = 1.0;
		var lineWidth = 1;
		
		var hitPoint = this.hitPt;
		var penetrationTill = this.bodyA.getPointMass(this.bodyApm).Position;

		debugDraw.drawLine(hitPoint, penetrationTill, color, opacity, lineWidth);

		debugDraw.drawPlus(hitPoint, 3, color, opacity, lineWidth);
		debugDraw.drawPlus(penetrationTill, 3, color, opacity, lineWidth);
	};
	
	return BodyCollisionInfo;
});
