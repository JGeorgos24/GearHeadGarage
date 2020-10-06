require('dotenv').config();

const Car = require('../models').Car;
const Driver = require('../models').Driver;


const index = (req, res) => {
        res.render('index.ejs', {
            loggedIn: false
        })  
}

const aboutUs = (req, res) => {
    res.render('aboutUs.ejs')
}

const addCar = (req, res) => {
    req.body.driverId = req.params.driverId

    res.render('addCar.ejs', {
        driverId: req.query.driverId
    })
    
}

const showRoom = (req, res) => {
    {
        Car.findAll({
            order: [
                ['make', 'ASC'],
                ['id', 'ASC']
            ]
        }) 
        .then(allCars => {
            res.render('showRoom.ejs', {
                cars: allCars 
            })  
        })  
        
    }
}

const createCar = (req, res) => {
    req.body.driverId = req.params.driverId
    Car.create(req.body)
    .then(newCar => {
        res.redirect('/cars/showroom');
    })
}


const seeMadeCar = (req, res) => {
    Car.findByPk(req.params.index , {
    //     include: [
    //         {
    //         model: Driver,
    //         attributes: ['name']
    //         }
    //     ],
        attributes: ['year', 'make', 'model', 'imageURL']        
    })
    .then(foundCar => {
        res.render('showMadeCar.ejs', {
        cars: foundCar
        });
    }) 
}

const deleteCar = (req,res) => {
    Car.destroy({
        where: {id: req.params.index}
    })
    .then(() => {
        res.redirect('/cars');  
    })   
}

module.exports = {
    index,
    aboutUs,
    addCar,
    showRoom,
    createCar,
    seeMadeCar,
    deleteCar
}