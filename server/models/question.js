var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var random = require('mongoose-simple-random');

var QuestionSchema = new mongoose.Schema({
    content: {type: String, minlength: 15, required: true},
    correctAnswer: {type: String, minlength: 2, required: true},
    fakeAnswer1: {type: String, minlength: 2, required: true},
    fakeAnswer2: {type: String, minlength: 2, required: true}
});
QuestionSchema.plugin(random);
var Question = mongoose.model('Question', QuestionSchema);
