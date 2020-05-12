let scores1 = [[1,84],[1,72],[1,47],[1,43],[1,78],[2,79],[2,4],[2,23],[2,88],[2,79],[3,75],[3,80],[3,38],[3,73],[3,4]]

output1 = [[1,64],[2,54],[3,54]]

// - student 1 and student 2 exam scores
// - use floor 79.8 = 79
// - use only the 5 highest scores 
 
let minScore = function(arr){
  let min = arr[0];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

let studentScores = function(scores){
  let studentOneAvg = 0;
  let studentTwoAvg = 0;
  let countA = 0;
  let countB = 0;
  let stdOneArr = [];
  for(let i = 0; i < scores.length; i++){
    if(scores[i][0] === 1){
      stdOneArr.push(scores[i][1]);
      studentOneAvg += scores[i][1];
      countA++;
  }
  else{
    studentTwoAvg += scores[i][1];
    countB++;
  }
}
  let min = minScore(stdOneArr);
  studentOneAvg -= min;
  let stdOneAvg = Math.floor(studentOneAvg/(countA-1));
  let stdTwoAvg = Math.floor(studentTwoAvg/countB);
  let result = [[1,stdOneAvg],[2,stdTwoAvg]];
  return result;
}

console.log(studentScores(scores));

let stdOne = [91,92,65,60,87,100];
console.log(minScore(stdOne));











              