angular.module('Room8.controllers.Settings', [])

.controller('SettingController', function($scope,$http,$location,$rootScope){

	/*$http({
        method: 'GET',
        url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getProfile?id=' + $rootScope.UserId,
        headers: {'Accept': 'application/json'}
     }).success(function(data){
        console.log(data);
         $scope.user = data;
    }).error(function(data, status, headers, config){
        alert(data, status, headers, config);
    });*/

    $scope.update = function(user) {
        $http({
            method: 'POST',
            url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/updateUser?id=' + $rootScope.UserId + '&nom=' + $rootScope.UserName  + '&mdp=' + $rootScope.PassWord + '&mail=' + $rootScope.Mail,
            headers: {'Accept': 'application/json'}
        }).success(function(data){
            if(data==1){
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

    $scope.refresh = function() {
        window.location.reload();
    }

});
