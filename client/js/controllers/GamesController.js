myApp.controller('GamesController', function ($location, $cookies, GameFactory, QuestionFactory) {
    _this = this;
    _this.currentUser = $cookies.getObject('currentUser');
    _this.questions = [];

    this.index = function () {

    }

    this.getQuestions = function () {
        QuestionFactory.index(function (output) {
            // output are all created questions
            // need to randomly select 3
            // need to randomize answers in order
            console.log(output);
        });
    }

    this.cancel = function () {
        $location.path('/dashboard');
    }

    this.getQuestions();
});