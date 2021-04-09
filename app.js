const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');
const Game = require('./models/game');
const gameRoutes = require('./routes/game');

mongoose.connect('mongodb+srv://poulpi:coucou@cluster0.j10yt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => {
        console.log('Successfully connected to the db !');
    })
    .catch((error) => {
        console.log('Unable to connect ton the db');
        console.error(error);
    });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/game', gameRoutes);

module.exports = app;