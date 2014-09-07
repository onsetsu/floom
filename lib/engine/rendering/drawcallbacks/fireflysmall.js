define([
	"engine/rendering/drawcallbacks/idrawcallback",
	"engine/rendering/image",
	"engine/rendering/drawcallback",
	"physics/jello"
], function(IDrawCallback, Image, DrawCallback, Jello) {
	
	var firefly1x1 = Image.get("firefly1x1.png");
	var firefly2x2 = Image.get("firefly2x2.png");

	return IDrawCallback.subclass({
		draw: function(entity, renderer) {
			if(!entity.fireflyImage) {
				if(!firefly1x1.data || !firefly2x2.data) return;
				entity.fireflyImage = Math.random() < 0.5 ? firefly1x1 : firefly2x2;
			}
			
			var imageData = entity.fireflyImage.data;
			
			// define source rectangle
			var sourceX = 0;
			var sourceY = 0;
			var sourceWidth = imageData.width;
			var sourceHeight = imageData.height;
			
			// define destination aabb
			var worldMiddlePoint = entity.getBody().getDerivedPosition();
			// scale extend down to meet the source's extent in screen coordinates
			var worldExtent = new Jello.Vector2(
				sourceWidth * env.renderer.singlePixelExtent.x,
				sourceHeight * env.renderer.singlePixelExtent.y
			);
			var aabb = new Jello.AABB(
				worldMiddlePoint.sub(worldExtent.divFloat(2)),
				worldMiddlePoint.add(worldExtent.divFloat(2))
			);

			return renderer.drawImageOnWorldAABB(imageData, aabb, sourceX, sourceY, sourceWidth, sourceHeight);
		}
	});
	
});
