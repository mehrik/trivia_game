var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new mongoose.Schema({
    _user: {type: Schema.ObjectId, ref: 'User', required: true},
    score: {type: Number, min: 0, max: 3, required: true}
});

var Game = mongoose.model('Game', GameSchema);