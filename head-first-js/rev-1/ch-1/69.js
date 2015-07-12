function passBear(arg) {
  console.log(count + " " + arg + " of bear on the wall");
  console.log(count + " " + arg + " of bear,");
  console.log("Take one down, pass it around,");
}
function bearLeft(arg) {
  console.log(count + " " + arg + " of bear on the wall.");
  console.log(" ");
}

var word = "bottles";
var singularWord = "bottle"
var count = 10;
while (count > 0) {
  if (count != 1) {
    passBear(word);
  } else {
    passBear(singularWord);
  }
  count = count - 1;
  if (count > 0) {
    if (count != 1) {
      bearLeft(word);
    } else {
      bearLeft(singularWord);
    }
  } else {
    console.log("No more " + word + " of bear on the wall.");
  }
}
