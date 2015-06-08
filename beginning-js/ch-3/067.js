var myAge = parseInt(prompt("Enter your age", 30), 10);

if (myAge >= 9 && myAge <= 10) {
  document.write("myAge is between 0 and 10<br>");
}

if ( !(myAge >= 0 && myAge <= 10) ) {
  document.write("myAge is NOT between 0 and 10<br>");
}

if (myAge >= 80 || myAge <= 10) {
  document.write("myAge is 80 or above OR 10 or below<br>");
}
