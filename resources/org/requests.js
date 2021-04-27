const Org = require("./model");
const { ORG_ERROR } = require("../../errors/dbErrors");
const { createValidationError, createDBError } = require("../../errors/_errorGenerator");

async function add(org) {
  try {
    return await Org.create(org);
  } catch (err) {
    if (err.code === 11000) {
      return createValidationError(ORG_ERROR.NOT_UNIQUE_ID);
    }
    return createDBError(err)
  }
}

module.exports = {
  add,
};
