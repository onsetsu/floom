define([
	"behaviour/trait",
	"behaviour/traits/itrait",
	"basic/shapebuilder",
	"basic/utils",
	"physics/jello"
], function (Trait, ITrait, ShapeBuilder, Utils, Jello) {
	
	var stickiness = ITrait.subclass({
		prepare: function(body) {
			this.body = body;
			body.withUpdate(Utils.Function.bind(this.update, this));
			this.isSticky = false;
			this.makeSticky();
		},
		maxStickyDistance: 1.3,
		makeSticky: function() {
			this.isSticky = true;
			this.stickies = [];

			this.createStickyJoints();
			this.pointMassIsConnected = Utils.Array.fill(false, this.body.getBoundaryCount());
			
			return this;
		},
		createStickyJoints: function() {
			var body = this.body;
			var world = body.getWorld();
			
			for (var i = 0; i < body.getBoundaryCount(); i++)
			{
				var jointInfo = this.stickies[i] = {};
				
				// Third Version using Particle Wrapper
				var temp = jointInfo.temp = Jello.BodyFactory.createBluePrint()
					.world(world)
					.shape(ShapeBuilder.Shapes.Particle)
					.pointMasses(1)
					.translate(this.body.getPointMass(i).Position)
					.rotate(0.0)
					.scale(Jello.Vector2.One.copy())
					.isKinematic(false)
					.build();

				jointInfo.jointToTemp = new Jello.DistanceJoint(
					world,
					this.body, i,
					temp, 0,
					0, 
					100, 10
				);
				jointInfo.jointTempToA = new Jello.DistanceJoint(
					world,
					temp, 0,
					temp, 0, // to replace: second pm
					0, // to replace: dist
					100, 10
				);
				jointInfo.jointTempToB = new Jello.DistanceJoint(
					world,
					temp, 0,
					temp, 0, // to replace: second pm
					0, // to replace: dist
					100, 10
				);
				
				// remove helpers for now
				world.removeJoint(jointInfo.jointToTemp);
				world.removeJoint(jointInfo.jointTempToA);
				world.removeJoint(jointInfo.jointTempToB);
				world.removeBody(jointInfo.temp);
			};
		},
		update: function fly(entity) {
			// handle stickiness
			if(this.isSticky) {
				this.removeStickyJoints();
				this.attachStickyJoints();
			} else {
				this.prepare(entity.getBody());
			}
		},
		attachStickyJoints: function() {
			/*
			 *  TEST FOR STICKY BLOB
			 */
			var world = this.body.getWorld();
			for (var i = 0; i < world.mCollisionList.length; i++)
			{
				var info = world.mCollisionList[i]; // BodyCollisionInfo
				if(info.bodyA == this.body) {
					if(!this.pointMassIsConnected[info.bodyApm]) {
						this.pointMassIsConnected[info.bodyApm] = true;
						var jointInfo = this.stickies[info.bodyApm];
						
						// Third Version using Particle Wrapper

						// adjust helper point mass position
						jointInfo.temp.getPointMass(0).Position.set(
							this.body.getPointMass(info.bodyApm).Position
						);

						// update connected body, point masses and distance
						jointInfo.jointTempToA.bodyB = info.bodyB;
						jointInfo.jointTempToA.pointMassIndexB = info.bodyBpmA;
						jointInfo.jointTempToA.springDistance =
							jointInfo.temp.getPointMass(0).Position.sub(
								info.bodyB.getPointMass(info.bodyBpmA).Position
							).length() * info.edgeD;

						jointInfo.jointTempToB.bodyB = info.bodyB;
						jointInfo.jointTempToB.pointMassIndexB = info.bodyBpmB;
						jointInfo.jointTempToB.springDistance =
							jointInfo.temp.getPointMass(0).Position.sub(
								info.bodyB.getPointMass(info.bodyBpmB).Position
							).length() * (1.0 - info.edgeD);

						// attach helpers to world
						world.addJoint(jointInfo.jointToTemp);
						world.addJoint(jointInfo.jointTempToA);
						world.addJoint(jointInfo.jointTempToB);
						world.addBody(jointInfo.temp);

						jointInfo.temp.clearExternalForces();
						
						return;
					}
				}
			};
		},
		removeStickyJoints: function() {
			for(var i = 0; i < this.stickies.length; i++) {
				if(!this.pointMassIsConnected[i])
					continue; // do nothing, if not connected
				var jointToTemp = this.stickies[i].jointToTemp;
				if(
					jointToTemp.bodyA.getPointMass(jointToTemp.pointMassIndexA).Position.sub(
						jointToTemp.bodyB.getPointMass(jointToTemp.pointMassIndexB).Position
					).length() > this.maxStickyDistance // maximum elasticity exceeded
				) {
					this.pointMassIsConnected[i] = false;

					// remove this helper from world
					this.body.getWorld().removeJoint(jointToTemp);
					this.body.getWorld().removeJoint(this.stickies[i].jointTempToA);
					this.body.getWorld().removeJoint(this.stickies[i].jointTempToB);
					this.body.getWorld().removeBody(this.stickies[i].temp);
				};
			};
		}
	});

	return stickiness;
});

