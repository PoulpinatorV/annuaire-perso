const express = require('express');
const router = express.Router();
const gameCtrl = require('../controllers/game');

router.post('/', gameCtrl.createGame);
router.get('/:id', gameCtrl.getOneGame);
router.patch('/:id', gameCtrl.modifyOneGame);
router.delete('/:id', gameCtrl.deleteOneGame);
router.get('/', gameCtrl.getAllGames);

 
module.exports =  router;

