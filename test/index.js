/*
 * Test Runner
 *
 *
 */

// Dependencies (NodeJS)
// Dependencies (Localhost)
const unit = require('./unit.spec');
const _cliHelper = require('../cli/cli.helper');

// Main Container
const _app = {};

// Container fot test
_app.tests = {};

// Unit Test Holder
_app.tests.unit = unit;

// Run all tests, collecting the errors and successes.
_app.runTests = () => {
  const errors = [];
  let successes = 0;
  const limit = _app.countTests();
  let counter = 0;
  for (let key in _app.tests) {
    if (_app.tests.hasOwnProperty(key)) {
      const subTests = _app.tests[key];
      for (let testName in subTests) {
        if (subTests.hasOwnProperty(testName)) {
          let tempTestName = testName;
          let testValue = subTests[testName];
          try {
            testValue(() => {
              console.log('\x1b[32m%s\x1b[0m', tempTestName);
              counter++;
              successes++;
              if (counter === limit) {
                _app.produceTestReport({
                  limit: limit,
                  successes: successes,
                  errors: errors
                });
              }
            });
          } catch (e) {
            console.log('\x1b[31m%s\x1b[0m', tempTestName);
            errors.push({
              name: testName,
              error: e
            });
            counter++;
            if (counter === limit) {
              _app.produceTestReport({
                limit: limit,
                successes: successes,
                errors: errors
              });
            }
          }
        }
      }
    }
  }
};
// Produce Test Report.
_app.produceTestReport = ({ limit, successes, errors }) => {
  _cliHelper.horizontalLine('=');
  _cliHelper.centered('BEGAN TEST REPORT');
  _cliHelper.horizontalLine();

  console.log('Total Tests : ', limit);
  console.log('Pass Tests  : ', successes);
  console.log('Fail Test   : ', errors.length);

  if (errors.length > 0) {
    _cliHelper.horizontalLine();
    _cliHelper.centered('BEGIN ERROR DETAIL');
    _cliHelper.horizontalLine();
    errors.forEach(testError => {
      console.log('\x1b[31m%s\x1b[0m', testError.name);
      console.log(testError.error);
    });
  }
  _cliHelper.horizontalLine();
  _cliHelper.centered('END TEST REPORT');
  _cliHelper.horizontalLine('=');
};
// Return number of tests.
_app.countTests = () => {
  let counter = 0;
  for (let key in _app.tests) {
    if (_app.tests.hasOwnProperty(key)) {
      let subTests = _app.tests[key];
      for (let testName in subTests) {
        if (subTests.hasOwnProperty(testName)) {
          counter++;
        }
      }
    }
  }
  return counter;
};
// Run the tests.
_app.runTests();
