// Function syntax
var sayHello = function (name) {
  console.log("Hello " + name);
};

sayHello("Emily");



console.log("Hey" + "you"); // Heyyou
console.log("Hey" + " " + "you1"); // Heyyou
console.log("Hey, " + "you!"); // Hey, you!



var greeting = function (name) {
  console.log("Great to see you," + " " + name);
};

greeting("Someone");  // Great to see you, Someone



// How does a function work?

var functionName = function( ) {
  // code code code
  // code code code
  // (more lines of code)
};


var foodDemand = function (food) {
  console.log("I want to eat" + " " + food);
};

foodDemand("broccoli"); // I want to eat broccoli



// Tying it all together

var calculate = function (number) {
  var val = number * 10;
  console.log(val);
}

calculate();


var greeting = function (name) {
  console.log(name);
}

greeting("name"); // name


// Don't Repeat Yourself (D.R.Y)

var orangeCalc = function (cost) {
  var total = cost * 5;
  total = "Total cost of oranges is: " + total;
  console.log(total);
}

orangeCalc(5); // Total cost of oranges is: 25



// Return keyword

var timesTwo = function(number) {
  return number * 2;
};

var newNumber = timesTwo(5);  // 10
console.log(newNumber);

// Functions, return and if / else

var quarter = function (input) {
  var getQuarter = input / 4;
  return getQuarter;
};

if (quarter(36) % 3 === 0) {
  console.log("The statement is true");
} else {
  console.log("the statement is false");
}


// Functions with two parameters

var areaBox = function (length, width) {
  return length * width;
}
areaBox(3,9); // 27



var perimeterBox = function (width, length) {
  var calc = (width + length) * 2;
  console.log(calc);
}
perimeterBox(3,5);  // 16


// Global vs Local Variables

var globalVar = "hello";

var foo = function () {
  console.log(globalVar); // "hello"
}



var bar = function() {
  var lovalVar = "howdy";
}
console.log(localVar); // Error: localVar is not defined



var my_number = 7;

var timesTwo = function(number){
  var my_number = number * 2;
  console.log("Inside the function my_number is: ");
  console.log(my_number); // 14
};

timesTwo(7);

console.log("Outside the function my_number is:");
console.log(my_number); // 7


// Functions recap

var nameString = function (name) {
  var appeal = "Hi, I am " + name;
  return appeal;
}
var printAppeal = nameString("Emily");
console.log(printAppeal);   // "Hi, I am Emily"


// Functions & if / else

var sleepCheck = function(numHours){
  if (numHours >= 8) {
    return "You're getting plenty of sleep!";
  } else if (numHours < 8) {
    return "Get some more shut eye!";
  }
}
var checker = sleepCheck(10); // "You're getting plenty of sleep!"
console.log(checker);
