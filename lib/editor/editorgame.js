define([
	"editor/script/editor",
	"engine/core/bloob",
	"engine/main"
], function(
	_Editor,
	Bloob,
	main
) {
	
	Editor = true;
	
	main(_Editor, "canvas");
	
	return {};
});
