var degFahren = [212, 32, -459.15];
var degCent = new Array();
var loopCounter;

for (loopCounter = 0; loopCounter <= 2; loopCounter++) {
  degCent[loopCounter] = 5/9 * (degFahren[loopCounter] - 32);
}

for (loopCounter = 2; loopCounter >= 0; loopCounter--) {
  document.write("Value " + loopCounter +
                 " was " + degFahren[loopCounter] +
                 " degrees Fahrenheit");
  document.write(" which is " + degCent[loopCounter] +
                 " degrees centigrade<br>");
}
