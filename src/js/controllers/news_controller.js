angular.module('Room8.controllers.News', [
	'mobile-angular-ui.components.scrollable'
])

.controller('NewsController', function($scope,$http, $rootScope, $location){
	if(! $rootScope.Connected){
		$location.path('/Registration').replace();
	}else{
	    $http({
	        method: 'GET',
	        url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getUserFlat?name=' + $rootScope.UserName ,    /* To Complete */
	        headers: {'Accept': 'application/json'}
	     }).success(function(data){
	         $rootScope.FlatId = data;
	
	        $http({
	            method: 'GET',
	            url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getAllNews?id=' + $rootScope.FlatId,
	            headers: {'Accept': 'application/json'}
	        }).success(function(data){
	            $scope.Liste = data;
	        }).error(function(data, status, headers, config){
	            alert('Can\'t get News');
	        });
	
	    }).error(function(data, status, headers, config){
	        alert('Can\'t get id_coloc');
	    });

	}
});
