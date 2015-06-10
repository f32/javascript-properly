// exercises
// function (timesTable, startValue, endValues)
//
//
//
// for (var i = 1; i <= 12; i++) {
//   var calcResult = 12 * i
//   document.write("12 * " + i + " = " + calcResult + "<br>");
// }



// solution
function newTable(times, start, end) {
  var calculation;
  for (var i = start; i <= end; i++) {
    calculation = times * i;
    document.write(times + " * " + i + " = " + calculation + "<br>");
  }
}

newTable(12, 4, 9);



// q2:

// solution
function newTable(start, end) {
  do {
    var times = prompt("Please enter how many times table to display:", "");
    if (isNaN(times)) {
      alert("Please re-enter the number and set a valid one, please!");
    }
  } while (times != -1);

  var calculation;
  for (var i = start; i <= end; i++) {
    calculation = times * i;
    document.write(times + " * " + i + " = " + calculation + "<br>");
  }
}

newTable(1, 10);
