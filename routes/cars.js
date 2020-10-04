const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/cars', ctrl.cars.index);





module.exports = router;