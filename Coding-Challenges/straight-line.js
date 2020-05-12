points = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
]; // true
points2 = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [9, 0],
]; // false
// y1-y0		  y-y0
// ------ != ------
// x1-x0      x-x0
// (y1-y0) * (x-x0) != (y-y0) * (x1-x0)

function straigtLine(points) {
  let x0 = points[0][0],
    y0 = points[0][1];
  let x1 = points[1][0],
    y1 = points[1][1];

  for (let i = 2; i < points.length; i++) {
    let x = points[i][0],
      y = points[i][1];
    if ((y1 - y0) * (x - x0) != (y - y0) * (x1 - x0)) {
      return false;
    }
  }
  return true;
}
straigtLine(points);