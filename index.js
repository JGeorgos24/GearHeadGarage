require('dotenv').config();

const express = require('express');
const methodOverride = require('method-override');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const routes = require('./routes');

const app = express(); 

app.use(express.urlencoded({extended: true})); 
app.use(methodOverride('_method'));

app.use(express.static("public"));

app.use(cookieParser());

const verifyToken = (req, res, next) => {
    let token = req.cookies.jwt;
    console.log(`Token: ${token}`);

    jwt.verify(token, process.env.JWT_SECRET, (err,decodedDriver) => {
        if(err || !decodedDriver){
            return res.send('Error in JWT');
        }
        req.driver = decodedDriver;

        next();
    })
}

app.use('/auth', routes.auth);
app.use('/cars', routes.cars);
app.use('/drivers', verifyToken, routes.drivers);



app.get('/cars', (req, res) => {
    res.render('index.ejs');
})

app.get('/drivers', (req, res) => {
    res.render('drivers/index.ejs');
})

// listen is used to run your app on port 3002. 
app.listen(process.env.PORT, () => {
    console.log(`I am listening on port ${process.env.PORT}.`);
})