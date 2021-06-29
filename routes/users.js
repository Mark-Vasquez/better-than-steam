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

router.get("/login", csrfProtection, checkSessionToken, function (req, res, next) {

	res.render("login", {
		csrfToken: req.csrfToken(),
	});
});

router.post(
	"/login",
	csrfProtection,
	asyncHandler(async function (req, res, next) {
		const { username, password } = req.body;

		const thisUser = await db.User.findOne({
			where: { username },
		});
	})
)	


module.exports = router;
