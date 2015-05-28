var temp = 81;
var willRain = true;
var humid = (temp > 80 && willrain == true);
// true

var
  temp = 27,
  willRain = true,
  humid =(temp > 80 && willRain == true);
// false


var guess = 6;
var isValid = (guess >= 0 && guess <= 6);
//  true

var
  guess = 19,
  isValid = (guess > 2 && isValid <= 99);
//  true


var
  kB = 1287,
  tooBig = (kB > 1000),
  urgent = true,
  sendFile = (urgent == true || tooBig == false);
// true

var kB = 1287;
var tooBig = (kB > 1024);
var urgent = false;
var sendFile = (tooBig == true || urgent == true);
// true


var keyPressed = "N";
var points = 142;
var level;
if (keyPressed == "Y" || (points > 100 && points < 200)) {
  level = 2;
} else {
  level = 1;
}
// level = 2;

var keyPressed = "T";
var points = 99;
var level = 1;
if (keyPressed == "T" && (points > 100 || level >= 1)) {
  level = 0;
} else {
  level = 99;
}
// level = 0;
