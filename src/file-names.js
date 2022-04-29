const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const na = names;
  for (let i = 0; i < na.length - 1; i++) {
    let count = 0;
    for (let k = i + 1; k < na.length; k++) {
      if (na[i] === na[k]) {
        na[k] += `(${++count})`;
      }
    }
  }
  return na;
}

module.exports = {
  renameFiles,
};
