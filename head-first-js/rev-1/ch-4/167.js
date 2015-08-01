var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

var i = 0;
while (i < scores.length) {
  console.log("Bubble solution #" + i + " score: " + scores[i]);
  i++;
}

// попытка забежать наперёд и порешать все субзадачи:
var totalTests = scores.length;

console.log("Bubbles tests: " + totalTests);


var highScore = 0;
for (var i = 0; i < scores.length; i++) {
  if (scores[i] > highScore) {
    highScore = scores[i];
  }
}
console.log("Highest bubble score: " + highScore);

// облом наступил на этапе вывода всех тестов, в которых встретился максимальный результат:
var bestSolutions = 100;
var highScoreSolutions = new Array();
for (var i = 0; i < costs.length; i++) {
  if (costs[i] < bestSolutions) {
    highScoreSolutions.push[i];
  }
}
console.log("Solutions with highest score:" + );
