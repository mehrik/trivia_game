myApp.controller('GamesController', function ($location, $cookies, GameFactory, QuestionFactory) {
    _this = this;
    _this.currentUser = $cookies.getObject('currentUser');
    _this.questions = [];
    _this.newGame = {};

    this.getQuestions = function () {
        QuestionFactory.index(function (output) {
            // output are all created questions
            // need to randomly select 3
            // need to randomize answers in order
            _this.questions = output;
            console.log(output);
        });
    }

    this.submit = function () {
        if (!_this.answer1) {
            alert('Please answer question 1');
        } else if (!_this.answer2) {
            alert('Please answer question 2');
        } else if (!_this.answer3) {
            alert('Please answer question 3');
        } else {
            _this.newGame._user = _this.currentUser;
            _this.newGame.score = parseInt(_this.answer1) + parseInt(_this.answer2) + parseInt(_this.answer3);
            GameFactory.create(_this.newGame, function () {
                $location.path('/dashboard');
            });
        }
    }

    this.cancel = function () {
        $location.path('/dashboard');
    }

    this.getQuestions();
});