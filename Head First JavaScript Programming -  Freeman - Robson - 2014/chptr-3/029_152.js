function dogYears(dogName, age) {
  var years = age * 7;
  console.log(dogName + " is " + years + " years old");
}
var myDog = "Fido";
dogYears(myDog, 4); // "Fido is 21 years old"



function makeTea(cups, tea) {
  console.log("Brewing " + cups + " cups of " + tea);
}
var guests = 3;
makeTea(guests, "Earl Grey"); // "Brewing 3 cups of Earl Grey"



function secret() {
  console.log("The secret of life is 42");
}
secret(); // "The secret of life is 42"

function speak(kind) {
  var defaultSound = "";
  if (kind == "dog") {
    alert("Woof");
  } else if (kind = "cat") {
    alert("Meow");
  } else {
    alert(defaultSound);
  }
}
var pet = prompt("Enter a type of pet: ");
speak(pet);



  variables:
myDog, guests, pet, years, defaultSound

  functions:
dogYears, makeTea, secret, speak

  core functions:
alert(), console.log(), prompt()

  arguments:
myDog, 4; guests, "Earl Grey"; pet; all from console.log, prompt() and alert();

  parametres:
dogName, age; cups, tea; kind;
