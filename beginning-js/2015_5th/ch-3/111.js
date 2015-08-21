for (index in arrayName) {
  // some code
}

///

var myArray = ["Paul", "Paula", "Pauline"];

for (var loopCounter = 0; loopCounter < 3; loopCounter++) {
  document.write(myArray[loopCounter]);
}

for (var elementIndex in myArray) {
  document.write(myArray[elementIndex]);
}

/*
http://www.tutorialspoint.com/javascript/javascript_forin_loop.htm
https://javascriptweblog.wordpress.com/2011/01/04/exploring-javascript-for-in-loops/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
http://www.w3schools.com/js/js_loop_for.asp
*/
