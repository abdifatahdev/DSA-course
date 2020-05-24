https://www.youtube.com/watch?v=fYgU6Bi2fRg&t=261s


let allAnagrams = (s, p) => {
  let pHash = new Array(26);
  pHash.fill(0, 0, pHash.length);

  let alpha = "a";
  for (let c in p) {
    pHash[p.charCodeAt(c) - alpha.charCodeAt(0)] += 1;
  }
  
};

let s = "cbaebabacd";
let p = "abc";
allAnagrams(s, p);
