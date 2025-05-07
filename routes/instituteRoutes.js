const express = require("express");
const { addInstituteData } = require("../controller/instituteController");
const router = express.Router();

router.post("/addInstitute", addInstituteData);

module.exports = router;
