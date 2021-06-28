const express = require("express");
const csrf = require("csurf");
const csrfProtection = csrf({ cookie: true });
const router = express.Router();
const { asyncHandler, logInUser, checkSessionToken } = require("../util");
const db = require("../db/models");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const signupValidators = [
	check("email")
		.exists({ checkFalse: true })
		.withMessage("Please provide a value for email")
		.normalizeEmail()
		.isEmail()
		.withMessage("Please provide a valid email"),
	check("username")
		.exists({ checkFalse: true })
		.withMessage("Please provide a value for username"),
	check("password")
		.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i")
		.withMessage(
			"Please provide a password that is at least 8 characters long, at least one upper case letter, at least one lower case letter, at least one special character"
		),
];

router.get("/signup", function (req, res, next) {
	const { username, email, password, confirmedPassword } = req.body;
});

router.post(
	"/signup",
	signupValidators,
	asyncHandler(async function (req, res, next) {
		const { username, email, password, confirmedPassword } = req.body;

		if (password !== confirmedPassword) {
			return res.render("signup", {});
		}

		let errors = [];
		const validatorErrors = validationResult(req);

		if (validatorErrors.isEmpty()) {
			const hashedPassword = await bcrypt.hash(password, 10);
			// user.hashedPassword = hashedPassword;
			const user = await db.User.create({
				username,
				email,
				hashedPassword,
			});
			logInUser(req, user);
			return res.redirect("/");
		} else {
			errors = validatorErrors.array().map((error) => error.msg);
		}

		res.render("signup", { username, password, errors });
	})
);
module.exports = router;
