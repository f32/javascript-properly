while (isSunk == false) {   // !isSunk
  guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses = guesses + 1; // guesses++

    if (guess == location1 || guess == location2 || guess == location3) {
      hits = hits + 1;    // hits += 1;
      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    }

  }
}
