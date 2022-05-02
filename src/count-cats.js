const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
// const arr = [
//   [0, 1, "^^"],
//   [0, "^^", 2],
//   ["^^", 1, 2],
// ];

function countCats(matrix) {
  let n = 0;
  for (let i in matrix) {
    for (let j in matrix[0]) {
      if (matrix[i][j] == "^^") n = n + 1;
    }
  }
  return n;
}

module.exports = {
  countCats,
};
