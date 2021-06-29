const express = require("express");
const csrf = require("csurf");
const csrfProtection = csrf({ cookie: true });
const router = express.Router();
const { asyncHandler, logInUser, checkSessionToken } = require("../util");
const db = require("../db/models");
const bcrypt = require("bcryptjs");

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

		if (thisUser) {
			const passwordMatch = await bcrypt.compare(
				password,
				thisUser.hashedPassword.toString()
			);

			if (passwordMatch) {
				logInUser(req, thisUser);
				return res.redirect("/");
			} else {
				//if password doesn't match
				res.render("login", {
					username,
					email,
					csrfToken: req.csrfToken(),
				});
			}
		} else {
			//if email doesn't exists
		}
	})
);

router.get("/signup", function (req, res, next) {
	res.send("respond with a resource");
});

router.post("/signup", function (req, res, next) {
	// const {
	//   username,
	//   email,
	//   password
	// } = req.body
	// const hashedPassword = await bcrypt.hash(password, 10)
	// const
});

module.exports = router;
