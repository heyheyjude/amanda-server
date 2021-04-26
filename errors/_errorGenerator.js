const { INTERNAL, EXTERNAL } = require("./dbErrors");

function createDBError(err) {
  return {
    type: INTERNAL,
    error: err,
  };
}

function createValidationError(err) {
  return {
    type: EXTERNAL,
    error: err,
  };
}

module.exports = { createValidationError, createDBError };
