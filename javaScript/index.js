
// JavaScript Practice from the odin project
function add7(number) {
	console.log(number + 7);
	return;
}
add7(1);

function multiply(number) {
	return console.log(number * number);
}
multiply(2,2);

function capitalize(string) {
	return console.log(string[0].toUpperCase() + string.slice(1));
}
capitalize("jonel");

function lastLetter(string) {
	for (i = 0; i < string.length; i++) {
		if (i = string.length) {
			console.log(string[i-1]);
		}
	}
}
lastLetter("jonel");