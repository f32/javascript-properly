var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;  // undefined
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
  guess = prompt("Fire between 0 and 6!");
  if (guess < 0 || guess > 6) {
    alert("Ready, aim, fire! (enter a number from 0-6):")
  } else {
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      hits = hits + 1;
      if (hits == 3) {
        isSunk = true;
        alert("Корабль потоплен.")
      }
    }
  }

}

var statMessage = "Завершающее сообщение для пользователя."
console.log(statMessage);
