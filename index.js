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


app.use('/auth', routes.auth);
app.use('/cars', routes.cars);
app.use('/drivers', routes.drivers);



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