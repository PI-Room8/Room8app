angular.module('Room8.controllers.Registration', [])

.controller('RegistrationController', function($scope,$http){
	
	$scope.test={
		nom:'lol',
		mail:'ahah@jj.com',
		password:'ddd'
	};

	$scope.update = function(dataUser) {
		console.log();
		$http({
			method:'POST',
			url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/creerUtilisateur?nom='+ dataUser.nom  + '&mdp=' + dataUser.password + '&mail=' + dataUser.mail,
			headers: {'Accept': 'application/json'}
		})/*.success(function(data){
			alert(data);
		}).error(function(data){
			alert(data);
		});*/
	};

/*
	$scope.yolo={
		nom: 'yolo',
		mail: 'yolo@yo.lo',
		mdp: 'yolo'
	};

	$http({
        method: 'POST',
        url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/addNews?text=nom='+ yolo.nom + '&mail=' + yolo.mail + '&mdp=' + yolo.mdp,
		headers: {'Accept': 'application/json'}
     }).success(function(){
         alert('Well done');
    }).error(function(){
        alert('No');
    });
*/
});
