myApp.controller('DashboardController', function ($location, $cookies, UserFactory, GameFactory) {
    _this = this;
    _this.currentUser = $cookies.getObject('currentUser');
    _this.games = [];
    _this.afterGame = false;
    _this.lastGame = {};
    // redirect to login page if no one is logged in
    if (!_this.currentUser) {
        $location.path('/');
    }

    this.logout = function () {
        $cookies.remove('currentUser');
        $location.path('/');
    }

    this.gameTime = function () {
        $location.path('/lets_play');
    }

    this.showAllGames = function () {
        GameFactory.index(function (output) {
            _this.games = output;
        });
    }

    this.showLastGame = function () {
        GameFactory.lastGame(function (output) {
            if (output) {
                _this.lastGame.score = output.score;
                _this.lastGame.percentage = output.score/100;
                _this.afterGame = true;
            }
        });
    }

    console.log(_this.currentUser);
    this.showAllGames();
    this.showLastGame();
});