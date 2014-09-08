define([
	"engine/core/bloob",
	"engine/game",
	"engine/input/input",
	"engine/view/canvas",
	"assets/loader",
	"debug/debug"
], function(
	Bloob,
	Game,
	Input,
	Canvas,
	Loader,
	Debug
) {
	var BloobGame = Game.subclass({
		initialize: function() {
			Game.prototype.initialize.apply(this, arguments);
			
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
		RightButton: "rightclick"
	});
	
	return BloobGame;
});
