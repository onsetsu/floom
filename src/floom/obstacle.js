import Vector2 from "./../external/vector2.js";

	var Obstacle = function(options) {
		this.type = options.type;
		if (options.type === 'circle') {
			this.position = new Vector2(options.position.x, options.position.y);
			this.radius = options.radius;
		}
		if (options.type === 'capsul') {
			this.position = {
				start: new Vector2(options.position.start.x, options.position.start.y),
				end: new Vector2(options.position.end.x, options.position.end.y),
			};
			this.radius = options.radius;
		}
	};

	Obstacle.prototype.toJSON = function() {
		let settings = {
			type: this.type,
			position: this.position,
			radius: this.radius
		};

		return Object.assign({}, settings)
	};

	Obstacle.fromJSON = function(settings) {
		return new Obstacle({ ...settings })
	};
	
	export default Obstacle;
