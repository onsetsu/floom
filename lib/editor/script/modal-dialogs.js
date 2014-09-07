define([
	"basic/utils"
], function(Utils){ "use strict";

wm.ModalDialog = mini.Class.subclass({
	onOk: null,
	onCancel: null,

	text: '',
	okText: '',
	cancelText: '',
	
	background: null,
	dialogBox: null,
	buttonDiv: null,
	
	initialize: function( text, okText, cancelText ) {
		this.text = text;
		this.okText = okText || 'OK';
		this.cancelText = cancelText || 'Cancel';
	
		this.background = $('<div/>', {'class':'modalDialogBackground'});
		this.dialogBox = $('<div/>', {'class':'modalDialogBox'});
		this.background.append( this.dialogBox );
		$('body').append( this.background );
		
		this.initDialog();
	},
	
	
	initDialog: function() {
		this.buttonDiv = $('<div/>', {'class': 'modalDialogButtons'} );
		var okButton = $('<input/>', {'type': 'button', 'class':'button', 'value': this.okText});
		var cancelButton = $('<input/>', {'type': 'button', 'class':'button', 'value': this.cancelText});
		
		okButton.bind( 'click', Utils.Function.bind(this.clickOk, this) );
		cancelButton.bind( 'click', Utils.Function.bind(this.clickCancel, this) );
		
		this.buttonDiv.append( okButton ).append( cancelButton );
		
		this.dialogBox.html('<div class="modalDialogText">' + this.text + '</div>' );
		this.dialogBox.append( this.buttonDiv );
	},
	
	
	clickOk: function() {
		if( this.onOk ) { this.onOk(this); }
		this.close();
	},
	
	
	clickCancel: function() {
		if( this.onCancel ) { this.onCancel(this); }
		this.close();
	},
	
	
	open: function() {
		this.background.fadeIn(100);
	},
	
	
	close: function() {
		this.background.fadeOut(100);
	}
});

return wm.ModalDialog;

});