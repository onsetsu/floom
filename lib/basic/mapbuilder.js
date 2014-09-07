define([
	"basic/utils",
	"engine/input/input",
	"engine/input/tool",
	"engine/map/entity",
	"engine/rendering/texture",
	"engine/rendering/texture/smarttexture",
	"engine/time/timer",
	"engine/rendering/image",
	"engine/rendering/animationsheet",
	"engine/rendering/drawcallback",
	"physics/jello",
	"floom/floom",
	"assets/loader"
], function(
	Utils,
	Input,
	Tool,
	Entity,
	Texture,
	SmartTexture,
	Timer,
	Image,
	AnimationSheet,
	DrawCallback,
	Jello,
	Floom,
	Loader
) {
	var MapBuilder = {
		"onLoad": function(callBack) {
			MapBuilder.__callback__ = callBack;
			return MapBuilder;
		},
		"generateRoundShape": function(m, r, startAngle, endAngle, step, context, callback) {
			var innerAddVertex = function(i) {
				callback.call(
					context,
					m.add(
						new Jello.Vector2(
							Math.cos(-i * (Math.PI / 180)),
							Math.sin(-i * (Math.PI / 180))
						).mulFloat(r)
					)
				);
			};
			step = step || 1;
			step = Math.abs(step);
			if(startAngle < endAngle)
				for(var i = startAngle; i <= endAngle; i += step)
					innerAddVertex(i);
			else
				for(var i = startAngle; i >= endAngle; i -= step)
					innerAddVertex(i);
		},
		// Enhance given world with several bodies, etc. for testing purpose.
		"setUpTestMap": function(layer, world) {
			if(layer.name === "fluid")
				return MapBuilder.setUpLiquidLayer(layer, world);
			
			if(typeof MapBuilder.__callback__ == "function")
				MapBuilder.__callback__();
		},
		testMapExtensions: [],
		"setUpLiquidLayer": function(layer, world) {
			env.camera.jumpToPoint(new Jello.Vector2(0, 15));

			// Shape for sample loft
			var groundShape = new Jello.ClosedShape()
				.begin();
			MapBuilder.generateRoundShape(new Jello.Vector2(0,0), 15.0, 270, 90, 20, groundShape, groundShape.addVertex);
			groundShape
				.addVertex(new Jello.Vector2(  0,-20))
				.addVertex(new Jello.Vector2(-20,-20))
				.addVertex(new Jello.Vector2(-20, 20))
				.addVertex(new Jello.Vector2(  0, 20))
				.finish();

			// Sample loft
			var loft = Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(groundShape)
				.pointMasses(Utils.Array.fill(0, groundShape.getVertices().length))
				.translate(new Jello.Vector2(-120, 16))
				.rotate(Math.PI/2)
				.scale(Jello.Vector2.One.copy())
				.isKinematic(false)
				.build();

			// create fluid System
			var fluidSystem = new Floom.System(layer, world);
			
			// create custom Materials
			var mat0 = fluidSystem.createNewMaterial()
				.setParticleMass(0.5);
	
			var mat1 = fluidSystem.createNewMaterial()
				.setParticleMass(1.0);
	
			var mat2 = fluidSystem.createNewMaterial()
				.setParticleMass(2.0)
				.setIsElastic(true);
	
			var mat3 = fluidSystem.createNewMaterial()
				.setParticleMass(4.0);
			
			// create Particles of these Materials
			new Floom.Group(fluidSystem, -45,  5,  0, 25,  0.1, 0, mat0);
			new Floom.Group(fluidSystem,   5,  5, 50, 25, -0.1, 0, mat1);
			new Floom.Group(fluidSystem, -45, 30,  0, 50,  0.1, 0, mat2);
			new Floom.Group(fluidSystem,   5, 30, 50, 50, -0.1, 0, mat3);
		    
		    // initialize specific datGui for the fluid System
			fluidSystem.createDatGui();
			
			layer.setFluidSystem(fluidSystem);
			
			layer.enabled = true;
		}
	};

	return MapBuilder;
});


