var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

var output;
var totalTests = "Bubbles tests: " + scores.length;
var highScore = 0;
var bestSolutions = [];

for (var i = 0; i < scores.length; i++) {
  output = "Bubble solution #" + i + " score: " + scores[i];
  console.log(output);
}

for (var i = 0; i < scores.length; i++) {

  if (highScore < scores[i]) {
    highScore = scores[i];
  }
}

for (var i = 0; i < scores.length; i++) {

  if (scores[i] == highScore) {
    bestSolutions.push(i);
  }
}

  console.log(totalTests);
  console.log("Highest bubble score: " + highScore);
  console.log("Solutions with highest score: #" + bestSolutions.join(", #"));
