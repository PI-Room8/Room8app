angular.module('Room8.controllers.Registration', [])

.controller('RegistrationController', function($scope,$http){

	$scope.update = function(dataUser) {
		$http({
			method:'POST',
			url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/addUser?nom='+ dataUser.nom  + '&mdp=' +dataUser.password + '&mail=' + dataUser.mail,
			headers: {'Accept': 'application/text'}
		}).success(function(data){
			alert(data);
		}).error(function(data){
			alert(data);
		$location.path('/');
		});
	}
});
