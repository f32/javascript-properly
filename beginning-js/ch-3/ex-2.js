var myAge = parseInt( prompt("Enter your age", 30), 10 );

if (myAge >= 0 && myAge <= 10) {
  document.write("myAge is between 0 and 10<br>");
}

if (!(myAge >= 0 && myAge <= 10)) {
  document.write("myAge is not between 0 and 10<br>");
}

if ( myAge >= 80 || myAge <= 10 ) {
  document.write("myAge is 80 or above OR 10 or below<br>");
}

if ( (myAge >= 30 && myAge <= 39) || (myAge >= 80 && myAge <= 89) ) {
  document.write("myAge is between 30 and 39 or myAge is between 80 and 89");
}
