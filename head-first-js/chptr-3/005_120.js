function bark(name, weight) {
  if (weight > 20) {
    console.log(name + " says WOOF WOOF");
  } else {
    console.log(name + " says woof woof");
  }
}

bark("rover", 23);
bark("spot", 13);
bark("spike", 53);
bark("lady", 17);



bark("juno", 20);    // woof
bark("scotti", -1);  // woof
bark("dino", 0, 0);  // woof
bark("fido", "20");  // woof
bark("lady", 10);    // woof
bark("bruno", 21);   // WOOF
