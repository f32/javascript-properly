var x = 32;
var y = 44;
var radius = 4;

var centerX = 0;
var centerY = 0;
var width = 600;
var height = 400;

function setup(width, height) {
  centerX = width/2;
  centerY = height/2;
}

function computeDistance(x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  var d2 = (dx * dx) + (dy * dy);
  var d = Math.sqrt(d2);
  return d;
}

function circleArea(r) {
  var area = Math.PI * r * r;
  return area;
}

setup(width, height);
var area = circleArea(radius);
var distance = computeDistance(x, y, centerX, centerY);
alert("Area: " + area);
alert("Distance: " + distance);

// arguments:
width, height, radius, x, y, centerX, centerY, "Area: " + area, "Distance: " + distance, d2
// parameters:
width, height, x1, x2, y1, y2, r
// local variables:
dx, dy, d2, d, area
// global variables:
x, y, radius, centerX, centerY, width, height, area, distance
