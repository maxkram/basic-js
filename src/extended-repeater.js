const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let nS = "";
  let addz = "";

  options.repeatTimes = options.repeatTimes || 1;
  options.separator = options.separator || "+";
  if (options.addition === undefined) {
    options.addition = "";
  }
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  options.additionSeparator = options.additionSeparator || "|";

  for (let i = 1; i < options.additionRepeatTimes; i++) {
    addz += options.addition + options.additionSeparator;
  }

  addz += options.addition;

  for (let i = 1; i < options.repeatTimes; i++) {
    nS += str + addz + options.separator;
  }

  nS += str + addz;

  return nS;
}

module.exports = {
  repeater,
};
