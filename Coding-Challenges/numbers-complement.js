https://leetcode.com/explore/featured/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3319/

// Input: 5
// Output: 2
// Bits        4 | 2 | 1 
//            --------------
// Binary:     1 | 0 | 1    --> (5)
// Comp:       0 | 1 | 0    --> (2)

// 010 = (0*2^2) + (1*2^1) + (0*2^0) = 2 

let findComplement = function(num) {
  binary = decimalToBinary(num); 
  complement = complements(binary); 
  decimal = binaryToDecimal(complement); 
  return decimal; 
};

function decimalToBinary(num) {
  let arr=[];
  while(num > 0){
    let remainder = num % 2;
    arr.unshift(remainder)
    num = Math.floor(num / 2)
  }
 return arr.join('').toString()
}
function complements(binary) {
  let result = "";
  for( let i = 0; i < binary.length; i++){
    if(binary.charAt(i) === '1'){
      result += '0';
    }
    else{
      result += '1';
    }
  }
  return result;
}
function binaryToDecimal(binary) {
  let decimal = 0;
  let index = 0; 
  for(let i = binary.length-1; i > -1; i--){
    decimal += parseInt(binary[index])*Math.pow(2, i);
    index++; 
  }
  return decimal;
}

num = 2; 
console.log(findComplement(num)); 