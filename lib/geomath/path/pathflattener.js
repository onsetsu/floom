define([
	"geomath/path/segment",
	"geomath/path/curve",
	"physics/jello"
], function(
	Segment,
	Curve,
	Jello
) {
	var PathFlattener = mini.Class.subclass({
		initialize: function(path) {
			this.curves = []; 
			this.parts = []; 
			this.length = 0; 
			this.index = 0;

			var segments = path.segments,
				segment1 = segments[0],
				segment2,
				that = this;

			function addCurve(segment1, segment2) {
				var curve = Curve.getValues(segment1, segment2);
				that.curves.push(curve);
				that._computeParts(curve, segments.indexOf(segment1), 0, 1);
			}

			for (var i = 1, l = segments.length; i < l; i++) {
				segment2 = segments[i];
				addCurve(segment1, segment2);
				segment1 = segment2;
			}
			if (path.closed())
				addCurve(segment2, segments[0]);
		},

		_computeParts: function(curve, index, minT, maxT) {
			if ((maxT - minT) > 1 / 32 && !Curve.isFlatEnough(curve, 0.25)) {
				var curves = Curve.subdivide(curve);
				var halfT = (minT + maxT) / 2;
				this._computeParts(curves[0], index, minT, halfT);
				this._computeParts(curves[1], index, halfT, maxT);
			} else {
				var x = curve[6] - curve[0],
					y = curve[7] - curve[1],
					dist = Math.sqrt(x * x + y * y);
				if (dist > 0.00001) {
					this.length += dist;
					this.parts.push({
						offset: this.length,
						value: maxT,
						index: index
					});
				}
			}
		},

		getParameterAt: function(offset) {
			var i, j = this.index;
			for (;;) {
				i = j;
				if (j == 0 || this.parts[--j].offset < offset)
					break;
			}
			for (var l = this.parts.length; i < l; i++) {
				var part = this.parts[i];
				if (part.offset >= offset) {
					this.index = i;
					var prev = this.parts[i - 1];
					var prevVal = prev && prev.index == part.index ? prev.value : 0,
						prevLen = prev ? prev.offset : 0;
					return {
						value: prevVal + (part.value - prevVal)
							* (offset - prevLen) /  (part.offset - prevLen),
						index: part.index
					};
				}
			}
			var part = this.parts[this.parts.length - 1];
			return {
				value: 1,
				index: part.index
			};
		},

		evaluate: function(offset, type) {
			var param = this.getParameterAt(offset);
			return Curve.evaluate(this.curves[param.index], param.value, type);
		}
	});

	return PathFlattener;
});
