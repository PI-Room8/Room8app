angular.module('Room8.controllers.News', [
	'mobile-angular-ui.components.scrollable',
])

.controller('NewsController', function($scope,$http, $rootScope, $location){
	$scope.getAllNews=function(){
		$http({
			method: 'GET',
	        url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getAllNews?id=' + $rootScope.User.id_colocation,
	        headers: {'Accept': 'application/json'}
        }).success(function(data2){
            $scope.Liste = data2;
        }).error(function(data2, status, headers, config){
            alert('Can\'t get News');
        });
		
	}
	if($rootScope.User.id_utilisateur != '0'){
		if($rootScope.User.id_colocation=='0'){
			$location.path('/FindFlat').replace();
		}else{
        	$scope.getAllNews();
		}
	}
    else{
        $location.path('/').replace();
    }
});
