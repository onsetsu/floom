define([

], function() {
	var Action = mini.Class.subclass({
		execute: function() {
			
		},
		undo: function() {
			
		},
		redo: function() {
			
		}
	});
	
	NUMBER = 1;
	
	var PlusAction = Action.subclass({
		execute: function() {
			NUMBER++;
			console.log(NUMBER);
		},
		undo: function() {
			NUMBER--;
			console.log(NUMBER);
		},
		redo: function() {
			NUMBER++;
			console.log(NUMBER);
		}
	});
	
	var MultAction = Action.subclass({
		execute: function() {
			NUMBER *= 2;
			console.log(NUMBER);
		},
		undo: function() {
			NUMBER /= 2;
			console.log(NUMBER);
		},
		redo: function() {
			NUMBER *= 2;
			console.log(NUMBER);
		}
	});

	Action.Chain = mini.Class.subclass({
		initialize: function(numberOfActions) {
			this.numberOfActions = numberOfActions || 10;
			this.actions = [];
			this.currentPosition = 0;
			
		},
		clear: function() {
			this.actions = [];
			this.currentPosition = 0;
		},
		commit: function(action) {
			action.execute();
			
			// cut undone actions
			this.actions.length = this.currentPosition;
			
			// push new action
			this.actions.push(action);
			
			if(this.currentPosition >= this.numberOfActions) {
				// maximum number of actions reached
				this.actions.splice(0, 1);
			}
			else
			{
				this.currentPosition++;
			}
		},
		undo: function() {
			if(this.currentPosition > 0) {
				this.currentPosition--;
				this.actions[this.currentPosition].undo();
			}
		},
		redo: function() {
			if(this.currentPosition < this.actions.length) {
				this.actions[this.currentPosition].redo();
				this.currentPosition++;
			}
		}
	});
	
	return Action;
});
