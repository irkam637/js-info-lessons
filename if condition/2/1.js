window.onload = function() {
let number
number = prompt('Write any number here');
number = parseFloat(number);

if(number === 0){
	alert(0);
}else if(number > 0){
	alert(1);
}else {
	alert(-1);
}

}