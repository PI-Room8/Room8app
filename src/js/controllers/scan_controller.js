angular.module('Room8.controllers.Scan', [
	'mobile-angular-ui.components.scrollable',
	
    ])

.controller('ScanController', function($scope,$http, $rootScope, $location){

		$scope.myPictures = [];
		$scope.$watch('myPicture', function(value) {
   			if(value) {
     		myPictures.push(value);
   			}
		}, true);
	});




