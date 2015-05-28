angular.module('Room8.controllers.Registration', [
	'mobile-angular-ui.components.scrollable',
	//'validation.match'
	
])

.controller('RegistrationController', function($scope,$http, $location,$route, $rootScope){
	

	$scope.create = function(dataUser) {
		if(dataUser.password==dataUser.confirmPassword){

			$http({
				method:'POST', 	
				url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/addUser?nom='+ dataUser.nom + '&mdp=' +dataUser.password + '&mail=' + dataUser.mail,
				headers: {'Accept': 'application/json'}
			}).success(function(data){
				if(data==1){
            		alert('Your profile has been created');

            		$http({
            			method:'GET',
            			url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getUser?name=' + dataUser.nom ,
            			headers: {'Accept': 'application/json'}
            		}).success(function(data2){	
            			$rootScope.User=data2;
            			console.log($rootScope.User);
						$rootScope.Connected=true;
						if ($rootScope.User.id_colocation == 0){
							$location.path('/FindFlat').replace();
						}
						else {
							$location.path('/').replace();
						}
						$scope.$apply();
            		}).error(function(data2){
						alert('Can\'t get User');
					});

				}else if(data==2){
           			alert('This pseudo is already being used');
           			window.location.reload();
        		}else if(data==3){
            		alert('This mail address already has an account');
            		window.location.reload();
        		}else{
            		alert('Try Again, something is wrong');
            		window.location.reload();
        		}
        	}).error(function(data, status,headers,config){
				alert(data, status,headers,config);
			});
		}else{
			alert("Please confirm your password!"); 
			window.location.reload();
		}
	}
	
	$scope.connect=function(User){

		$http({
			method:'GET',
			url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getPassword?nom='+ User.pseudo,
			headers:{'Accept':'application/text'}
		}).success(function(data){
			if(data==""){
				alert("Error : Your pseudo and your password don't match");
			}
			else if(data==User.password){
				/*Update du user global ici*/
				$http({
            		method:'GET',
            		url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getUser?name=' + User.pseudo ,
            		headers: {'Accept': 'application/json'}
            	}).success(function(data2){	
            		$rootScope.User=data2;
            		console.log($rootScope.User);
					alert("Successful!");
					$rootScope.Connected=true;
					if ($rootScope.User.id_colocation == 0){
						$location.path('/FindFlat').replace();
					}
					else {
						console.log($rootScope.User.id_colocation);
						$location.path('/').replace();
					}
					$scope.$apply();
            	}).error(function(data2){
					alert('Can\'t get User');
				});	
			}
			else{
				alert("Error : Your pseudo and your password don't match");
			}	
		}).error(function(data, status,headers,config){
			alert(data, status,headers,config);
		
		});
		
	$scope.connected=$rootScope.connected;
	
	}
});
