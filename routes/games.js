const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../util");
const db = require("../db/models");

router.get(
	"/:id",
	asyncHandler(async (req, res) => {
		const game = await db.Game.findByPk(req.params.id);
		const comments = await db.Comment.findAll({
			where: { gameId: req.params.id },
			order: [["createdAt", "DESC"]],
		});
		res.render("game", { game, comments });
	})
);

module.exports = router;
