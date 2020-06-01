/**
 * @version 1.0.0
 * @author AvoLord
 * @description Performs simple matrix math
 */


/**
 * Sets the Error-messages and the state
 */
let Matrix_Class_Error_Message = true;
let WrongType1 = new TypeError("Error, wrong object! The object has to be a matrix or a number.");
let WrongType2 = new TypeError("Error, wrong object! The object has to be a matrix.");
let WrongType3 = new TypeError("Error, wrong object! The object has to be a function.");
let WrongDim1  = new RangeError("Error, wrong dimensions! Amount of columns of A have to be equal to the amount of rows of B.");

/**
 * Creates a new matrix-object with given rows, columns and fill
 * @constructor
 * @param { Number } rows - The amount of rows of the matrix
 * @param { Number } columns - The amount of columns of the matrix
 * @param { Number } fill - The number with wich the matrix will be filled
 */
export default class Matrix {
	constructor(rows,columns,fill) {
		rows = (Number.isInteger(rows)) ? rows : 3;
		columns = (Number.isInteger(columns)) ? columns : 3;
		fill = (Number.isInteger(fill)) ? fill : 0;
		this.cols = columns;
		this.rows = rows;
		this.data = new Array(this.rows).fill(0).map(cols => new Array(this.cols).fill(fill));
	}

	/**
	 * Shows the contents of the matrix in the console
	 * @inner
	 */
	show() {
		console.table(this.data);
	}

	/**
	 * Toggels if Error messages are displayed
	 * @static
	 */
	static Error_Message() {
		Matrix_Class_Error_Message = (Matrix_Class_Error_Message) ? false : true;
		console.log((Matrix_Class_Error_Message)
			?  "Error messages are now displayed!" :
			"Error messages are now hidden!"
		);
	}

	/**
	 * Creates a random Integer
	 * @static
	 * @param { Number } min - The minimum random number
	 * @param { Number } max - The maximum random number
	 * @return { Number } - A random number between min and max
	 */
	static randomInt(min,max) {
		return Math.floor(min + Math.random()*(max+1 - min));
	}

	/**
	 * The scalar-multiplication of two arrays seen as vectors
	 * @static
	 * @param { Object } a1 - The first  array / vector
	 * @param { Object } a2 - The second array / vector
	 * @return { Object } The scalar-product of two "vectors"
	 */
	static array_mult(a1,a2) {
		if(!(a1 instanceof Array) || !(a2 instanceof Array) || a1.length != a2.length) {
			console.log(Matrix.wrong_type_error_message4());
			return null;
		}
		let result = 0;
		a1.forEach((x,i) => {
			result+=x*a2[i];
		});
		return result;
	}

	/**
	 * Creates matrix-object from a two-dimensional array
	 * @static
	 * @param { Object } array - The array that will be converted to a matrix
	 * @return { Object } A new matrix-object with the values form the array
	 */
	static fromArray(array) {
		if(!(array instanceof Array)) {
			console.log(Matrix.wrong_type_error_message4());
			return null;
		}
		if(!(array[0] instanceof Array)) {
			array = array.map(x => new Array(1).fill(x));
		}
		let columns = 1;
		if(array[0] instanceof Array) {
			if(!array.every(x => x.length == array[0].length)) {
				console.log(Matrix.wrong_array_dim_error_message());
				return null;
			} else {
				columns = array[0].length;
			}
		}
		let result = new Matrix(array.length,columns);
		result.data = result.data.map((x,i) => {
			return array[i];
		});
		return result;
	}

	/**
	 * Creates a diagnonal matrix-object
	 * @static
	 * @param { Object } M1 - The matrix that will be cloned and converted
	 * @param { Number } diagnonal_num - The number that will fill the diagonal line
	 * @param { Number } filler - The number that will fill the result
	 * @return { Object } A new matrix with the same dimensions as the input-matrix but with a new set of numbers
	 */
	static diagonal(M1,diagonal_num,filler) {
		if(!(M1 instanceof Matrix)) {
			throw WrongType2
			return null;
		}
		let M2 = M1.copy();
		M2.diagonal(diagonal_num,filler);
		return M2;
	}

	/**
	 * Creates a matrix-object with random numbers
	 * @static
	 * @param { Object } M1 - The matrix that will be cloned and converted
	 * @param { Number } min - The minimum random number
	 * @param { Number } max - The maximum random number
	 * @return { Object } A new matrix with the same dimensions as the input-matrix but with random numbers randing form min to max
	 */
	static random(M1,min,max) {
		if(!(M1 instanceof Matrix)) {
			throw WrongType2
			return null;
		}
		let M2 = M1.copy();
		M2.random(min,max);
		return M2;
	}

	/**
	 * Creates a matrix on which a function has been mapped to
	 * @static
	 * @param { Object } M1 - The Matrix that will be cloned and converted
	 * @param { function } func - The function that will alter the elements of the matrix
	 * @return { Object } A new matrix with the same dimensions as the input-matrix but with a new set of numbers
	 */
	static map(M1,func) {
		if(!(M1 instanceof Matrix)) {
			throw WrongType2
			return null;
		}
		let M2 = M1.copy();
		M2.map(func);
		return M2;
	}

	/**
	 * Creates a new matrix from the sum of the elements of two matrices or a matrix and a number
	 * @static
	 * @param { Object } M1 - The matrix that will be cloned and converted
	 * @param { Number } Obj - The number that will be added to all elements of the matrix
	 * @param { Object } Obj - The matrix whose elements will be added to the elements of M1
	 * @return { Object } A new Matrix with the same dimensions as the input Matrix but with a new set of numbers
	 */
	static add(M1,Obj) {
		let M2 = M1.copy();
		M2.add(Obj);
		return M2;
	}

	/**
	 * Creates a new matrix from the difference of the elements of two matrices or a matrix and a number
	 * @static
	 * @param { Object } M1 - The matrix that will be cloned and converted
	 * @param { Number } Obj - The number that will be subtracted from all elements of the matrix
	 * @param { Object } Obj - The matrix whose elements will be subtracted from the elements of M1
	 * @return { Object } A new Matrix with the same dimensions as the input Matrix but with a new set of numbers
	 */
	static sub(M1,Obj) {
		let M2 = M1.copy();
		M2.sub(Obj);
		return M2;
	}

	/**
	 * Creates a new matrix from the product of the elements of two matrices or a matrix and a number
	 * @static
	 * @param { Object } M1 - The matrix that will be cloned and converted
	 * @param { Number } Obj - The number that will be multiplied with all elements of the matrix
	 * @param { Object } Obj - The matrix whose elements will be multiplied by the elements of M1
	 * @return { Object } A new Matrix with the same dimensions as the input Matrix but with a new set of numbers
	 */
	static mult(M1,Obj) {
		let M2 = M1.copy();
		M2.mult(Obj);
		return M2;
	}

	/**
	 * Creates a new matrix from the division of the elements of two matrices or a matrix and a number
	 * @static
	 * @param { Object } M1 - The matrix that will be cloned and converted
	 * @param { Number } Obj - The number that will be divided from all elements of the matrix
	 * @param { Object } Obj - The matrix whose elements will be divided by the elements of M1
	 * @return { Object } A new Matrix with the same dimensions as the input Matrix but with a new set of numbers
	 */
	static div(M1,Obj) {
		let M2 = M1.copy();
		M2.div(Obj);
		return M2;
	}

	/**
	 * Creates a new matrix from the multiplication of two matrices
	 * @static
	 * @param { Object } M1 - The first matrix
	 * @param { Object } M2 - The second matrix that will be multiplied with the first
	 * @return { Object } The Product of the matrix multiplication
	 */
	static prod(M1,M2) {
		if(!(M1 instanceof Matrix) || !(M2 instanceof Matrix)) {
			console.log(Matrix.wrong_type_error_message2());
			return null;
		}
		if(M1.cols != M2.rows) {
			console.log(Matrix.wrong_dim_error_message());
			return null;
		}
		let result = new Matrix(M1.rows,M2.cols);
		let helper = M2.transpose();
		result.data = result.data.map((rows,main_index) => {
			return rows.map((col,sub_index) => {
				return Matrix.array_mult(M1.data[main_index],helper.data[sub_index]);
			});
		});
		return result;
	}

	/**
	 * Creates a new matrix whose values are inverted
	 * @static
	 * @param { Object } M1 - The matrix that will be cloned and converted
	 * @return { Object } A new matrix with the same dimensions as the input-matrix but with an inverted set of numbers
	 */
	static invert(M1) {
		if(!(M1 instanceof Matrix)) {
			console.log(Matrix.wrong_type_error_message2());
			return null;
		}
		let M2 = M1.copy();
		M2.invert();
		return M2;
	}

	/**
	 * Randomizes the elements of a matrix
	 * @param { Number } min - The minimum random number
	 * @param { Number } max - The maximum random number
	 */
	random(min,max) {
		this.data = this.data.map(row => row.map(col => Matrix.randomInt(min || 0,max || 1)));
	}

	/**
	 * Represents a matrix as a two-dimensional array
	 * @return An array with the elements of the input-matrix
	 */
	toArray() {
		let result = new Array(this.rows);
		result = this.data.splice(0);
		return result;
	}

	/**
	 * Represents a matrix as a one-dimensional array
	 * @return An array with the elements of the input-matrix
	 */
	toArray_flat() {
		let result = [];
		this.data.forEach(rows => rows.forEach(cols => result.push(cols)));
		return result;
	}

	/**
	 * Represents a matrix as a string
	 * @return A string with the elements of the input-matrix
	 */
	toString() {
		return this.data.toString();
	}

	/**
	 * Represents a matrix-object as a JSON-file
	 * @return A JSON-file with the elements of the input-matrix-object
	 */
	serialize() {
		return JSON.stringify(this);
	}

	/**
	 * Creates a new matrix-object from a JSON-file
	 * @param data - The JSON-file that contains all the necessary information of a matrix-object
	 * @return A new matrix-objet with the information of the JSON-file
	 */
	static deserialize(data) {
		if (typeof data == 'string') {
			data = JSON.parse(data);
		}
		let matrix = new Matrix(data.rows, data.cols);
		matrix.data = data.data;
		return matrix;
	}

	/**
	 * Creates the sum of all elements of the matrix
	 * @return The sum of all the elements of the input-matrix
	 */
	reduce() {
		if(Array.flatten) {
			return this.data.flatten().reduce();
		} else {
			let result = 0;
			this.data.forEach(row => {
				row.forEach(col => {
					result+=col;
				});
			});
			return result;
		}
	}

	/**
	 * Maps a function to all elements of the matrix
	 * @param { function } func - The function that will be mapped to the matrix elements
	 */
	map(func) {
		if(typeof func != "function") {
			console.log(Matrix.wrong_type_error_message3());
			return null;
		}
		this.data = this.data.map(rows => rows.map(cols => func(cols)));
	}

	/**
	 * Creates a copy of a matrix-object
	 * @return A copy of the input-matrix
	 */
	copy() {
		let result = new Matrix(this.rows,this.cols);
		result.data = this.data.slice(0);
		return result;
	}

	/**
	 * Converts the matrix to a unit-matrix
	 */
	unit() {
		this.data = this.data.map((rows,main_index) => {
			return rows.map((cols,sub_index) => {
				return (sub_index === main_index) ? 1 : 0;
			});
		});
	}

	/**
	 * Converts the matrix to a diagonal matrix with custom infill
	 * @param { Number } diagonal_num - The value of the diagonal line
	 * @param { Number } filler - The value that the other elements will have
	 */
	diagonal(diagonal_num,filler) {
		if((diagonal_num != undefined && typeof diagonal_num != "number") || (filler != undefined && typeof filler != "number")) {
			console.log(Matrix.wrong_type_error_message());
			return null;
		}
		this.data = this.data.map((rows,main_index) => {
			return rows.map((cols,sub_index) => {
				return (sub_index === main_index) ? (diagonal_num || 1) : (filler || 0);
			});
		});
	}

	/**
	 * Creates the transposed version of a matrix
	 * @return The transposed matrix
	 */
	transpose() {
		let result = new Matrix(this.cols,this.rows);
		result.data = result.data.map((rows,main_index) => {
			return rows.map((cols,sub_index) => {
				return this.data[sub_index][main_index];
			});
		});
		return result;
	}

	/**
	 * Inverts the elements of a matrix
	 */
	invert() {
		this.data = this.data.map(rows => rows.map(cols => cols*-1));
	}

	/**
	 * Adds elements of another matrix or a number to the initial matrix
	 * @param { Number } Obj - The number that will be added to all elements of the initial matrix
	 * @param { Object } Obj - The matrix whose elements are added to the elements of the initial matrix
	 */
	add(Obj) {
		if(Obj instanceof Matrix)
			this.data = this.data.map((rows,main_index) => {
				return rows.map((cols,sub_index) => {
					return cols+(Obj.data[main_index][sub_index] || 0);
				});
			});
		else if(typeof Obj == "number")
			this.data = this.data.map(rows => rows.map(cols => cols+(Obj || 0)));
		else
			console.log(Matrix.wrong_type_error_message());
	}

	/**
	 * Subtracts elements of another matrix or a number from the initial matrix
	 * @param { Number } Obj - The number that will be subtracted from all elements of the initial matrix
	 * @param { Object } Obj - The matrix whose elements are subtracted from the elements of the initial matrix
	 */
	sub(Obj) {
		if(Obj instanceof Matrix)
			this.data = this.data.map((rows,main_index) => {
				return rows.map((cols,sub_index) => {
					return cols-(Obj.data[main_index][sub_index] || 0);
				});
			});
		else if(typeof Obj == "number")
			this.data = this.data.map(rows => rows.map(cols => cols-(Obj || 0)));
		else
			console.log(Matrix.wrong_type_error_message());
	}

	/**
	 * Multiplies elements of another matrix or a number with the initial matrix
	 * @param { Number } Obj - The number that will multiply all elements of the initial matrix
	 * @param { Object } Obj - The matrix whose elements multiply the elements of the initial matrix
	 */
	mult(Obj) {
		if(Obj instanceof Matrix)
			this.data = this.data.map((rows,main_index) => {
				return rows.map((cols,sub_index) => {
					return cols*(Obj.data[main_index][sub_index] || 1);
				});
			});
		else if(typeof Obj == "number")
			this.data = this.data.map(rows => rows.map(cols => cols*(Obj || 1)));
		else
			console.log(Matrix.wrong_type_error_message());
	}

	/**
	 * Divides elements of the initial matrix by the elements of another matrix or number
	 * @param { Number } Obj - The number that will divide added to all elements of the initial matrix
	 * @param { Object } Obj - The matrix whose elements divide the elements of the initial matrix
	 */
	div(Obj) {
		if(Obj instanceof Matrix)
			this.data = this.data.map((rows,main_index) => {
				return rows.map((cols,sub_index) => {
					return cols/(Obj.data[main_index][sub_index] || 1);
				});
			});
		else if(typeof Obj == "number")
			this.data = this.data.map(rows => rows.map(cols => cols/(Obj || 1)));
		else
			console.log(Matrix.wrong_type_error_message());
	}

}