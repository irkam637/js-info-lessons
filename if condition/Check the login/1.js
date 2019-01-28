window.onload = function() {
let login, password;

login = prompt('Whos here?');

//Check login
if(login && login === 'Admin') {
	password = prompt('Password?');
} else if(!login){
	alert('Canceled');
} else {
	alert('Wrong login');
}
//Check password
if(password && password === 'The master'){
	alert('You are welcome!');
} else if(!password) {
	alert('Canceled');
}else {
	alert('Wrong password!');
}

}