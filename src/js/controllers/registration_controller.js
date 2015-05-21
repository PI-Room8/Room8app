angular.module('Room8.controllers.Registration', [])

.controller('registration_controller', function($scope,$http){
	
	$scope.User={};
	$scope.update = function(dataUser) {
		$scope.User = angular.copy(dataUser);
		/*$http({
			method:'POST',
			url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/creerUtilisateur?nom='+ User.name + '&mail=' + User.mail + '&mdp=' +User.password,
			headers: {'Accept': 'application/json'}
		});*/
	};
	
});
