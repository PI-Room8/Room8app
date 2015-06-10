angular.module('Room8.controllers.Spending', [
    'mobile-angular-ui.components.scrollable',
    'Room8.directives.ChecklistModel'
])

.controller('SpendingController', function($scope,$http,$location,$rootScope){

    if($rootScope.User.id_utilisateur != '0'){
        $http({
            method: 'GET',
            url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getAllRoommates?id=' + $rootScope.User.id_colocation,
            headers: {'Accept': 'application/json'}
        }).success(function(data){
            $scope.Liste = data;
            $scope.mate = [];
            $scope.user = $rootScope.User.id_utilisateur;

            $scope.newTransfer = function(mate,amount) {
                $http({
                    method: 'POST',
                    //url: 'http://192.168.1.90:8080/app/addSpending?id=' + $rootScope.User.id_utilisateur + '&amount=' + amount,                    
                    url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/addSpending?id=' + $rootScope.User.id_utilisateur + '&amount=' + amount,
                    data: $scope.mate,
                    headers: {'Accept': 'application/json'}
                }).success(function(data){
                    alert('You announced a spending');
                    $location.path('/Accounts').replace();
                }).error(function(data, status, headers, config){
                    alert('Can\'t post transfer');
                });
            }
        
        }).error(function(data, status, headers, config){
            alert('Can\'t get roomates');
        });
    }
	else{
		$location.path('/').replace();

	}

});