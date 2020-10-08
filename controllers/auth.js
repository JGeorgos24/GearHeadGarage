// Import Drivers model
const Driver = require('../models').Driver;

// Import BCRYPT 
const bcrypt = require('bcryptjs');

// used for JWT
require('dotenv').config()
const jwt = require('jsonwebtoken');

// shows signup page
const renderSignup = (req, res) => {
            res.render('drivers/register.ejs', {
                msg: ''
            })
        }

// shows login page
const renderLogin = (req, res) => {
    res.render('drivers/login.ejs', {
        msg: ''
    })
}

const createUser = (req, res) => {
    if(!req.body.name || req.body.name === ''){
        res.render('drivers/register.ejs', {
            msg: 'A name is required'
        })
    } else if(!req.body.username || req.body.username === ''){
        res.render('drivers/register.ejs', {
            msg: 'A username is required'
        })
    } else if(!req.body.password || req.body.password === ''){
        res.render('drivers/register.ejs', {
            msg: 'A password is required'
        })
    } else

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
                .catch(err => {
                    if (err.name === 'SequelizeUniqueConstraintError'){
                        res.render('drivers/register.ejs',{
                            msg: 'Username is already taken.',
                            driver: req.body
                        })
                    } else {
                        res.send('An unknown error has occurred')
                    }
            })

        })
    })

}

const checkUser = (req, res) => {
    if(!req.body.username || req.body.username === ''){
        res.render('drivers/login.ejs', {
            msg: 'A username is required'
        })
    } else if(!req.body.password || req.body.password === ''){
        res.render('drivers/login.ejs', {
            msg: 'A password is required'
        })
    } else

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
                        res.render('drivers/login.ejs',{
                          msg: 'Incorrect username/password' 
                        })
                        
                    }
                });
            } else {
                res.render('drivers/login.ejs',{
                    msg: 'Incorrect username/password' 
                  })
            }

        })
}

module.exports = {

    renderSignup,
    renderLogin,
    createUser,
    checkUser,
}