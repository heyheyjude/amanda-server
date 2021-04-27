const { Schema, model } = require("mongoose");
const { ORG } = require("../_interfaces/modelsNames");
const { getCollectionName } = require("../_helpers/helper.strings");

const orgSchema = new Schema(
  {
    internalName: { type: String, required: true },
    officialName: { type: String, required: true },
    form: { type: String, required: true },
    orgId: { type: String, required: true, unique: true },
    country: { type: String, required: false },
    address: { type: String, required: false },
    accounts: [
      {
        currency: { type: String, required: true },
        details: { type: String, required: true },
        default: { type: Boolean, required: false },
      },
    ],
    contacts: [
      {
        name: { type: String, required: true },
        generalValue: { type: String, required: false },
        additionalContacts: { type: Object, required: false },
      },
    ],
    ceos: [
      {
        position: { type: String },
        positionGenitive: { type: String },
        name: { type: String },
        nameGenitive: { type: String },
        basisOfWork: { type: String },
        default: { type: Boolean },
        current: { type: Boolean },
      },
    ],
  },
  { collection: getCollectionName(ORG) }
);

module.exports = model(ORG, orgSchema);
