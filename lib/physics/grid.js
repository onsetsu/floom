define([
	"physics/vector2",
	"physics/aabb",
	"physics/jellyprerequisites"
], function(
	Vector2,
	AABB,
	JellyPrerequisites) {
	
	var fillArray = JellyPrerequisites.Utils.fillArray;

	var Grid = function(world) {
		this.world = world;
		this.numberOfColumns = 5;
		this.numberOfRows = 5;
		this.bodiesPerColumn = fillArray(0, this.numberOfColumns);
		this.bodiesPerRow = fillArray(0, this.numberOfRows);
		this.columnBorders = fillArray(0, this.numberOfColumns - 1);
		this.rowBorders = fillArray(0, this.numberOfRows - 1);
	};

	// update bitmasks
	Grid.prototype.updateBodyBitmask = function(body) {
		var box = body.getAABB();
		
		var minX = box.Min.x;
		var minY = box.Min.y;
		var maxX = box.Max.x;
		var maxY = box.Max.y;
		
		body.getBitmaskX().clear();
		
		var i = 0;
		while(i < this.columnBorders.length && minX > this.columnBorders[i]) {
			i++;
		}
		body.getBitmaskX().setOn(i);
		this.bodiesPerColumn[i]++;
		while(i < this.columnBorders.length && maxX > this.columnBorders[i]) {
			i++;
			body.getBitmaskX().setOn(i);
			this.bodiesPerColumn[i]++;
		}

		body.getBitmaskY().clear();
		i = 0;
		while(i < this.rowBorders.length && minY > this.rowBorders[i]) {
			i++;
		}
		body.getBitmaskY().setOn(i);
		this.bodiesPerRow[i]++;
		while(i < this.rowBorders.length && maxY > this.rowBorders[i]) {
			i++;
			body.getBitmaskY().setOn(i);
			this.bodiesPerRow[i]++;
		}
	};
	
	// move grid by adjusting borders
	Grid.prototype.adjust = function(world) {
		// add 1 default body to each column
		for(var i = 0; i < this.bodiesPerColumn.length; i++)
			this.bodiesPerColumn[i]++;
		for(var i = 0; i < this.bodiesPerRow.length; i++)
			this.bodiesPerRow[i]++;
		//Bloob.log(this.bodiesPerColumn, this.bodiesPerRow);
		
		// determine the width of each column
		var columnWidths = [];
		columnWidths[0] = this.columnBorders[1] - this.columnBorders[0];
		var i = 1;
		for(; i < this.columnBorders.length; i++) {
			var pos1 = this.columnBorders[i-1];
			var pos2 = this.columnBorders[i];
			columnWidths[i] = pos2-pos1;
		}
		columnWidths[i] = this.columnBorders[i-1] - this.columnBorders[i-2];
		
		/*
		// TODO: adjust grid borders accordingly
		for(var i = 0; i < this.columnBorders.length; i++) {
			var n1 = this.bodiesPerColumn[i];
			var n2 = this.bodiesPerColumn[i+1];
			this.columnBorders[i] += 0.1 * (n2-n1)/(n1+n2+1);
		}
		
		var rowHeight = [];
		for(var i = 0; i < this.rowBorders.length; i++) {
			var n1 = this.bodiesPerRow[i];
			var n2 = this.bodiesPerRow[i+1];
			this.rowBorders[i] += 0.1 * (n2-n1)/(n1+n2+1);
		}
		*/
		
		// reset number of bodies
		for(var i = 0; i < this.bodiesPerColumn.length; i++) {
			this.bodiesPerColumn[i] = 0;
		}
		for(var i = 0; i < this.bodiesPerRow.length; i++) {
			this.bodiesPerRow[i] = 0;
		}
	};

	// setup an equally-sized grid
	Grid.prototype.setWorldLimits = function(min, max) {
		var size = max.sub(min);
		var sizePerCell = size.divVector(new Vector2(
			this.numberOfColumns,
			this.numberOfRows
		));
		for(var i = 1; i < this.numberOfColumns; i++) {
			this.columnBorders[i-1] = min.x + sizePerCell.x * i;
		}
		for(var i = 1; i < this.numberOfRows; i++) {
			this.rowBorders[i-1] = min.y + sizePerCell.y * i;
		}
		
		return;
	};

	Grid.shouldDrawGrid = false;
	Grid.prototype.debugDraw = function(debugDraw) {
		if(!Grid.shouldDrawGrid) return;
		
		// draw rows
		for(var i = 0; i < this.rowBorders.length; i++) {
			var from = new Vector2(-10000, this.rowBorders[i]);
			var to = new Vector2(10000, this.rowBorders[i]);
			debugDraw.drawLine(
				from,
				to,
				"darkgrey",
				0.8,
				1
			);
		}

		// draw columns
		for(var i = 0; i < this.columnBorders.length; i++) {
			var from = new Vector2(this.columnBorders[i], -10000);
			var to = new Vector2(this.columnBorders[i], 10000);
			debugDraw.drawLine(
				from,
				to,
				"lightgrey",
				0.8,
				1
			);
		}
	};

	return Grid;
});
