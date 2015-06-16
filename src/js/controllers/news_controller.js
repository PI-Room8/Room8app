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

	$scope.getAllAttentes=function(){
		$http({
			method: 'GET',
	        url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getAllWaitings?id=' + $rootScope.User.id_utilisateur,
	        headers: {'Accept': 'application/json'}
        }).success(function(data){
            $scope.Liste2 = data;
        }).error(function(data, status, headers, config){
            alert('Can\'t get debts');
        });
		
	}

	$scope.ackDebt = function(debt){
		$http({
			method: 'POST',
	        url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/updateWaiting?nameGet=' + debt.nomRecoit + '&nameGive=' + debt.nomDoit + '&amount=0',
	        headers: {'Accept': 'application/json'}
        }).success(function(data){
            alert('success');
            $scope.getAllAttentes();
        }).error(function(data, status, headers, config){
            alert('Can\'t post acknowledgement');
        });

	}


	if($rootScope.User.id_utilisateur != '0'){
		if($rootScope.User.id_colocation=='0'){
			$location.path('/FindFlat').replace();
		}else{
        	$scope.getAllNews();
        	$scope.getAllAttentes();
		}
	}
    else{
        $location.path('/').replace();
    }
});
