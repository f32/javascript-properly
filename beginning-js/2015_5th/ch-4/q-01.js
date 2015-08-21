function timesTable(times, start, end){
  times = parseInt(times);
  for (var i = start; i <= end; i++){
    document.write(times + " * " + i + " = " + i * times + "<br>");
  }
}

function validation(){
  var ask;
  while (ask != -1) {
    var ask = prompt("Please set times of '-1':","");
    if (ask != -1) {
      alert("Please re-enter a number and enter a valid one, PLEASE!");
    }
  }
  return ask;
}
var validate = validation;

timesTable(validate(),5,9);
