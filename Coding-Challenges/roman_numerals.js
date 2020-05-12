const romanNumerals = (roman) => {
  let map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let currValue = 0;
  for (let i = 0; i < roman.length - 1; i++) {
    if (map[roman[i]] < map[roman[i + 1]]) {
      currValue -= map[roman[i]];
    } else {
      currValue += map[roman[i]];
      console.log(currValue);
    }
  }

  return currValue + map[roman[roman.length - 1]];
};
let input5 = "MCMXCIV"
romanNumerals(input5);
