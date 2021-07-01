const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../util");
const db = require("../db/models");
const { check, validationResult } = require("express-validator");

const commentValidators = [
	check("content")
		.exists({ checkFalsy: true })
		.withMessage("Please type a comment before submitting."),
];

router.post(
	"/",
	commentValidators,
	asyncHandler(async (req, res) => {
		const validatorErrors = validationResult(req);
		let errors = [];
		if (validatorErrors.isEmpty()) {
			const userId = req.session.auth.user.id;
			const gameId = parseInt(req.body.gameId, 10);
			const content = req.body.content;
			await db.Comment.create({ content, gameId, userId });
			const comments = await db.Comment.findAll({
				where: { gameId },
				order: [["createdAt", "DESC"]],
			});
			await res.json({ comments });
		} else {
			errors = validatorErrors.array().map((error) => error.msg);
			await res.json({ errors });
		}
	})
);

module.exports = router;
