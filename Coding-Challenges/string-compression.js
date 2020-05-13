string = "aaabbbbccdda";
// output: "a3b4c2d2a1"

function stringCompression(str) {
  let result = "";
  let count = 1;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      count++;
      continue;
    } else {
      result += str[i] + count;
    }
    count = 1;
  }
  result += str[str.length - 1] + count;
  return result;
}

console.log(stringCompression(string));
