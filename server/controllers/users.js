var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function () {
    return {
        create: function (req, res) {
            User.findOne(req.body, function (errors, existingUser) {
                if (errors) {
                    res.json(errors);
                } else if (existingUser) {
                    res.json(existingUser);
                } else {
                    // create a new user
                    var user = new User(req.body);
                    user.save(function (errors, newUser) {
                        if (errors) {
                            res.json(errors);
                        } else {
                            res.json(newUser);
                        }// end if
                    });// end save
                }// end if
            });// end find
        }// end create
    }
})();