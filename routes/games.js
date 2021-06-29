const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../util");
const db = require("../db/models");

router.get(
	"/:id",
	asyncHandler(async (req, res) => {
		const game = await db.Game.findByPk(req.params.id);
		res.render("game", { game });
	})
);

module.exports = router;
