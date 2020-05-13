// one plus
// You can't convert the array to integer and add (1) to it.

// arr = [5,3,9]
// output = [5,3,2]

// edge cases:
// arr = [5,3,9]
// output = [5,4,0]

// arr = [9,9,9]
// output = [1,0,0,0]

function onePlus(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 9) {
      arr[i] = 0;
    } else {
      arr[i]++;
      return arr;
    }
  }
  if (arr[0] === 0) {
    arr.unshift(1);
  }
  return arr;
}
