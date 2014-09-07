define([
	"basic/utils",
	'editor/script/modal-dialogs',
	'editor/script/select-file-dropdown',
	"editor/script/config"
], function(
	Utils,
	ModalDialog,
	SelectFileDropdown,
	Config
){ "use strict";

wm.ModalDialogPathSelect = ModalDialog.subclass({
	pathDropdown: null,
	pathInput: null,
	fileType: '',
	
	initialize: function( text, okText, type ) {
		this.fileType = type || '';
		wm.ModalDialog.prototype.initialize.call( this, text, (okText || 'Select') );
	},
	
	
	setPath: function( path ) {
		var dir = path.replace(/\/[^\/]*$/, '');
		this.pathInput.val( path );
		this.pathDropdown.loadDir( dir );
	},
	
	
	initDialog: function() {
		wm.ModalDialog.prototype.initDialog.call(this);
		this.pathInput = $('<input/>', {'type': 'text', 'class': 'modalDialogPath'} );
		this.buttonDiv.before( this.pathInput );
		this.pathDropdown = new wm.SelectFileDropdown( this.pathInput, wm.config.api.browse, this.fileType );
	},
	
	
	clickOk: function() {
		if( this.onOk ) { 
			this.onOk(this, this.pathInput.val()); 
		}
		this.close();
	}
});

return wm.ModalDialogPathSelect;

});