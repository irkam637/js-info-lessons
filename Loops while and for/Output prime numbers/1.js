window.onload = function() {

let n = prompt("Write the number to check");
printPrime(n);

function printPrime(n) {
	for(let j = 2; j < n;j++) {
			if(isPrime(j)){
				console.log(j);
			} else {
				continue;
			}
			
	}
}

function isPrime(number){
	for(let i = 2; i < number; i++) {
		if(number % i == 0) {
			return false;
	} else {
		return true;
	}
}

}
}
