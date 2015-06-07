var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

function printScores(arr) {
  var output;
  for (var i = 0; i < arr.length; i++) {
    output = "Bubble solution #" + i + " score: " + arr[i];
    console.log(output);
  }
}

function getHighScore(arr) {
  var highScore = 0;
  for (var i = 0; i < arr.length; i++) {
    if (highScore < arr[i]) {
      highScore = arr[i];
    }
  }
  return highScore;
}

function getBestResults(arr, highScore) {
  var bestScore = new Array();
  for (var i = 0; i < arr.length; i++) {
    if (highScore == arr[i]) {
      bestScore.push(i);
    }
  }
  return bestScore;
}

function parseAll(arr) {
  printScores(scores);
  var bubbleTests = "Bubble tests: " + scores.length;
  console.log(bubbleTests);

  var highScore = getHighScore(scores);
  var showHighScore = "Highest bubble score: " + highScore;
  console.log(showHighScore);

  var bestSolutions = getBestResults(scores, highScore);
  var showBestSolutions = "Solutions with highest score: #" + bestSolutions.join(", #");
  console.log(showBestSolutions);
}

parseAll(scores);
