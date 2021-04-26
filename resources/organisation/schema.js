const { Schema, Types } = require("mongoose");

const CeoSchema = new Schema(
  implementRecordInterface({
    position: { type: String },
    positionGenitive: { type: String },
    name: { type: String },
    nameGenitive: { type: String },
    basisOfWork: { type: String },
    default: { type: Boolean },
    current: { type: Boolean },
    org: { type: Types.ObjectId, ref: "OrgSchema" },
  }),
  { collection: "ceos" }
);

const AccountSchema = new Schema(
  {
    currency: { type: String, required: true },
    details: { type: String, required: true },
    default: { type: Boolean, required: false },
    org: { type: [Types.ObjectId], ref: "OrgSchema", required: true },
  },
  { collection: "accounts" }
);

const ContactSchema = new Schema(
  {
    name: { type: String, required: true },
    generalValue: { type: String, required: false },
    additionalContacts: { type: Object, required: false },
  },
  { collection: "contacts" }
);

const OrgSchema = new Schema(
  {
    internalName: { type: String, required: false },
    officialName: { type: String, required: true },
    form: { type: String, required: true },
    orgId: { type: String, required: true },
    country: { type: String, required: false },
    address: { type: String, required: false },
    details: { type: String, required: false },
  },
  { collection: "customers" }
);

module.exports = { OrgSchema, CeoSchema, ContactSchema, AccountSchema };
