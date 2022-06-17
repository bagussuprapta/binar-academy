const express = require('express');


const {indexView,iconsView,userView } = require('../controllers/homeController');
const router = express.Router();

router.get('/', indexView);
router.get('/icons', iconsView);
router.get('/user', userView);

module.exports = router;