define([
	"engine/core/bloob",
	"engine/game",
	"logic/teleport",
	"engine/input/input",
	"engine/view/canvas",
	"physics/quadtree",
	"physics/world",
	"assets/loader",
	"debug/debug"
], function(
	Bloob,
	Game,
	Teleport,
	Input,
	Canvas,
	QuadTree,
	World,
	Loader,
	Debug
) {
	var BloobGame = Game.subclass({
		initialize: function() {
			Game.prototype.initialize.apply(this, arguments);
			
			this.testCanvas();
			this.testQuadTree();
			
			// prepare input
			env.input.initKeyboard();
			env.input.bind(Input.KEY.LEFT_ARROW, this.Left);
			env.input.bind(Input.KEY.RIGHT_ARROW, this.Right);
			env.input.bind(Input.KEY.UP_ARROW, this.Up);
			env.input.bind(Input.KEY.DOWN_ARROW, this.Down);

			env.input.bind(Input.KEY.M, "M");
			env.input.bind(Input.KEY.S, "S");
			env.input.bind(Input.KEY.D, "D");
			env.input.bind(Input.KEY.R, "R");

			// prepare input
			env.input.initMouse();
			env.input.bind(Input.KEY.MOUSE1, this.LeftButton);
			env.input.bind(Input.KEY.MOUSE2, this.RightButton);

			Loader.load(function() {
				env.sceneStack.loadAndRun("twoMaps");
			});
		},
		
		Left: "left",
		Right: "right",
		Up: "up",
		Down: "down",
		
		LeftButton: "leftclick",
		RightButton: "rightclick",

		testCanvas: function() {
			var testCanvas = {
				width: env.canvas.extent.x,
				height: env.canvas.extent.y,
				fixedSize: function() {
					env.canvas.fixedSize(testCanvas.width, testCanvas.height);
				},
				ratio: env.canvas.extent.x / env.canvas.extent.y,
				screenFit: function() {
					env.canvas.screenFit(testCanvas.ratio);
				}
			};
			if(Bloob.debug && Bloob.debug.datGui) {
				var canvasFolder = Bloob.debug.datGui.addFolder("Canvas");
				canvasFolder.open();
				canvasFolder.add(testCanvas, 'width');
				canvasFolder.add(testCanvas, 'height');
				canvasFolder.add(testCanvas, 'fixedSize');
				canvasFolder.add(testCanvas, 'ratio');
				canvasFolder.add(testCanvas, 'screenFit');
				canvasFolder.add(env.canvas, 'stretch');
				canvasFolder.add(env.canvas, 'fullScreen');
			}
		},

		testQuadTree: function() {
			if(Bloob.debug && Bloob.debug.datGui) {
				var quadTreeFolder = Bloob.debug.datGui.addFolder("QuadTree");
				quadTreeFolder.open();
				quadTreeFolder.add(QuadTree.Node, 'shouldDraw');
				quadTreeFolder.add(World, 'useQuadTree');
			}
		}
	});
	
	return BloobGame;
});
