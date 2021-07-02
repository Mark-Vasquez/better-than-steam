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
		if (validatorErrors.isEmpty() && req.session.auth) {
			const userId = req.session.auth.user.id;
			const user = await db.User.findByPk(userId);
			const username = user.username;
			const gameId = parseInt(req.body.gameId, 10);
			const content = req.body.content;
			await db.Comment.create({ content, gameId, userId });
			const comments = await db.Comment.findAll({
				where: { gameId },
				order: [["createdAt", "DESC"]],
				include: db.User,
			});
			await res.json({ comments, username });
		} else if (req.session.auth) {
			errors = validatorErrors.array().map((error) => error.msg);
			await res.json({ errors });
		} else {
			errors = ["Please sign in to post a comment."];
			await res.json({ errors });
		}
	})
);

router.put(
	"/:id",
	commentValidators,
	asyncHandler(async (req, res) => {
		const validatorErrors = validationResult(req);
		let errors = [];
		const comment = await db.Comment.findByPk(req.params.id, {
			include: db.User,
		});
		if (validatorErrors.isEmpty()) {
			const content = req.body.content;
			comment.content = content;
			await comment.save();
			await res.json({ comment });
		} else {
			errors = validatorErrors.array().map((error) => error.msg);
			await res.json({ errors });
		}
	})
);

router.delete(
	"/:id",
	asyncHandler(async (req, res) => {
		const comment = await db.Comment.findByPk(req.params.id);
		await comment.destroy();
		const userId = req.session.auth.user.id;
		const user = await db.User.findByPk(userId);
		const username = user.username;
		const gameId = parseInt(req.body.gameId, 10);
		const comments = await db.Comment.findAll({
			where: { gameId },
			order: [["createdAt", "DESC"]],
			include: db.User,
		});

		await res.json({ comments, username });
	})
);

module.exports = router;
