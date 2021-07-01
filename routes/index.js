const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const db = require('../db/models')

// const testGameInfo1 = {
//   title: 'testTItle',
//   snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, officia.',
//   comments: '42',
//   logo: 'https://png.pngtree.com/png-vector/20190507/ourmid/pngtree-blue-samurai-head-esports-logo-png-image_1026489.jpg',
//   genre: 'yeeeet it',
//   votes: '42',
//   publisher: 'yeeters'
// }
// const testGameInfo2 = {
//   title: 'testTItle',
//   snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, officia.',
//   comments: '42',
//   logo: 'https://png.pngtree.com/png-vector/20190507/ourmid/pngtree-blue-samurai-head-esports-logo-png-image_1026489.jpg',
//   genre: 'yeeeet it',
//   votes: '42',
//   publisher: 'yeeters'
// }
// const testGameInfo3 = {
//   title: 'testTItle',
//   snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, officia.',
//   comments: '42',
//   logo: 'https://png.pngtree.com/png-vector/20190507/ourmid/pngtree-blue-samurai-head-esports-logo-png-image_1026489.jpg',
//   genre: 'yeeeet it',
//   votes: '42',
//   publisher: 'yeeters'
// }

/* GET home page. */

router.get('/', asyncHandler(async function(req, res, next) {

  const gameData = await db.Game.findAll()
  

  res.render('index', {
    title: 'Better Than Steam.',
    gameData
  });
}));



module.exports = router;
