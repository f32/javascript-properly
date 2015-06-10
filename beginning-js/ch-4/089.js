function convertToCentigrade(degFahren) {
  var degCent = 5 / 9 * (egFahren - 32);

  return degCent;
}

 myTemp = convertToCentigrade(212);



function writeUserWelcome(userName) {
  document.write("Welcome to my website " + userName + "<br>");
  document.write("Hope you enjoy it!");
}

writeUserWelcome("Paul");
