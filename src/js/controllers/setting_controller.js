angular.module('Room8.controllers.Settings', [
    'mobile-angular-ui.components.scrollable'
])

.controller('SettingController', function($scope,$http,$location,$rootScope){
    if($rootScope.User.id_utilisateur != 0){

        $scope.User = $rootScope.User;

        $scope.update = function(User) {
            $http({
                method: 'POST',
                url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/updateUser?id=' + User.id_utilisateur + '&nom=' + User.nom_utilisateur  + '&mdp=' + User.mot_de_passe + '&mail=' + User.adresse_mail,
                headers: {'Accept': 'application/json'}
            }).success(function(data){
                if(data==1){
                    $rootScope.User.nom_utilisateur = User.nom_utilisateur;
                    $rootScope.User.mot_de_passe = User.mot_de_passe;
                    $rootScope.User.adresse_mail = User.adresse_mail;
                    alert('Your profile has been updated');
                    window.location.reload();
                }
                else if(data==2){
                    alert('This pseudo is already being used');
                    window.location.reload();
                }
                else if(data==3){
                    alert('This mail address already has an account');
                    window.location.reload();
                }
                else{
                    alert('Try Again, something is wrong');
                    window.location.reload();
                }
                //window.location.href="/#/" : POUR REDIRECTION
            }).error(function(data, status, headers, config){
                alert(data, status, headers, config);
            });
        }
        
        $scope.leaveFlat=function(){
			 $http({
                method: 'GET',
                url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/leaveFlat?flatId='+$rootScope.User.id_colocation+'&userId='+$rootScope.User.id_utilisateur,
                headers: {'Accept': 'application/json'}
            }).success(function(data){
				$rootScope.User.id_colocation=0;
				/*$http({
					method:'GET',
					url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getUser?name=' + $rootScope.User.nom_utilisateur,
					headers: {'Accept': 'application/json'}
				}).success(function(data2){	
					$rootScope.User=data2;
				
				}).error(function(data2, status,headers,config){
					console.log(data, status,headers,config);
				});*/
			}).error(function(data, status,headers,config){
					console.log(data, status,headers,config);
			});
		
		}


    }else{
        $location.path('/').replace();
    }

    $scope.refresh = function() {
        $location.path('/Settings').replace();
    }

});
