var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var guesses = 0;
var hits = 0;

var isSunk = false;

while (!isSunk) {
  guess = prompt("Ready, aim, fire! (enter a number 0-6):");

  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses++;
  }

}
