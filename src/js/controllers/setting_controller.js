angular.module('Room8.controllers.Settings', ['Room8.controllers.Main'])

.controller('SettingController', function($scope,$http,$location,$rootScope){
	$rootScope.session();
    if($rootScope.Connected == true){

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
    }

    $scope.refresh = function() {
        window.location.reload();
    }

});
