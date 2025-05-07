const express = require("express");
const { register, login } = require("../controller/authController");
const router = express.Router();

router.post("/registerUser", register);
router.post("/loginUser", login);

module.exports = router;
