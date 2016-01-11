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

    factory.index = function (callback) {
        $http.get('/question').success(function (output) {
            if (output.errors) {
                console.log('ERRORS', output.errors);
            } else {
                callback(output);
            }
        });
    }

    return factory;
});