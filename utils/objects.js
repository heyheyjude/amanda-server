const _ = require("lodash");

module.exports = {
  filterByKey(source, searchKey) {
    const filtered = _.pickBy(source, (value, key) => {
      return key.startsWith(searchKey);
    });
    return _.mapKeys(filtered, (value, key) => {
      return key.replace(searchKey, "");
    });
  },
};
