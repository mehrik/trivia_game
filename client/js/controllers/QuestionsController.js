myApp.controller('QuestionsController', function ($location, $cookies, QuestionFactory) {
    _this = this;

    this.cancel = function () {
        _this.newQuestion = {};
        $location.path('/dashboard');
    }

    this.submit = function () {
        // create a new question
        // redirect back to /dashboard
        QuestionFactory.create(_this.newQuestion, function () {
            alert('Question successfully created!!');
            $location.path('/dashboard');
        });
    }
});