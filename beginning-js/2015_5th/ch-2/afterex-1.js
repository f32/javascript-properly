// promgram to convert degrees centigrade into degrees Fahrenheit.
// equation is: degFahren = 9 / 5 * degCent + 32

var degreesConverter;
degreesConverter = {

  cent2Fahren : function () {
    var degCent = prompt("Please fill in current temp in celsius:","0");
    var degFahrenEquation = 9 / 5 * degCent + 32;
    var cent2FahrenOutput = degCent + "\xB0 centigrade is " + Math.round(degFahrenEquation) + "\xB0 Fahrenheit.";
    console.log(cent2FahrenOutput);
  },
  fahren2Cent : function () {
    var degFahren = prompt("Please fill in current temp in Fahrenheit","32");
    var degCentEquation = 5 / 9 * (degFahren - 32);
    var fahren2CentOutput = degFahren + "\xB0 Fahrenheit is " + Math.round(degCentEquation) + "\xB0 celsius."
    console.log(fahren2CentOutput);
  }
};

degreesConverter.fahren2Cent();


// fahren 2 celsius converter
// celsius to fahren converter
