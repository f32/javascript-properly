// выборка результатов с минимальными затратами из ВСЕХ позиций.
var costs = [ .25, .27, .25, .25, .25, .25,
              .33, .31, .25, .29, .27, .22,
              .31, .25, .25, .33, .21, .25,
              .25, .25, .28, .25, .24, .22,
              .20, .25, .30, .25, .24, .25,
              .25, .25, .27, .25, .26, .29];
//
function getMostCostEffectiveSolution(arr) {
  var mostEffective = 100000;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < mostEffective) {
      mostEffective = arr[i];
    }
  }
  return mostEffective;
}
var mostEffective = getMostCostEffectiveSolution(costs);
console.log("The most effective solution is " + mostEffective.toFixed(2));

// Необходимо выбрать самую наименее затратную позицию из самых продуктивных смесей.
var costs = [ .25, .27, .25, .25, .25, .25,
              .33, .31, .25, .29, .27, .22,
              .31, .25, .25, .33, .21, .25,
              .25, .25, .28, .25, .24, .22,
              .20, .25, .30, .25, .24, .25,
              .25, .25, .27, .25, .26, .29];

var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];


function printScores(arr) {
  for (var i = 0; i < arr.length; i++) {
    var output = "Bubble solution #" + i + " score: " + arr[i];
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
  var bestResults = new Array();
  for (var i = 0; i < arr.length; i++) {
    if (highScore == arr[i]) {
      bestResults.push(i);
    }
  }
  return bestResults;
}

function getMostCostEffectiveSolution(arr, costs, highScore) {
  var cost = 100;
  var index;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == highScore) {
      if (cost > costs[i]) {
        index = i;
        cost = costs[i];
      }
    }
  }
  return index;
}

printScores(scores);

var showTestsAmount = "Bubble tests: " + scores.length;
console.log(showTestsAmount);

var highScore = getHighScore(scores);
var showHighScore = "Highest bubble score: " + highScore;
console.log(showHighScore);

var bestResults = getBestResults(scores, highScore);
var showBestResults = "Solutions with highest score: #" + bestResults.join(", #");
console.log(showBestResults);

var effectiveCost = getMostCostEffectiveSolution(scores, costs, highScore);
var showEffectiveCost = "Bubble solution #" + effectiveCost + " is the most cost effective";
console.log(showEffectiveCost);
