var chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  convertible: false,
  mileage: 1021
};



var cadi = {
  make: "Cadillac",
  model: "GM",
  year: 1955,
  color: "tan",
  passengers: 5,
  convertible: false,
  mileage: 12892
};



var cat = {
  name: "fluffy"
};

var planet = {
  diameter: 49528
};

var widget = {
  cost$: 3.14,
  "on sale": true
};

var forecast = {
  highTemp: 82
};

var gadget = {
  name: "anvil",
  isHeavy: true
};

var superhero = {
  name: "Batman",
  alias: "Caped Crusader"
}



var fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 88000
};

var miles = fiat.mileage;
if (miles < 2000) {
  buyit();
}

// изменение свойства:
fiat.mileage = 10000;

// добавить новое свойство:
fiat.needsWashing = true;

// вычисления со свойствами:
if (fiat.year < 1965) {
  classic = true;
}
for(var i = 0; i < fiat.passengers; i++){
  addPersonToCar();
}
