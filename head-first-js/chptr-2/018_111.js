var
  randomLoc = Math.floor(Math.random() * 5),
  location1 = randomLoc,
  location2 = location1 + 1,
  location3 = location1 + 2,

  guess,
  guesses = 0,
  hits = 0,
  isSunk = false;

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses += 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      hits += 1;
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
              "which means your shooting accuracy was " + (3/guesses) * 100 + "%.";
alert(stats);
