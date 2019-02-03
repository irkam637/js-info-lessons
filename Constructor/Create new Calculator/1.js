window.onload = function() {
/*
Create a constructor function Calculator that creates objects with 3 methods:

read() asks for two values using prompt and remembers them in object properties.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
For instance:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

*/
let calculator = new Calculator();
calculator.read();
calculator.printRes();

function Calculator() {
	let a, b;
	this.read = function() {
		a = +prompt('Write first number',0);
		b = +prompt('Write second number',0);
		
	};
	this.sum = function() {
		return a + b;
	}; 
	this.mul = function() {
		return a * b;
	};
	this.printRes = function() {
		alert( "Sum=" + this.sum() );
		alert( "Mul=" + this.mul() );
	};
}

}

