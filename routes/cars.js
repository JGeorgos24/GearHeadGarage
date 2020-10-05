const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/cars', ctrl.cars.index);

router.get('/addCar', ctrl.cars.addCar);



module.exports = router;