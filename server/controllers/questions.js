var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = (function () {
    return {
        index: function (req, res) {
            res.json('questions.index');
        },// end index
        create: function (req, res) {
            var newQuestion = Question(req.body);
            newQuestion.save(function (errors, question) {
                if (errors) {
                    res.json(errors);
                } else {
                    console.log('Succesfully created question', question);
                    res.json(question);
                }// end if
            });// end save
        }// end create
    }
})();