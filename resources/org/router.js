const { Router } = require("express");
const orgRequests = require("./requests");
const getErrorResponse = require("../../errors/_errorResponseGenerator");
const { ORG, CEO, ACCOUNT, CONTACT } = require("../_interfaces/modelsNames");
const { filterByKey } = require("../../utils/objects");

const router = Router();

router.post("/", async (req, res) => {
  const { body } = req;

  const orgFields = filterByKey(body, ORG.toLowerCase());
  const ceoFields = filterByKey(body, CEO);
  if (Object.keys(ceoFields).length) {
    orgFields.ceos = [ceoFields];
  }
  orgFields.accounts = body.accounts || [];
  orgFields.contacts = body.contacts || [];

  const newOrgResponse = await orgRequests.add(orgFields);

  if (newOrgResponse.error) {
    const { status, body } = getErrorResponse(newOrgResponse);
    res.status(status).json(body);
  }

  res.status(200).json(newOrgResponse);
});

module.exports = router;
