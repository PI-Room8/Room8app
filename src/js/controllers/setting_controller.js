angular.module('Room8.controllers.Settings', [])

.controller('SettingController', function($scope,$http,$location){

    var id = 1;

	$http({
        method: 'GET',
        url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getProfile?id=' + id,
        headers: {'Accept': 'application/json'}
     }).success(function(data){
        console.log(data);
         $scope.user = data;
    }).error(function(data, status, headers, config){
        alert(data, status, headers, config);
    });

    $scope.update = function(user) {
    $http({
        method: 'POST',
        url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/updateUser?id=' + id + '&nom=' + user.nom_utilisateur + '&mdp=' + user.mot_de_passe + '&mail=' + user.adresse_mail,
        headers: {'Accept': 'application/text'}
     }).success(function(data){
        if(data=='ok'){
            alert('Your profile has been updated');
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

    $scope.refresh = function() {
    window.location.reload();
    }

});
