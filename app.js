const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');

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

app.use(bodyParser.json());

app.post('/api/games',(req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Games created successfully!'
    });
});

app.use('/api/games',(req, res, next) => {
  const games = [
      {
        _id : `odsuhvod`,
        title : `The last of us`,
        description : `Adventure game`,
        year : 2011,
        imageUrl : ``, 
      },
      {
          _id : `dsfdsbvu`,
          title : `Pokemon Blue`,
          description : `Gotta catch'em all`,
          year : 1999,
          imageUrl : ``,
      },
  ];
  res.status(200).json(games);
});

module.exports = app;