const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');
const Game = require('./models/game');

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
    const game = new Game({
        title: req.body.title,
        description: req.body.description,
        year : req.body.year,
        imageUrl: req.body.imageUrl,
    });
    game.save().then(
        ()=>{
            res.status(201).json({
                message: 'Game saved successfully !'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
});

app.get('/api/games',(req,res,next) => {
    Game.findOne({
        _id: req.params.id,
    }).then(
        (game) => {
            res.status(200).json(game);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
});

app.patch('/api/games/:id', (req, res, next) => {
    let gameData = {};  
    if(req.body.title) gameData.title=req.body.title;
    if(req.body.description) gameData.description=req.body.description;
    if(req.body.year) gameData.year=req.body.year;
    if(req.body.imageUrl) gameData.imageUrl=req.body.imageUrl;
    Game.findByIdAndUpdate({_id: req.params.id}, gameData, {new : true}).then(
       (newgame) => {
            res.status(200).json(newgame);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
});

app.delete('/api/games/:id', (req, res, next) =>{
    Game.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({
                message: 'Game deleted successfully !'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
});

module.exports = app;