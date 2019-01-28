window.onload = function() {
	/*

Write a function min(a,b) which returns the least of two numbers a and b.

For instance:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

	*/

	let num1 = prompt('num1')
	let num2 = prompt('num2');

	min(num1, num2);

	function min(a,b) {

		console.log(a < b ? a : b) ;
	}

}