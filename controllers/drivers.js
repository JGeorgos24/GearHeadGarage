require('dotenv').config();

const Car = require('../models').Car;
const Driver = require('../models').Driver;


// shows profile page of person. passes user and index
const profilePage = (req, res) => {
    Driver.findByPk(req.driver.id, {
        include: [
            {
                model: Car,
                attributes: ['make', 'model', 'year']
            }
        ]
    })
    .then(driverProfile => {
        res.render('drivers/profile.ejs', {
            driver: driverProfile
        })
    })
}
// checks to see if user is in the system. If so, login to their page. If not,
// do nothing


const editProfile = (req, res) => {
    // empty boxes show a string rather than zero. boxes need ineters to update.
    // Setting " " to a zero.
    if (req.body.age === ""){
        req.body.age = 0
    }
    if (req.body.drivingExperience === "") {
        req.body.drivingExperience = 0
    }

    Driver.update(req.body, {
        where: { id: req.driver.id },
        returning: true // MUST NEED TO SHOW CHANGE
    })
        .then(driver => {
            res.redirect('/drivers/profile');
        })
}

const deleteProfile = (req, res) => {
    Driver.destroy({ where: { id: req.params.index } })
        .then(() => {
            res.redirect('/cars');
        })
}

const personalGarage = (req, res) => {
    Driver.findByPk(req.driver.id, {
        include: [
            {
                model: Car,
                attributes: ['make', 'model', 'year']
            }
        ]
    })
    .then(driversGarage => {
        res.render('drivers/personalGarage.ejs', {
            driver: driversGarage
        })
    })
}

module.exports = {
    profilePage,
    editProfile,
    deleteProfile,
    personalGarage
}
