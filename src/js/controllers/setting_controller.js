angular.module('Room8.controllers.Settings', [
    'mobile-angular-ui.components.scrollable',
    'Room8.directives.ngConfirmBoxClick'
])

.controller('SettingController', function($scope,$http,$location,$rootScope){
    if($rootScope.User.id_utilisateur != '0'){

        $scope.User = $rootScope.User;
        //$scope.User.mot_de_passe="";
		$scope.User.oldpassword=$rootScope.User.mot_de_passe;
        $scope.update = function(User) {
			if($scope.User.mot_de_passe==$scope.User.oldpassword && $scope.User.confirmNewPassword==$scope.User.nouveau_mot_de_passe){
	            $http({
	                method: 'POST',
	                url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/updateUser?id=' + User.id_utilisateur + '&nom=' + User.nom_utilisateur  + '&mdp=' + User.nouveau_mot_de_passe + '&mail=' + User.adresse_mail,
	                headers: {'Accept': 'application/json'}
	            }).success(function(data){
	                if(data==1){
	                    $rootScope.User.nom_utilisateur = User.nom_utilisateur;
	                    $rootScope.User.mot_de_passe = User.nouveau_mot_de_passe;
	                    $rootScope.User.adresse_mail = User.adresse_mail;
	                    alert('Your profile has been updated');
	                }
	                else if(data==2){
	                    alert('This pseudo is already being used');
	                }
	                else if(data==3){
	                    alert('This mail address already has an account');
	                }
	                else{
	                    alert('Try Again, something is wrong');
	                }
	                //window.location.href="/#/" : POUR REDIRECTION
	            }).error(function(data, status, headers, config){
	                alert(data, status, headers, config);
	            });
			}else{
				alert("Error: You must insert your old password and confirm your new password");
				$location.path('/Settings').replace();
			}
        
		}

        
        $scope.leaveFlat=function(){
			 $http({
                method: 'GET',
                url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/leaveFlat?flatId='+$rootScope.User.id_colocation+'&userId='+$rootScope.User.id_utilisateur,
                headers: {'Accept': 'application/json'}
            }).success(function(data){
				$rootScope.User.id_colocation=0;
				$location.path('/FindFlat').replace();
			}).error(function(data, status,headers,config){
					console.log(data, status,headers,config);
			});
		
		}

		$scope.refresh = function() {
	        $location.path('/Settings').replace();
	    }
	} else{
		$location.path('/').replace();
	}

});

