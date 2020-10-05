// Import Drivers model
const Driver = require('../models').Driver;

// Import BCRYPT 
const bcrypt = require('bcryptjs');

// used for JWT
require('dotenv').config()
const jwt = require('jsonwebtoken');

// shows signup page
const renderSignup = (req, res) => {
    Driver.findByPk(req.params.index)
        .then(driver => {
            res.render('drivers/register.ejs', {
                driver: driver
            });
        })
}
// shows login page
const renderLogin = (req, res) => {
    res.render('drivers/login.ejs');
}

const createUser = (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return res.send('err');
        }
        bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
            if (err) {
                return res.send('err');
            }
            req.body.password = hashedPwd;

            Driver.create(req.body)
                .then(newDriver => {
                    // Assinging payload to token
                    const token = jwt.sign(
                        {
                            id: newDriver.id,
                            username: newDriver.username
                        },
                        // Secret key to encode token
                        process.env.JWT_SECRET,
                        // option to at time
                        {
                            expiresIn: '30 days'
                        }
                    );
                    res.cookie('jwt', token);
                    //once added to cookie, direct user to profile page
                    res.redirect(`/drivers/profile`);
                
                })

        })
    })
}

const checkUser = (req, res) => {
    Driver.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(foundDriver => {
            if (foundDriver) {
                bcrypt.compare(req.body.password, foundDriver.password, (err, match) => {
                    if (match) {
                        const token = jwt.sign(
                            {
                                username: foundDriver.username,
                                id: foundDriver.id
                            },
                            process.env.JWT_SECRET,
                            {
                                expiresIn: "30 days"
                            },
                        );
                        res.cookie('jwt', token)
                        res.redirect(`/drivers/profile`);
                    } else {
                        res.send('incorrect password/username')
                    }
                });
            } else {
                res.send('incorrect password/username')
            }

        })
        // .catch(err => {
        //     console.log(err)
        // })
}
// const checkUser = (req, res) => {
//     if(!req.body.username || req.body.username === ''){
//         res.render('drivers/login.ejs', {
//             msg: 'A username is required',
//             driver: req.body
//         })
//     }
//     if(!req.body.password || req.body.password === ''){
//         res.render('drivers/login.ejs', {
//             msg: 'A password is required',
//             driver: req.body
//         })
//     }
//     Driver.findOne({
//         where: {
//             username: req.body.username,
//             password: req.body.password
//         }
//     })
//     .then(foundDriver => {
//         if(!foundDriver){
//             res.render('drivers/login.ejs',{
//                 msg: 'Incorrect username/password',
//                 driver: req.body
//             })
//         }
//         res.redirect(`/drivers/profile/${foundDriver.id}`);
//     })
// }


module.exports = {

    renderSignup,
    renderLogin,
    createUser,
    checkUser,
}