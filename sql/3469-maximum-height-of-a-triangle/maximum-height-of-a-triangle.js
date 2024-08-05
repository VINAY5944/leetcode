/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
var maxHeightOfTriangle = function (red, blue) {
  let roots = (first, second) => {
    const root1 = Math.trunc(Math.sqrt(first));
    const root2 = Math.trunc((Math.sqrt(4 * second + 1) - 1) / 2);
    if (root1 > root2) {
      if (root1 === root2 + 1) return root1 + root2;
      return root2 * 2 + 1;
    }
    return root1 * 2;
  };
  return Math.max(roots(red, blue), roots(blue, red));
};