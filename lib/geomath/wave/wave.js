define(["physics/jello", "basic/utils"], function(Jello, Utils) {
	
	var PI = Jello.JellyPrerequisites.PI;
	
	var Wave = mini.Class.subclass({
		initialize: function(amplitude, frequency, phase, offset) {
			this.amplitude = amplitude;
			this.frequency = frequency;
			this.phase = phase;
			this.offset = offset;
			
			this.x = 0;
		}
	});
	
	var SineWave = Wave.subclass({
		update: function (deltaTime) {
			this.x += deltaTime;
			
			return this.amplitude * Math.sin(this.frequency * this.x + this.phase) + this.offset;
		}
	});
	
	var TriangleWave = Wave.subclass({
		update: function (deltaTime) {
			this.x += deltaTime;
			
			return (2 * this.amplitude / PI) * Math.asin(Math.sin(this.frequency * this.x + this.phase)) + this.offset;
		}
	});
	
	var SquareWave = Wave.subclass({
		update: function (deltaTime) {
			this.x += deltaTime;
			
			return this.amplitude * Math.sin(this.frequency * this.x + this.phase).sign() + this.offset;
		}
	});
	
	var SawToothWave = Wave.subclass({
		update: function (deltaTime) {
			this.x += deltaTime;
			
			return (-2 * this.amplitude / PI) * Math.atan(1 / Math.tan((this.frequency * this.x + this.phase) / 2)) + this.offset;
		}
	});
	
	var ConstantWave = Wave.subclass({
		initialize: function(offset) {
			Wave.prototype.initialize(0, 0, 0, offset);
		},
		
		update: function (deltaTime) {
			this.x += deltaTime;
			
			return this.offset;
		}
	});
	
	Wave.SineWave = SineWave;
	Wave.TriangleWave = TriangleWave;
	Wave.SquareWave = SquareWave;
	Wave.SawToothWave = SawToothWave;
	Wave.ConstantWave = ConstantWave;

	return Wave;
});
