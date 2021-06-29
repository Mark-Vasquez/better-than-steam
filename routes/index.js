const express = require('express');
const router = express.Router();




const testGameInfo1 = {
  title: 'testTItle',
  snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, officia.',
  comments: '42',
  logo: 'https://png.pngtree.com/png-vector/20190507/ourmid/pngtree-blue-samurai-head-esports-logo-png-image_1026489.jpg',
  genre: 'yeeeet it',
  votes: '42',
  publisher: 'yeeters'
}
const testGameInfo2 = {
  title: 'testTItle',
  snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, officia.',
  comments: '42',
  logo: 'https://png.pngtree.com/png-vector/20190507/ourmid/pngtree-blue-samurai-head-esports-logo-png-image_1026489.jpg',
  genre: 'yeeeet it',
  votes: '42',
  publisher: 'yeeters'
}
const testGameInfo3 = {
  title: 'testTItle',
  snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, officia.',
  comments: '42',
  logo: 'https://png.pngtree.com/png-vector/20190507/ourmid/pngtree-blue-samurai-head-esports-logo-png-image_1026489.jpg',
  genre: 'yeeeet it',
  votes: '42',
  publisher: 'yeeters'
}

const gameData = [testGameInfo1, testGameInfo2, testGameInfo3]




/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'a/A Express Skeleton Home',
    gameData
  });
});

module.exports = router;
