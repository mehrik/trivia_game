var mongoose = require('mongoose');
var Game = mongoose.model('Game');

module.exports = (function () {
    return {
        index: function (req, res) {
            console.log(req.body);
            res.json('games.index');
        },
        create: function (req, res) {
            res.json('games.create')
        }
    }
})();