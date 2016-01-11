myApp.factory('UserFactory', function ($http) {
    var factory = {};
    _UF = this;

    factory.create = function(username, callback) {
        $http.post('/user', {name: username}).success(function (output) {
            if (output.errors) {
                console.log('ERRORS:', output.errors);
            } else {
                callback(output);
            }
        });
    }

    return factory;
});