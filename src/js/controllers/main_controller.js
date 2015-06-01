angular.module('Room8.controllers.Main', [
	'mobile-angular-ui.components.scrollable'
])

.controller('MainController', function($rootScope,$http, $location){
	$rootScope.session=function(){
		$http({
			method:'GET',
			url:'http://room8env-vgps3jicwb.elasticbeanstalk.com/getSession',
			headers: {'Accept': 'application/json'}
		}).Success(function(data){
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
});
