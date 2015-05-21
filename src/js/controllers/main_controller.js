angular.module('Room8.controllers.Main', [])

.controller('MainController', function($scope,$http){
	
	$http({
        method: 'GET',
        url: 'http://192.168.1.90:8080/app/getAllNews?id=1',
        //params: 'id=1',
        headers: {'Accept': 'application/json'}
     }).success(function(data){
         $scope.myScopeData = data;
    }).error(function(data, status, headers, config){
        alert(data, status, headers, config);
    });
  
});