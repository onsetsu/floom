define([
	"basic/audio/audio",
	"assets/resource"
], function(Audio, Resource) {
	var Track = Resource.subclass({
		initialize: function(path) {
			Resource.prototype.initialize.apply(this, arguments);
			this._bufferPath = path;
			this._volume = 1.0;
		},
		
		load: function(callback) {
			if(typeof env.audio.context === "undefined") return callback();
			var path = this._bufferPath;

			// return if file already loaded
			if(typeof env.audio.buffers[path] !== "undefined") {
				callback();
				return;
			};
			
			var request = new XMLHttpRequest();
			request.open('GET', path, true);
			request.responseType = 'arraybuffer';
			
			// Decode asynchronously
			request.onload = function () {
				env.audio.context.decodeAudioData(request.response, function (buffer) {
			    	env.audio.buffers[path] = buffer;
			    }, console.log);
				callback();
			};
			request.send();
		},
		
		play: function() {
			if(typeof env.audio.context === "undefined") return;
			// creates a sound source
			var sourceNode = env.audio.context.createBufferSource(); 
			// tell the sourceNode which sound to play
			sourceNode.buffer = env.audio.buffers[this._bufferPath];

			sourceNode.loop = true;
			sourceNode.loopStart = 1.0;
			sourceNode.loopEnd = 30.0;
			
			// Declare gain node
			var gainNode = env.audio.context.createGain();
			this.volumeNode = gainNode;
			this._volume = gainNode.gain.value;
			
			// connect the sourceNode to the positionNode to the context's destination (the speakers)
			sourceNode.connect(gainNode);
			gainNode.connect(env.audio.trackParent);

			// play the source now
			sourceNode.start(env.audio.context.currentTime + 5);

		    return {volume: gainNode, source: sourceNode};
		},
		
		// TODO: fade-in and fade out
		// TODO: implement the following
		pause: function() {
			if(typeof env.audio.context === "undefined") return;

		},
		stop: function() {
			if(typeof env.audio.context === "undefined") return;

		},
		
		setVolume: function(volume) {
			if(typeof env.audio.context === "undefined") return;
			this.volumeNode.gain.value = volume;
			this._volume = volume;
		},
		
		getVolume: function() {
			if(typeof env.audio.context === "undefined") return;
			return this.volumeNode.gain.value;
		}
	});

	// TODO: add stack of tracks
	var MusicPlayer = function() {
		
	};
	
	return Track;
});
