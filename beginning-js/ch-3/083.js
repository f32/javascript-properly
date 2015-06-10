var degFahren = [212, "string data", -459.67];
var degCent = new Array();
var loopCounter;

for (loopCounter = 0; loopCounter <= 2; loopCounter++) {
  if (isNaN(degFahren[loopCounter])) {
    alert("Data '" + degFahren[loopCounter] + "' at array index " + loopCounter + " is invalid");
    break;
  }
  degCent[loopCounter] = 5/9 * (degFahren[loopCounter] - 32);
}



if (isNaN(degFahren[looCounter])) {
  alert("Data '" + degFahren[loopCounter] + "' at array index " +  loopCounter + " is invalid");
  continue;
}
