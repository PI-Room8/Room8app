angular.module('Room8.controllers.Settings', [])

.controller('SettingController', function($scope,$http,$location,$rootScope){

    $scope.user = {
        name: $rootScope.UserName,
        password: $rootScope.PassWord,
        mail: $rootScope.Mail
    }

    if($rootScope.Connected==true){
        $scope.update = function(user) {
            $http({
                method: 'POST',
                url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/updateUser?id=' + $rootScope.UserId + '&nom=' + user.name  + '&mdp=' + user.password + '&mail=' + user.mail,
                headers: {'Accept': 'application/json'}
            }).success(function(data){
                if(data==1){
                    $rootScope.UserName = user.name;
                    $rootScope.PassWord = user.password;
                    $rootScope.Mail = user.mail;
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
    }else{$location.path('/Registration').replace();}

    $scope.refresh = function() {
        window.location.reload();
    }

});
