var randomLoc = Math.round(Math.random() * 4);  // Math.floor(Math.random() * 5)
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var guesses = 0;
var hits = 0;

var isSunk = false;

while (!isSunk) {
  guess = prompt("Ready, aim, fire! (enter nu ber from 0-6): ");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses++;

    if (guess == location1 || guess == location2 || guess == location3) {
      hits++;
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

var stats = "You took " + guesses + " guesses to sink the battleship, wich means your shooting accuracy was " + Math.round((3/guesses)*100) + "%."
console.log(stats);