const express = require("express");
const { BfhlController } = require('../../controllers');

const router = express.Router();

router.get("/bfhl", BfhlController.getBfhl);
router.post("/bfhl", BfhlController.postBfhl);

module.exports = router;
