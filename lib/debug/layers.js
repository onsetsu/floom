define([
	'debug/menu',
	'debug/panel',
	"engine/scene/mapscene",
	"basic/utils"
], function(Menu, DebugPanel, MapScene, Utils){ "use strict";

/**
 *  ---------------------------- LAYERS PANEL ----------------------------
 */
var mapSceneSetMap = MapScene.prototype.setMap;
MapScene.inject({
	setMap: function(map) {
		var returnValue = mapSceneSetMap.apply(this, arguments);
		Bloob.debug.panels.layers.load(map);
		return returnValue;
	}
});

Bloob.DebugMapsPanel = Bloob.DebugPanel.subclass({
	mapScreens: [],
	
	initialize: function( name, label ) {
		Bloob.DebugPanel.prototype.initialize.apply(this, arguments);
		this.layers = [];
		this.load();
	},
	
	
	load: function( map ) {
		this.options = [];
		this.panels = [];
		
		if( !map || !map.getLayers().length ) {
			this.container.html('<em>No Layers Loaded</em>');
			return;	
		}
		
		this.layers = map.getLayers();
		this.mapScreens = [];
		this.container.html('');
		
		for( var m = 0; m < this.layers.length; m++ ) {
			var layer = this.layers[m];
			
			var subPanel = new Bloob.DebugPanel( m, 'Layer '+m );
			
			var head = new $('<strong />');
			head.text("Layer: " + m + ': '+ layer.name);
			subPanel.container.append( head );
			
			subPanel.addOption( new Bloob.DebugOption('Enabled', layer, 'enabled') );
			
			//this.generateMiniMap( subPanel, layer, m );
			this.addPanel( subPanel );
		}
	/*
	},
	
	
	generateMiniMap: function( panel, map, id ) {
		var s = ig.system.scale; // we'll need this a lot
		
		// resize the tileset, so that one tile is 's' pixels wide and high
		var ts = ig.$new('canvas');
		var tsctx = ts.getContext('2d');
		
		var w = map.tiles.width * s;
		var h = map.tiles.height * s;
		var ws = w / map.tilesize;
		var hs = h / map.tilesize;
		tsctx.drawImage( map.tiles.data, 0, 0, w, h, 0, 0, ws, hs );
		
		// create the minimap canvas
		var mapCanvas = ig.$new('canvas');
		mapCanvas.width = map.width * s;
		mapCanvas.height = map.height * s;
		var ctx = mapCanvas.getContext('2d');
		
		if( ig.game.clearColor ) {
			ctx.fillStyle = ig.game.clearColor; 
			ctx.fillRect(0, 0, w, h);
		}
		
		// draw the map
		var tile = 0;
		for( var x = 0; x < map.width; x++ ) {
			for( var y = 0; y < map.height; y++ ) {
				if( (tile = map.data[y][x]) ) {
					ctx.drawImage(
						ts, 
						Math.floor(((tile-1) * s) % ws),
						Math.floor((tile-1) * s / ws) * s,
						s, s,
						x * s, y * s,
						s, s
					);
				}
			}
		}
		
		var mapContainer = ig.$new('div');
		mapContainer.className = 'ig_debug_map_container';
		mapContainer.style.width = map.width * s + 'px';
		mapContainer.style.height = map.height * s + 'px';
		
		var mapScreen = ig.$new('div');
		mapScreen.className = 'ig_debug_map_screen';
		mapScreen.style.width = ((ig.system.width / map.tilesize) * s - 2) + 'px';
		mapScreen.style.height = ((ig.system.height / map.tilesize) * s - 2) + 'px';
		this.mapScreens[id] = mapScreen;
		
		mapContainer.appendChild( mapCanvas );
		mapContainer.appendChild( mapScreen );
		panel.container.appendChild( mapContainer );
	},
	
	
	afterRun: function() {
		// Update the screen position DIV for each mini-map
		var s = ig.system.scale;
		for( var m = 0; m < this.layers.length; m++ ) {
			var map = this.layers[m];
			var screen = this.mapScreens[m];
			
			if( !map || !screen ) { // Quick sanity check
				continue;
			}
			
			var x = map.scroll.x / map.tilesize;
			var y = map.scroll.y / map.tilesize;
			
			if( map.repeat ) {
				x %= map.width;
				y %= map.height;
			}
			
			screen.style.left = (x * s) + 'px';
			screen.style.top = (y * s) + 'px';
		}
	*/
	}
});

$().ready(function() {
	
Bloob.debug.addPanel({
	type: Bloob.DebugMapsPanel,
	name: 'layers',
	label: 'Layers'
});

});

});