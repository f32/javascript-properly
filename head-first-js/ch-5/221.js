var cadi = {
  make: "GM",
  model: "Cadillac",
  year: 1955,
  color: "tan",
  passengers: 5,
  convertible: false,
  mileage: 12892
};
// false, i.e. pass on this car

var fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passenders: 2,
  convertible: false,
  mileage: 88000
};
// false

var chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  convertable: false,
  mileage: 1021
};
// true, nice car

function prequal(car) {
  if (car.mileage > 10000) {
    return false;
  } else if (car.year > 1960) {
    return false;
  }
  return true;
}

var worthALook = prequal(chevy);

if (worthALook) {
  console.log("You gotta check out this " + chevy.make + " " + chevy.model);
} else {
  console.log("You should really pass on the " + chevy.make + " " + chevy.model);
}
