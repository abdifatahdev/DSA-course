// Modify the same array without
// creating a new array
// Do not use any reverse build-in methods

iter = ["h","e","l","l","o"]
rec =  ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]


let reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    let temp = s[left]; // temp = "h"
    s[left] = s[right]; // s[left] = "o"
    s[right] = temp; // s[right] = "h"
    left++;
    right--;
  }
  return s;
};
console.log("Iterative Solution: ");
console.log(reverseString(iter));

// RECURSION SOLUTION
let reverseStringRec = function (string) {
  reverseStringRecHelper(string, 0, string.length - 1);
  return string; 
};

function reverseStringRecHelper(string, l, r) {
  // Base case
  // Work toward Base Case
  // Recurisve call
  if (l < r) { // Base case
    let temp = string[l];   // work towrard the base case
    string[l] = string[r];  // work		,, 		,, 		,,
    string[r] = temp;       // work		,, 		,,		,,
    return reverseStringRecHelper(string, l + 1, r - 1); // recursive call
  }
}
console.log("Recursive Solution: ");
console.log(reverseStringRec(rec));
