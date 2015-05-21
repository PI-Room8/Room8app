angular.module('Room8.controllers.Registration', [])

.controller('registration_controller', function($scope,$http){
	
	$scope.User={};
	$scope.test={
		nom:'lol',
		mail:'ahah@jj.com',
		password:'ddd'
	};
	$scope.update = function(dataUser) {
		$scope.User = angular.copy(dataUser);
		$http({
			method:'POST',
			url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/creerUtilisateur?nom='+ User.nom  + '&mdp=' +User.password + '&mail=' + User.mail,
			headers: {'Accept': 'application/json'}
		}).success(function(data){
			alert('Well done');
		}).error(function(data, status, headers, config){
			alert(data, status, headers, config);
		});
	};
	
});
