const express = require("express");
const services = require("../controllers/services");

const router = express.Router();
router.route("/").get(services);

module.exports = router;
