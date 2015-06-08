angular.module('Room8.controllers.Accounts', [
    'mobile-angular-ui.components.scrollable',
    'Room8.directives.ngConfirmBoxClick'
])

.controller('AccountsController', function($scope,$http,$location,$rootScope){

    if($rootScope.User.id_utilisateur != '0'){


	$http({
        method: 'GET',
        url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getAllRoommates?id=' + $rootScope.User.id_colocation,
        headers: {'Accept': 'application/json'}
    }).success(function(data){
        $scope.Liste = data;

	$http({
        method: 'POST',
        url: 'http://localhost:8080/app//addSpending?',
        data: $scope.Liste,
        headers: {'Accept': 'application/json'}
    }).success(function(data){
    	alert('OK');
    }).error(function(data, status, headers, config){
        alert('Can\'t post spending');
    });

    }).error(function(data, status, headers, config){
        alert('Can\'t get Roommates');
    });

	}

	else{
		$location.path('/').replace();

	}

});