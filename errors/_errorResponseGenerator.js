const { INTERNAL, EXTERNAL } = require("./dbErrors");

function getErrorResponse({ error, type }) {
  if (type === EXTERNAL) {
    const { status, ...body } = error;
    return { status, body };
  }
  if (type === INTERNAL) {
    return {
      status: 500,
      body: error,
    };
  }
}

module.exports = getErrorResponse;
