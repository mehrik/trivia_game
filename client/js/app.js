var myApp = angular.module('myApp', ['ngRoute', 'ngCookies']);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/partials/login.html',
        controller: 'UsersController as UC'
    })
    .when('/dashboard', {
        templateUrl: 'views/partials/dashboard.html',
        controller: 'DashboardController as DC'
    })
    .when('/new_question', {
        templateUrl: 'views/partials/new_question.html',
        controller: 'QuestionsController as QC'
    })
    .when('/lets_play', {
        templateUrl: 'views/partials/lets_play.html',
        controller: 'GamesController as GC'
    })
});