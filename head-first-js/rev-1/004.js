var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

function printAndGetHighScore(arr){
  var output;
  for (var i = 0; i < arr.length; i++) {
    output = "Bubble solution #" + i + " score: " + arr[i];
    console.log(output);
  }

  var highScore = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > highScore) {
      highScore = arr[i];
    }
  }
  console.log("Bubble tests: " + arr.length);
  console.log("Highest bubble score: " + highScore);
}

function getBestResults(arr){
  var bestSolutions = new Array();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == highScore) {
      bestSolutions.push(i);
    }
  }
  console.log("Solutions with the highest score: #" + bestSolutions.join(", #"));
}

printAndGetHighScore(scores);
getBestResults(scores);
