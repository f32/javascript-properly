var degCent = 100;

while (degCent != 100) {
  // some code
}

///

var degCent = [];
var degFahren = [34, 123, 212];
var loopCounter = 0;

while (loopCounter < 3) {
  degCent[loopCounter] = 5/9 * (degFahren[loopCounter] - 32);
  loopCounter++;
}

///

var testVariable = 0;
while (testVariable <= 10) {
  alert("Test Variable is " + testVariable);

  testVariable++;

  if (testVariable == 10) {
    alert("The last loop");
  }
}
