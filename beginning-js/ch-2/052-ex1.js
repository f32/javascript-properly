// degFahren = 9 / 5 * degCent + 32

var degCent = prompt("Please enter current temperature in centigrade:", 28);
var degFahren;

var degFahren = 9/5 * degCent + 32;
degFahren = parseInt(degFahren, 10);
document.write("The temperature is near " + degFahren + "\xB0 Fahrenheit today.");
