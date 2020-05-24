let s = "ab",
  t = "aa";

const isomorphicStrings = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  let mapping = {};
  for (let i = 0; i < s.length; i++) {
    if (mapping[s[i]]) {
      if (mapping[s[i]] !== t[i]) {
        return false;
      }
    } else if (Object.values(mapping).indexOf(t[i]) > -1) {
      return false;
    } else {
      mapping[s[i]] = t[i];
    }
  }
  return true;
};

console.log(isomorphicStrings(s, t));
