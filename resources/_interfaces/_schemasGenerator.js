const recordInterface = require("./recordInterface");

function implementRecordInterface(schema) {
  return {
    ...recordInterface,
    ...schema,
  };
}
