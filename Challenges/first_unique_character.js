// Waxaa la rabaa inaa soo return garaysid index-ga
// xarafka aan soo noq-noqonaynin (unique character).

// s = "farmaajo"
// return 0

// s = "albaab"
// return 1

let firstUniqChar = function (s) {
  map = {};
  for (let char of s) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char] += 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar("loveleetcode"));
