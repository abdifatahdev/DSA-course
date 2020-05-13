function collectRanges2(ranges) {
  let begin = 0;
  let summary = [];
  for (let curr = 0; curr < ranges.length; curr++) {
    if (ranges[curr + 1] - ranges[curr] === 1) {
      continue;
    }
    if (begin === curr) {
      summary.push(ranges[curr].toString());
    } else {
      summary.push(ranges[begin] + "->" + ranges[curr]);
    }
    begin = curr + 1;
  }
  return summary;
}
ranges = [0, 1, 2, 3, 5, 6, 7, 9];
console.log(collectRanges2(ranges));
