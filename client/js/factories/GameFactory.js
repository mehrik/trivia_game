myApp.factory('GameFactory', function ($http) {
    var factory = {};
    _GF = this;
    _GF.lastGame;

    factory.create = function(newGame, callback) {
        $http.post('/game', newGame).success(function (output) {
            if (output.errors) {
                console.log('ERRORS:', output.errors);
            } else {
                _GF.lastGame = output;
                callback();
            }
        });
    }

    factory.index = function(callback) {
        $http.get('/game').success(function (output) {
            if (output.errors) {
                console.log('ERRORS:', output.errors);
            } else {
                callback(output);
            }
        })
    }

    factory.lastGame = function (callback) {
        callback(_GF.lastGame);
    }
    return factory;
});