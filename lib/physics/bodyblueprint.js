define([
	"physics/collisiontype",
	"physics/vector2",
	"physics/closedshape",
	"physics/materialmanager",
	"physics/bodybuilder"
], function(
	CollisionType,
	Vector2,
	ClosedShape,
	Material,
	BodyBuilder
) {
	var BodyDefinition = function() {
		this.shape = new ClosedShape()
			.begin()
			.addVertex(new Vector2(0.0, 0.0))
			.finish();
		this.boundaryCount = 0;
		this.pointMasses = 1;
		this.translate = Vector2.Zero.copy();
		this.rotate = 0;
		this.scale = Vector2.One.copy();
		this.isKinematic = false;
		this.edgeSpringK = 0.0;
		this.edgeSpringDamp = 0.0;
		this.shapeSpringK = 0.0;
		this.shapeSpringDamp = 0.0;
		this.gasPressure = 1.0;
		
		this.material = Material.Default;
		this.collisionType = CollisionType.getDefault();
		
		this.internalSprings = [];
		
		this.useSprings = false;
		this.usePressure = false;
	};

	// world
	BodyDefinition.prototype.getWorld = function() {
		return this.world;
	};

	BodyDefinition.prototype.setWorld = function(world) {
		this.world = world;
	};

	// shape
	BodyDefinition.prototype.getShape = function() {
		return this.shape;
	};

	BodyDefinition.prototype.setShape = function(shape) {
		this.shape = shape;
	};

	// boundaryCount
	BodyDefinition.prototype.getBoundaryCount = function() {
		return this.boundaryCount;
	};

	BodyDefinition.prototype.setBoundaryCount = function(boundaryCount) {
		this.boundaryCount = boundaryCount;
	};

	// pointMasses
	BodyDefinition.prototype.getPointMasses = function() {
		return this.pointMasses;
	};

	BodyDefinition.prototype.setPointMasses = function(pointMasses) {
		this.pointMasses = pointMasses;
	};

	// translate (as well as the convenient method getPosition)
	BodyDefinition.prototype.getPosition = function() {
		return this.translate;
	};

	BodyDefinition.prototype.getTranslate = function() {
		return this.translate;
	};

	BodyDefinition.prototype.setTranslate = function(translate) {
		this.translate = translate;
	};

	// rotate
	BodyDefinition.prototype.getAngleInRadians = function() {
		return this.rotate;
	};

	BodyDefinition.prototype.getRotate = function() {
		return this.rotate;
	};

	BodyDefinition.prototype.setRotate = function(rotate) {
		this.rotate = rotate;
	};

	//scale
	BodyDefinition.prototype.getScale = function() {
		return this.scale;
	};

	BodyDefinition.prototype.setScale = function(scale) {
		this.scale = scale;
	};

	// isKinematic
	BodyDefinition.prototype.getIsKinematic = function() {
		return this.isKinematic;
	};

	BodyDefinition.prototype.setIsKinematic = function(isKinematic) {
		this.isKinematic = isKinematic;
	};

	// edgeSpringK
	BodyDefinition.prototype.getEdgeSpringK = function() {
		return this.edgeSpringK;
	};

	BodyDefinition.prototype.setEdgeSpringK = function(edgeSpringK) {
		this.edgeSpringK = edgeSpringK;
	};

	// edgeSpringDamp
	BodyDefinition.prototype.getEdgeSpringDamp = function() {
		return this.edgeSpringDamp;
	};

	BodyDefinition.prototype.setEdgeSpringDamp = function(edgeSpringDamp) {
		this.edgeSpringDamp = edgeSpringDamp;
	};

	// shapeSpringK
	BodyDefinition.prototype.getShapeSpringK = function() {
		return this.shapeSpringK;
	};

	BodyDefinition.prototype.setShapeSpringK = function(shapeSpringK) {
		this.shapeSpringK = shapeSpringK;
	};

	// shapeSpringDamp
	BodyDefinition.prototype.getShapeSpringDamp = function() {
		return this.shapeSpringDamp;
	};

	BodyDefinition.prototype.setShapeSpringDamp = function(shapeSpringDamp) {
		this.shapeSpringDamp = shapeSpringDamp;
	};

	// gasPressure
	BodyDefinition.prototype.getGasPressure = function() {
		return this.gasPressure;
	};

	BodyDefinition.prototype.setGasPressure = function(gasPressure) {
		this.gasPressure = gasPressure;
	};

	// material
	BodyDefinition.prototype.getMaterial = function() {
		return this.material;
	};

	BodyDefinition.prototype.setMaterial = function(material) {
		this.material = material;
	};

	// collisionType
	BodyDefinition.prototype.getCollisionType = function() {
		return this.collisionType;
	};

	BodyDefinition.prototype.setCollisionType = function(collisionType) {
		this.collisionType = collisionType;
	};

	// internalSprings
	BodyDefinition.prototype.getInternalSprings = function() {
		return this.internalSprings;
	};

	BodyDefinition.prototype.addInternalSpring = function(pointA, pointB, springK, damping) {
		this.internalSprings.push(arguments);
	};

	// useSprings
	BodyDefinition.prototype.getUseSprings = function() {
		return this.useSprings;
	};

	BodyDefinition.prototype.setUseSprings = function(useSprings) {
		this.useSprings = useSprings;
	};

	// usePressure
	BodyDefinition.prototype.getUsePressure = function() {
		return this.usePressure;
	};

	BodyDefinition.prototype.setUsePressure = function(usePressure) {
		this.usePressure = usePressure;
	};

	/*
	 * BodyBluePrint
	 * Defines a chainable interface for BodyDefinitions.
	 * Used by user.
	 */
	var BodyBluePrint = function() {
		this.store = new BodyDefinition();
	};

	BodyBluePrint.prototype.world = function(world) {
		this.store.setWorld(world);
		return this;
	};

	BodyBluePrint.prototype.shape = function(shape) {
		this.store.setShape(shape);
		return this;
	};

	BodyBluePrint.prototype.boundaryCount = function(boundaryCount) {
		this.store.setBoundaryCount(boundaryCount);
		return this;
	};

	BodyBluePrint.prototype.pointMasses = function(pointMasses) {
		this.store.setPointMasses(pointMasses);
		return this;
	};

	BodyBluePrint.prototype.translate = function(translate) {
		this.store.setTranslate(translate);
		return this;
	};

	BodyBluePrint.prototype.rotate = function(rotate) {
		this.store.setRotate(rotate);
		return this;
	};

	BodyBluePrint.prototype.scale = function(scale) {
		this.store.setScale(scale);
		return this;
	};

	BodyBluePrint.prototype.isKinematic = function(isKinematic) {
		this.store.setIsKinematic(isKinematic);
		return this;
	};

	BodyBluePrint.prototype.edgeSpringK = function(edgeSpringK) {
		this.store.setUseSprings(true);
		this.store.setEdgeSpringK(edgeSpringK);
		return this;
	};

	BodyBluePrint.prototype.edgeSpringDamp = function(edgeSpringDamp) {
		this.store.setUseSprings(true);
		this.store.setEdgeSpringDamp(edgeSpringDamp);
		return this;
	};

	BodyBluePrint.prototype.shapeSpringK = function(shapeSpringK) {
		this.store.setUseSprings(true);
		this.store.setShapeSpringK(shapeSpringK);
		return this;
	};

	BodyBluePrint.prototype.shapeSpringDamp = function(shapeSpringDamp) {
		this.store.setUseSprings(true);
		this.store.setShapeSpringDamp(shapeSpringDamp);
		return this;
	};

	BodyBluePrint.prototype.gasPressure = function(gasPressure) {
		this.store.setUseSprings(true);
		this.store.setUsePressure(true);
		this.store.setGasPressure(gasPressure);
		return this;
	};

	BodyBluePrint.prototype.material = function(material) {
		this.store.setMaterial(material);
		return this;
	};

	BodyBluePrint.prototype.collisionType = function(collisionType) {
		this.store.setCollisionType(collisionType);
		return this;
	};

	BodyBluePrint.prototype.addInternalSpring = function(pointA, pointB, springK, damping) {
		this.store.setUseSprings(true);
		this.store.addInternalSpring(pointA, pointB, springK, damping);
		return this;
	};

	// Add convenient method to run BodyBuilder with constructed BodyDefinition.
	BodyBluePrint.prototype.build = function() {
		return BodyBuilder.build(this.store);
	};
	
	return BodyBluePrint;
});
