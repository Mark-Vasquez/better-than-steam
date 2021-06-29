const express = require("express");
const router = express.Router();
const { logOutUser } = require('../util.js');



router.get('/', (req, res) => {
    res.send('testingthis')
})

module.exports = router;