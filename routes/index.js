const express = require("express");
const router = express.Router();
const instituteRoutes = require("./instituteRoutes");
const authRoutes = require("./authRoutes");

router.post("/institute", instituteRoutes);
router.get("/auth", authRoutes);

module.exports = router;
