define(["physics/jello"], function(Jello) {
	var Curve = mini.Class.subclass({
		initialize: function(segment1, segment2) {
			this.segment1 = segment1;
			this.segment2 = segment2;
		},
		
		draw: function() {
			env.renderer.drawLine(
				this.segment1.point,
				this.segment2.point,
				"lightgreen",
				1.0,
				1
			);
		}
	});
	
	Curve.getValues = function(segment1, segment2) {
		var p1 = segment1.point,
			h1 = segment1.outHandle,
			h2 = segment2.inHandle,
			p2 = segment2.point,
			values = [
				p1.x, p1.y,
				p1.x + h1.x, p1.y + h1.y,
				p2.x + h2.x, p2.y + h2.y,
				p2.x, p2.y
			];
		return values;
	};
	
	Curve.isFlatEnough = function(v, tolerance) {
		var p1x = v[0], p1y = v[1],
			c1x = v[2], c1y = v[3],
			c2x = v[4], c2y = v[5],
			p2x = v[6], p2y = v[7],
			ux = 3 * c1x - 2 * p1x - p2x,
			uy = 3 * c1y - 2 * p1y - p2y,
			vx = 3 * c2x - 2 * p2x - p1x,
			vy = 3 * c2y - 2 * p2y - p1y;
		return Math.max(ux * ux, vx * vx) + Math.max(uy * uy, vy * vy)
				< 10 * tolerance * tolerance;
	};
	
	Curve.subdivide = function(v, t) {
		var p1x = v[0], p1y = v[1],
			c1x = v[2], c1y = v[3],
			c2x = v[4], c2y = v[5],
			p2x = v[6], p2y = v[7];
		if (t === undefined)
			t = 0.5;
		var u = 1 - t,
			p3x = u * p1x + t * c1x, p3y = u * p1y + t * c1y,
			p4x = u * c1x + t * c2x, p4y = u * c1y + t * c2y,
			p5x = u * c2x + t * p2x, p5y = u * c2y + t * p2y,
			p6x = u * p3x + t * p4x, p6y = u * p3y + t * p4y,
			p7x = u * p4x + t * p5x, p7y = u * p4y + t * p5y,
			p8x = u * p6x + t * p7x, p8y = u * p6y + t * p7y;
		return [
			[p1x, p1y, p3x, p3y, p6x, p6y, p8x, p8y], 
			[p8x, p8y, p7x, p7y, p5x, p5y, p2x, p2y] 
		];
	};

	Curve.evaluate = function(v, t, type) {
		var p1x = v[0], p1y = v[1],
			c1x = v[2], c1y = v[3],
			c2x = v[4], c2y = v[5],
			p2x = v[6], p2y = v[7],
			tolerance = 0.00001,
			x, y;

		if (type === 0 && (t < tolerance || t > 1 - tolerance)) {
			var isZero = t < tolerance;
			x = isZero ? p1x : p2x;
			y = isZero ? p1y : p2y;
		} else {
			var cx = 3 * (c1x - p1x),
				bx = 3 * (c2x - c1x) - cx,
				ax = p2x - p1x - cx - bx,

				cy = 3 * (c1y - p1y),
				by = 3 * (c2y - c1y) - cy,
				ay = p2y - p1y - cy - by;
			if (type === 0) {
				x = ((ax * t + bx) * t + cx) * t + p1x;
				y = ((ay * t + by) * t + cy) * t + p1y;
			} else {
				if (t < tolerance && c1x === p1x && c1y === p1y
						|| t > 1 - tolerance && c2x === p2x && c2y === p2y) {
					x = p2x - p1x;
					y = p2y - p1y;
				} else if (t < tolerance) {
					x = cx;
					y = cy;
				} else if (t > 1 - tolerance) {
					x = 3 * (p2x - c2x);
					y = 3 * (p2y - c2y);
				} else {
					x = (3 * ax * t + 2 * bx) * t + cx;
					y = (3 * ay * t + 2 * by) * t + cy;
				}
				if (type === 3) {
					var x2 = 6 * ax * t + 2 * bx,
						y2 = 6 * ay * t + 2 * by;
					return (x * y2 - y * x2) / Math.pow(x * x + y * y, 3 / 2);
				}
			}
		}
		return type === 2 ? new Jello.Vector2(y, -x) : new Jello.Vector2(x, y);
	};

	return Curve;
});
