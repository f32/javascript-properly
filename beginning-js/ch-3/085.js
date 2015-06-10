var userAge = prompt("Please enter your age", "");

if (userAge == 0) {               // assignment operator mistake
  alert("So you're a baby!");
} else if (userAge < 0 || userAge > 200) {  // curly braces missing
  alert("I think you may be lying about your age");
} else {
  alert("That's a good age");
}



for (var i = 1; i <= 12; i++) {
  var calcResult = 12 * i
  document.write("12 * " + i + " = " + calcResult + "<br>");
}
