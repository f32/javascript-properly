// If / else
var isEven = function(number){
  if (number % 2 === 0){
    return true;
  } else {
    return false;
  }
};
isEven(10); // true


// If / else if / else
isNaN('berry');   // => true
isNaN(NaN);       // => true
isNaN(undefined); // => true
isNaN(42);        // => false
isNaN("unicorns");// => true



var isEven = function(number){
  if (number % 2 === 0) {
    return true;
  } else if (isNaN(number) === true) {
    return "Your input is not a number!";
  } else {
    return false;
  }
};


// For or while
for (var i = 0; i < 5; i++) {
  console.log(i + 1);
}

// Sneak preview: the switch statement

var lunch = prompt("What do you want for lunch?", "Type your lunch choice here");

switch(lunch){

  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;

  case 'soup':
    console.log("Got it! Tomato's my favorite");
    break;

  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;

  case 'Pie':
    console.log("Pie's not a meal!");
    break;

  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?")

};


// Adding to an existing switch

switch (/*some expression*/) {
  case 'option1':
      // do something
      break;
  case 'option2':
      // Do something else
      break;
  case 'option3':
      // Do a third thing
      break;
  default:
      // Do yet another thing
}



//
var color = prompt("What's your favorite color?", "Tyoe your favorite color here");

switch(color){
  case 'red':
    console.log("Red's a good color!")
    break;

  case 'blue':
    console.log("That's my favorite color, too!");
    break;

  case 'yellow':
    console.log("What a nice color!");
    break;

  default:
    console.log("I don't think that's a primart color!")
}


// Practice with switch

var candy = prompt("What's your favorite candy?", "Type your favorite candy here.");

switch (candy){
  case 'licorice':
    console.log("Gross!");
    break;

  case 'gum':
    console.log("I like gum!");
    break;

  case 'beets':
    console.log('...is that even a candy?');
    break;

  default:
    console.log("I do not eat candies at all!");
    break;
}

// More practice with switch

var answer = prompt("What is your favorite computer game?", "Type here.");

switch (answer) {
  case 'Heroes':
    console.log("Nice oldschool game!");
    break;

  case 'diablo':
    console.log("What a relict!)");
    break;

  default:
    console.log("Do not play videogames at all?");

}


// All on your own


// Overview

var iLoveJavaScript = true;
var iLoveLearning = true;

if (iLoveJavaScript && iLoveLearning) {
  console.log("Awesome! Let's keep learning!");
} else if (!(iLoveJavascript || iLoveLearning)) {
  console.log("Let is see if we can change your mind.");
} else {
  console.log("You only like one but bot other? We'ss work on it.");
}

// And
true && true;  // true
true && false; // false
false && true; // false
false && false;// false


// Or
true || true; // true
true || false;// true
false || true;// true
false || false;// false


// Not
!true;  // false
!false; // true
