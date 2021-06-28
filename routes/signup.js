const express = require("express");
const csrf = require("csurf");
const csrfProtection = csrf({ cookie: true });
const router = express.Router();
const { asyncHandler, logInUser, checkSessionToken } = require("../util");
const db = require("../db/models");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const { render } = require("../app");

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
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
    .withMessage(
      'Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'
    ),
];

router.get("/", function (req, res, next) {
  const { username, email, password, confirmedPassword } = req.body;
  res.render("signup");
});

router.post(
  "/",
  signupValidators,
  asyncHandler(async function (req, res, next) {
    const { username, email, password, confirmedPassword } = req.body;

    if (password !== confirmedPassword) {
      return res.render("signup", {});
    }

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      console.log(validatorErrors.isEmpty());
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
      console.log("validatorErrors is not empty");
      errors = validatorErrors.array().map((error) => error.msg);
    }
    console.log("Prepare to render!");
    res.render("signup", { username, password, errors });
  })
);
module.exports = router;
