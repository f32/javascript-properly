switch (secretNumber) {
  case 1:
  case 2:
    document.write("Too low!");
    break;

  case 3:
    document.write("You guesses the secret number!");
    break;

  case 4:
  case 5:
    document.write("Too high!");
    break;

  default:
    document.write("You did not enter a number between 1 and 5.");
    break;
}
