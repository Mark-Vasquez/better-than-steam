const express = require("express");
const csrf = require("csurf");
const csrfProtection = csrf({ cookie: true });
const router = express.Router();
const { asyncHandler, logInUser, checkSessionToken, logOutUser } = require("../util");
const db = require("../db/models");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

//app using this usersRouter for /users routes
/* GET users listing. */
const signupValidators = [
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for email")
    .normalizeEmail()
    .isEmail()
    .withMessage("Please provide a valid email"),
  check("username")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for username"),
  check("password")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
    .withMessage(
      'Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'
    ),
];

const loginValidators = [
  check("username")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for username"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for password"),
]

router.get("/", function (req, res, next) {
	res.send("respond with a resource");
});



router.post(
	"/login",
  loginValidators,
	csrfProtection,
	asyncHandler(async function (req, res, next) {

		const { username, password } = req.body;

		const thisUser = await db.User.findOne({
			where: { username },
		});

    let errors = [];
    const validatorErrors = validationResult(req);

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
					csrfToken: req.csrfToken(),
				});
			}
		} else {
			//if email doesn't exists
		}
	})
);

router.get("/login", csrfProtection, checkSessionToken, function (req, res, next) {
	res.render("login", {
		csrfToken: req.csrfToken(),
	});
});

router.post('/logout', (req, res) => {
	logOutUser(req);
	res.redirect('/');
});

router.get("/signup", function (req, res, next) {
  const { username, email, password, confirmedPassword } = req.body;
  res.render("signup");
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

router.post('/demo', csrfProtection, asyncHandler(async(req, res) => {
	const demoUser = await db.User.findOne({ where: { username: "DemoUser" } })
	await logInUser(req, demoUser.dataValues);
	res.redirect('/');
}));

router.post('/testroute', asyncHandler( async (req, res) => {
  const gameId = req.body.gameId
  const userId = req.session.auth.user.id


  await db.Upvote.create({
    userId,
    gameId
  })


  res.json({gameId})
}))



module.exports = router;
