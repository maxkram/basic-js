const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = [];
  let str = "";

  if (Array.isArray(members)) {
    for (let num of members) {
      if (typeof num === "string") {
        str = num.split(" ").join("").slice(0, 1);
        str = str.toUpperCase();
        arr.push(str);
      }
    }
    return arr.sort().join("");
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam,
};
