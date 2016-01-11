var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
    content: {type: String, minlength: 15, required: true},
    correctAnswer: {type: String, minlength: 2, required: true},
    fakeAnswer1: {type: String, minlength: 2, required: true},
    fakeAnswer2: {type: String, minlength: 2, required: true}
});

var Question = mongoose.model('Question', QuestionSchema);