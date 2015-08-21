var degFahren = [212, 32, -459.15];
var degCent = [];
var loopCounter;

for (loopCounter = 0; loopCounter <= 2; loopCounter++) {
  degCent[loopCounter] = 5/9 * (degFahren[loopCounter] - 32);
}

for (loopCounter = 2; loopCounter >= 0; loopCounter--) {
  document.write("Value " + loopCounter + " was " + degFahren[loopCounter] + " degrees Fahrenheit");

  document.write(" which is " + degCent[loopCounter].toFixed(2) + " degrees centigrade<br>");
}


/*
http://javascript.ru/math.round
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
http://www.ecma-international.org/ecma-262/6.0/#sec-math.round
*/
