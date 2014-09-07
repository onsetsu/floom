define([
	"geomath/path/segment",
	"physics/jello"
], function(
	Segment,
	Jello
) {
	var PathFitter = mini.Class.subclass({
		initialize: function(path, error) {
			this.points = [];
			var segments = path.segments,
				prev;
			for (var i = 0, l = segments.length; i < l; i++) {
				var point = segments[i].point.copy();
				if (!prev || !prev.equals(point)) {
					this.points.push(point);
					prev = point;
				}
			}
			this.error = error;
		},

		fit: function() {
			var points = this.points,
				length = points.length;
			this.segments = length > 0 ? [new Segment(points[0])] : [];
			if (length > 1)
				this.fitCubic(0, length - 1,
					points[1].sub(points[0]).normalizedCopy(),
					points[length - 2].sub(points[length - 1]).normalizedCopy());
			return this.segments;
		},
		
		// TODO: get further here

		fitCubic: function(first, last, tan1, tan2) {
			if (last - first == 1) {
				var pt1 = this.points[first],
					pt2 = this.points[last],
					dist = pt1.distance(pt2) / 3;
				this.addCurve([pt1, pt1.add(tan1.normalizedCopy().mulFloat(dist)),
						pt2.add(tan2.normalizedCopy().mulFloat(dist)), pt2]);
				return;
			}
			var uPrime = this.chordLengthParameterize(first, last),
				maxError = Math.max(this.error, this.error * this.error),
				split;
			for (var i = 0; i <= 4; i++) {
				var curve = this.generateBezier(first, last, uPrime, tan1, tan2);
				var max = this.findMaxError(first, last, curve, uPrime);
				if (max.error < this.error) {
					this.addCurve(curve);
					return;
				}
				split = max.index;
				if (max.error >= maxError)
					break;
				this.reparameterize(first, last, uPrime, curve);
				maxError = max.error;
			}
			var V1 = this.points[split - 1].sub(this.points[split]),
				V2 = this.points[split].sub(this.points[split + 1]),
				tanCenter = V1.add(V2).divFloat(2).normalizedCopy();
			this.fitCubic(first, split, tan1, tanCenter);
			this.fitCubic(split, last, tanCenter.negative(), tan2);
		},

		addCurve: function(curve) {
			var prev = this.segments[this.segments.length - 1];
			prev.setOutHandle(curve[1].sub(curve[0]));
			this.segments.push(
					new Segment(curve[3], curve[2].sub(curve[3])));
		},

		generateBezier: function(first, last, uPrime, tan1, tan2) {
			var epsilon = 1e-11,
				pt1 = this.points[first],
				pt2 = this.points[last],
				C = [[0, 0], [0, 0]],
				X = [0, 0];

			for (var i = 0, l = last - first + 1; i < l; i++) {
				var u = uPrime[i],
					t = 1 - u,
					b = 3 * u * t,
					b0 = t * t * t,
					b1 = b * t,
					b2 = b * u,
					b3 = u * u * u,
					a1 = tan1.normalizedCopy().mulFloat(b1),
					a2 = tan2.normalizedCopy().mulFloat(b2),
					tmp = this.points[first + i]
						.sub(pt1.mulFloat(b0 + b1))
						.sub(pt2.mulFloat(b2 + b3));
				C[0][0] += a1.dotProduct(a1);
				C[0][1] += a1.dotProduct(a2);
				C[1][0] = C[0][1];
				C[1][1] += a2.dotProduct(a2);
				X[0] += a1.dotProduct(tmp);
				X[1] += a2.dotProduct(tmp);
			}

			var detC0C1 = C[0][0] * C[1][1] - C[1][0] * C[0][1],
				alpha1, alpha2;
			if (Math.abs(detC0C1) > epsilon) {
				var detC0X  = C[0][0] * X[1]    - C[1][0] * X[0],
					detXC1  = X[0]    * C[1][1] - X[1]    * C[0][1];
				alpha1 = detXC1 / detC0C1;
				alpha2 = detC0X / detC0C1;
			} else {
				var c0 = C[0][0] + C[0][1],
					c1 = C[1][0] + C[1][1];
				if (Math.abs(c0) > epsilon) {
					alpha1 = alpha2 = X[0] / c0;
				} else if (Math.abs(c1) > epsilon) {
					alpha1 = alpha2 = X[1] / c1;
				} else {
					alpha1 = alpha2 = 0;
				}
			}

			var segLength = pt2.distance(pt1);
			epsilon *= segLength;
			if (alpha1 < epsilon || alpha2 < epsilon) {
				alpha1 = alpha2 = segLength / 3;
			}

			return [pt1, pt1.add(tan1.normalizedCopy().mulFloat(alpha1)),
					pt2.add(tan2.normalizedCopy().mulFloat(alpha2)), pt2];
		},

		reparameterize: function(first, last, u, curve) {
			for (var i = first; i <= last; i++) {
				u[i - first] = this.findRoot(curve, this.points[i], u[i - first]);
			}
		},

		findRoot: function(curve, point, u) {
			var curve1 = [],
				curve2 = [];
			for (var i = 0; i <= 2; i++) {
				curve1[i] = curve[i + 1].sub(curve[i]).mulFloat(3);
			}
			for (var i = 0; i <= 1; i++) {
				curve2[i] = curve1[i + 1].sub(curve1[i]).mulFloat(2);
			}
			var pt = this.evaluate(3, curve, u),
				pt1 = this.evaluate(2, curve1, u),
				pt2 = this.evaluate(1, curve2, u),
				diff = pt.sub(point),
				df = pt1.dotProduct(pt1) + diff.dotProduct(pt2);
			if (Math.abs(df) < 0.00001)
				return u;
			return u - diff.dotProduct(pt1) / df;
		},

		evaluate: function(degree, curve, t) {
			var tmp = curve.slice();
			for (var i = 1; i <= degree; i++) {
				for (var j = 0; j <= degree - i; j++) {
					tmp[j] = tmp[j].mulFloat(1 - t).add(tmp[j + 1].mulFloat(t));
				}
			}
			return tmp[0];
		},

		chordLengthParameterize: function(first, last) {
			var u = [0];
			for (var i = first + 1; i <= last; i++) {
				u[i - first] = u[i - first - 1]
						+ this.points[i].distance(this.points[i - 1]);
			}
			for (var i = 1, m = last - first; i <= m; i++) {
				u[i] /= u[m];
			}
			return u;
		},

		findMaxError: function(first, last, curve, u) {
			var index = Math.floor((last - first + 1) / 2),
				maxDist = 0;
			for (var i = first + 1; i < last; i++) {
				var P = this.evaluate(3, curve, u[i - first]);
				var v = P.sub(this.points[i]);
				var dist = v.x * v.x + v.y * v.y; 
				if (dist >= maxDist) {
					maxDist = dist;
					index = i;
				}
			}
			return {
				error: maxDist,
				index: index
			};
		}
	});

	return PathFitter;
});
