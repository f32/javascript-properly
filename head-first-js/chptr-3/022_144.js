function clunk(times) {
  var num = times;
  while (num > 0) {
    display("clunk");
    num = num - 1;
  }
}

function thingmajig(size) {
  var facky = 1;
  clunkCounter = 0;
  if (size == 0) {
    display("clank");
  } else if (size == 1) {
    display("thunk");
  } else {
    while (size > 1) {
      facky = facky * size; // 1, 1, 2, 6, 24, 120, 720
      size = size - 1;
    }
    clunk(facky);
  }
}

function display(output) {
  console.log(output);
  clunkCounter = clunkCounter + 1;
}
var clunkCounter = 0;
thingmajig(0);    // 0, 1, 2, 3, 4, 5, ...
console.log(clunkCounter);
