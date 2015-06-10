angular.module('Room8', [
  'ngRoute',
  'mobile-angular-ui.gestures',
  'mobile-angular-ui',

  'Room8.controllers.Main',
  'Room8.controllers.News',
  'Room8.controllers.Registration',
  'Room8.controllers.Settings',
  'Room8.controllers.Findflat',
  'Room8.controllers.Flatcreation',
  'Room8.controllers.Myflat',
  'Room8.controllers.Groceries',
  'Room8.controllers.Scan',
  'Room8.controllers.ToDo',
  'Room8.controllers.Accounts',
  'Room8.controllers.Spending',
  'mobile-angular-ui.components.scrollable',
  'mobile-angular-ui.core.sharedState',
   
])

.config(function($routeProvider,$httpProvider) {

	$httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
	$routeProvider.when('/', {templateUrl:'registration.html',  reloadOnSearch: false});
	$routeProvider.when('/MyFlat', {templateUrl:'myflat.html',  reloadOnSearch: false});
	$routeProvider.when('/Accounts', {templateUrl:'accounts.html',  reloadOnSearch: false});
  $routeProvider.when('/Spending', {templateUrl:'spending.html',  reloadOnSearch: false});
	$routeProvider.when('/Chat', {templateUrl:'chat.html',  reloadOnSearch: false});
  $routeProvider.when('/ToDo', {templateUrl:'todo.html',  reloadOnSearch: false});
  $routeProvider.when('/Scan', {templateUrl:'scan.html',  reloadOnSearch: false});
	$routeProvider.when('/Newsfeed', {templateUrl:'newsfeed.html',  reloadOnSearch: false});
	$routeProvider.when('/Groceries', {templateUrl:'groceries.html',  reloadOnSearch: false});
	$routeProvider.when('/Settings', {templateUrl:'settings.html',  reloadOnSearch: false});
	$routeProvider.when('/FindFlat', {templateUrl:'findflat.html',  reloadOnSearch: false});
	$routeProvider.when('/Flatcreation', {templateUrl:'flatcreation.html',  reloadOnSearch: false});

})
.directive('dragToDismiss', function($drag, $parse, $timeout){
  return {
    restrict: 'A',
    compile: function(elem, attrs) {
      var dismissFn = $parse(attrs.dragToDismiss);
      return function(scope, elem, attrs){
        var dismiss = false;

        $drag.bind(elem, {
          constraint: {
            minX: 0, 
            minY: 0, 
            maxY: 0 
          },
          move: function(c) {
            if( c.left >= c.width / 4) {
              dismiss = true;
              elem.addClass('dismiss');
            } else {
              dismiss = false;
              elem.removeClass('dismiss');
            }
          },
          cancel: function(){
            elem.removeClass('dismiss');
          },
          end: function(c, undo, reset) {
            if (dismiss) {
              elem.addClass('dismitted');
              $timeout(function() { 
                scope.$apply(function() {
                  dismissFn(scope);  
                });
              }, 400);
            } else {
              reset();
            }
          }
        });
      };
    }
  };
})
.run(function($rootScope) {
    $rootScope.Connected= false;
    $rootScope.User = {}; //id_utilisateur, nom_utilisateur, mot_de_passe, adresse_mail, id_colocation
});

