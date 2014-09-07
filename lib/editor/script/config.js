define([

], function(){ "use strict";

wm.config = {
	project: {
		'modulePath': 'lib/',
		'entityFiles': 'lib/bloob/entities/*.js',
		'levelPath': 'data/maps/',
		'outputFormat': 'module', // 'module' or 'json'
		'prettyPrint': true
	},
	
	'layerDefaults': {
		'width': 30,
		'height': 20,
		'tilesize': 8
	},
	
	'askBeforeClose': true,
	'loadLastLevel': true,
	
	'entityGrid': 4,
	'undoLevels': 50,
	
	'binds': {
		'MOUSE1': 'draw',
		'MOUSE2': 'drag',
		'SHIFT': 'select',
		'CTRL': 'drag',
		'SPACE': 'menu',
		'DELETE': 'delete',
		'BACKSPACE': 'delete',
		'G': 'grid',
		'C': 'clone',
		'Z': 'undo',
		'Y': 'redo',
		'MWHEEL_UP': 'zoomin',
		'PLUS': 'zoomin',
		'MWHEEL_DOWN': 'zoomout',
		'MINUS': 'zoomout'
	},
	
	'view': {
		'zoom': 1,
		'zoomMax': 4,
		'zoomMin': 0.125,
		'grid': false,
		'gridStep': 10
	},
	
	// Labels for rendering the x- and y-axis.
	'labels': {
		'draw': true,
		'step': 5,
		'font': '10px Bitstream Vera Sans Mono, Monaco, sans-serif'
	},
	
	'colors': {
		'clear': '#000000',
		'highlight': '#ceff36',
		'primary': '#ffffff',
		'secondary': '#555555',
		'selection': '#ff9933'
	},
	
	'collisionTiles': {
		'path': 'lib/weltmeister/collisiontiles-64.png',
		'tilesize': 64
	},
	
	'api': {
		'save': 'lib/weltmeister/api/save.php',
		'browse': 'lib/weltmeister/api/browse.php',
		'glob': 'lib/weltmeister/api/glob.php'
	}
};

});