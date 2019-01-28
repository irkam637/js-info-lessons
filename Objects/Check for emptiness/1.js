window.onload = function() {
/*
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/

let schedule = {
	
};

isEmpty(schedule);
function isEmpty(schedule) {
    for( key in schedule) {
 	  return false;
 	} return true;
}
alert( isEmpty(schedule) );
}

