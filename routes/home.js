const express = require('express');
const router = express.Router();

// bring method from controller
const {home, homeDummy, check} = require('../controller/homeContoller');

router.route('/').get(home)
router.route('/dummy').get(homeDummy)
router.route('/check').get(check);

module.exports = router;