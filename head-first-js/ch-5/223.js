var fido = {
  name: "Fido",
  weight: 48,
  breed: "Mixed",
  loves: "walks"
};

loseWeight(fido, 10);

function loseWeight(dog, amount) {
  dog.weight = dog.weight - amount;
}

alert(fido.name + " now weights " + fido.weight);
