define([
	"basic/shapebuilder",
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
	ShapeBuilder,
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
		"buildGroundRectangle": function(world, upperLeft, lowerRight, rotate) {
			var groundShape = ShapeBuilder.Shapes.Cube;

			var groundBody = Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(groundShape)
				.pointMasses(Utils.Array.fill(0, groundShape.getVertices().length))
				.translate(upperLeft.add(lowerRight).mulFloat(0.5))
				.rotate(rotate || 0)
				.scale(lowerRight.sub(upperLeft))
				.isKinematic(false)
				.edgeSpringK(300)
				.edgeSpringDamp(20)
				.shapeSpringK(150)
				.shapeSpringDamp(15)
				.build();

			return groundBody;
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
			if(layer.name === "gui")
				return MapBuilder.setUpGuiLayer(layer, world);
			if(layer.name === "fluid")
				return MapBuilder.setUpLiquidLayer(layer, world);
			if(layer.name === "title")
				return MapBuilder.setUpTitleLayer(layer, world);
			if(layer.name === "menu")
				return MapBuilder.setUpMenuLayer(layer, world);
			
			if(typeof MapBuilder.__callback__ == "function")
				MapBuilder.__callback__();
		},
		testMapExtensions: [],
		"setUpGuiLayer": function(layer, world) {
			/*
			 *  simple GUI element:
			 */
			
			// Entity
			var guiElement = new Entity("guiElement").addToLayer(layer);

			// Body
			guiElement.setBody(Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(ShapeBuilder.Shapes.Cube)
				.pointMasses(0)
				.translate(new Jello.Vector2(-15, 5))
				.rotate(0)
				.scale(Jello.Vector2.One.copy().mulFloat(4.0))
				.isKinematic(false)
				.build()
			);
			
			// Crate Texture
			guiElement.setTexture(new Texture("crate.png")
				.from([new Jello.Vector2(0, 500), new Jello.Vector2(0, 0), new Jello.Vector2(500, 0)]).to([0,1,2])
				.from([new Jello.Vector2(500, 0), new Jello.Vector2(500, 500), new Jello.Vector2(0, 500)]).to([2,3,0])
			);
		},
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
		},
		"setUpTitleLayer": function(layer, world) {
			// A falling weight
			var weight = new Entity("weight").addToLayer(layer);
			
			weight.setBody(Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(new Jello.ClosedShape()
					.begin()
					.addVertex(new Jello.Vector2(-1.0, -1.0))
					.addVertex(new Jello.Vector2(-0.7,  1.0))
					.addVertex(new Jello.Vector2( 0.7,  1.0))
					.addVertex(new Jello.Vector2( 1.0, -1.0))
					.finish())
				.pointMasses(1)
				.translate(new Jello.Vector2(0, 22))
				.rotate(0)
				.scale(new Jello.Vector2(3, 2))
				.isKinematic(false)
				.edgeSpringK(300.0)
				.edgeSpringDamp(5.0)
				.shapeSpringK(150.0)
				.shapeSpringDamp(5.0)
				.addInternalSpring(0, 2, 300, 10)
				.addInternalSpring(1, 3, 300, 10)
				.build()
			);
			
			weight.setTexture(new Texture("crate.png")
				.from([new Jello.Vector2(0, 500), new Jello.Vector2(0, 0), new Jello.Vector2(500, 0)]).to([0,1,2])
				.from([new Jello.Vector2(500, 0), new Jello.Vector2(500, 500), new Jello.Vector2(0, 500)]).to([2,3,0])
			);
			
			// Jello ball
			var jelloBall = new Entity("jelloBall").addToLayer(layer);
			
			jelloBall.setBody(Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(ShapeBuilder.Shapes.Ball)
				.pointMasses(1.0)
				.translate(new Jello.Vector2(0, -10))
				.rotate(0)
				.scale(Jello.Vector2.One.mulFloat(3.5))
				.isKinematic(false)
				.edgeSpringK(300.0)
				.edgeSpringDamp(20.0)
				.shapeSpringK(150.0)
				.shapeSpringDamp(1.0)
				.gasPressure(0.0)
				.build()
			);
			
			jelloBall.setTexture(new Texture("sample.png")
				.from([new Jello.Vector2(0, 32), new Jello.Vector2(0, 0), new Jello.Vector2(96, 0)]).to([3,4,5])
				.from([new Jello.Vector2(0, 64), new Jello.Vector2(0, 32), new Jello.Vector2(96, 0)]).to([2,3,5])
				.from([new Jello.Vector2(0, 64), new Jello.Vector2(96, 0), new Jello.Vector2(192, 0)]).to([2,5,6])
				.from([new Jello.Vector2(0, 96), new Jello.Vector2(0, 64), new Jello.Vector2(192, 0)]).to([1,2,6])
				.from([new Jello.Vector2(0, 96), new Jello.Vector2(192, 0), new Jello.Vector2(288, 0)]).to([1,6,7])
				.from([new Jello.Vector2(0, 128), new Jello.Vector2(0, 96), new Jello.Vector2(288, 0)]).to([0,1,7])
				.from([new Jello.Vector2(0, 128), new Jello.Vector2(288, 0), new Jello.Vector2(384, 0)]).to([0,7,8])
				.from([new Jello.Vector2(96, 128), new Jello.Vector2(0, 128), new Jello.Vector2(384, 0)]).to([15,0,8])
				.from([new Jello.Vector2(96, 128), new Jello.Vector2(384, 0), new Jello.Vector2(384, 32)]).to([15,8,9])
				.from([new Jello.Vector2(192, 128), new Jello.Vector2(96, 128), new Jello.Vector2(384, 32)]).to([14,15,9])
				.from([new Jello.Vector2(192, 128), new Jello.Vector2(384, 32), new Jello.Vector2(384, 64)]).to([14,9,10])
				.from([new Jello.Vector2(288, 128), new Jello.Vector2(192, 128), new Jello.Vector2(384, 64)]).to([13,14,10])
				.from([new Jello.Vector2(288, 128), new Jello.Vector2(384, 64), new Jello.Vector2(384, 96)]).to([13,10,11])
				.from([new Jello.Vector2(384, 128), new Jello.Vector2(288, 128), new Jello.Vector2(384, 96)]).to([12,13,11])
			);

			// Ground
			var ground = new Entity("ground").addToLayer(layer);

			ground.setBody(Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(ShapeBuilder.Shapes.Cube)
				.pointMasses(0)
				.translate(new Jello.Vector2(0,-15))
				.rotate(0)
				.scale(new Jello.Vector2(10, 2))
				.isKinematic(false)
				.build()
			);
			
			ground.setTexture(new Texture("sample.png")
				.from([new Jello.Vector2(0, 32), new Jello.Vector2(0, 0), new Jello.Vector2(96, 0)]).to([0,1,2])
				.from([new Jello.Vector2(0, 64), new Jello.Vector2(0, 32), new Jello.Vector2(96, 0)]).to([2,3,0])
			);
		},
		"setUpMenuLayer": function(layer, world) {			
			// Jello ball
			var jelloBall = new Entity("jelloBall").addToLayer(layer);
			
			jelloBall.setBody(Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(ShapeBuilder.Shapes.Ball)
				.pointMasses(1.0)
				.translate(new Jello.Vector2(0, -10))
				.rotate(0)
				.scale(Jello.Vector2.One.mulFloat(300.5))
				.isKinematic(false)
				.edgeSpringK(300.0)
				.edgeSpringDamp(20.0)
				.shapeSpringK(150.0)
				.shapeSpringDamp(1.0)
				.gasPressure(0.0)
				.build()
			);
			
			jelloBall.setTexture(new Texture("sample.png")
				.from([new Jello.Vector2(0, 32), new Jello.Vector2(0, 0), new Jello.Vector2(96, 0)]).to([3,4,5])
				.from([new Jello.Vector2(0, 64), new Jello.Vector2(0, 32), new Jello.Vector2(96, 0)]).to([2,3,5])
				.from([new Jello.Vector2(0, 64), new Jello.Vector2(96, 0), new Jello.Vector2(192, 0)]).to([2,5,6])
				.from([new Jello.Vector2(0, 96), new Jello.Vector2(0, 64), new Jello.Vector2(192, 0)]).to([1,2,6])
				.from([new Jello.Vector2(0, 96), new Jello.Vector2(192, 0), new Jello.Vector2(288, 0)]).to([1,6,7])
				.from([new Jello.Vector2(0, 128), new Jello.Vector2(0, 96), new Jello.Vector2(288, 0)]).to([0,1,7])
				.from([new Jello.Vector2(0, 128), new Jello.Vector2(288, 0), new Jello.Vector2(384, 0)]).to([0,7,8])
				.from([new Jello.Vector2(96, 128), new Jello.Vector2(0, 128), new Jello.Vector2(384, 0)]).to([15,0,8])
				.from([new Jello.Vector2(96, 128), new Jello.Vector2(384, 0), new Jello.Vector2(384, 32)]).to([15,8,9])
				.from([new Jello.Vector2(192, 128), new Jello.Vector2(96, 128), new Jello.Vector2(384, 32)]).to([14,15,9])
				.from([new Jello.Vector2(192, 128), new Jello.Vector2(384, 32), new Jello.Vector2(384, 64)]).to([14,9,10])
				.from([new Jello.Vector2(288, 128), new Jello.Vector2(192, 128), new Jello.Vector2(384, 64)]).to([13,14,10])
				.from([new Jello.Vector2(288, 128), new Jello.Vector2(384, 64), new Jello.Vector2(384, 96)]).to([13,10,11])
				.from([new Jello.Vector2(384, 128), new Jello.Vector2(288, 128), new Jello.Vector2(384, 96)]).to([12,13,11])
			);
			
			/*
			 *  Mouse Interaction
			 */
			layer.setInteraction(function() {
				if(typeof this.world === "undefined") return;
				
				if(env.input.state("left")) {
					env.sceneStack.pop();
				};
			});
		}
	};

	return MapBuilder;
});


