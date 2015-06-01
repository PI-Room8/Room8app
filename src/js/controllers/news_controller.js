angular.module('Room8.controllers.News', [
	'mobile-angular-ui.components.scrollable'
])

.controller('NewsController', function($scope,$http, $rootScope, $location){
	

	$http({
		method:'GET',
		url:'http://room8env-vgps3jicwb.elasticbeanstalk.com/getSession',
		headers: {'Accept': 'application/json'}
	}).Success(function(data){
		if(data!=""){
			$rootScope.User=data;
			$rootScope.Connected=true;
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
		}else{
			$location.path('/Registration').replace();
			
		}
	}).error(function(data,statut,headers,config){
		alert(data);
	});
});
