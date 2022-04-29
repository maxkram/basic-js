const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let temp = {};
  let len;
  let str = "";
  for (const e of domains) {
    let as = e.split(".");
    len = as.length - 1;

    for (let i = 0; i < as.length; i++) {
      str += "." + as[len];

      if (!temp.hasOwnProperty([`${str}`])) {
        temp[`${str}`] = 1;
      } else {
        temp[`${str}`] += 1;
      }
      --len;
    }
    str = "";
  }
  return temp;
}

module.exports = {
  getDNSStats,
};
