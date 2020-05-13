let scores1 = [[1, 84], [1, 72], [1, 47], [1, 43], [1, 78], [2, 79],
[2, 4], [2, 23], [2, 88], [2, 79], [3, 75], [3, 80],
[3, 38], [3, 73], [3, 4]];
// output1 = [[1,64],[2,54],[3,54]]
let scores2 = [[1, 91], [1, 92], [2, 93], [2, 97], [1, 60], [2, 77],
[1, 65], [1, 87], [1, 100], [2, 100], [2, 76]];
// output2 = [[1,87],[2,88]]
let scores3 = [[1, 50], [1, 82], [1, 76], [1, 86], [1, 77], [1, 59], [1, 97],
[2, 86], [2, 99], [2, 77], [2, 60], [2, 80],
[3, 88], [3, 50], [3, 55], [3, 56], [3, 86], [3, 55], [3, 90],
[4, 69], [4, 59], [4, 71], [4, 72], [4, 96], [4, 63],
[5, 98], [5, 58], [5, 77], [5, 77], [5, 96], [5, 92], [5, 98],
[6, 72], [6, 69], [6, 79], [6, 59], [6, 58],
[7, 56], [7, 59], [7, 68], [7, 83], [7, 89], [7, 59], [7, 62]];
// output3 = [[1, 83], [2, 80], [3, 75], [4, 74], [5, 92], [6, 67], [7, 72]]
let scores4 = [[1, 62], [1, 78], [1, 68], [1, 89], [1, 94],
[2, 92], [2, 78], [2, 98], [2, 60], [2, 93],
[3, 79], [3, 87], [3, 76], [3, 67], [3, 62],
[4, 66], [4, 100], [4, 85], [4, 84], [4, 73],
[5, 69], [5, 61], [5, 62], [5, 74], [5, 90]];
// output4 = [[1, 78], [2, 84], [3, 74], [4, 81], [5, 71]]

// The array contains student IDs and their exam scores
// Use floor to round the number. Example 79.6 = 79
// Use the highest 5 scores from all the scores provided

let studentScores = scores => {
  let scoreBoard = {};
  for (let [id, score] of scores) {
    if (scoreBoard[id]) {
      scoreBoard[id].push(score);
    } else {
      scoreBoard[id] = [score];
    }
  }
  for (let id in scoreBoard) {
    scoreBoard[id].sort((a, b) => a - b);
    let scores = scoreBoard[id].slice(scoreBoard[id].length - 5);
    let sum = 0;
    for (let score of scores) {
      sum += score;

    }
    scoreBoard[id] = Math.floor(sum / 5);
  }
  let studentResults = [];
  for (let id in scoreBoard) {
    studentResults.push([id, scoreBoard[id]])
  }
  return studentResults;
}
studentScores(scores1)