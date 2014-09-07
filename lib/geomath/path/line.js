define(["physics/jello"], function(Jello) {
	var Line = mini.Class.subclass({
		initialize: function Line(arg0, arg1, arg2, arg3, arg4) {
			var asVector = false;
			if (arguments.length >= 4) {
				this._px = arg0;
				this._py = arg1;
				this._vx = arg2;
				this._vy = arg3;
				asVector = arg4;
			} else {
				this._px = arg0.x;
				this._py = arg0.y;
				this._vx = arg1.x;
				this._vy = arg1.y;
				asVector = arg2;
			}
			if (!asVector) {
				this._vx -= this._px;
				this._vy -= this._py;
			}
		},

		getPoint: function() {
			return new Jello.Vector2(this._px, this._py);
		},

		getVector: function() {
			return new Jello.Vector2(this._vx, this._vy);
		},

		getLength: function() {
			return this.getVector().getLength();
		},

		intersect: function(line, isInfinite) {
			return Line.intersect(
					this._px, this._py, this._vx, this._vy,
					line._px, line._py, line._vx, line._vy,
					true, isInfinite);
		},

		getSide: function(point) {
			return Line.getSide(
					this._px, this._py, this._vx, this._vy,
					point.x, point.y, true);
		},

		getDistance: function(point) {
			return Math.abs(Line.getSignedDistance(
					this._px, this._py, this._vx, this._vy,
					point.x, point.y, true));
		},
		
		toString: function() {
			return "Line(" + this._px +
					", " + this._py +
					", " + this._vx +
					", " + this._vy +
					")";
		}
	});

	Line.intersect = function(apx, apy, avx, avy, bpx, bpy, bvx, bvy, asVector,
			isInfinite) {
		if (!asVector) {
			avx -= apx;
			avy -= apy;
			bvx -= bpx;
			bvy -= bpy;
		}
		var cross = bvy * avx - bvx * avy;
		if (cross >= 0.0001 || cross <= -0.0001) { // not zero
			var dx = apx - bpx,
				dy = apy - bpy,
				ta = (bvx * dy - bvy * dx) / cross,
				tb = (avx * dy - avy * dx) / cross;
			if ((isInfinite || 0 <= ta && ta <= 1)
					&& (isInfinite || 0 <= tb && tb <= 1))
				return new Jello.Vector2(
							apx + ta * avx,
							apy + ta * avy);
		}
	};

	Line.getSide = function(px, py, vx, vy, x, y, asVector) {
		if (!asVector) {
			vx -= px;
			vy -= py;
		}
		var v2x = x - px,
			v2y = y - py,
			ccw = v2x * vy - v2y * vx; 
		if (ccw === 0) {
			ccw = v2x * vx + v2y * vy; 
			if (ccw > 0) {
				v2x -= vx;
				v2y -= vy;
				ccw = v2x * vx + v2y * vy;
				if (ccw < 0)
					ccw = 0;
			}
		}
		return ccw < 0 ? -1 : ccw > 0 ? 1 : 0;
	};

	Line.getSignedDistance = function(px, py, vx, vy, x, y, asVector) {
		if (!asVector) {
			vx -= px;
			vy -= py;
		}
		var m = vy / vx, 
			b = py - m * px; 
		return (y - (m * x) - b) / Math.sqrt(m * m + 1);
	};

	return Line;
});
