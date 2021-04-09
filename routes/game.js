const express = require('express');
const router = express.Router();
const Game = require('../models/game');
const gameCtrl = require('../controllers/game');

router.post('/', gameCtrl.createGame);
router.get('/:id', gameCtrl.getOneGame);
router.patch('/:id', gameCtrl.modifyOneGame);
router.delete('/:id', gameCtrl.deletOneGame);
router.get('/', gameCtrl.getAllGames);

 
module.exports =  router;

