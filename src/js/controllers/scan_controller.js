angular.module('Room8.controllers.Scan', [
	'mobile-angular-ui.components.scrollable',
	'Room8.directives.Scan'
    ])

.controller('ScanController', function($scope,$http, $rootScope, $location){

		
		
		$scope.myPictures = [];
		$scope.$watch('myPicture', function(value) {
   			if(value) {
     		myPictures.push(value);
   			}
		}, true);


	

})

/*.factory('Camera', ['$q', function($q) {

  return {
    getPicture: function(options) {
      var q = $q.defer();

      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    }
  }
}]);*/
