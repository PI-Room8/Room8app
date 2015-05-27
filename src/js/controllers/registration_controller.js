angular.module('Room8.controllers.Registration', [
	'mobile-angular-ui.components.scrollable',
	//'validation.match'
	
])
 


.controller('RegistrationController', function($scope,$http, $location,$route, $rootScope){
	
	$scope.create = function(dataUser) {
		if(dataUser.password==dataUser.confirmPassword){	
			$rootScope.UserName = dataUser.nom;

			$http({
				method:'POST', 	
				url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/addUser?nom='+ dataUser.nom + '&mdp=' +dataUser.password + '&mail=' + dataUser.mail,
				headers: {'Accept': 'application/json'}
			}).success(function(data){
				if(data==1){
            		alert('Your profile has been created');
            		window.location.reload();
					
					$location.path('/');
					$scope.$apply();
				}else if(data==2){
           			alert('This pseudo is already being used');
           			window.location.reload();
        		}else if(data==3){
            		alert('This mail address already has an account');
            		window.location.reload();
        		}else{
            		alert('Try Again, something is wrong');
            		window.location.reload();
        		}}).error(function(data){
					alert(data);
				});
		}else{
			alert("Please confirm your password!"); 
			$route.reload();
		}
	}
	
	$scope.connect=function(User){

		$http({
			method:'GET',
			url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getPassword?nom='+User.pseudo,
			headers:{'Accept':'application/text'}
		}).success(function(data){
			alert(data);
		}).error(function(data){
			alert(data);
		
		});
	
	}
});
