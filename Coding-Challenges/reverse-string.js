// Modify the same array without 
// creating a new array
// Do not use any reverse build-in methods

// Input:  ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// 1. Hashmap solves 95% 
// 2. two pointers and swap 
// 3. Recursion (Binary Tree & Binary Search Tree)

let reverseString = function(s) {
  let left = 0;
  let right = s.length-1;
  while(left < right){
    let temp = s[left]; // temp = "h"
    s[left] = s[right]; // s[left] = "o"
    s[right] = temp;   // s[right] = "h"
    left++;
    right--;
  }
  return s;
   
};
console.log(reverseString(["o","p","e","n"]));

// ["o","p","e","n"]
// ["n","e","p","o"]
