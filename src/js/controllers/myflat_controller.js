angular.module('Room8.controllers.Myflat', [
	'mobile-angular-ui.components.scrollable'
    ])

.controller('MyflatController', function($scope,$http, $rootScope, $location){
	console.log($rootScope.User);
    if($rootScope.User.id_utilisateur == 0){
        $location.path('/').replace();
    }else if($rootScope.User.id_colocation == 0){
        $location.path('/FindFlat').replace();
	}else{
        $http({
            method: 'GET',
            url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getMyFlat?id=' + $rootScope.User.id_colocation,
            headers: {'Accept': 'application/text'}
        }).success(function(data){
            $scope.myflatname = data;
        }).error(function(data, status, headers, config){
            alert('Can\'t get Flat Name');
        });

        $http({
            method: 'GET',
            url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getAllRoommates?id=' + $rootScope.User.id_colocation,
            headers: {'Accept': 'application/json'}
        }).success(function(data){
            $scope.Liste = data;
        }).error(function(data, status, headers, config){
            alert('Can\'t get Roommates');
        });

        $scope.add = function(mate) {
            $http({
                method:'POST',  
                url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/addMate?mail=' + mate.mail,
                headers: {'Accept': 'application/json'}
            }).success(function(data){
                alert('New mate added');
            }).error(function(data){
                alert('Can\'t add new mate');
            });
        }
    }

});
