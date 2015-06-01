angular.module('Room8.controllers.Main', [
	'mobile-angular-ui.components.scrollable'
])

.controller('MainController', function($rootScope,$http, $location, $scope){
	$rootScope.session=function(){
		$http({
			method:'GET',
			url:'http://room8env-vgps3jicwb.elasticbeanstalk.com/getSession',
			headers: {'Accept': 'application/json'}
		}).success(function(data){
			if(data!=""){
				$rootScope.User=data;
				$rootScope.Connected=true;
			}else{
				$location.path('/Registration').replace();
			}
	
		}).error(function(data, status,headers,config){
			alert(data, status,headers,config);
		});
		
	
	}
	$scope.logout=function(){
		$http({
			method:'GET',
			url:'http://room8env-vgps3jicwb.elasticbeanstalk.com/logout',
			headers:{'Accept':'application/json'}
		}).success(function(){
			alert("Disconnected");
		}).error(function(){
			alert("Disconnection error")
		});
	}
});
