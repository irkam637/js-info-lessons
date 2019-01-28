window.onload = function() {
	/*

The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}
Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR ||

	*/

	let age = prompt('Whats your age?');

	// return age > 18 ? true : confirm('Do you have your parents permission to access this page?');
	return age > 18 || confirm('Do you have your parents permission to access this page?');

}