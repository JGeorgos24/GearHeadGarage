require('dotenv').config();

const Car = require('../models').Car;
const Driver = require('../models').Driver;


const index = (req, res) => {
        res.render('index.ejs')  
}


// shows profile page of person. passes user and index
const profilePage = (req, res) => {
    Driver.findByPk(req.driver.id, {
        include: [
            {
                model: Car,
                attributes: ['make', 'model']
            }
        ]
    })
    .then(userProfile => {
        console.log(driverProfile);
        res.render('drivers/profile.ejs', {
            driver: driverProfile
        })
    })
}
// checks to see if user is in the system. If so, login to their page. If not,
// do nothing


const editProfile = (req, res) => {
    User.update(req.body, {
        where: { id: req.params.index },
        returning: true // MUST NEED TO SHOW CHANGE
    })
        .then(user => {
            res.redirect(`/drivers/profile`
            )
        })
}

const deleteProfile = (req, res) => {
    User.destroy({ where: { id: req.params.index } })
        .then(() => {
            res.redirect('/cars');
        })
}



module.exports = {
    index,
    profilePage,
    editProfile,
    deleteProfile
}
