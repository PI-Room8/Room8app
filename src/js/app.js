angular.module('Room8', [
  'ngRoute',
  'mobile-angular-ui',

  'Room8.controllers.Main',
  'Room8.controllers.News',
  'Room8.controllers.Registration',
  'Room8.controllers.Settings',
  'Room8.controllers.Findflat',
  'Room8.controllers.Flatcreation',
  'Room8.controllers.Myflat',
  'Room8.controllers.Groceries',
  'Room8.controllers.Money',
  'mobile-angular-ui.components.scrollable',
  'mobile-angular-ui.core.sharedState' 
])

.config(function($routeProvider,$httpProvider) {

	$httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
	$routeProvider.when('/', {templateUrl:'registration.html',  reloadOnSearch: false});
	$routeProvider.when('/MyFlat', {templateUrl:'myflat.html',  reloadOnSearch: false});
	$routeProvider.when('/Accounts', {templateUrl:'accounts.html',  reloadOnSearch: false});
	$routeProvider.when('/Chat', {templateUrl:'chat.html',  reloadOnSearch: false});
	$routeProvider.when('/Money', {templateUrl:'money.html',  reloadOnSearch: false});
	$routeProvider.when('/Newsfeed', {templateUrl:'newsfeed.html',  reloadOnSearch: false});
	$routeProvider.when('/Groceries', {templateUrl:'groceries.html',  reloadOnSearch: false});
	$routeProvider.when('/Settings', {templateUrl:'settings.html',  reloadOnSearch: false});
	$routeProvider.when('/FindFlat', {templateUrl:'findflat.html',  reloadOnSearch: false});
	$routeProvider.when('/Flatcreation', {templateUrl:'flatcreation.html',  reloadOnSearch: false});

})

.run(function($rootScope) {
    $rootScope.Connected= false;
    $rootScope.User = {}; //id_utilisateur, nom_utilisateur, mot_de_passe, adresse_mail, id_colocation
});

