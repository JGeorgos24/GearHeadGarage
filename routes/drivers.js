const express = require('express');
const router= express.Router();
const ctrl = require('../controllers');


router.get('/profile', ctrl.drivers.profilePage)
router.put('/profile/:index', ctrl.drivers.editProfile)
router.delete('/:index', ctrl.drivers.deleteProfile)
router.get('/personalGarage', ctrl.drivers.personalGarage)




module.exports = router;