const Game = require('../models/game');

exports.createGame = (req, res, next) => {
    const game = new Game({
        title: req.body.title,
        description: req.body.description,
        year: req.body.year,
        imageUrl: req.body.imageUrl
    });
    game.save().then(
        () => {
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
};

exports.getOneGame = (req,res,next) => {
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
};

exports.modifyOneGame = (req, res, next) => {
    console.log(req);
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
};

exports.deleteOneGame = (req, res, next) =>{
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
};

exports.getAllGames = (req, res, next) =>{
    Game.find().then(
        (games) => {
            res.status(200).json(games);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};