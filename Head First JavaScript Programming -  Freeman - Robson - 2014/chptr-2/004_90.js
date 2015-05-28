// объявление переменных

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (enter a number from 0-6)");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses = guesses + 1;
  }
}

/*
if (guess < 0 || guess > 6)
/*
