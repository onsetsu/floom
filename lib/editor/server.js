define([

], function() {
	var Server = mini.Class.subclass({});
	
	Server.save = function(path, content, callback) {
		console.log("SAVING:", path);
		var postString = 
			'path=' + encodeURIComponent(path) +
			'&data=' + encodeURIComponent(content);

		var req = $.ajax({
			url: 'lib/weltmeister/api/save.php',
			type: 'POST',
			dataType: 'json',
			async: false,
			data: postString,
			success: callback || function() { console.log("FILE SAVED"); }
		});
		
		return req;
	};
	
	Server.browse = function(dirPath, type, callback) {
		var path = 'lib/weltmeister/api/browse.php';
		var query =
			'dir=' + encodeURIComponent(dirPath) +
			'&type=' + encodeURIComponent(type);
		
		var req = $.ajax({
			url: 'lib/weltmeister/api/browse.php',
			dataType: 'json',
			async: false,
			data: query,
			success: callback || function(data) { console.log(data); }
		});
		
		return req;
	};
	
	Server.types = {
		scripts: "scripts"
	};
	
	return Server;
});
