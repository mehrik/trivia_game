var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    name: {type: String, minlength: 2, required: true}
});

var User = mongoose.model('User', UserSchema);