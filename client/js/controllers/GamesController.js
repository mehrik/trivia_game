myApp.controller('GamesController', function ($location, $cookies) {
    _this = this;
    _this.currentUser = $cookies.getObject('currentUser');
});