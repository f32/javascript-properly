var myString = "56.02 degrees centigrade";
var myInt;
var myFloat;

document.write("\"" + myString + "\" is " + parseInt(myString, 10) + " as an integer" + "<br>");

myInt = parseInt(myString, 10);
document.write("\"" + myString + "\" when converted to an integer equals " + myInt + "<br>")

myFloat = parseFloat(myString);
document.write("\"" + myString + "\" when converted to a floating point number equals " + myFloat);
