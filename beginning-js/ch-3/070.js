if (myAge >= 0 && myAge <= 10) {
document.write("myAge is between 0 and 10");
}

if (myAge == 5) {
document.write("You're 5 years old");
} else {
document.write("myAge is NOT between 0 and 10");
}

// and with correct formatting:

if (myAge >= 0 && myAge <= 10) {
  document.write("myAge is between 0 and 10<br>");
  if (myAge == 5) {
    document.write("You're 5 years old");
  }
} else {
  document.write("myAge is NOT between 0 and 10");
}



// comparing strings:
var myName = "Paul";
if (myName == "Paul") {
  alert("myName is Paul");
}
