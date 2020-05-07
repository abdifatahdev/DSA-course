arr = [2,2,1,1,1,2,2]

// Given an array of size n, find the majority element. 
// The majority element is the element that 
// appears more than ⌊ n/2 ⌋ times.

// Time complexity: O(n)
// Space complexity: O(n)
let majorityElement = function (nums) {
  let store = {};
  let magicNumber = Math.floor(nums.length / 2);
  for (let x of nums) {
    if (store[x]) {
      store[x] += 1;
    } else {
      store[x] = 1;
    }
    if (store[x] > magicNumber) {
      return x;
    }
  }
};
console.log(majorityElement([3, 2, 3]));
