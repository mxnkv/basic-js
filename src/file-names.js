const { NotImplementedError } = require('../lib');

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
  const resultArray = [];
  const count = {};
  for (const name of names) {
    if (!count[name]) {
      count[name] = 1;
      resultArray.push(name);
    } else {
      let newFile = `${name}(${count[name]})`;
      while (count[newFile] || resultArray.includes(newFile)) {
        count[name]++;
        newFile = `${name}(${count[name]})`;
      }
      count[newFile] = 1;
      count[name]++;
      resultArray.push(newFile);
    }
  }
  return resultArray;
}

module.exports = {
  renameFiles
};
