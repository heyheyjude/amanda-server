const { Router } = require("express");
const orgRequest = require("./requests");
const getErrorResponse = require("../../errors/_errorResponseGenerator");

const router = Router();

router.post("/", async (req, res) => {
  const newOrgResponse = await orgRequest.checkAndAdd(req.body);
  if (newOrgResponse.error) {
    const { status, body } = getErrorResponse(newOrgResponse);
    res.status(status).json(body);
  }
  res.status(201).json(newOrgResponse);
});

module.exports = router;
