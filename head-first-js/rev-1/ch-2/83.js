var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var guesses = 0;
var hits = 0;

var isSunk = false;

while (isSunk == false) {
  guess = prompt("Please set a value to fire from 0-6:");
  if (guess < 0 || guess > 6) {
    alert("Please fill in a valid number!");
  } else {
    guesses += 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      hits += 1;
      alert("HIT!");
      if (hits == 3) {
        isSunk = true;
        alert("You blowed the ship!");
      }
    } else {
      alert("MISS!");
    }
  }
}
console.log("You blowed the ship with " + guesses + " guesses and your accuracy was about: " + Math.round((hits/guesses) * 100) + "%.");
