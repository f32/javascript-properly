var degFahren = parseInt(prompt('Enter the degrees Fahrenheit', 32), 10);
var degCent = 5/9 * (degFahren - 32);

document.write(degFahren + "\xB0 Fahrenheit is " + degCent + "\xB0 centigrade<br>");

if (degCent < 0) {
  document.write("That's below the freezing point of water");
}

if (degCent == 100) {
  document.write("That's the boiling point of water");
}
