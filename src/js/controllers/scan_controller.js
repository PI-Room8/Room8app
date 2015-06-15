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
		$location.path('/Scan').replace();


	

})


