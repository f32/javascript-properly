function convertToCentigrade(degFahren) {
  var degCent = 5 / 9 * (degFahren - 32);

  return degCent;
}

var myFunction = convertToCentigrade;


var degCent = myFunction(75); // 23.88888889
var degCent2 = convertToCentigrade(75); // 23.88888889
