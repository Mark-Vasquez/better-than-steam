const express = require("express");
const csrf = require("csurf");
const csrfProtection = csrf({ cookie: true });
const router = express.Router();
const { asyncHandler, logInUser, checkSessionToken } = require("../util");
const db = require("../db/models");
const bcrypt = require("bcryptjs");

//app using this usersRouter for /users routes
/* GET users listing. */

router.get("/", function (req, res, next) {
	res.send("respond with a resource");
});




module.exports = router;
