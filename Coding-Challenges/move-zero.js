https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

let moveZeroes = function(nums) {
    let index = 0; 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            let temp = nums[index]; 
            nums[index] = nums[i]; 
            nums[i] = temp; 
            index++; 
        }
    }
    return nums; 
};

nums = [0,1,0,3,12]
console.log(moveZeroes(nums));