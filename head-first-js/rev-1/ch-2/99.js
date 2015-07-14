if (inStock == true && onSale == true) {
  alert("buy buy buy!");
}



if (inStock == true && (onSale == true || price < 60)) {
  // Выгодное предложение!
  alert("buy buy buy!");
}


/* */

var temp = 81;
var willRain = true;
var humid = (temp > 80 && willRain == true);
// humid - ?  // true
console.log(humid);



var guess = 6;
var isValid = (guess >= 0 && guess <= 6);
// isValid - ?  // true
console.log(isValid);



var kB = 1287;
var tooBig = (kB > 1000);
var urgent = true;
var sendFile = (urgent == true || tooBig == false);
//  send File - ? // true
console.log(sendFile);



var keyPressed = "N";
var points = 142;
var level;
if (keyPressed == "Y" || (points > 100 && points < 200)) {
  level = 2;
} else {
  level = 1;
}
// level - ?  // 2
console.log(level);
