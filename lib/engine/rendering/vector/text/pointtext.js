define([

], function() {
	var PointText = mini.Class.subclass({
		initialize: function(vector, text) {
			this.point = vector;
			this.text = text;
		},
		
		draw: function() {
			env.renderer.drawTextWorld(this.text, this.point, "#00ff00", 1.0, 'bottom');
		}
	});
	
	return PointText;
});
