const k_diff_numbers = (nums, k) => {
  const counter = {};
  let result = 0;
  for (let val of nums) {
    counter[val] ? counter[val]++ : (counter[val] = 1);
  }

  for (let key in counter) {
    if ((k > 0 && counter[parseInt(key) + k]) || (k === 0 && counter[key] > 1)) {
      result++;
    }
  }
  return result;
};
let nums = [3, 1, 4, 1, 5];
let k = 2;
// output = 2
// [1,3], [3,5]

// let nums = [1,2,3,4,5], k = 1
// output = 4
// [1,2], [2,3],[3,4],[4,5]

// let nums = [3, 1, 3, 4],
//   k = 0;
// output = 1
// [1,1]
differentNums(nums, k);
