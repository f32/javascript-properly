// объявление переменных:
var location1 = 2;
var location2 = 3;
var location3 = 4;

var guess;

var guesses = 0;
var hits = 0;
var isSunk = false;

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
  if (guess < 0 || guess > 5) {
    alert("Please enter a valid cell number!");
  }
} else {
  guesses += 1;
  if (guess == location1 || guess == location2 || guess == location3) {
    hits += 1;
  }
}


/*

if (hits == 3) {
  isSunk = true;
  alert("You sank my battleship!");
}

*/
