define([
		"basic/audio/audio",
		"assets/resource"
], function(Audio, Resource) {
	var Sound = mini.Class.subclass({
		initialize: function(path) {
			Resource.prototype.initialize.apply(this, arguments);
			this._bufferPath = path;
		},
		load: function(callback) {
			if(typeof env.audio.context === "undefined") return callback();
			var path = this._bufferPath;
			var audio = env.audio;

			// return if file already loaded
			if(typeof audio.buffers[path] !== "undefined") {
				callback();
				return;
			};
			
			var request = new XMLHttpRequest();
			request.open('GET', path, true);
			request.responseType = 'arraybuffer';
			
			// Decode asynchronously
			request.onload = function () {
				audio.context.decodeAudioData(request.response, function (buffer) {
			    	audio.buffers[path] = buffer;
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
			
		    var positionNode = env.audio.context.createPanner();
		    positionNode.setPosition(0, 0, 0);
			
			// connect the sourceNode to the positionNode to the context's destination (the speakers)
			sourceNode.connect(positionNode);
		    positionNode.connect(env.audio.soundParent);

			// play the source now
			sourceNode.start(0);

		    return {position: positionNode, source: sourceNode};
		}
	});

	return Sound;
});
