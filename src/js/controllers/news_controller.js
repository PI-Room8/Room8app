angular.module('Room8.controllers.News', [])

.controller('NewsController', function($scope,$http){

	$http({
        method: 'GET',
        url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getAllNews?id=1',
        //params: {'id=1'},
        headers: {'Accept': 'application/json'}
     }).success(function(data){
         $scope.Liste = data;
    }).error(function(data, status, headers, config){
        alert(data, status, headers, config);
    });
  
});