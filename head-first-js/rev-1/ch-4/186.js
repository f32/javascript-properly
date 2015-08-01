var bestSolutions = new Array();

for (var i = 0; i < scores.length; i++) {
  if (scores[i] == highScore) {

    bestSolutions.push(i);

  }
}

console.log("Solutions with the highest score: " + bestSolutions);


// alternative (with no "push()")

var bestSolutions = new Array();
var k = 0;

for (var i = 0; i < scores.length; i++) {
  if (scores[i] == highScore) {
    bestSolutions[k] = i;
    k++;
  }
}

console.log("Solutions with the highest score: " + bestSolutions);
