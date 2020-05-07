arr = [5, 2, 3, 7];
target = 9;

// return the two elements that adds up to the target
// output: [2, 7]

// Time complexity: O(n^2)
// Space complexity: O(1)
function targetSum2(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
}
console.log(targetSum2(arr, target));

// Time complexity: O(n log n) sorting
// Space complexity: O(1) - constant
function targetSum(arr, target) {
  arr.sort((a, b) => a - b);
  let left = 0, right = arr.length - 1;
  while (left < right) {
    let currentSum = arr[left] + arr[right];
    if (currentSum === target) {
      return [arr[left], arr[right]];
    } else if (target < currentSum) {
      left++;
    } else {
      right--;
    }
  }
}
console.log(targetSum(arr, target));

// [5,2,3,7]
// map = {} key: value
// if map[key] present:
// 	return [map[key], current-iteration]
// map[9-5] = {4:5}    first iteration
// map[9-2] = {7:2}    second iteration
// map[9-3] = {6:3}    third iteration

// Time complexity: O(n)
// Space complexity: O(n)
function targetSum3(arr, target) {
  let map = {};
  for (let num of arr) {
    if (map[num]) {
      return [map[num], num];
    } else {
      map[target - num] = num;
    }
  }
}
console.log(targetSum3(arr, target));
