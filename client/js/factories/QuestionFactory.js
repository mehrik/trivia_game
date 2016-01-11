myApp.factory('QuestionFactory', function ($http) {
    var factory = {};
    _QF = this;

    factory.create = function (newQuestion, callback) {
        $http.post('/question', newQuestion).success(function (output) {
            if (output.errors) {
                console.log('ERRORS', output.errors);
            } else {
                callback();
            }
        });
    }

    return factory;
});