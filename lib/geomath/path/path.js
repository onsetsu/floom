define([
	"physics/jello",
	"geomath/path/segment",
	"geomath/path/curve",
	"geomath/path/pathsmoother",
	"geomath/path/pathfitter",
	"geomath/path/pathflattener",
	"geomath/path/line"
], function(Jello, Segment, Curve, PathSmoother, PathFitter, PathFlattener, Line) {
	var Path = mini.Class.subclass({
		initialize: function() {
			this.segments = [];
			this.curves = [];
			this.isClosed = false;
		},
		
		/*
		 * ease pathes
		 */
		smooth: function() {
			new PathSmoother(this).smooth();

			return this;
		},
		
		simplify: function(tolerance) {
			if (this.segments.length > 2) {
				var fitter = new PathFitter(this, tolerance || 2.5);
				this.setSegments(fitter.fit());
			}
			return this;
		},
		
		flatten: function(maxDistance) {
			var flattener = new PathFlattener(this),
				pos = 0,
				step = flattener.length / Math.ceil(flattener.length / maxDistance),
				end = flattener.length + (this.isClosed ? -step : step) / 2;
			var segments = [];
			while (pos <= end) {
				segments.push(new Segment(flattener.evaluate(pos, 0)));
				pos += step;
			}
			this.setSegments(segments);
			
			return this;
		},
		
		// tests for overlapping pathes
		contains: function(path) {
		},
		
		intersects: function(path) {
		},
		
		getIntersections: function(path) {
		},
		
		// create new pathes by combining 2 overlapping ones
		intersect: function(path) {
		},
		
		unite: function(path) {
		},
		
		exclude: function(path) {
		},
		
		closed: function() {
			return this.isClosed;
		},
		
		close: function(isClosed) {
			this.isClosed = isClosed;
			
			return this;
		},
		
		copy: function () {
		},
		
		/*
		 * construction helper
		 */
		get: function(index) {
			return this.segments[index];
		},
		
		getSegments: function() {
			return this.segments;
		},
		
		getCurrentSegment: function() {
			return this.get(this.segments.length - 1);
		},
		
		setSegments: function(segments) {
			this.segments = segments;
			
			return this;
		},
		
		add: function(segment) {
			this.segments.push(segment);
			
			return this;
		},
		
		insert: function(segment, i) {
			this.segments.splice(i, 0, segment);
			
			return this;
		},
		
		remove: function(index) {
			this.segments.splice(index, 1);
			
			return this;
		},
		
		reverse: function() {
			var newSegments = [];

			for (var i = this.segments.length -1; i >= 0; i--) {
				newSegments.push(this.get(i).reverse());
			}
			
			this.setSegments(newSegments);
			
			return this;
		},
		
		lineTo: function(vector) {
			this.add(new Segment(vector));
			
			return this;
		},
		
		// internal implementation using relative out- and inHandle and absolute to
		_cubicCurve: function(fromOutHandle, toInHandle, to) {
			this.getCurrentSegment().outHandle.set(fromOutHandle);
			this.add(new Segment(to, toInHandle, undefined));
			
			return this;
		},
		
		// all parameters are absolute points
		cubicCurveTo: function(fromOutHandle, toInHandle, to) {
			return this._cubicCurve(
				fromOutHandle.sub(this.getCurrentSegment().point),
				toInHandle.sub(to),
				to
			);
		},
		
		quadraticCurveTo: function(handle, to) {
			var current = this.getCurrentSegment().point;
			return this.cubicCurveTo(
				handle.add(current.sub(handle).divFloat(3)),
				handle.add(to.sub(handle).divFloat(3)),
				to
			);
		},
		
		curveTo: function(through, to, t) {
			var t1 = 1 - t;
			var current = this.getCurrentSegment().point;
			var handle = through
				.sub(current.mulFloat(t1 * t1))
				.sub(to.mulFloat(t * t))
				.divFloat(2 * t * t1);
			// TODO: check for handle.isNan
			return this.quadraticCurveTo(handle, to);
		},
		
		arcTo: function(through, to) {
			var current = this.getCurrentSegment(),
				from = current.point;
			
			var l1 = new Line(from.add(through).divFloat(2),
						through.sub(from).rotate(90 * Math.PI / 180), true),
				l2 = new Line(through.add(to).divFloat(2),
						to.sub(through).rotate(90 * Math.PI / 180), true),
				line = new Line(from, to),
				throughSide = line.getSide(through),
				center = l1.intersect(l2, true);
			if (!center) {
				if (!throughSide)
					return this.lineTo(to);
				throw new Error(
						'Cannot create an arc with the given arguments');
			}
			var vector = from.sub(center);
			var extent = vector.getDirectedAngle(to.sub(center));
			var centerSide = line.getSide(center);
			if (centerSide === 0) {
				extent = throughSide * Math.abs(extent);
			} else if (throughSide === centerSide) {
				extent += extent < 0 ? 360 : -360;
			}

			var ext = Math.abs(extent),
				count =  ext >= 360 ? 4 : Math.ceil(ext / 90),
				inc = extent / count,
				half = inc * Math.PI / 360,
				z = 4 / 3 * Math.sin(half) / (1 + Math.cos(half)),
				segments = [];
				
			for (var i = 0; i <= count; i++) {
				var pt = to,
					out = null;
				if (i < count) {
					out = vector.rotate(90 * Math.PI / 180).mulFloat(z);
					pt = center.add(vector);
				}
				if (i === 0) {
					current.setOutHandle(out);
				} else {
					var _in = vector.rotate(-90 * Math.PI / 180).mulFloat(z);
					segments.push(new Segment(pt, _in, out));
				}
				vector = vector.rotate(inc * Math.PI / 180);
			}
			
			for(var i = 0; i < segments.length; i++)
				this.add(segments[i]);

			return this;
		},
		
		lineBy: function(vector) {
			this.add(new Segment(vector.add(this.getCurrentSegment().point)));
			
			return this;
		},
		
		// all parameters are relative points (from current waypoint)
		cubicCurveBy: function(fromOutHandle, toInHandle, to) {
			return this._cubicCurve(
				fromOutHandle,
				toInHandle.sub(to),
				to.add(this.getCurrentSegment().point)
			);
		},
		
		// all parameters are relative points (from current waypoint)
		quadraticCurveBy: function(handle, to) {
			var current = this.getCurrentSegment().point;
			return this.quadraticCurveTo(current.add(handle), current.add(to));
		},
		
		curveBy: function(through, to, t) {
			var current = this.getCurrentSegment().point;
			return this.curveTo(current.add(through), current.add(to), t);
		},
		
		arcBy: function(through, to) {
			var current = this.getCurrentSegment().point;
			return this.arcTo(current.add(through), current.add(to));
		},
		
		/*
		 * 
		 */
		tangentAt: function() {},
		positionAt: function() {},
		map: function() {},
		
		/*
		 * 
		 */
		toClosedShape: function () {
			var closedShape = new Jello.ClosedShape().begin();
			for(var i = 0; i < this.segments.length; i++)
				closedShape.addVertex(this.get(i).point);
			return closedShape.finish();
		},
		
		/*
		 * drawing utilities
		 */
		draw: function() {
			for(var i = 0; i < this.segments.length; i++)
				this.segments[i].draw();
			for(var i = 0; i < this.curves.length; i++)
				this.curves[i].draw();
			
			// draw curves
			env.renderer.drawPathSegments(
				this,
				"orange"
			);
		}
	});
	
	var kappa = 0.5522847498307936,
	ellipseSegments = [
		new Segment(new Jello.Vector2(-1, 0), new Jello.Vector2(0, kappa ), new Jello.Vector2(0, -kappa)),
		new Segment(new Jello.Vector2(0, -1), new Jello.Vector2(-kappa, 0), new Jello.Vector2(kappa, 0 )),
		new Segment(new Jello.Vector2(1, 0), new Jello.Vector2(0, -kappa), new Jello.Vector2(0, kappa )),
		new Segment(new Jello.Vector2(0, 1), new Jello.Vector2(kappa, 0 ), new Jello.Vector2(-kappa, 0))
	];

	function createEllipse(center, radius) {
		var segments = new Array(4);
		for (var i = 0; i < 4; i++) {
			var segment = ellipseSegments[i];
			segments[i] = new Segment(
				segment.point.mulFloat(radius).add(center),
				segment.inHandle.mulFloat(radius),
				segment.outHandle.mulFloat(radius)
			);
		}
		return new Path()
			.setSegments(segments)
			.reverse()
			.close(true);
	}

	// Specialized primitive Constructors
	Path.Line = function(from, to) {
		return new Path()
			.lineTo(from)
			.lineTo(to);
	};

	Path.Circle = function(center, radius) {
		return createEllipse(center, radius);
	};

	Path.Rectangle = function(min, max) {
		return new Path()
			.lineTo(min)
			.lineTo(new Jello.Vector2(min.x, max.y))
			.lineTo(max)
			.lineTo(new Jello.Vector2(max.x, min.y))
			.close(true);
	};
	// ...

	
	// enable direkt access to Segment and Curve
	Path.Segment = Segment;
	Path.Curve = Curve;
	
	return Path;
});
