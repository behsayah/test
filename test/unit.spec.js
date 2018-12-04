/*
 * Unit Test Holder
 *
 *
 */

// Dependencies (Node JS)
const assert = require('assert');
// Dependencies (Localhost)
const sampleFunction = require('../index');

// Main Container
const unit = {};
// Assert that the getANumber function is returning a number.
unit['index.getANumber should return a number'] = done => {
  const val = sampleFunction.getANumber();
  assert.equal(typeof val, 'number');
  done();
};

// Assert that the getANumber function is returning 1.
unit['index.getANumber should return 1'] = done => {
  const val = sampleFunction.getANumber();
  assert.equal(val, 1);
  done();
};

// Assert that the getANumber function is returning 2.
unit['index.getANumber should return 2'] = done => {
  const val = sampleFunction.getANumber();
  assert.equal(val, 2);
  done();
};

// Assert that the getErrorAndArray function is returning (error, array)
unit['index.getErrorAndArray should return (error, array)'] = done => {
  sampleFunction.getErrorAndArray(false, (err, list) => {
    assert.equal(err, false);
    assert.ok(list instanceof Array);
    assert.ok(list.length > 0);
  });
  done();
};

// Assert that the getNotError doesn't return error.
unit['index.getError should not return error (It does)'] = done => {
  assert.doesNotThrow(() => {
    sampleFunction.getNotError((err, value) => {
      assert.ok(value);
      done();
    });
  }, TypeError);
};
// Assert that the getError return error
unit['index.getError should not return error (It does)'] = done => {
  assert.doesNotThrow(() => {
    sampleFunction.getError();
    done();
  }, TypeError);
};

// Export Module
module.exports = unit;
