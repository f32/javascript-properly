// User Choice
var userChoice = prompt("Do you choose rock, paper or scissors?", "");


// Computer Choice: Part 1
var computerChoice = Math.random();
console.log(computerChoice);


// Computer Choice: Part 2
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

// ...

var compare = function (choice1, choice2) {
  if (choice1 === choice2) {
    return "The result is a tie!";
  }
}


// What if choice1 is rock?

var compare = function (choice1, choice2) {
  if (choice1 === choice2) {
    reurn "The result is a tie!";
  } else if (choice1 === "rock") {
    if (choice2 === "scissors") {
      return "rock wins";
    } else {
      return "paper wins";
    }
  } else if (choice1 === "paper") {
    if (choice2 === "rock") {
      return "paper wins";
    } else {
      return "scissors wins";
    }
  } else if (choice1 === "scissors") {
    if (choice2 === "paper") {
      return "scissors wins";
    } else {
      return "rock wins";
    }
  }
}


// rev1

var userChoice = prompt("Please enter your choice: either rock, paper or scissors:");
var computerChoice = Math.random();

if (computerChoice >= 0 && computerChoice <= 0.33) {
  computerChoice = "rock";
} else if (computerChoice >= 0.34 && computerChoice <= 0.66) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}
console.log("Computer choice: " + computerChoice);
console.log("Your choice: " + userChoice);

var compare = function (choice1, choice2) {
  if (choice1 === choice2) {
    return "The result is a tie!";
  } else {
    if (choice1 === "rock") {
      if (choice2 === "paper") {
        return "paper wins";
      } else {
        return "rock wins"
      }
    } else if (choice1 === "paper") {
      if (choice2 === "scissors") {
        return "scissors wins";
      } else {
        return "paper wins";
      }
    } else if (choice1 === "scissors") {
      if (choice2 === "rock") {
        return "rock wins";
      } else {
        return "scissors wins";
      }
    }
  }
}
var output = compare(userChoice, computerChoice);
console.log(output);


// What if a user makes an inappropriate choice like 'dog'? How can we extend the function to handle that?
//
// What if players in the game could also choose Rope in this game?
//
// In this version, if both players make the same choice, the game returns a tie. What if the game didn't end there but instead asked both players for new choices?
