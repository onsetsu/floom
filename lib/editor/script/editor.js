var wm = {};	
wm.entityFiles = [];

var $cookie = $.cookie;
$.cookie = function(name, value) {
	var returnValue = $cookie.apply($, arguments);
	console.log("cookie:", name, value, returnValue);
	return returnValue;
};

define([
	"basic/utils",
	'engine/domready',
	'engine/game',
	"engine/map/map",
	"engine/map/layer",
	"assets/loader",
	"editor/server",
	"editor/editorscene",
	'editor/script/evented-input',
	'editor/script/config', // +
	'editor/script/edit-map',
	'editor/script/edit-entities',
	'editor/script/select-file-dropdown', // +
	'editor/script/modal-dialogs', // +
	'editor/script/modaldialogpathselect', // +
	'editor/script/undo',
	"physics/jello"
], function(
	Utils,
	domReady,
	Game,
	Map,
	Layer,
	Loader,
	Server,
	EditorScene,
	EventedInput,
	Config,
	EditMap,
	EditEntities,
	SelectFileDropdown,
	ModalDialog,
	ModalDialogPathSelect,
	Undo,
	Jello
){ "use strict";

wm.Weltmeister = Game.subclass({	
	MODE: {
		DRAW: 1,
		TILESELECT: 2,
		ENTITYSELECT: 4
	},
	
	layers: [],
	entities: null,
	activeLayer: null,
	collisionLayer: null,
	selectedEntity: null,
	
	screen: {x: 0, y: 0},
	_rscreen: {x: 0, y: 0},
	mouseLast: {x: -1, y: -1},
	waitForModeChange: false,
	
	tilsetSelectDialog: null,
	levelSavePathDialog: null,
	labelsStep: 32,
	
	collisionSolid: 1,
	
	loadDialog: null,
	saveDialog: null,
	loseChangesDialog: null,
	fileName: 'untitled',
	filePath: wm.config.project.levelPath + 'untitled' + '.json',
	modified: false,
	needsDraw: true,
	
	undo: null,
	
	initialize: function() {
		Game.prototype.initialize.apply(this, arguments);

		this.editorScene = new EditorScene(this);
		//this.testServer();

		env.editor = this;
		
		env.system = {
			context: env.canvas.domElement.getContext('2d')
		};
		env.system.context.textBaseline = 'top';
		env.system.context.font = wm.config.labels.font;
		this.labelsStep = wm.config.labels.step;
		
		var fileEndingFormat = "json" || "scripts";
		
		// Dialogs
		this.loadDialog = new ModalDialogPathSelect( 'Load Level', 'Load', fileEndingFormat );
		this.loadDialog.onOk = Utils.Function.bind(this.load, this);
		this.loadDialog.setPath( wm.config.project.levelPath );
		$('#levelLoad').bind( 'click', Utils.Function.bind(this.showLoadDialog, this) );
		$('#levelNew').bind( 'click', Utils.Function.bind(this.showNewDialog, this) );
		
		this.saveDialog = new ModalDialogPathSelect( 'Save Level', 'Save', fileEndingFormat );
		this.saveDialog.onOk = Utils.Function.bind(this.save, this);
		this.saveDialog.setPath( wm.config.project.levelPath );
		$('#levelSaveAs').bind( 'click', Utils.Function.bind(this.saveDialog.open, this.saveDialog) );
		$('#levelSave').bind( 'click', Utils.Function.bind(this.saveQuick, this) );
		
		this.loseChangesDialog = new ModalDialog( 'Lose all changes?' );
		
		this.deleteLayerDialog = new ModalDialog( 'Delete Layer? NO UNDO!' );
		this.deleteLayerDialog.onOk = Utils.Function.bind(this.removeLayer, this);
		
		this.mode = this.MODE.DEFAULT;
		

		env.input.initKeyboard();
		
		
		this.tilesetSelectDialog = new SelectFileDropdown( '#layerTileset', wm.config.api.browse, 'images' );
		this.entities = new EditEntities( $('#layerEntities') );
		
		$('#layers').sortable({
			update: Utils.Function.bind(this.reorderLayers, this)
		});
		$('#layers').disableSelection();
		this.resetModified();
		
		
		// Events/Input
		for( var key in wm.config.binds ) {
			if(!wm.config.binds.hasOwnProperty(key)) continue;

			env.input.bind( EventedInput.KEY[key], wm.config.binds[key] );
		}
		env.input.keydownCallback = Utils.Function.bind(this.keydown, this);
		env.input.keyupCallback = Utils.Function.bind(this.keyup, this);
		env.input.mousemoveCallback = Utils.Function.bind(this.mousemove, this);
		
		$(window).resize( Utils.Function.bind(this.resize, this) );
		$(window).bind( 'keydown', Utils.Function.bind(this.uikeydown, this) );
		$(window).bind( 'beforeunload', Utils.Function.bind(this.confirmClose, this) );
	
		$('#buttonAddLayer').bind( 'click', Utils.Function.bind(this.addLayer, this) );
		$('#buttonRemoveLayer').bind( 'click', Utils.Function.bind(this.deleteLayerDialog.open, this.deleteLayerDialog) );
		$('#buttonSaveLayerSettings').bind( 'click', Utils.Function.bind(this.saveLayerSettings, this) );
		$('#reloadImages').bind( 'click', function() { console.log("RELOAD IMAGES"); } ); // ig.Image.reloadCache );
		$('#layerIsCollision').bind( 'change', Utils.Function.bind(this.toggleCollisionLayer, this) );
		
		$('input#toggleSidebar').click(function() {
			$('div#menu').slideToggle('fast');
			$('input#toggleSidebar').toggleClass('active');
		});
		
		this.undo = new Undo( wm.config.undoLevels );


		//$.cookie('wmLastLevel', null);
		if( wm.config.loadLastLevel ) {
			var name = $.cookie('wmLastLevel');
			if( name ) {
				this.load( null, name );
			}
			else
			{
				this.loadNew();
			}
		}
		else
		{
			this.loadNew();
		}

		this.resize();
	},

	/*
	testServer: function() {
		var obj = {
			testReadFiles: function() {
				var dir = '';
				var fileType = Server.types.scripts;
				
				Server.browse(dir, fileType);
			}
		};
		if(Bloob.debug && Bloob.debug.datGui)
			Bloob.debug.datGui.add(obj, "testReadFiles");
	},
	*/
	
	// Process hotkeys for fast interaction with list of layers.
	uikeydown: function( event ) {
		console.log("uikeydown", event);
		if( event.target.type == 'text' ) {
			return;
		}
		
		var key = String.fromCharCode(event.which);
		if( key.match(/^\d$/) ) {
			var index = parseInt(key);
			var name = $('#layers div.layer:nth-child('+index+') span.name').text();
			
			var layer = /*name == 'entities'
				? this.entities
				:*/ this.getLayerWithName(name);
				
			if( layer ) {
				if( event.shiftKey ) {
					// Toggle visibility of the given layer.
					layer.toggleVisibility();
				} else {
					// Change to given layer.
					this.setActiveLayer( layer.name );
				}
			}
		}
	},
	
	
	showLoadDialog: function() {
		if( this.modified ) {
			this.loseChangesDialog.onOk = this.loadDialog.open.bind(this.loadDialog);
			this.loseChangesDialog.open();
		} else {
			this.loadDialog.open();
		}
	},
	
	showNewDialog: function() {
		if( this.modified ) {
			this.loseChangesDialog.onOk = this.loadNew.bind(this);
			this.loseChangesDialog.open();
		} else {
			this.loadNew();
		}
	},
	
	setModified: function() {
		if( !this.modified ) {
			this.modified = true;
			this.setWindowTitle();
		}
	},
	
	resetModified: function() {
		this.modified = false;
		this.setWindowTitle();
	},
	
	setWindowTitle: function() {
		document.title = this.fileName + (this.modified ? '*  - ' : ' - ') + 'Bloob Leveleditor';
		$('span.headerTitle').text(this.fileName);
		$('span.unsavedTitle').text(this.modified ? '*' : '');
	},
	
	
	confirmClose: function( event ) {
		var rv = undefined;
		if( this.modified && wm.config.askBeforeClose ) {
			rv = 'There are some unsaved changes. Leave anyway?';
		}
		event.returnValue = rv;
		return rv;
	},
	
	
	resize: function() {
		
		// Update canvas to new size.
		env.canvas.resize(new Jello.Vector2(
			wm.Weltmeister.getMaxWidth(),
			wm.Weltmeister.getMaxHeight()
		));
		env.system.context.textBaseline = 'top';
		env.system.context.font = wm.config.labels.font;
		
		// Adjust camera settings.
		env.camera.resetScaleRange();
		var heightToProject = 40; // or use world boundings: this.getWorld().mWorldLimits.Max.y - this.getWorld().mWorldLimits.Min.y;
		var desiredHeight = heightToProject * env.canvas.extent.y / env.canvas.extent.y;
		var desiredWidth = heightToProject * env.canvas.extent.x / env.canvas.extent.y;
		env.camera.viewport.extent.x = desiredWidth;
		env.camera.viewport.extent.y = desiredHeight;
		
		this.draw();
	},
	
	// Move camera by dragging.
	drag: function() {
		/*
		this.screen.x -= env.input.mouse.x - this.mouseLast.x;
		this.screen.y -= env.input.mouse.y - this.mouseLast.y;
		this._rscreen.x = Math.round(this.screen.x * ig.system.scale)/ig.system.scale;
		this._rscreen.y = Math.round(this.screen.y * ig.system.scale)/ig.system.scale;
		for( var i = 0; i < this.layers.length; i++ ) {
			this.layers[i].setScreenPos( this.screen.x, this.screen.y );
		}
		*/
		
		// Get last mouse coordinates.
		var mouseLastScreen = Vector2.Zero.copy();
		mouseLastScreen.set(this.mouseLast);

		// Get current mouse coordinates.
		var mouseCurrentScreen = Vector2.Zero.copy();
		mouseCurrentScreen.set(env.input.mouse);

		// Translate camera by the difference of these coordinates.
		// (converted to world coordinates)
		env.camera.translateBy(
			env.camera.screenToWorldCoordinates(mouseLastScreen).sub(
				env.camera.screenToWorldCoordinates(mouseCurrentScreen)
			)
		);
	},
	
	
	zoom: function( delta ) {
		var z = wm.config.view.zoom;
		var mx = ig.input.mouse.x * z,
			my = ig.input.mouse.y * z;
		
		if( z <= 1 ) {
			if( delta < 0 ) {
				z /= 2;
			}
			else {
				z *= 2;
			}
		}
		else {
			z += delta;
		}
		
		wm.config.view.zoom = z.limit( wm.config.view.zoomMin, wm.config.view.zoomMax );
		wm.config.labels.step = Math.round( this.labelsStep / wm.config.view.zoom );
		$('#zoomIndicator').text( wm.config.view.zoom + 'x' ).stop(true,true).show().delay(300).fadeOut();
		
		// Adjust mouse pos and screen coordinates
		ig.input.mouse.x = mx / wm.config.view.zoom;
		ig.input.mouse.y = my / wm.config.view.zoom;
		this.drag();
		
		for( var i in ig.Image.cache ) {
			if(!ig.Image.cache.hasOwnProperty(i)) continue;

			ig.Image.cache[i].resize( wm.config.view.zoom );
		}
		
		this.resize();
	},
	
	
	// -------------------------------------------------------------------------
	// Loading
	
	loadNew: function() {
		$.cookie( 'wmLastLevel', null );
		while( this.layers.length ) {
			this.layers[0].destroy();
			this.layers.splice( 0, 1 );
		}
		this.screen = {x: 0, y: 0};
		this.entities.clear();

		var emptyMap = new Map();
		var emptyLayer = new Layer("default").setWorld(new Jello.World());
		emptyMap.addLayer(emptyLayer);
		env.sceneStack.run(this.editorScene.setMap(emptyMap));

		this.fileName = 'untitled';
		this.filePath = this.fileNameToFilePath(this.fileName);
		this.saveDialog.setPath( this.filePath );
		this.resetModified();
		this.draw();
	},
	
	fileNameToFilePath: function ( name ) {
		return wm.config.project.levelPath + name + ".json";
	},
	
	filePathToFileName: function ( path ) {
		if(Utils.String.endsWith(path, ".json"))
			path = path.replace(".json", "");
		if(Utils.String.startsWith(path, wm.config.project.levelPath))
			path = path.replace(wm.config.project.levelPath, "");
		
		return path;
	},
	
	load: function( dialog, path ) {
		var that = this;

		this.fileName = this.filePathToFileName(path);//name;//.replace(/^.*\//,'');
		this.filePath = path;
		console.log("WRONG_PATH", this.fileName, this.filePath);
		this.saveDialog.setPath( wm.config.project.levelPath );
		
		var map = new Map(this.fileName);
		Loader.load(function() {
			that.loadResponse.call(that, map);
		});
		
	},
	
	
	loadResponse: function( mapOrData ) {
		var data = mapOrData;
		env.sceneStack.run(this.editorScene.setMap(mapOrData));

		$.cookie( 'wmLastLevel', this.fileName );
		
		/*
		// extract JSON from a module's JS
		var jsonMatch = data.match( /\/\*JSON\[\*\/([\s\S]*?)\/\*\]JSON\*\// );
		data = JSON.parse( jsonMatch ? jsonMatch[1] : data );
		*/
		
		while( this.layers.length ) {
			this.layers[0].destroy();
			this.layers.splice( 0, 1 );
		}
		this.screen = {x: 0, y: 0};
		this.entities.clear();
		
		
		/*
		for( var i=0; i < data.entities.length; i++ ) {
			var ent = data.entities[i];
			this.entities.spawnEntity( ent.type, ent.name, ent.x, ent.y, ent.settings );
		}
		*/
		
		/*
		for( var i=0; i < data.layer.length; i++ ) {
			var ld = data.layer[i];
			var newLayer = new wm.EditMap( ld.name, ld.tilesize, ld.tilesetName, !!ld.foreground );
			newLayer.resize( ld.width, ld.height );
			newLayer.linkWithCollision = ld.linkWithCollision;
			newLayer.repeat = ld.repeat;
			newLayer.preRender = !!ld.preRender;
			newLayer.distance = ld.distance;
			newLayer.visible = !ld.visible;
			newLayer.data = ld.data;
			newLayer.toggleVisibility();
			this.layers.push( newLayer );
			
			if( ld.name == 'collision' ) {
				this.collisionLayer = newLayer;
			}
			
			this.setActiveLayer( ld.name );
		}
		*/
		for( var i = 0; i < this.editorScene.map.getLayers().length; i++ ) {
			var layer = this.editorScene.map.getLayers()[i];
			this.setActiveLayer( layer.name );
		}
		
		//this.setActiveLayer( this.editorScene.map.getLayers()[0].name );
		
		this.reorderLayers();
		$('#layers').sortable('refresh');
		
		this.resetModified();
		//this.undo.clear();
		this.draw();
	},
	
	
	
	// -------------------------------------------------------------------------
	// Saving
	
	saveQuick: function() {
		if( this.fileName == 'untitled' ) {
			this.saveDialog.open();
		}
		else {
			console.log("quicksave: ", this.fileName, this.filePath);
			this.save( null, this.filePath );
		}
	},
	
	save: function( dialog, path ) {
		// Enhance path with file postfix if needed.
		if( !(path.match(/\.js$/) || path.match(/\.json$/)) ) {
			path += '.json';
		}
		
		this.filePath = path;
		this.fileName = this.filePathToFileName(this.filePath); //path.replace(/^.*\//,'');
		console.log("ABC: ", this.filePath, this.fileName);
		
		// Convert current Map into a json string (pretty print optionally).
		var dataString = JSON.stringify(this.editorScene.map.toJson());
		if( wm.config.project.prettyPrint ) {
			dataString = JSONFormat( dataString );
		}

		Server.save(
				path,
				dataString,
				Utils.Function.bind(this.saveResponse, this)
				);
	},
	
	saveResponse: function( data ) {
		if( data.error ) {
			alert( 'Error: ' + data.msg );
		} else {
			this.resetModified();
			$.cookie( 'wmLastLevel', this.fileName );
		}
	},
	
	
	
	// -------------------------------------------------------------------------
	// Layers
	
	addLayer: function() {
		var name = 'new_layer_' + this.editorScene.map.getLayers().length;
		var newLayer = new Layer( name, wm.config.layerDefaults.tilesize );
		//newLayer.resize( wm.config.layerDefaults.width, wm.config.layerDefaults.height );
		//newLayer.setScreenPos( this.screen.x, this.screen.y );
		//this.layers.push( newLayer );
		this.editorScene.map.addLayer(newLayer);
		this.setActiveLayer( name );
		this.updateLayerSettings();
		
		this.reorderLayers();
		
		$('#layers').sortable('refresh');
	},
	
	
	removeLayer: function() {
		var name = this.activeLayer.name;
		
		// Do not remove the last remaining layer.
		if( this.editorScene.map.getLayers().length <= 1 ) {
			return false;
		}

		this.activeLayer.destroy();
		if(this.editorScene.map.removeLayerByName(name)) {
			this.reorderLayers();
			$('#layers').sortable('refresh');
			this.setActiveLayer( this.editorScene.map.getLayers()[0].name );
			return true;
		} else {
			return false;
		}
	},
	
	
	getLayerWithName: function( name ) {
		var layers = this.editorScene.map.getLayers();
		for( var i = 0; i < layers.length; i++ ) {
			if( layers[i].name == name ) {
				return layers[i];
			}
		}
		return null;
	},
	
	
	reorderLayers: function( dir ) {
		var isForegroundLayer = true;
		$('#layers div.layer span.name').each((function( newIndex, span ){
			var name = $(span).text();
			
			var layer = this.getLayerWithName(name);
			if( layer ) layer.setHotkey( newIndex+1 );
		}).bind(this));

		this.setModified();
		this.draw();
	},
	
	
	updateLayerSettings: function( ) {
		$('#layerName').val( this.activeLayer.name );
		$('#layerTileset').val( this.activeLayer.tilesetName );
		$('#layerTilesize').val( this.activeLayer.tilesize );
		$('#layerWidth').val( this.activeLayer.movementScale.x );
		$('#layerHeight').val( this.activeLayer.movementScale.y );
		$('#layerPreRender').prop( 'checked', this.activeLayer.preRender );
		$('#layerRepeat').prop( 'checked', this.activeLayer.repeat );
		$('#layerLinkWithCollision').prop( 'checked', this.activeLayer.linkWithCollision );
		$('#layerDistance').val( this.activeLayer.distance );
	},
	
	
	saveLayerSettings: function() {
		var isCollision = $('#layerIsCollision').prop('checked');
		
		var newName = $('#layerName').val();
		var newWidth = Math.floor($('#layerWidth').val());
		var newHeight = Math.floor($('#layerHeight').val());
		
		if( newWidth != this.activeLayer.width || newHeight != this.activeLayer.height ) {
			this.activeLayer.resize( newWidth, newHeight );
		}
		this.activeLayer.tilesize = Math.floor($('#layerTilesize').val());
		
		/*
		if( isCollision ) {
			newName = 'collision';
			this.activeLayer.linkWithCollision = false;
			this.activeLayer.distance = 1;
			this.activeLayer.repeat = false;
			this.activeLayer.setCollisionTileset();
		}
		else {
		*/
			/*
			var newTilesetName = $('#layerTileset').val();
			if( newTilesetName != this.activeLayer.tilesetName ) {
				this.activeLayer.setTileset( newTilesetName );
			}
			*/
			this.activeLayer.linkWithCollision = $('#layerLinkWithCollision').prop('checked');
			this.activeLayer.distance = $('#layerDistance').val();
			this.activeLayer.repeat = $('#layerRepeat').prop('checked');
			this.activeLayer.preRender = $('#layerPreRender').prop('checked');
		//}
		
		/*
		if( newName == 'collision' ) {
			// is collision layer
			this.collisionLayer = this.activeLayer;
		} 
		else if( this.activeLayer.name == 'collision' ) {
			// was collision layer, but is no more
			this.collisionLayer = null;
		}
		*/

		this.activeLayer.setName( newName );
		this.setModified();
		this.draw();
	},
	
	setActiveLayer: function( name ) {
		var previousLayer = this.activeLayer;
		this.activeLayer = this.getLayerWithName(name);
		if( previousLayer == this.activeLayer ) {
			return; // nothing to do here
		}
		
		if( previousLayer ) {
			previousLayer.setActive( false );
		}
		this.activeLayer.setActive( true );
		this.mode = this.MODE.DEFAULT;
		
		//$('#layerIsCollision').prop('checked', (name == 'collision') );
		
		//if( name == 'entities' ) { $('#layerSettings').fadeOut(100); } else ...
		this.entities.selectEntity( null );
		//this.toggleCollisionLayer();
		$('#entitySettings').fadeOut(100, (function(){
			$('#layerSettings')
				.fadeOut(100,this.updateLayerSettings.bind(this))
				.fadeIn(100);
		}).bind(this));

		this.draw();
	},
	
	/*
	toggleCollisionLayer: function( ev ) {
		var isCollision = $('#layerIsCollision').prop('checked');
		$('#layerLinkWithCollision,#layerDistance,#layerPreRender,#layerRepeat,#layerName,#layerTileset')
			.attr('disabled', isCollision );
	},
	*/
	
	
	// -------------------------------------------------------------------------
	// Update
	
	mousemove: function() {
		console.log("editor-mousemove");
		if( !this.activeLayer ) {
			return;
		}
		
		if( this.mode == this.MODE.DEFAULT ) {
			
			// scroll map
			if( env.input.state('drag') ) {
				this.drag();
			}
			
			/*
			else if( env.input.state('draw') ) {
				
				// move/scale entity
				if( this.activeLayer == this.entities ) {
					var x = ig.input.mouse.x + this.screen.x;
					var y = ig.input.mouse.y + this.screen.y;
					this.entities.dragOnSelectedEntity( x, y );
					this.setModified();
				}
				
				// draw on map
				else if( !this.activeLayer.isSelecting ) {
					this.setTileOnCurrentLayer();
				}
			}
			else if( this.activeLayer == this.entities ) {
				var x = ig.input.mouse.x + this.screen.x;
				var y = ig.input.mouse.y + this.screen.y;
				this.entities.mousemove( x, y );
			}
			*/
		}
		
		this.mouseLast = {x: env.input.mouse.x, y: env.input.mouse.y};
		this.draw();
	},
	
	
	keydown: function( action ) {
		console.log("editor-keydown");
		if( !this.activeLayer ) {
			return;
		}
		
		if( action == 'draw' ) {
			if( this.mode == this.MODE.DEFAULT ) {
				// select entity
				if( true ) {//this.activeLayer == this.entities ) {
					var worldCoordinates = env.camera.screenToWorldCoordinates(env.input.mouse);
					//var x = ig.input.mouse.x + this.screen.x;
					//var y = ig.input.mouse.y + this.screen.y;
					var entity = this.entities.selectEntityAt( worldCoordinates );
					if( entity ) {
						console.log(entity);
						//this.undo.beginEntityEdit( entity );
					}
				}
				/*
				else {
					if( ig.input.state('select') ) {
						this.activeLayer.beginSelecting( ig.input.mouse.x, ig.input.mouse.y );
					}
					else {
						this.undo.beginMapDraw();
						this.activeLayer.beginEditing();
						if( 
							this.activeLayer.linkWithCollision && 
							this.collisionLayer && 
							this.collisionLayer != this.activeLayer
						) {
							this.collisionLayer.beginEditing();
						}
						this.setTileOnCurrentLayer();
					}
				}
			}
			else if( this.mode == this.MODE.TILESELECT && ig.input.state('select') ) {	
				this.activeLayer.tileSelect.beginSelecting( ig.input.mouse.x, ig.input.mouse.y );
		*/
			}
		}
		
		this.draw();
	},
	
	
	keyup: function( action ) {
		console.log("editor-keyup");
		if( !this.activeLayer ) {
			return;
		}
		
		/*
		if( action == 'delete' ) {
			this.entities.deleteSelectedEntity();
			this.setModified();
		}
		
		else if( action == 'clone' ) {
			this.entities.cloneSelectedEntity();
			this.setModified();
		}
		
		else*/ if( action == 'grid' ) {
			wm.config.view.grid = !wm.config.view.grid;
		}
		
		else if( action == 'menu' ) {
			if( this.mode != this.MODE.TILESELECT && this.mode != this.MODE.ENTITYSELECT ) {
				if( true /*this.activeLayer == this.entities*/ ) {
					this.mode = this.MODE.ENTITYSELECT;
					this.entities.showMenu( env.input.mouse.x, env.input.mouse.y );
				}
				else {
					this.mode = this.MODE.TILESELECT;
					this.activeLayer.tileSelect.setPosition( ig.input.mouse.x, ig.input.mouse.y	);
				}
			} else {
				this.mode = this.MODE.DEFAULT;
				this.entities.hideMenu();
			}
		}
		/*
		
		else if( action == 'zoomin' ) {
			this.zoom( 1 );
		}
		else if( action == 'zoomout' ) {
			this.zoom( -1 );
		}
		
		
		if( action == 'draw' ) {			
			// select tile
			if( this.mode == this.MODE.TILESELECT ) {
				this.activeLayer.brush = this.activeLayer.tileSelect.endSelecting( ig.input.mouse.x, ig.input.mouse.y );
				this.mode = this.MODE.DEFAULT;
			}
			else if( this.activeLayer == this.entities ) {
				this.undo.endEntityEdit();
			}
			else {
				if( this.activeLayer.isSelecting ) {
					this.activeLayer.brush = this.activeLayer.endSelecting( ig.input.mouse.x, ig.input.mouse.y );
				}
				else {
					this.undo.endMapDraw();
				}
			}
		}
		
		if( action == 'undo' ) {
			this.undo.undo();
		}
		
		if( action == 'redo' ) {
			this.undo.redo();
		}
		*/
		
		this.draw();
		this.mouseLast = {x: env.input.mouse.x, y: env.input.mouse.y};
	},
	
	
	setTileOnCurrentLayer: function() {
		if( !this.activeLayer || !this.activeLayer.scroll ) {
			return;
		}
		
		var co = this.activeLayer.getCursorOffset();
		var x = ig.input.mouse.x + this.activeLayer.scroll.x - co.x;
		var y = ig.input.mouse.y + this.activeLayer.scroll.y - co.y;
		
		var brush = this.activeLayer.brush;
		for( var by = 0; by < brush.length; by++ ) {
			var brushRow = brush[by];
			for( var bx = 0; bx < brushRow.length; bx++ ) {
				
				var mapx = x + bx * this.activeLayer.tilesize;
				var mapy = y + by * this.activeLayer.tilesize;
				
				var newTile = brushRow[bx];
				var oldTile = this.activeLayer.getOldTile( mapx, mapy );
				
				this.activeLayer.setTile( mapx, mapy, newTile );
				this.undo.pushMapDraw( this.activeLayer, mapx, mapy, oldTile, newTile );
				
				
				if( 
					this.activeLayer.linkWithCollision && 
					this.collisionLayer && 
					this.collisionLayer != this.activeLayer
				) {
					var collisionLayerTile = newTile > 0 ? this.collisionSolid : 0;
					
					var oldCollisionTile = this.collisionLayer.getOldTile(mapx, mapy);
					this.collisionLayer.setTile( mapx, mapy, collisionLayerTile );
					this.undo.pushMapDraw( this.collisionLayer, mapx, mapy, oldCollisionTile, collisionLayerTile );
				}
			}
		}
		
		this.setModified();
	},
	
	
	// -------------------------------------------------------------------------
	// Drawing
	
	draw: function() {
		// The actual drawing loop is scheduled via ig.setAnimation() already.
		// We just set a flag to indicate that a redraw is needed.
		this.needsDraw = true;
	},
	
	
	drawIfNeeded: function() {
		if( wm.config.labels.draw ) {
			this.drawLabels( env.renderer, wm.config.labels.step );
		}

		// Only draw if flag is set
		if( !this.needsDraw ) { return; }
		this.needsDraw = false;
		
		//ig.system.clear( wm.config.colors.clear );
	
		/*
		var entitiesDrawn = false;
		for( var i = 0; i < this.layers.length; i++ ) {
			var layer = this.layers[i];
			
			// This layer is a foreground layer? -> Draw entities first!
			if( !entitiesDrawn && layer.foreground ) {
				entitiesDrawn = true;
				this.entities.draw();
			}
			layer.draw();
		}
		
		if( !entitiesDrawn ) {
			this.entities.draw();
		}
		*/
		
		/*
		if( this.activeLayer ) {
			if( this.mode == this.MODE.TILESELECT ) {
				this.activeLayer.tileSelect.draw();
				this.activeLayer.tileSelect.drawCursor( ig.input.mouse.x, ig.input.mouse.y );
			}
			
			if( this.mode == this.MODE.DEFAULT ) {
				this.activeLayer.drawCursor( ig.input.mouse.x, ig.input.mouse.y );
			}
		}
		*/
	},
	
	
	drawLabels: function( renderer, step ) {
		// Drawing options.
		renderer.setOptions({
			"color": "white",
			"opacity": 0.8,
			"lineWidth": 1
		});
		
		// X-Axis:
		var drawXAxis = function(text, screenX) {
			renderer.drawText(
				text,
				new Vector2(screenX, 0)
			);
		};
		
		var minXWorld = env.camera.screenToWorldCoordinates(new Vector2(0, 0)).x;
		var maxXWorld = env.camera.screenToWorldCoordinates(new Vector2(env.canvas.extent.x, 0)).x;
		for(var x = 0; x < maxXWorld; x+= step) {
			drawXAxis( "" + x, env.camera.worldToScreenCoordinates(new Vector2(x, 0)).x );
		}
		for(var x = 0; x > minXWorld; x-= step) {
			drawXAxis( "" + x, env.camera.worldToScreenCoordinates(new Vector2(x, 0)).x );
		}

		// Y-Axis:
		var drawYAxis = function(text, screenY) {
			renderer.drawText(
				text,
				new Vector2(0, screenY)
			);
		};
		
		var minYWorld = env.camera.screenToWorldCoordinates(new Vector2(0, env.canvas.extent.y)).y;
		var maxYWorld = env.camera.screenToWorldCoordinates(new Vector2(0, 0)).y;
		for(var y = 0; y < maxYWorld; y+= step) {
			drawYAxis( "" + y, env.camera.worldToScreenCoordinates(new Vector2(0, y)).y );
		}
		for(var y = 0; y > minYWorld; y-= step) {
			drawYAxis( "" + y, env.camera.worldToScreenCoordinates(new Vector2(0, y)).y );
		}
	},
	
	
	getEntityByName: function( name ) {
		return this.entities.getEntityByName( name );
	}
});


wm.Weltmeister.getMaxWidth = function() {
	return $(window).width();
};

wm.Weltmeister.getMaxHeight = function() {
	return $(window).height() - $('#headerMenu').height();
};

// Custom ig.Image class for use in Weltmeister. To make the zoom function 
// work, we need some additional scaling behavior:
// Keep the original image, maintain a cache of scaled versions and use the 
// default Canvas scaling (~bicubic) instead of nearest neighbor when 
// zooming out.
/*
ig.Image.inject({
	resize: function( scale ) {
		if( !this.loaded ) { return; }
		if( !this.scaleCache ) { this.scaleCache = {}; }
		if( this.scaleCache['x'+scale] ) {
			this.data = this.scaleCache['x'+scale];
			return;
		}
		
		// Retain the original image when scaling
		this.origData = this.data = this.origData || this.data;
		
		if( scale > 1 ) {
			// Nearest neighbor when zooming in
			this.parent( scale );
		}
		else {
			// Otherwise blur
			var scaled = ig.$new('canvas');
			scaled.width = Math.ceil(this.width * scale);
			scaled.height = Math.ceil(this.height * scale);
			var scaledCtx = scaled.getContext('2d');
			scaledCtx.drawImage( this.data, 0, 0, this.width, this.height, 0, 0, scaled.width, scaled.height );
			this.data = scaled;
		}
		
		this.scaleCache['x'+scale] = this.data;
	}
});
*/

/*
// Create a custom loader, to skip sound files and the run loop creation
wm.Loader = ig.Loader.extend({
	end: function() {
		if( this.done ) { return; }
		
		clearInterval( this._intervalId );
		this.done = true;
		ig.system.clear( wm.config.colors.clear );
		ig.game = new (this.gameClass)();
	},
	
	loadResource: function( res ) {
		if( res instanceof ig.Sound ) {
			this._unloaded.erase( res.path );
		}
		else {
			this.parent( res );
		}
	}
});
*/


return wm.Weltmeister;

/*
// Init!
ig.system = new ig.System(
	'#canvas', 1,
	Math.floor(wm.Weltmeister.getMaxWidth() / wm.config.view.zoom), 
	Math.floor(wm.Weltmeister.getMaxHeight() / wm.config.view.zoom), 
	wm.config.view.zoom
);
	
ig.input = new wm.EventedInput();
ig.soundManager = new ig.SoundManager();
ig.ready = true;

var loader = new wm.Loader( wm.Weltmeister, ig.resources );
loader.load();
*/

});


