requirejs.config({
    baseUrl: 'lib'
});

require(["engine/main", "bloob", "engine/view/canvas"], function(main, BloobGame, Canvas) {
	
	// canvas properties
	var canvasId = "bloobCanvas";
	var canvasWidth = 1000;
	var canvasHeight = 400;
	var canvasColor = "black";
	
	var canvas = new Canvas(canvasId)
		.fixedSize(canvasWidth, canvasHeight)
		//.screenFit(canvasWidth / canvasHeight)
		//.stretch()
		.color(canvasColor);
	
	// Start Game instance.
	main(BloobGame, canvas);
	
});