angular.module('Room8.controllers.Registration', [
	'mobile-angular-ui.components.scrollable',	
])

.controller('RegistrationController', function($scope,$http, $location,$route, $rootScope){

	var temp;

	$http({
		method:'GET',
		url:'http://room8env-vgps3jicwb.elasticbeanstalk.com/getSession',
		headers: {'Accept': 'application/json'}
	}).success(function(data){
		$rootScope.User=data;

		if($rootScope.User.id_utilisateur == 0){

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
								$rootScope.Connected=true;
								if ($rootScope.User.id_colocation == 0){
									$location.path('/FindFlat').replace();
								}
								else {
									$location.path('/Newsfeed').replace();
								}
	            			}).error(function(data2){
								alert('Can\'t get User');
							});
	
						}else if(data==2){
	           				alert('This pseudo is already being used');
	        			}else if(data==3){
	            			alert('This mail address already has an account');
	        			}else{
	            			alert('Try Again, something is wrong');
	        			}
	        		}).error(function(data, status,headers,config){
						alert(data, status,headers,config);
					});
				}else{
					alert("Please confirm your password!"); 
				}
			}

			$scope.connect=function(User){
				$http({
					method:'GET',
					url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/login?name='+ User.pseudo +'&password='+ User.password,
					headers:{'Accept':'application/json'}
				}).success(function(data){
					if(data==""){
						alert("Error : Your pseudo and your password don't match ");
					}else{
						/*Update du user global ici*/
						$rootScope.User=data;
						alert("Successful!");
						$rootScope.Connected=true;
						if ($rootScope.User.id_colocation == 0){
							$location.path('/FindFlat').replace();
						}
						else {
							$location.path('/Newsfeed').replace();
						}            	
					}	
				}).error(function(data, status,headers,config){
					alert(data, status,headers,config);
				});
	
			}

		}
		else{
			console.log('Je redirige');
			$location.path('/Newsfeed').replace();
		}
		
	}).error(function(data, status,headers,config){
		alert(data, status,headers,config);
	});

});

	