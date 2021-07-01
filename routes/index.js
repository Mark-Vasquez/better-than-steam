const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const db = require('../db/models')


const numVotes = async () => {
  const allUpvotes = await db.Upvote.findAll()

  const gameVotes = {}

  for (let i = 0; i < allUpvotes.length; i++) {
    const vote = allUpvotes[i].dataValues
    const gameId = vote.gameId
    if (gameVotes[gameId]) {
      gameVotes[gameId]++
    } else {
      gameVotes[gameId] = 1
    }
  }
  return gameVotes
}

const numComments = async () => {
  const gameComments = {}
  const allComments = await db.Comment.findAll()
  for (let i = 0; i < allComments.length; i++) {
    const comment = allComments[i].dataValues;
    const gameId = comment.gameId
    if (gameComment[gameId]) {
      gameComment[gameId]++
    } else {
      gameComment = 1
    }
  }
  return gameComments
}



router.get('/', asyncHandler(async function(req, res, next) {

  const gameData = await db.Game.findAll()
  const gameVotes = await numVotes()
  const gameComments = await numComments()

  console.log(gameVotes);

  res.render('index', {
    title: 'Better Than Steam.',
    gameData,
    gameVotes,
    gameComments
  });
}));


module.exports = router;
