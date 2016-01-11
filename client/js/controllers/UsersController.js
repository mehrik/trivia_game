myApp.controller('UsersController', function ($location, $cookies, UserFactory) {
    _this = this;
    _this.currentUser;

    this.login = function () {
        UserFactory.create(_this.username, function(output) {
            $cookies.putObject('currentUser', output);
            _this.currentUser = $cookies.getObject('currentUser');
            $location.path('/dashboard');
        });
    }

    this.logout = function () {
        $cookies.remove('currentUser');
        $location.path('/');
    }

    this.promptLogin = function () {
        $location.path('/');
        _this.username = prompt('Please enter a name to play a game!');
        if(!_this.username) {
            _this.promptLogin();
        } else {
            _this.login();
        }
    }
    
    if (!$cookies.getObject('currentUser')) {
        _this.promptLogin();
    } else {
        $location.path('/dashboard');
    }

});