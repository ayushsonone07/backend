const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth");
const validate = require("../validator/validateMiddleware");
const {signUpSchema, loginSchema} = require("../validator/autValidator");
const authMiddleware = require("../middleware/authMiddleware");

router.route("/").get(auth.home);

router.route("/register").post( validate(signUpSchema), auth.register);

router.route("/login").post(validate(loginSchema), auth.login);

router.route("/user").get(authMiddleware, auth.User);


module.exports = router