var balance = 10500;
var cameraOn = true;

function steal(balance, amount) {
  cameraOn = false;
  if (amount < balance) {
    balance = balance - amount;
  }
  return amount;
  cameraon = true;
}

var amount = steal(balance, 1250);
alert("Criminal: you stole " + amount + "!");
