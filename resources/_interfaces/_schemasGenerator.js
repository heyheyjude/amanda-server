const recordInterface = require("./recordInterface");

module.exports = {
  implementRecordInterface(schema) {
    return {
      ...recordInterface,
      ...schema,
    };
  },
};
