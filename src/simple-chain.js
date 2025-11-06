const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' ||
      !Number.isInteger(position) ||
      position > this.chain.length ||
      position < 1) {
        this.chain = [];
        // throw new Error('Error');
      }
      this.chain.splice(position - 1, 1);
      return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.map(value => `( ${value} )`).join('~~');
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
