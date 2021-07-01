const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const db = require('../db/models')



router.get('/', asyncHandler(async function(req, res, next) {

  const gameData = await db.Game.findAll()
  const allUpvotes = await db.Upvote.findAll()

  const gameVote = {}

  for (let i = 0; i < allUpvotes.length; i++) {
    const vote = allUpvotes[i].dataValues
    const gameId = vote.gameId

    if (gameVote[gameId]) {
      gameVote[gameId]++
    } else {
      gameVote[gameId] = 1
    }

  }

  res.render('index', {
    title: 'Better Than Steam.',
    gameData,
    gameVote
  });
}));


module.exports = router;
