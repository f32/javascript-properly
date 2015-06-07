if (inStock == true && onSale == true) {
  // Выгодное предложение!
  alert("buy buy buy!");
}

// оператор И и оператор ИЛИ в одном условном выражении:
if (instock == true && (onSale == true || price < 60)) {
  // Выгодное предложение!!
  alert("buy buy buy!");
}



// humid ?
var temp = 81;
var willRain = true;
var humid = (temp > 80 && willrain == true); // true;


// isValid ?
var guess = 6;
var isValid = (guess >= 0 && guess <= 6); // true;


// sendFile ?
var kB = 1287;
var tooBig = (kB > 1000);
var urgent = true;
var sendFile = (urgent == true || tooBig == false); // true;


// level ?
var keyPressed = "N";
var points = 142;
var level;

if (keyPressed == "Y" || (points > 100 && points < 200)) {
  level = 2;
} else {
  level = 1;
}
// level == 2;
