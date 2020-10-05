const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/cars', ctrl.cars.index);

router.get('/aboutUs', ctrl.cars.aboutUs);

router.get('/addCar', ctrl.cars.addCar);

router.get('/showRoom', ctrl.cars.showRoom);

router.post('/cars', ctrl.cars.createCar);

router.get('/:index', ctrl.cars.seeMadeCar);

router.delete('/:index', ctrl.cars.deleteCar);

module.exports = router;