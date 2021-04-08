const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    title : { type: String, required: true},
    description : { type : String, required: true},
    year : { type : Number, required: true},
    imageUrl : { type : String },
});

module.exports = mongoose.model('Game', gameSchema);