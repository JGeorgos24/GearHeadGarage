require('dotenv').config();

const Car = require('../models').Car;
const Driver = require('../models').Driver;


const index = (req, res) => {
        res.render('index.ejs')  
}

const addCar = (req, res) => {
    res.render('addCar.ejs')
}



module.exports = {
    index,
    addCar
}