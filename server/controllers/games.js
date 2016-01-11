var mongoose = require('mongoose');
var Game = mongoose.model('Game');

module.exports = (function () {
    return {
        index: function (req, res) {
            Game
            .find({})
            .populate('_user')
            .exec(function (error, games) {
                if (error) {
                    res.json(error);
                } else {
                    res.json(games);
                }// end if
            });// end find
        },
        create: function (req, res) {
            var newGame = new Game(req.body);
            newGame.save(function (error, game) {
                if (error) {
                    res.json(error);
                } else {
                    res.json(game);
                }// end if
            });// end save
        }// end create
    }
})();