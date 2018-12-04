/*
 *
 *
 */

// Dependencies (NodeJS)
// Dependencies (Localhost)

// Main Container
const sample = () => {};

// Return a number
sample.getANumber = () => {
  return 1;
};

// Return error as false and array
sample.getErrorAndArray = hasError => {
  return hasError, [{ test: 'sample test' }];
};

// Doesn't Throw Error
sample.getNotError = callback => {
  let foo = 1;
  callback(false, 1);
};
// Throw Error
sample.getError = () => {
  let foo = bar;
};

// Module Export
module.exports = sample;
