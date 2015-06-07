var myArray = [];
myArray[0] = "Jeremy";
myArray[1] = "Paul";
myArray[2] = "Jonh";

document.write("myArray[0] = " + myArray[0] + "<br>");
document.write("myArray[2] = " + myArray[2] + "<br>");
document.write("myArray[1] = " + myArray[1] + "<br>");

myArray[1] = "Mike";
document.write("myArray[1] changed to " + myArray[1]);

//

var myArray = [];
myArray[0] = "Jeremy";
myArray[1] = "Paul";
myArray[2] = "Jonh";

document.write("myArray[0] = " + "\"" + myArray[0] + "\"" + "<br>");
document.write("myArray[2] = " + "\"" + myArray[2] + "\"" + "<br>");
document.write("myArray[1] = " + "\"" + myArray[1] + "\"" + "<br>");

myArray[1] = "Mike";
document.write("myArray[1] changed to " + "\"" + myArray[1] + "\"");
