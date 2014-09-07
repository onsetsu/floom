define([
	"basic/shapebuilder",
	"basic/utils",
	"engine/input/input",
	"engine/input/tool",
	"engine/map/entity",
	"behaviour/trait",
	"engine/rendering/texture",
	"engine/rendering/texture/smarttexture",
	"engine/time/timer",
	"engine/rendering/image",
	"engine/rendering/animationsheet",
	"engine/rendering/drawcallback",
	"geomath/geomath",
	"physics/jello",
	"floom/floom",
	"assets/loader"
], function(
	ShapeBuilder,
	Utils,
	Input,
	Tool,
	Entity,
	Trait,
	Texture,
	SmartTexture,
	Timer,
	Image,
	AnimationSheet,
	DrawCallback,
	GeoMath,
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
			if(layer.name === "main")
				return MapBuilder.setUpMainLayer(layer, world);
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
		// Enhance given world with several bodies, etc. for testing purpose.
		"setUpMainLayer": function(layer, world) {
			
			var particleBluePrint = Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(ShapeBuilder.Shapes.Particle)
				.pointMasses(1);
			
			/*
			 *  controllable blob:
			 */
			// Entity
			var blockEntity = new Entity("controllableBlob").addToLayer(layer);
			
			// Body
			var pb = Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(ShapeBuilder.Shapes.Ball)
				.pointMasses(1.0)
				.translate(new Jello.Vector2(0, 15))
				.rotate(0)
				.scale(Jello.Vector2.One.copy().mulFloat(2.0))
				.isKinematic(false)
				.edgeSpringK(300.0)
				.edgeSpringDamp(20.0)
				.shapeSpringK(150.0)
				.shapeSpringDamp(1.0)
				.gasPressure(100.0)
				.build();
			pb.isPlayer = true;
			blockEntity.setBody(pb);
			
			// Behaviour
			blockEntity.setTrait(new Trait("showcase/controllableblob"));
			
			// the following requires a scene:
			// track camera focus on blob
			env.camera.track(pb, layer);
			
			/*
			 *  Mouse Interaction
			 */
			layer.setInteraction(function() {
				if(typeof this.world === "undefined") return;
				
				if(env.input.pressed("rightclick")) {
					Jello.BodyFactory.createBluePrint()
						.world(this.world)
						.shape(new Jello.ClosedShape()
							.begin()
							.addVertex(new Jello.Vector2(-1, -1))
							.addVertex(new Jello.Vector2(-1,  1))
							.addVertex(new Jello.Vector2( 1,  1))
							.addVertex(new Jello.Vector2( 1, -1))
							.finish())
						.pointMasses(1)
						.translate(env.camera.screenToWorldCoordinates(env.input.mouse))
						.rotate(0)
						.scale(Jello.Vector2.One.copy())
						.isKinematic(false)
						.edgeSpringK(300.0)
						.edgeSpringDamp(5.0)
						.shapeSpringK(150.0)
						.shapeSpringDamp(5.0)
						.addInternalSpring(0, 2, 300, 10)
						.addInternalSpring(1, 3, 300, 10)
						.build();
				};
				
				if(env.input.state("M")) {
					env.sceneStack.loadAndPush("menu");
				};
			});

			// TOOLS
			var dragTool = new Tool();
			var spawnTool = new Tool();
			var rayTool = new Tool();
			
			var toDragTool = function() { console.log("its Drag"); dragTool.activate(); };
			var toSpawnTool = function() { console.log("its Spawn"); spawnTool.activate(); };
			var toRayTool = function() { console.log("its Ray"); rayTool.activate(); };

			// TODO: make use of keys to switch between tools
			dragTool.onKeyUp("D", toDragTool);
			dragTool.onKeyUp("S", toSpawnTool);
			dragTool.onKeyUp("R", toRayTool);
			spawnTool.onKeyUp("D", toDragTool);
			spawnTool.onKeyUp("S", toSpawnTool);
			spawnTool.onKeyUp("R", toRayTool);
			rayTool.onKeyUp("D", toDragTool);
			rayTool.onKeyUp("S", toSpawnTool);
			rayTool.onKeyUp("R", toRayTool);

			// drag body functionality
			var pointMassToDragOn;
			dragTool.onMouseDown(function(event) {
				var mousePositionInWorldCoordinates = event.getPositionInLayer(layer);
				var answer = layer.world.getClosestPointMass(mousePositionInWorldCoordinates);
				var body = layer.world.getBody(answer.bodyId);
				pointMassToDragOn = body.getPointMass(answer.pointMassId);
			});
			dragTool.onMouseDrag(function(event) {
				if(!pointMassToDragOn) return;
				var mousePositionInWorldCoordinates = event.getPositionInLayer(layer);
				var diff = Jello.VectorTools.calculateSpringForceVelAVelB(
					pointMassToDragOn.Position,
					pointMassToDragOn.Velocity,
					mousePositionInWorldCoordinates,
					Jello.Vector2.Zero.copy(), // velB,
					0.0, // springD,
					100.0, // springK,
					10.0 // damping
				);
				pointMassToDragOn.Force.addSelf(diff);
			});
			
			// spawn cube functionality
			var spawnCube = Jello.BodyFactory.createBluePrint()
				.world(layer.world)
				.shape(new Jello.ClosedShape()
					.begin()
					.addVertex(new Jello.Vector2(-0.5, -0.5))
					.addVertex(new Jello.Vector2(-0.5,  0.5))
					.addVertex(new Jello.Vector2( 0.5,  0.5))
					.addVertex(new Jello.Vector2( 0.5, -0.5))
					.finish())
				.pointMasses(1)
				.rotate(0)
				.isKinematic(false)
				.edgeSpringK(300.0)
				.edgeSpringDamp(5.0)
				.shapeSpringK(150.0)
				.shapeSpringDamp(5.0)
				.addInternalSpring(0, 2, 300, 10)
				.addInternalSpring(1, 3, 300, 10);
			spawnTool.onMouseUp(function(event) {
				spawnCube
					.translate(event.getDownMiddlePointInLayer(layer))
					.scale(event.getDownDeltaInLayer(layer).absolute())
					.build();
			});
			
			// ray functionality
			var hitTestRay = new Jello.Ray(layer.world, Jello.Vector2.Zero.copy(), Jello.Vector2.One.copy());
			rayTool.onMouseDown(function(event) {
				layer.world.addRay(hitTestRay);
				hitTestRay.origin.set(event.getPositionInLayer(layer));
			});
			rayTool.onMouseUp(function(event) {
				layer.world.removeRay(hitTestRay);
			});
			rayTool.onMouseDrag(function(event) {
				hitTestRay.direction.set(event.getDownDeltaInLayer(layer));
			});
			
			// activate default tool
			dragTool.activate();
			
			/*
			 *  a block:
			 */
			
			// Entity
			var blockEntity = new Entity("testBlock").addToLayer(layer);
			
			// attach tags
			blockEntity.addTag("moving");
			blockEntity.addTag("entity");
			console.log("block has tag moving", blockEntity.hasTag("moving"));
			console.log("block has tag entity", blockEntity.hasTag("entity"));
			blockEntity.removeTag("moving");
			console.log("block should not have tag moving", blockEntity.hasTag("moving"));
			console.log("block has tag entity", blockEntity.hasTag("entity"));
			console.log(blockEntity.getTags());
			
			// Behaviour
			blockEntity.setTrait(new Trait("showcase/blowup"));

			// Body
			blockEntity.setBody(Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(new Jello.ClosedShape().begin()
					.addVertex(new Jello.Vector2(-1.0, -1.0)) // 0
					.addVertex(new Jello.Vector2(-1.0, -0.5))
					.addVertex(new Jello.Vector2(-1.0,  0.0))
					.addVertex(new Jello.Vector2(-1.0,  0.5))
					.addVertex(new Jello.Vector2(-1.0,  1.0)) // 4
					.addVertex(new Jello.Vector2(-0.5,  1.0))
					.addVertex(new Jello.Vector2( 0.0,  1.0))
					.addVertex(new Jello.Vector2( 0.5,  1.0))
					.addVertex(new Jello.Vector2( 1.0,  1.0)) // 8
					.addVertex(new Jello.Vector2( 1.0,  0.5))
					.addVertex(new Jello.Vector2( 1.0,  0.0))
					.addVertex(new Jello.Vector2( 1.0, -0.5))
					.addVertex(new Jello.Vector2( 1.0, -1.0)) // 12
					.addVertex(new Jello.Vector2( 0.5, -1.0))
					.addVertex(new Jello.Vector2( 0.0, -1.0))
					.addVertex(new Jello.Vector2(-0.5, -1.0))
					.finish())
				.pointMasses(1.0)
				.translate(new Jello.Vector2(-75, 25))
				.rotate(0)
				.scale(Jello.Vector2.One.copy().mulFloat(4.0))
				.isKinematic(false)
				.edgeSpringK(300.0)
				.edgeSpringDamp(20.0)
				.shapeSpringK(500.0)
				.shapeSpringDamp(20.0)
				.gasPressure(100.0)
				.build()
			);
			
			// Texture
			blockEntity.setTexture(new Texture("sample.png")
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
			 *  State Animation
			 */

			var stateAnimationShowCase = new Entity("stateAnimation").addToLayer(layer);

			// Body
			stateAnimationShowCase.setBody(Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(ShapeBuilder.Shapes.Cube)
				.pointMasses(1.0)
				.translate(new Jello.Vector2(-15, 25))
				.rotate(0)
				.scale(Jello.Vector2.One.copy().mulFloat(2.0))
				.isKinematic(false)
				.edgeSpringK(300.0)
				.edgeSpringDamp(20.0)
				.shapeSpringK(500.0)
				.shapeSpringDamp(20.0)
				.gasPressure(100.0)
				.build()
			);
			
			// state animation
			stateAnimationShowCase.animationSheet = new AnimationSheet("sample.png", 96, 128);
			stateAnimationShowCase.addStateAnimation("idle", stateAnimationShowCase.animationSheet, 0.2, [0,1,2,3,2,1]);
			stateAnimationShowCase.setState("idle");
			
			/*
			 * Smart Texture
			 */
			
			// Entity
			var smartlyTexturedGround = new Entity("smartlyTexturedGround").addToLayer(layer);
			
			// Body
			smartlyTexturedGround.setBody(Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(ShapeBuilder.Shapes.Cube)
				.pointMasses(1)
				.translate(new Jello.Vector2(100, 0))
				.rotate(0)
				.scale(Jello.Vector2.One.copy())
				.isKinematic(false)
				.edgeSpringK(300.0)
				.edgeSpringDamp(20.0)
				.shapeSpringK(500.0)
				.shapeSpringDamp(20.0)
				.gasPressure(100.0)
				.addInternalSpring(0, 2, 300, 10)
				.addInternalSpring(1, 3, 300, 10)
				.build()
			);
			
			// Texture
			smartlyTexturedGround.setTexture(new Texture("sample.png")
				.from([new Jello.Vector2(0, 32), new Jello.Vector2(0, 0), new Jello.Vector2(96, 0)]).to([0,1,2])
				.from([new Jello.Vector2(0, 64), new Jello.Vector2(0, 32), new Jello.Vector2(96, 0)]).to([2,3,0])
			);
			
			var path = new GeoMath.Path()
				.add(new GeoMath.Path.Segment(new Jello.Vector2(100, 0)))
				.lineBy(new Jello.Vector2(10, 0))
				.cubicCurveBy(new Jello.Vector2(10, 0), new Jello.Vector2(10, -10), new Jello.Vector2(0, -10))
				.quadraticCurveBy(new Jello.Vector2(-10, 0), new Jello.Vector2(-10, 10))
				.close(true);
			var smartTexture = new SmartTexture("terrain/symbolic.png", path);
			smartlyTexturedGround.smartTexture = smartTexture;

			/*
			 *  GROUND SHAPE
			 */
			var groundShapeScale = new Jello.Vector2(9,1.5);
			
			for(var i = 0; i < 4; i++) {
				for(var j = 0; j < 2; j++) {
					var middle = new Jello.Vector2(2*18*i, -15 + 36.5*j);
					var groundBody = MapBuilder.buildGroundRectangle(
						world,
						middle.sub(groundShapeScale),
						middle.add(groundShapeScale)
					);

				};
			};
			
			var middle = new Jello.Vector2(-2, -25 + 36.5);
			var groundBody = MapBuilder.buildGroundRectangle(
				world,
				middle.sub(groundShapeScale),
				middle.add(groundShapeScale),
				3*Math.PI/2
			);

			var middle = new Jello.Vector2(-2-10, -25 + 36.5+10);
			var groundBody = MapBuilder.buildGroundRectangle(
				world,
				middle.sub(groundShapeScale),
				middle.add(groundShapeScale),
				3*Math.PI/4
			);

			/*
			 *  Textured Ground:
			 */

			// Entity
			var texturedGround = new Entity("texturedGround").addToLayer(layer);
			
			// Body
			texturedGround.setBody(Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(ShapeBuilder.Shapes.Cube)
				.pointMasses(0)
				.translate(new Jello.Vector2(-52, 0))
				.rotate(0)
				.scale(new Jello.Vector2(15, 4))
				.isKinematic(false)
				.edgeSpringK(300.0)
				.edgeSpringDamp(20.0)
				.shapeSpringK(500.0)
				.shapeSpringDamp(20.0)
				.gasPressure(100.0)
				.build()
			);
			
			// Texture
			texturedGround.setTexture(new Texture("sample.png")
				.from([new Jello.Vector2(0, 32), new Jello.Vector2(0, 0), new Jello.Vector2(96, 0)]).to([0,1,2])
				.from([new Jello.Vector2(0, 64), new Jello.Vector2(0, 32), new Jello.Vector2(96, 0)]).to([2,3,0])
			);
			
			/*
			 *  Gear
			 */

			// Entity
			var gear = new Entity("Gear").addToLayer(layer);
			
			// Body
			var toothCount = 8;
			var segmentCount = toothCount * 2;
			var pointCount = segmentCount * 3;
			var tooth = true;
			var innerRadius = 5;
			var outerRadius = 6;
			var anglePerSegment = 360/ (2 * toothCount);
			
			var gearShape = new Jello.ClosedShape().begin();
			for(var i = 0; i < 360; i += anglePerSegment) {
				gearShape.addVertex(new Jello.Vector2(
					Math.cos(-i * (Math.PI / 180)),
					Math.sin(-i * (Math.PI / 180))
				).mulFloat(tooth ? outerRadius : innerRadius));
				gearShape.addVertex(new Jello.Vector2(
					Math.cos(-(i+anglePerSegment/2) * (Math.PI / 180)),
					Math.sin(-(i+anglePerSegment/2) * (Math.PI / 180))
				).mulFloat(tooth ? outerRadius : innerRadius));
				gearShape.addVertex(new Jello.Vector2(
					Math.cos(-(i+anglePerSegment) * (Math.PI / 180)),
					Math.sin(-(i+anglePerSegment) * (Math.PI / 180))
				).mulFloat(tooth ? outerRadius : innerRadius));
				tooth = !tooth;
			}
			gearShape
				.addVertex(new Jello.Vector2(0, 0))
				.finish();
			
			var pointMasses = Utils.Array.fill(1, pointCount);
			pointMasses.push(0);
			var gearBluePrint = Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(gearShape)
				.boundaryCount(pointCount)
				.pointMasses(pointMasses)
				.translate(new Jello.Vector2(115, 0))
				.rotate(0)
				.scale(new Jello.Vector2(1, 1))
				.isKinematic(false)
				.edgeSpringK(150.0)
				.edgeSpringDamp(10.0)
				.shapeSpringK(150.0)
				.shapeSpringDamp(1.0);
			
			for(var i = 0; i < pointCount; i+=3) {
				gearBluePrint.addInternalSpring(i, pointCount, 150, 20);
			}
			var gearBody = gearBluePrint.build();
			gear.setBody(gearBody);
			
			/*
			 *  Special (Round) Ground:
			 */
			var groundShape = new Jello.ClosedShape()
				.begin();
			MapBuilder.generateRoundShape(new Jello.Vector2(0,0), 15.0, 270, 90, 20, groundShape, groundShape.addVertex);
			groundShape
				.addVertex(new Jello.Vector2(  0,-20))
				.addVertex(new Jello.Vector2(-20,-20))
				.addVertex(new Jello.Vector2(-20, 20))
				.addVertex(new Jello.Vector2(  0, 20))
				.finish();
			
			var loftBluePrint = Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(groundShape)
				.pointMasses(Utils.Array.fill(0, groundShape.getVertices().length))
				.translate(new Jello.Vector2(-75, 23))
				.rotate(Math.PI/2)
				.scale(Jello.Vector2.One.copy())
				.isKinematic(false);
			var roundGround = loftBluePrint.build();

			// target the moving ground!
			roundGround.target = texturedGround.getBody().id;
			
			new Entity("roundGround").addToLayer(layer).setBody(roundGround);
			/*
			 *  Fuzzy Ellipse:
			 */
			function fuzzyEllipseGround(world, translate, rotate, scale) {
				var groundShape = new Jello.ClosedShape().begin();
				for(var i = 0; i <= 360; i += 1 + Math.floor(Math.random() * 60))
					groundShape.addVertex(new Jello.Vector2(
						Math.cos(-i * (Math.PI / 180)),
						Math.sin(-i * (Math.PI / 180))
					));
				groundShape.finish();
				
				return Jello.BodyFactory.createBluePrint()
					.world(world)
					.shape(groundShape)
					.pointMasses(Utils.Array.fill(0, groundShape.getVertices().length))
					.translate(translate)
					.rotate(rotate)
					.scale(scale)
					.isKinematic(false)
					.build();
			};
			
			for(var i = 0; i < 10; i++)
				fuzzyEllipseGround(
					world,
					new Jello.Vector2(Math.floor(Math.random() * -100) - 30, Math.floor(Math.random() * -100) - 30),
					Math.random() - 0.5,
					new Jello.Vector2(Math.floor(Math.random() * 60), Math.floor(Math.random() * 20))
				);
			
			/*
			 *  Jelly Ground:
			 */
			var groundShape = new Jello.ClosedShape()
				.begin();
				// bottom Row
				for(var i = 1; i >= -1; i-= 0.25)
					groundShape.addVertex(new Jello.Vector2( i, -1));
				for(var i = -1; i <= 1; i+= 0.25)
					groundShape.addVertex(new Jello.Vector2( i,  1));
				groundShape.finish();

			var mass = 1 ;
			var groundBody = Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(groundShape)
				.pointMasses([
					0,0,0,0,0,0,0,0,0,
					mass,mass,mass,mass,mass,mass,mass,mass,mass
				])
				.translate(new Jello.Vector2(-50, -16)) // translate
				.rotate(0) // rotate
				.scale(new Jello.Vector2(18, 3)) // scale
				.isKinematic(false)
				.edgeSpringK(150.0) // float ,
				.edgeSpringDamp(5.0) // float ,
				.shapeSpringK(10.0) // float ,
				.shapeSpringDamp(5.0) // float ,
				.build();

			var jellyGroundEntity = new Entity("ground").addToLayer(layer);
			jellyGroundEntity.setBody(groundBody);
			jellyGroundEntity.setTrait(new Trait("showcase/movingground", jellyGroundEntity));
			
			// add springs
			// TODO: adjust to internal point masses
			var length = groundBody.getPointMassCount();
			var springPhysics = groundBody.getSpringPhysics();
			var
				bottomMin = 0,
				bottomMax = length/2 - 1,
				topMin = length/2,
				topMax = length - 1;
			var
				indexBottom = bottomMin + 1,
				indexTop = topMax - 1;
			while(Math.abs(indexBottom - indexTop) >= 2)
				springPhysics.addInternalSpring(indexBottom++, indexTop--, 300.0, 10.0);

			indexBottom = bottomMin + 1;
			indexTop = topMax;
			while(Math.abs(indexBottom - indexTop) >= 2)
				springPhysics.addInternalSpring(indexBottom++, indexTop--, 300.0, 10.0);

			indexBottom = bottomMin;
			indexTop = topMax - 1;
			while(Math.abs(indexBottom - indexTop) >= 2)
				springPhysics.addInternalSpring(indexBottom++, indexTop--, 300.0, 10.0);
			
			/*
			 *  Pressure Jelly Ground:
			 */

			var mass = 1 ;
			var groundBody = Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(groundShape)
				.pointMasses([
					0,0,0,0,0,0,0,0,0,
					mass,mass,mass,mass,mass,mass,mass,mass,mass
				])
				.translate(new Jello.Vector2(-90, -16)) // translate
				.rotate(0) // rotate
				.scale(new Jello.Vector2(18, 3)) // scale
				.isKinematic(false)
				.edgeSpringK(150.0) // float ,
				.edgeSpringDamp(5.0) // float ,
				.shapeSpringK(300.0) // float ,
				.shapeSpringDamp(5.0) // float ,
				.gasPressure(300.0)
				.build();

			var jellyGroundEntity = new Entity("ground").addToLayer(layer);
			jellyGroundEntity.setBody(groundBody);
			jellyGroundEntity.setTrait(new Trait("showcase/movingground", jellyGroundEntity));
			
			/*
			 *  internal and boundary point masses test:
			 */
			var blockEntity = new Entity("boundaryTest").addToLayer(layer);
			blockEntity.setBody(Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(new Jello.ClosedShape()
					.begin()
					.addVertex(new Jello.Vector2(-1, 0))
					.addVertex(new Jello.Vector2(-0.75, 0.75))
					.addVertex(new Jello.Vector2( 0, 1))
					.addVertex(new Jello.Vector2( 0.75, 0.75))
					.addVertex(new Jello.Vector2( 1, 0))
					.addVertex(new Jello.Vector2( 0.75,-0.75))
					.addVertex(new Jello.Vector2( 0,-1))
					.addVertex(new Jello.Vector2(-0.75,-0.75))
					.addVertex(Jello.Vector2.Zero.copy())
					.finish()
				)
				.boundaryCount(8)
				.pointMasses(1.0)
				.translate(new Jello.Vector2(-15, 15))
				.rotate(0)
				.scale(Jello.Vector2.One.copy().mulFloat(2.0))
				.isKinematic(false)
				.edgeSpringK(300.0)
				.edgeSpringDamp(20.0)
				.shapeSpringK(150.0)
				.shapeSpringDamp(1.0)
				.addInternalSpring(0, 8, 300, 10)
				.addInternalSpring(1, 8, 300, 10)
				.addInternalSpring(2, 8, 300, 10)
				.addInternalSpring(3, 8, 300, 10)
				.addInternalSpring(4, 8, 300, 10)
				.addInternalSpring(5, 8, 300, 10)
				.addInternalSpring(6, 8, 300, 10)
				.addInternalSpring(7, 8, 300, 10)
				.build()
			);
			
			for(var i = 0; i < 5; i++) {
				var blockEntity = new Entity("cube").addToLayer(layer);
				blockEntity.setBody(Jello.BodyFactory.createBluePrint()
					.world(world)
					.shape(new Jello.ClosedShape()
						.begin()
						.addVertex(new Jello.Vector2(-0.75, 0.75))
						.addVertex(new Jello.Vector2( 0.75, 0.75))
						.addVertex(new Jello.Vector2( 0.75,-0.75))
						.addVertex(new Jello.Vector2(-0.75,-0.75))
						.addVertex(new Jello.Vector2(i,0))
						.finish()
					)
					.boundaryCount(4)
					.pointMasses(1.0)
					.translate(new Jello.Vector2(5+5*i, 15))
					.rotate(0)
					.scale(Jello.Vector2.One.copy().mulFloat(1.0))
					.isKinematic(false)
					.edgeSpringK(300.0)
					.edgeSpringDamp(20.0)
					.shapeSpringK(150.0)
					.shapeSpringDamp(1.0)
					.build()
				);
			}
			
			var blockEntity = new Entity("boundaryTest").addToLayer(layer);
			blockEntity.setBody(Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(new Jello.ClosedShape()
					.begin()
					.addVertex(new Jello.Vector2(0, 1)) // upper left
					.addVertex(new Jello.Vector2(1, 1))
					.addVertex(new Jello.Vector2(1, 0))
					.addVertex(new Jello.Vector2(0, 0))
					.addVertex(new Jello.Vector2( 0.5, 2.0))
					.addVertex(new Jello.Vector2( 2.0, 0.5))
					.addVertex(new Jello.Vector2( 0.5,-1.0))
					.addVertex(new Jello.Vector2(-1.0, 0.5))
					.finish()
				)
				.boundaryCount(4)
				.pointMasses(1.0)
				.translate(new Jello.Vector2(-15, 10))
				.rotate(0)
				.scale(Jello.Vector2.One.copy().mulFloat(2.0))
				.isKinematic(false)
				.edgeSpringK(300.0)
				.edgeSpringDamp(20.0)
				.shapeSpringK(150.0)
				.shapeSpringDamp(1.0)
				.addInternalSpring(0, 4, 300, 10)
				.addInternalSpring(1, 4, 300, 10)
				.addInternalSpring(1, 5, 300, 10)
				.addInternalSpring(2, 5, 300, 10)
				.addInternalSpring(2, 6, 300, 10)
				.addInternalSpring(3, 6, 300, 10)
				.addInternalSpring(3, 7, 300, 10)
				.addInternalSpring(0, 7, 300, 10)
				.build()
			);
			
			/*
			 *  jelly cubes (crates)
			 */
			var center = new Jello.Vector2(50, 50);
			loftBluePrint.translate(center).build();
			
			var jellyCubeBluePrint = Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(ShapeBuilder.Shapes.Cube)
				.pointMasses(1)
				.rotate(0)
				.scale(Jello.Vector2.One.copy())
				.isKinematic(false)
				.edgeSpringK(300.0)
				.edgeSpringDamp(5.0)
				.shapeSpringK(150.0)
				.shapeSpringDamp(5.0)
				
				.addInternalSpring(0, 2, 300, 10)
				.addInternalSpring(1, 3, 300, 10);
			
			for(var i = 0; i < 4; i++) {
				for(var j = 0; j < 4; j++) {

					// create Entity
					var jellyCrate = new Entity("jellyCrate").addToLayer(layer);
					
					// JellyBody
					jellyCrate.setBody(jellyCubeBluePrint
						.translate(new Jello.Vector2(2*i, 2*j).add(center))
						.build()
					);
					
					// Crate Texture
					jellyCrate.setTexture(new Texture("crate.png")
						.from([new Jello.Vector2(0, 500), new Jello.Vector2(0, 0), new Jello.Vector2(500, 0)]).to([0,1,2])
						.from([new Jello.Vector2(500, 0), new Jello.Vector2(500, 500), new Jello.Vector2(0, 500)]).to([2,3,0])
					);
				}
			};

			/*
			 *  a jumping crate:
			 */
			
			// Entity
			var jumpingCrate = new Entity("jumpingCrate").addToLayer(layer);
			
			// Behaviour
			jumpingCrate.setTrait(new Trait("showcase/jumpingcrate"));

			// Body
			jumpingCrate.setBody(Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(ShapeBuilder.Shapes.Cube)
				.pointMasses(1)
				.translate(new Jello.Vector2(12, 12))
				.rotate(0)
				.scale(Jello.Vector2.One.copy())
				.isKinematic(false)
				.edgeSpringK(300.0)
				.edgeSpringDamp(5.0)
				.shapeSpringK(150.0)
				.shapeSpringDamp(5.0)
				.addInternalSpring(0, 2, 300, 10)
				.addInternalSpring(1, 3, 300, 10)
				.build()
			);
			
			// Texture
			jumpingCrate.setTexture(new Texture("crate.png")
				.from([new Jello.Vector2(0, 500), new Jello.Vector2(0, 0), new Jello.Vector2(500, 0)]).to([0,1,2])
				.from([new Jello.Vector2(500, 0), new Jello.Vector2(500, 500), new Jello.Vector2(0, 500)]).to([2,3,0])
			);

			/*
			 * PathToClosedShape Test
			 */
			var center = new Jello.Vector2(-40, -20);
			
			Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(GeoMath.Path.Rectangle(Jello.Vector2.Zero.copy(), Jello.Vector2.One.copy().mulFloat(4))
					.flatten(0.5)
					.toClosedShape()
				)
				.pointMasses(0)
				.translate(center)
				.rotate(0)
				.scale(Jello.Vector2.One.copy())
				.isKinematic(false)
				.build();

			Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(GeoMath.Path.Circle(Jello.Vector2.Zero.copy(), 4)
					.flatten(2)
					.toClosedShape()
				)
				.pointMasses(0)
				.translate(center.add(new Jello.Vector2(0, 5)))
				.rotate(0)
				.scale(Jello.Vector2.One.copy())
				.isKinematic(false)
				.build();

			/*
			 *  material test
			 */
			var numberOfCubes = 4;
			var testMaterials = [];
			for(var i = 0; i < numberOfCubes; i++) {
				var mat = new Jello.Material();
				mat.setFriction(1);
				mat.setElasticity(i/numberOfCubes);
				
				testMaterials.push(mat);
			};

			var origin = new Jello.Vector2(50, 10);
			var shape = ShapeBuilder.Shapes.Cube;

			var particleShape = ShapeBuilder.Shapes.Particle;

			for(var i = 0; i < numberOfCubes; i++) {
				// materialized ground
				var body = Jello.BodyFactory.createBluePrint()
					.world(world)
					.shape(shape)
					.pointMasses(Utils.Array.fill(0, //Number.POSITIVE_INFINITY
						shape.getVertices().length))
					.translate(new Jello.Vector2(3*numberOfCubes*i + origin.x, -10+origin.y))
					.rotate(0)
					.scale(new Jello.Vector2(3*numberOfCubes/2, 1))
					.isKinematic(false)
					.material(testMaterials[i])
					.build();
				new Entity("materialGround"+i).addToLayer(layer).setBody(body);
			
				for(var j = 0; j < numberOfCubes; j++) {
					// particle
					var body = Jello.BodyFactory.createBluePrint()
						.world(world)
						.shape(particleShape)
						.pointMasses(1)
						.translate(new Jello.Vector2(3*numberOfCubes*i + 3*j - 4.25 + origin.x, 5+origin.y))
						.rotate(0)
						.scale(Jello.Vector2.One.copy().mulFloat(1.0))
						.isKinematic(false)
						.material(testMaterials[j])
						.build();
					new Entity("materialParticle"+j).addToLayer(layer).setBody(body);
				}
			};
			
			/*
			 *  collisiontype test
			 */
			var specialCollisionId = 17;
			var origin = new Jello.Vector2(15, 0);
			var bodyBluePrintForCollisionType = Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(ShapeBuilder.Shapes.Cube)
				.pointMasses(1)
				.rotate(0)
				.scale(Jello.Vector2.One.copy())
				.isKinematic(false)
				.edgeSpringK(300.0)
				.edgeSpringDamp(5.0)
				.shapeSpringK(150.0)
				.shapeSpringDamp(5.0)
				.addInternalSpring(0, 2, 300, 10)
				.addInternalSpring(1, 3, 300, 10);
			
			bodyBluePrintForCollisionType
				.translate(origin.add(new Jello.Vector2(0, 5)))
				.collisionType(new Jello.CollisionType()
					.setCollisionOn(Jello.CollisionType.Ground)
					.setCollisionOn(specialCollisionId))
				.build();

			bodyBluePrintForCollisionType
				.translate(origin.add(new Jello.Vector2(0, 10)))
				.collisionType(new Jello.CollisionType()
					.setCollisionOn(specialCollisionId))
				.build();

			bodyBluePrintForCollisionType
				.translate(origin.add(new Jello.Vector2(0, 15)))
				.collisionType(new Jello.CollisionType()
					.setCollisionOn(specialCollisionId))
				.build();

			bodyBluePrintForCollisionType
				.translate(origin.add(new Jello.Vector2(0, 20)))
				.collisionType(new Jello.CollisionType()
					.setCollisionOn(specialCollisionId))
				.build();

			/*
			 *  TEST PINJOINT
			 */
			var origin = new Jello.Vector2(40, 20);
			var body = Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(shape)
				.pointMasses(1) // mass per point
				.translate(new Jello.Vector2(-2, -9).add(origin)) // translate
				.rotate(0) // rotate
				.scale(Jello.Vector2.One.copy().mulFloat(1.0)) // scale
				.isKinematic(false)
				.edgeSpringK(300.0) // float edgeSpringK,
				.edgeSpringDamp(5.0) // float edgeSpringDamp,
				.shapeSpringK(150.0) // float shapeSpringK,
				.shapeSpringDamp(5.0) // float shapeSpringDamp,
				.addInternalSpring(0, 2, 300, 10)
				.addInternalSpring(1, 3, 300, 10)
				.build();
			
			var body2 = Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(shape)
				.pointMasses(1) // mass per point
				.translate(new Jello.Vector2(0, -9).add(origin)) // translate
				.rotate(0) // rotate
				.scale(Jello.Vector2.One.copy().mulFloat(1.0)) // scale
				.isKinematic(false)
				.edgeSpringK(300.0) // float edgeSpringK,
				.edgeSpringDamp(5.0) // float edgeSpringDamp,
				.shapeSpringK(150.0) // float shapeSpringK,
				.shapeSpringDamp(5.0) // float shapeSpringDamp,
				.addInternalSpring(0, 2, 300, 10)
				.addInternalSpring(1, 3, 300, 10)
				.build();

			new Jello.PinJoint(
				world,
				body, 2,
				body2, 1
			);

			/*
			 *  preasure balls:
			 */
			var center = new Jello.Vector2(200, 50);
			loftBluePrint.translate(center).build();

			var pressureBallBluePrint = Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(ShapeBuilder.Shapes.Ball)
				.pointMasses(1)
				.rotate(0)
				.isKinematic(false)
				.edgeSpringK(300.0)
				.edgeSpringDamp(20.0)
				.shapeSpringK(10.0)
				.shapeSpringDamp(1.0);
			var pb;
			for (x = 6; x <= 16; x+=10) {
				pb = pressureBallBluePrint
					.translate(new Jello.Vector2(x, 17).add(center))
					.scale(Jello.Vector2.One.copy().mulFloat(2.0))
					.gasPressure(100.0 + 10 * x)
					.build();
				new Entity("Blob").addToLayer(layer).setBody(pb);
			}

			/*
			 * sticky blob
			 */
			
			// Entity
			var stickyBlob = new Entity("stickyBlob").addToLayer(layer);

			// Body
			pb = pressureBallBluePrint
				.translate(new Jello.Vector2(-50, 10))
				.scale(Jello.Vector2.One.copy().mulFloat(2.0))
				.gasPressure(100.0)
				.build();
			stickyBlob.setBody(pb);
			
			// Behaviour
			stickyBlob.setTrait(new Trait("showcase/stickiness"));

			/*
			 *  secrets/collectibles:
			 *  highly depend on contacts/signals/slots
			 */
			var collectibleBluePrint = Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(ShapeBuilder.Shapes.Diamond)
				.pointMasses(0)
				.scale(Jello.Vector2.One.copy())
				.isKinematic(false);
			
			for(var i = 0; i < 360; i += 20) {
				var radius = 12;
				(function() {
					var diamond = collectibleBluePrint
						.translate(new Jello.Vector2(
								radius * Math.cos(-i * (Math.PI / 180)),
								radius * Math.sin(-i * (Math.PI / 180))
							).add(new Jello.Vector2(-15,4)))
						.rotate(-i * (Math.PI / 180) + Math.PI/2)
						.build();
	
					var slot = env.eventManager.slot("startContact")
						.callback(function(body, otherBody, contact) {
							world.queue().removeBody(body);
						})
						.filter(function(body, otherBody, contact) {
							return body === diamond && otherBody.isPlayer;
						});
				})();
			};

			/*
			 *  I:
			 */
			var center = new Jello.Vector2(100, 50);
			loftBluePrint.translate(center).build();

			var iBluePrint = Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(ShapeBuilder.Shapes.I)
				.pointMasses(1)
				.rotate(0)
				.scale(Jello.Vector2.One.copy().mulFloat(2.0))
				.isKinematic(false)
				.edgeSpringK(150.0)
				.edgeSpringDamp(5.0)
				.shapeSpringK(300.0)
				.shapeSpringDamp(15.0)
				
				.addInternalSpring(0, 14, 300.0, 10.0)
				.addInternalSpring(1, 14, 300.0, 10.0)
				.addInternalSpring(1, 15, 300.0, 10.0)
				.addInternalSpring(1, 5, 300.0, 10.0)
				.addInternalSpring(2, 14, 300.0, 10.0)
				.addInternalSpring(2, 5, 300.0, 10.0)
				.addInternalSpring(1, 5, 300.0, 10.0)
				.addInternalSpring(14, 5, 300.0, 10.0)
				.addInternalSpring(2, 4, 300.0, 10.0)
				.addInternalSpring(3, 5, 300.0, 10.0)
				.addInternalSpring(14, 6, 300.0, 10.0)
				.addInternalSpring(5, 13, 300.0, 10.0)
				.addInternalSpring(13, 6, 300.0, 10.0)
				.addInternalSpring(12, 10, 300.0, 10.0)
				.addInternalSpring(13, 11, 300.0, 10.0)
				.addInternalSpring(13, 10, 300.0, 10.0)
				.addInternalSpring(13, 9, 300.0, 10.0)
				.addInternalSpring(6, 10, 300.0, 10.0)
				.addInternalSpring(6, 9, 300.0, 10.0)
				.addInternalSpring(6, 8, 300.0, 10.0)
				.addInternalSpring(7, 9, 300.0, 10.0);

			for (i = 0; i <= 30; i+=15) {
				iBluePrint
					.translate(new Jello.Vector2(0, i).add(center))
					.build();
			}

			/*
			 *  Test: Particles
			 */
			var center = new Jello.Vector2(150, 50);
			loftBluePrint.translate(center).build();

			for (i = 0; i <= 2; i++) {
				for (j = 0; j <= 3; j++) {
					// Entity
					var fireflyEntity = new Entity("firefly").addToLayer(layer);
					
					// Behaviour
					fireflyEntity.setTrait(new Trait("showcase/firefly"));

					// Body
					fireflyEntity.setBody(particleBluePrint
						.translate(new Jello.Vector2(0 + i, 15 + j).add(center))
						.build()
					);
					
					fireflyEntity.addDrawCallback(new DrawCallback("fireflysmall"));
				}
			}
	
			/*
			 *  Vector graphics: Path and Text
			 */
			new Entity("vectorgraphics")
				.addToLayer(layer)
				.addDrawCallback(new DrawCallback("vectorgraphics"));

			/*
			 *  Rays
			 */
			var ray = new Jello.Ray(world, new Jello.Vector2(-10, -5), new Jello.Vector2(1, 0.5));
			layer.world.addRay(ray);

			/*
			 *  InterpolationJoint Test
			 */
			var lastParticle = particleBluePrint
				.translate(new Jello.Vector2(30, 115))
				.build();
			var pb = pressureBallBluePrint
				.translate(new Jello.Vector2(40, 10))
				.scale(Jello.Vector2.One.copy().mulFloat(2.0))
				.gasPressure(100.0)
				.build();
			new Jello.InterpolationJoint(
				world,
				body, 0,
				lastParticle, 0,
				pb, 0,
				0.5,
				0.05
			);

			/*
			 *  Particle Chain & Web
			 */
			var center = new Jello.Vector2(-20, 50);
			var particleWeb = [];
			
			var max = 5;
			for(var i = 0; i < max; i++) {
				particleWeb[i] = [];
				for(var j = 0; j < max; j++) {
					particleWeb[i][j] = particleBluePrint
						.translate(new Jello.Vector2(i,j).mulFloat(2).add(center))
						.build();
				}
			}
			i--;
			j--;
			particleWeb[0][0].getPointMass(0).Mass = 0;
			particleWeb[0][max-1].getPointMass(0).Mass = 0;
			particleWeb[max-1][0].getPointMass(0).Mass = 0;
			particleWeb[max-1][max-1].getPointMass(0).Mass = 0;
			
			for(var i = 1; i < max; i++) {
				for(var j = 1; j < max; j++) {
					new Jello.DistanceJoint(
							world,
							particleWeb[i-1][j-1], 0,
							particleWeb[i][j], 0,
							0.0,
							1050.0,
							15.0
						);
					new Jello.DistanceJoint(
							world,
							particleWeb[i][j], 0,
							particleWeb[i][j], 0,
							0.0,
							1050.0,
							15.0
						);
				}
			}
			
			
			var particle1, particle2;
			for(var i = 0; i < 10; i++) {
				particle2 = particleBluePrint
					.translate(new Jello.Vector2(0 + 1 * i, 8))
					.build();
				
				if(typeof particle1 === "undefined") {
					particle2.getPointMass(0).Mass = 0;
				} else {
					new Jello.DistanceJoint(
						world,
						particle1, 0,
						particle2, 0,
						0.0,
						1050.0,
						15.0
					);
				}
				particle1 = particle2;
			};
			particle2.getPointMass(0).Mass = 0;

			/*
			 *  Chain of Sticks HACK
			 */
			var stickShape = new Jello.ClosedShape()
				.begin()
				.addVertex(new Jello.Vector2(0.0, 0.0))
				.addVertex(new Jello.Vector2(1.0, 0.0))
				.addVertex(new Jello.Vector2(1.0, 0.3))
				.addVertex(new Jello.Vector2(0.0, 0.3))
				.finish();
			
			var stick = Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(stickShape)
				.pointMasses(1) // mass per point
				.translate(new Jello.Vector2(0+30, 12)) // translate
				.rotate(0.0) // rotate
				.scale(Jello.Vector2.One.copy().mulFloat(2)) // scale
				.isKinematic(false)
				.edgeSpringK(150.0) // float edgeSpringK,
				.edgeSpringDamp(5.0) // float edgeSpringDamp,
				.shapeSpringK(300.0) // float shapeSpringK,
				.shapeSpringDamp(15.0) // float shapeSpringDamp,
				.build();

			stick.getPointMass(0).Mass = 0;
			for (i = 1; i <= 5; i++) {
				var stick2 = Jello.BodyFactory.createBluePrint()
					.world(world)
					.shape(stickShape)
					.pointMasses(1) // mass per point
					.translate(new Jello.Vector2(2*i+30, 12)) // translate
					.rotate(0.0) // rotate
					.scale(Jello.Vector2.One.copy().mulFloat(2)) // scale
					.isKinematic(false)
					.edgeSpringK(150.0) // float edgeSpringK,
					.edgeSpringDamp(5.0) // float edgeSpringDamp,
					.shapeSpringK(300.0) // float shapeSpringK,
					.shapeSpringDamp(15.0) // float shapeSpringDamp,
					.build();
				new Jello.PinJoint(
					world,
					stick, 1,
					stick2, 0
				);
				new Jello.PinJoint(
					world,
					stick, 3,
					stick2, 2
				);
				stick = stick2;
			};
			stick2.getPointMass(1).Mass = 0;
			
			/*
			 *  Chain of Sticks 2
			 */
			var stickShape = new Jello.ClosedShape()
				.begin()
				.addVertex(new Jello.Vector2(0.0, 0.0))
				.addVertex(new Jello.Vector2(0.0, 0.0))
				.addVertex(new Jello.Vector2(0.0, 0.1))
				.addVertex(new Jello.Vector2(0.0, 0.1))
				.finish();
			
			var center = new Jello.Vector2(-30, -25);
			var stick = Jello.BodyFactory.createBluePrint()
				.world(world)
				.shape(stickShape)
				.pointMasses(1) // mass per point
				.translate(center) // translate
				.rotate(0.0) // rotate
				.scale(Jello.Vector2.One.copy().mulFloat(2)) // scale
				.isKinematic(false)
				.edgeSpringK(450.0) // float edgeSpringK,
				.edgeSpringDamp(5.0) // float edgeSpringDamp,
				.shapeSpringK(300.0) // float shapeSpringK,
				.shapeSpringDamp(15.0) // float shapeSpringDamp,
				.build();
			stick.getPointMass(0).Mass = 0;
			stick.getPointMass(3).Mass = 0;

			for (i = 1; i <= 10; i++) {
				var stick2 = Jello.BodyFactory.createBluePrint()
					.world(world)
					.shape(stickShape)
					.pointMasses(1) // mass per point
					.translate(new Jello.Vector2(3*i, 0).add(center)) // translate
					.rotate(0.0) // rotate
					.scale(Jello.Vector2.One.copy().mulFloat(3)) // scale
					.isKinematic(false)
					.edgeSpringK(450.0) // float edgeSpringK,
					.edgeSpringDamp(5.0) // float edgeSpringDamp,
					.shapeSpringK(300.0) // float shapeSpringK,
					.shapeSpringDamp(15.0) // float shapeSpringDamp,
					.build();
				new Jello.PinJoint(
					world,
					stick, 1,
					stick2, 0
				);
				new Jello.PinJoint(
					world,
					stick, 2,
					stick2, 3
				);
				stick = stick2;
			};
			stick2.getPointMass(1).Mass = 0;
			stick2.getPointMass(2).Mass = 0;
			
			/*
			 *  TODO:
			 *  Body of Water: FLUIDS
			 */
			var center = new Jello.Vector2(0, 50);
			loftBluePrint.translate(center).build();
			
			

			/*
			 *  TriggerFields:
			 */
			var triggerAABBMin = new Jello.Vector2(-40, 10);
			
			// Use a Tween to dynamically adjust the size of the trigger field's AABB
			this.tween = createjs.Tween.get(triggerAABBMin)
				.to({"x": -50, "y": 5}, 2.0)
				.wait(1.0)
				.to({"x": -40}, 5.0)
				.call(function() { console.log(1234567890); });

			var triggerField = new Jello.TriggerField(
					world, new Jello.AABB(
						triggerAABBMin,
						new Jello.Vector2(-30, 25)
					)
				);
			
			env.eventManager.slot("overlap")
				.callback(function(field, body) {
					Bloob.log("has Body");
				})
				.filter(function(field, body) {
					return field == triggerField;
				});
			
			env.eventManager.slot("contains")
				.callback(function(field, body) {
					var pressurePhysics = body.getPressurePhysics();
					pressurePhysics.setGasPressure(
						pressurePhysics.getGasPressure() * 1.01
					);
				})
				.filter(function(field, body) {
					return field == triggerField && body.isPressureBody();
				});
			
			
			/*
			 * testMapExtensions
			 */
			for(var extension in MapBuilder.testMapExtensions)
				MapBuilder.testMapExtensions[extension].apply(MapBuilder, arguments);
			
			/*
			 * search Entities by attributes
			 */
			console.log(layer.getEntitiesWithName("testBlock"));
			console.log(layer.getEntitiesWithTag("entity"));
			
			/*
			 *  END OF OBJECTS
			 */

			// load newly needed assets
			Loader.load(function() {
				if(typeof MapBuilder.__callback__ == "function")
					MapBuilder.__callback__();
			});
			
			layer.enabled = true;
		},
		testMapExtensions: [],
		"setUpGuiLayer": function(layer, world) {
			/*
			 *  simple GUI element:
			 */
			
			// Entity
			var guiElement = new Entity("guiElement").addToLayer(layer);

			// Behaviour
			guiElement.setTrait(new Trait("showcase/basicguielement"));

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
			
			layer.enabled = false;
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


