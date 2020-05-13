var rotate = function (arr, k) {
  k %= arr.length;
  revArr(arr, 0, arr.length - 1);
  revArr(arr, 0, k - 1);
  revArr(arr, k, arr.length - 1);
};

var revArr = (arr, start, end) => {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};
