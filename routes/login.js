const express = require("express");
const csrf = require("csurf");
const csrfProtection = csrf({ cookie: true });
const router = express.Router();
const { asyncHandler, logInUser, checkSessionToken } = require("../util");
const db = require("../db/models");
const bcrypt = require("bcryptjs");

//app using loginRouter for /login route


router.get("/", csrfProtection, function (req, res, next) {
  //!!! checkSessionToken(req, res, next) function gives us an error saying that user is not defined
  //??? why do we need this on the get login page again?
	// checkSessionToken(req, res, next);

	res.render("login", {
		csrfToken: req.csrfToken(),
	});
});

router.post(
	"/",
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

router.post('/demo-user', csrfProtection, asyncHandler(async(req, res) => {
	const demoUser = await db.User.findOne({ where: { username: "DemoUser" } })
	await logInUser(req, demoUser.dataValues);
	console.log(req.session);
	res.redirect('/');
}));

module.exports = router;
