window.onload = function() {
/*
Write the code using if..else which would correspond to the following switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}


*/

let browser = prompt('What browser do you use?');

(browser === 'Edge')? alert( "You've got the Edge!" ):
 (browser === 'Chrome' 
  || browser === 'Firefox' 
  || browser === 'Safari' 
  || browser === 'Opera' ) ? alert( 'Okay we support these browsers too' ):
 		alert('We hope that this page looks ok!');
}

