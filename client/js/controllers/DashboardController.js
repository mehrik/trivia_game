myApp.controller('DashboardController', function ($location, $cookies, UserFactory) {
    _this = this;
    _this.currentUser = $cookies.getObject('currentUser');
    // redirect to login page if no one is logged in
    if (!_this.currentUser) {
        $location.path('/');
    }

    this.logout = function () {
        $cookies.remove('currentUser');
        $location.path('/');
    }
    
    console.log(_this.currentUser);
});