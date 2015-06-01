angular.module('Room8.controllers.Myflat', [
	'mobile-angular-ui.components.scrollable'
])

.controller('MyflatController', function($scope,$http, $rootScope, $location){
	
    if(! $rootScope.Connected){
		$location.path('/Registration').replace();
    }else if($rootScope.User.id_colocation == 0){
        $location.path('/FindFlat').replace();
	}else{
        $http({
            method: 'GET',
            url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getAllRoommates?id=' + $rootScope.User.id_colocation, /* TO COMPLETE */
            headers: {'Accept': 'application/json'}
        }).success(function(data){
            $scope.Liste = data;
        }).error(function(data, status, headers, config){
            alert('Can\'t get Roommates');
        });

        $scope.add = function(mate) {
            
        }
    }

});
