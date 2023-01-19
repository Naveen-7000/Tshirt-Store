const express = require('express');
const router = express.Router();

// bring method from controller
const {home, homeDummy} = require('../controller/homeContoller');

router.route('/').get(home)
router.route('/dummy').get(homeDummy)

module.exports = router;