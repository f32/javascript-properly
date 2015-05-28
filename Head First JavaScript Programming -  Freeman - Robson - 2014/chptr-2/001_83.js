var
  location1 = 1,
  location2 = 2,
  location3 = 3,
  guess,
  hits = 0,
  guesses = 0,
  isSunk = false;

while (isSunk == false) {
  guess = prompt("Set a value from 0 to 6.");
  if (guess > 6 || guess < 0) {
    alert("please, set a VALID number: from 0 to 6!");
  } else {
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      hits = hits + 1;
      alert("Корабль подбит!");
      if (hits == 3) {
        isSunk = true;
        alert("Корабль потоплен! Успех.");
      }
    } else {
      alert("Плюха просрала! Ты смазал.");
    }
  }
}

var stats = "You injured the ship " + guesses + " times. Your accuracy is about " + (guesses/3)*100 + "%."
console.log(stats);
