const express = require('express');
const router= express.Router();
const ctrl = require('../controllers');

// router.get('/signup', ctrl.auth.renderSignup)
// router.post('/signup', ctrl.auth.createUser)
router.get('/login', ctrl.auth.renderLogin)
router.post('/login', ctrl.auth.checkUser)
router.get('/addCar', ctrl.cars.addCar);


module.exports = router;