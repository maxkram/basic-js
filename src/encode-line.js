const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let tmp = "";
  for (let i = 0; i < str.length; ) {
    let nc = i + 1;
    let num = 1;
    while (str.charAt(i) === str.charAt(nc)) {
      nc++;
      num++;
    }
    num > 1 ? (tmp += num + str.charAt(i)) : (tmp += str.charAt(i));
    i = nc;
  }
  return tmp;
}

module.exports = {
  encodeLine,
};
