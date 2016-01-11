var bodyParser = require('body-parser');
var user = require('../controllers/users.js');
var game = require('../controllers/games.js');
var question = require('../controllers/questions.js');

module.exports = function(app) {
    app.use(bodyParser.json());
    // User methods
    app.post('/user', user.create);
    // Game methods
    app.get('/game', game.index);
    app.post('/game', game.create);
    // Question methods
    app.get('/question', question.index);
    app.post('/question', question.create)
}