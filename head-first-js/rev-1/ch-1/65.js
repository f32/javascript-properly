var word = "bottles";
var count = 99;
var phrase = word + " of bear on the wall";

while (count > 0) {
  if (count != 1) {
    console.log(count + " " + phrase);
    console.log(count + " " + word + " of bear,");
    console.log("Take one down, pass it around,");
  } else {
    console.log(count + " bottle of bear on the wall");
    console.log(count + " bottle of bear,");
  }

  count -= 1;

  if (count > 0) {
    if (count != 1) {
      console.log(count + " " + phrase + ".");
      console.log(" ");
    } else {
      console.log(count + " " + "bottle of bear on the wall.");
      console.log(" ");
    }
  } else {
    console.log("No more " + phrase + ".");
  }
}
