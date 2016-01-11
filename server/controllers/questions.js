var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = (function () {
    return {
        index: function (req, res) {
            res.json('questions.index');
        },
        create: function (req, res) {
            res.json('questions.create')
        }
    }
})();