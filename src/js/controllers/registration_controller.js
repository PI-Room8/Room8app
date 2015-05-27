angular.module('Room8.controllers.Registration', [
	'mobile-angular-ui.components.scrollable',
	//'validation.match'
	
])
 


.controller('RegistrationController', function($scope,$http, $location,$route, $rootScope){
	
	$scope.update = function(dataUser) {
		if(dataUser.password==dataUser.confirmPassword){	
			$rootScope.UserName = dataUser.nom;

			$http({
				method:'POST', 	
				url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/addUser?nom='+ dataUser.nom + '&mdp=' +dataUser.password + '&mail=' + dataUser.mail,
				headers: {'Accept': 'application/json'}
			}).success(function(data){
				alert(data);
				$location.path('/');
				$scope.$apply();
	
			}).error(function(data){
				alert(data);
			});
		}else{
			alert("Pleace confirm your password!"); 
			$route.reload();
		}
	}
	
	$scope.connect=function(User){

		$http({
			method:'POST',
			url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getPassword?nom='
	
	}
});
