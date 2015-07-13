var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
  guess = prompt("Please fire by entering number from 0-6", "");
  if (guess < 0 || guess > 6) {
    alert("Please fill in the right value!");
  } else {
    guesses++;
    if (guess == location1 || guess == location2 || guess == location3) {
      alert("HIT!");
      hits++;
      if (hits == 3) {
        isSunk = true;
        alert("Win! You blowed up the ship!");
      }
    } else {
      alert("MISS!");
    }
  }
}
var message = "You sunk the battleship with: " + guesses + " guesses, whick means your accuracy was about: " + Math.round(hits/guesses * 100) + "%.";
console.log(message);
