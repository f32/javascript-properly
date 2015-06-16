// First for loop

for (var counter = 1; counter < 6; ounter++) {
  console.log(counter);
}

// Starting the for loop

for (var i = 1; i < 11; i = i + 1) {
  // code;
}


for (var i = 5; i < 11; i = i + 1) {
  console.log(i);
}


// Ending the for loop

for (var i = 1; i < 11; i+=1) {
  //code;
}


for (var i = 4; i < 24; i++) {
  console.log(i);
}


// Controlling the for loop

for (var i = 10; i <= 100; i+=10) {
  console.log(i);
}

// How does it work?

for (var i = 8; i < 120; i+=12) {
  console.log(i);
}


// Practice counting down

for (var i = 10; i >= 0; i--) {
  console.log(i);
}

// Last practice for loop

for (var i = 100; i > 0; i-=5) {
  console.log(i);
}

// Meet arrays

var names = ["Mao","Gandhi","Mandela"];

var sizes = [4, 6, 3, 2, 1, 9];

var mixed = [34, "candy", "blue", 11];

    // var arrayName = [data, data, data];

var junk = [];
junk = [1, 100, "al", "et"];
console.log(junk);

// Array positions

console.log(junk[0]); // prints out 1

// Loops and arrays I

var cities = new Array();
cities = ["Melbourne", "Amman", "Helsinki", "NYC"];

for (var i = 0; i < cities.length; i++) {
  console.log("I would like to visit " + cities[i]);
}

// Loops and arrays II

var names = [];
names = ["Kate", "Nicolas", "Tirion", "Beth", "Jeremy"];

for (var i = 0; i < names.length; i++) {
  console.log("I know someone called " + names[i] + ".")
}

// Conclusion
