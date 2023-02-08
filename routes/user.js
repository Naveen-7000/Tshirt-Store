const express = require("express");
const router = express.Router();

const {SignUp} = require("../controller/userController");

router.route("/signup").post(SignUp);

module.exports = router;