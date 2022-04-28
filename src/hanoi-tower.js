const { NotImplementedError } = require("../extensions/index.js");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const calc = {
    turns: 0,
    seconds: 0,
  };
  calc.turns = 2 ** disksNumber - 1;

  calc.seconds = Math.floor((calc.turns / turnsSpeed) * 3600);

  return calc;
}

module.exports = {
  calculateHanoi,
};
