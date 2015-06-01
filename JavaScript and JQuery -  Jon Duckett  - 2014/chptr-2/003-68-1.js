var inStock;
var shipping;

inStock = true;
shipping = false;

/* Some other processing might go here and, so a result, the script might need to change these values */

inStock = false;
shipping = true;

var elStock = document.getElementById('stock');
elStock.className = inStock;
var elShip = document.getElementById('shipping');
elShip.className = shipping;
