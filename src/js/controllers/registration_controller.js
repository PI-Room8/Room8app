angular.module('Room8.controllers.Registration', [])

.controller('RegistrationController', function($scope,$http){
	

	$scope.User={};

	$scope.update = function(dataUser) {
		$http({
			method:'POST',
			url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/creerUtilisateur?nom='+ dataUser.nom  + '&mdp=' +dataUser.password + '&mail=' + dataUser.mail,
			headers: {'Accept': 'application/json'}
		}).success(function(){
			alert('Well done');
		})/*.error(function(data, status, headers, config){
			alert(data, status, headers, config);
		});*/

	};

});
