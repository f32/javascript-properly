if (myAge >= 0 && myAge <= 10) {
  document.write("myAge is between 0 and 10");
}

if (!(myAge >= 0 && myAge <= 10)) {
  document.write("myAge is NOT between 0 and 10");
}

// getting code above simpler
if (myAge >= 0 && myAge <= 10) {
  document.write("myAge is between 0 and 10");
} else {
  document.write("myAge is NOT between 0 and 10");
}

// if include another if statement with the 'else' statement
if (myAge >= 0 && myAhe <= 10) {
  document.write("myAge is between 0 and 10");
} else if ((myAge >= 30 && myAge <= 39) || (myAge >= 80 && myAge <= 89)) {
  document.write("myAge is between 30 and 39 " +
                  "or myAge is between 80 and 89");
} else {
  document.write("myAge is NOT between 0 and 10, " +
                 "nor is it between 30 and 39, nor " +
                 "is it between 80 and 89");
}
