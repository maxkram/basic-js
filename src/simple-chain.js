const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],

  getLength() {
    return this.length;
  },

  addLink(value = "") {
    this.arr.push(String(value));
    return this;
  },

  removeLink(p) {
    if (p < 1 || p > this.arr.length - 1) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    if (!(typeof p === "number")) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(p - 1, 1);
    return this;
  },

  reverseChain() {
    this.arr = this.arr.reverse();
    return this;
  },

  finishChain() {
    const result = this.arr.map((item) => `(${" "}${item}${" "})`).join("~~");
    this.arr = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
