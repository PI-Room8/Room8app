angular.module('Room8.controllers.Main', [
	'mobile-angular-ui.components.scrollable'
])

.controller('MainController', function($rootScope,$http, $location, $scope){
	$scope.logout=function(){
		if($rootScope.User.id_utilisateur!=0){
			$http({
				method:'GET',
				url:'http://room8env-vgps3jicwb.elasticbeanstalk.com/logout',
				headers: {'Accept': 'application/json'}
			}).success(function(){
					$rootScope.User.id_colocation='0';
					$rootScope.User.id_utilisateur='0';
					$location.path('/').replace();
			}).error(function(){
				console.log("error disconnection");
			});

		}else{
			$location.path('/').replace();
		}
	}
});
