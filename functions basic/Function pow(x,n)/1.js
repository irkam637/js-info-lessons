window.onload = function() {
	/*
Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

Run the demo
P.S. In this task the function should support only natural values of n: integers up from 1.

	*/

	let num = prompt('num')
	let n = prompt('n');
	pow(num, n);

	function pow(num,n) {
		if(n < 1){
			n = prompt(`Power ${n} is not supported,use an integer greater than 0`);
		}
		for( let i = 1; i < n;i++) {
			num = num * num;
		}
		console.log(num);
	}

	

}