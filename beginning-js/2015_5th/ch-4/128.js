function convertToCentigrade(degFahren) {
  var degCent = 5 / 9 * (degFahern - 32);

  return degCent;
}

var myFunction = convertToCentigrade;

///

function doSomething(fn){
    fn("Hello, World");
}

doSomething(alert);
