var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = (function () {
    return {
        index: function (req, res) {
            Question.findRandom({}, {}, {limit: 3}, function (errors, questions) {
                if (errors) {
                    res.json(errors);
                } else {
                    res.json(questions);
                }// end if
            })// end find
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