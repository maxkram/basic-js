const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
const email = "asdfasdfasdf@zxcv.gg";

function getEmailDomain(email) {
  const arr = email.split("@");
  return arr[arr.length - 1];
}

console.log(getEmailDomain(email));

module.exports = {
  getEmailDomain,
};
