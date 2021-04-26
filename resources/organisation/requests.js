const {
  OrgSchema,
  CeoSchema,
  ContactSchema,
  AccountSchema,
} = require("./schema");
const { ORG_ERROR } = require("../../errors/dbErrors");
const { createValidationError } = require("../../errors/_errorGenerator");

async function isOrgIdExists(orgId) {
  return await OrgSchema.findOne({ orgId });
}

async function add(org) {
  try {
    return await OrgSchema.create(org);
  } catch (err) {
    console.log(err);
    return createDBError(err);
  }
}

async function checkAndAdd(org) {
  if (await isOrgIdExists(org.orgId)) {
    return createValidationError(ORG_ERROR.NOT_UNIQUE_ID);
  }
  return await add(org);
}

module.exports = {
  add,
  isOrgIdExists,
  checkAndAdd,
};
