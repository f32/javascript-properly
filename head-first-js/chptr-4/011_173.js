var products = ["Choo Choo Chocolate", "Icy Mint", "Cake batter", "Bubblegum"];
var hasBubbleGum = [false, false, false, true];
var i = 0;
while (i < hasBubbleGum.length) {
  if (hasBubbleGum[i]) {
    console.log(products[i] + " contains bubble gum");
  }
  i += 1;
}
