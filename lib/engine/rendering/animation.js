define([
	"engine/rendering/animationsheet"
], function(AnimationSheet) {
	var Animation = mini.Class.subclass({
		initialize: function(sheet, frameTime, order) {
			this.sheet = sheet;
			this.frameTime = frameTime;
			this.currentTime = 0;

			this.order = order;
			this.orderIndex = 0;
			this.tileNumber = this.order[this.orderIndex];
		},
		
		update: function() {
			this.currentTime += env.time.timePassed;
			
			while(this.currentTime >= this.frameTime) {
				this.currentTime -= this.frameTime;
				this.orderIndex = (this.orderIndex + 1) % this.order.length;
				this.tileNumber = this.order[this.orderIndex];
			};
		},
		
		draw: function(targetAABB) {
			this.sheet.draw(targetAABB, this.tileNumber);
		}
	});
	
	Animation.prototype.toJson = function() {
		var json = {
			sheet: this.sheet.toJson(),
			frameTime: this.frameTime,
			order: this.order
		};
		
		return json;
	};
	
	Animation.fromJson = function(json) {
		var animation = new Animation(AnimationSheet.fromJson(json.sheet), json.frameTime, json.order);
		
		return animation;
	};
	
	return Animation;
});
