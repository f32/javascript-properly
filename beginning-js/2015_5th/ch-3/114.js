do {
  userAge = prompt("Please enter your age", "");
} while (isNaN(userAge) == true);


///

var degFahren = [212, "string data", -459,67];
var degCent = [];
var loopCounter;

for (loopCounter = 0; loopCounter <= 2; loopCounter++) {
  if (isNaN(degFahren[loopCounter])) {
    alert("Data '" + degFahren[loopCounter] + "' at array index " + loopCounter + " is invalid");
    continue;
  }
  degCent[loopCounter] = 5/9 * (degFahren[loopCounter] - 32);
}
