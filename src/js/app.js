angular.module('Room8', [
  'ngRoute',
  'mobile-angular-ui',
  'Room8.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'newsfeed.html',  reloadOnSearch: false});
});
