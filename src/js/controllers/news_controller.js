angular.module('Room8.controllers.News', [
	'mobile-angular-ui.components.scrollable',
	'Room8.controllers.Main'
])

.controller('NewsController', function($scope,$http, $rootScope, $location){
	

	$rootScope.session();
	if($rootScope.User.Connected){
			if($rootScope.User.id_colocation==0){
				$location.path('/FindFlat').replace();
			}else{
				$http({
		            method: 'GET',
		            url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getAllNews?id=' + $rootScope.User.id_colocation,
		            headers: {'Accept': 'application/json'}
		        }).success(function(data2){
		            $scope.Liste = data2;
		        }).error(function(data2, status, headers, config){
		            alert('Can\'t get News');
		        });
			}
		
		
	}
});
