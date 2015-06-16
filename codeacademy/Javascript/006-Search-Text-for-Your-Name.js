// What you'll be building
var text;
text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";

var myName = "Eric";
var hits = new Array();

for (var i = 0; i < text.length; i++) {
  if (text[i] === "E") {
    for(var j = i; j < (myName.length + i); j++){
      hits.push(text[j]);
    }
  }
}

if (hits.length === 0) {
  console.log("Your name wasn't found!");
} else {
  console.log(hits);
}


// Declare your variables

var text = "text Robo text Robo text text text text \
            text text text Robo text text text Robo";
var myName = "Robo";
var hits = new Array();
    // Your first "for" loop
for (var i = 0; i < text.length; i++) {
  // Your "if" statement
  if (text[i] === myName[0]) {
    // Your second "for" loop
    for (var k = i; k < (myName.length + i); k++) {
      hits.push(text[k]);
    }
  }
}

if (hits === 0) {
  console.log("Your name wasn't found!");
} else {
  console.log(hits);
}

// Think about how you might fine-tune this program to make sure it only finds exact matches for your name. Search the Internet to see if there are any built-in JavaScript string methods that can help!








var myArray = ['hello', 'world'];
myArray[0]; // 'hello'

var myName = 'Eric';
myName[0];  // 'E'

var newArray = new Array();
newArray.push('hello');
newArray[0];  // 'hello'
