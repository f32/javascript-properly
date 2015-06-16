// While we're at it
var coinFace = Math.floor(Math.random() * 2); // 0 or 1

while (coinFace === 0) {
  console.log("Heads! Flipping again...");
  var coinFace = Math.floor(Math.random() * 2);
}

console.log("Tails! Done flipping.");



// While syntax
var understand = true;
while (understand) {
  console.log("I'm learnin while loops!");
  understand = false;
}



// A fellow of infinite loops

var fire = true;
while (fire) {
  console.log("Keep firing!");
  fire = false;
}

// Brevity is the soul of programming

// Practice makes perfect

var loop = function (){
  var counter = 0;
  while (counter < 3) {
    console.log("message");
    counter++;
  }
};
loop();


// Solo flight
var soloLoop = function(){
  var condition = true;
  while (condition) {
    console.log("Looped once!");
    condition = false;
  }
};
soloLoop(); // "Looped once!"


// Mid-lesson breather
// When to 'while' and when to 'for'

var color = "black";

while (color === "black") {
  console.log("You may print...");
  color = "white";
}

for (var i = 1; i <=5; i++) {
  console.log(i);
}


// The 'do' / 'while' loop

var loopCondition = false;

do {
  console.log("I'm gonna stop looping cause my condition is " + loopCondition + "!");
} while (loopCondition);

// To learn it, you gotta 'do' it

// Review
// To finish up and prove your loop mastery, write three syntactically correct loops in the editor: one for, one while, and one do. Beware of infinite loops!
