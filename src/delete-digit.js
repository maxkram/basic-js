const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let res = 0,
    nd = [];
  while (num) {
    nd.push(num % 10);
    num = Math.floor(num / 10);
  }
  for (let inx = 0; inx < nd.length; inx++) {
    let n = 0;
    for (let i = nd.length - 1; i >= 0; i--) {
      if (i !== inx) {
        n = n * 10 + nd[i];
      }
    }
    res = Math.max(n, res);
  }
  return res;
}

module.exports = {
  deleteDigit,
};
