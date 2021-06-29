const express = require("express");
const router = express.Router();
const { logOutUser } = require('../util.js');

router.post('/', (req, res) => {
	logOutUser(req);
	res.redirect('/');
});

module.exports = router;