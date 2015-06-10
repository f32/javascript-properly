var testVariable = 0;
while (testVariable <= 10) {
  alert("Test Variable is " + testVariable);

  testVariable++;

  if (testVariable == 10) {
    alert("The last loop");
  }
}



var userAge;

do {
  userAge = prompt("Please enter your age", "");
} while (isNaN(userAge) == true);
