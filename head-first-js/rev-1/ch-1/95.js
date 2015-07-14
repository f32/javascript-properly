var location1 = 0;
var location2 = 1;
var location3 = 2;

var guess;
var guesses = 0;
var hits = 0;

var isSunk = false;

while (!isSunk) {
  guess = prompt("Ready, aim, fire! (enter a number from 0-6): ");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses += 1;

    if (guess == location1 || guess == location2 || guess == location3) {
      hits = hits + 1;
      alert("HIT!");

      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert("MISS!");
    }
  }
}

var stats = "You took " + guesses + " guesses to sink the battleship, " +
            "which means your shooting accuracy was " + Math.round((3/guesses)*100) + "%.";
console.log(stats);
