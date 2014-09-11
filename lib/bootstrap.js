requirejs.config({
    baseUrl: 'lib'
});

require(["engine/main", "bloob"], function(main, BloobGame) {
	// Start Game instance.
	main(BloobGame);
	
});