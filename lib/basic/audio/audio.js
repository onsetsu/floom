define([

], function() {
	var Audio = mini.Class.subclass({
		initialize: function() {
			this.buffers = {};
			this._initAudioGraph();
		},
		_initAudioGraph: function() {
			// init audio graph
			try {
				// Fix up for prefixing
				window["AudioContext"] = window["AudioContext"] || window["webkitAudioContext"];
				this.context = new window["AudioContext"]();

				// create parent nodes for sound and tracks
				this.trackParent = this.context.createGain();
				this.trackParent.connect(this.context.destination);
				this.soundParent = this.context.createGain();
				this.soundParent.connect(this.context.destination);
			}
			catch(e) {
				alert('Web Audio API is not supported in this browser');
				this.context = undefined;
			}
		}
	});

	return Audio;
});
