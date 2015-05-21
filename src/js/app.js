angular.module('Room8', [
  'ngRoute',
  'mobile-angular-ui',
  'Room8.controllers.Main',
  'Room8.controllers.News',
  'Room8.controllers.Registration'
])

.config(function($routeProvider) {

  $routeProvider.when('/', {templateUrl:'newsfeed.html',  reloadOnSearch: false});
  $routeProvider.when('/MyFlat', {templateUrl:'myflat.html',  reloadOnSearch: false});
  $routeProvider.when('/Accounts', {templateUrl:'accounts.html',  reloadOnSearch: false});
  $routeProvider.when('/Chat', {templateUrl:'chat.html',  reloadOnSearch: false});
  $routeProvider.when('/ToDo', {templateUrl:'todo.html',  reloadOnSearch: false});
  $routeProvider.when('/Registration', {templateUrl:'registration.html',  reloadOnSearch: false});
  $routeProvider.when('/Groceries', {templateUrl:'groceries.html',  reloadOnSearch: false});
  $routeProvider.when('/Settings', {templateUrl:'settings.html',  reloadOnSearch: false});
});

