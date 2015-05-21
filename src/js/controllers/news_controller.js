angular.module('Room8.controllers.News', [])

.controller('NewsController', function($scope,$http){

    var id =1;

	$http({
        method: 'GET',
        url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getAllNews?id=' + id,
        headers: {'Accept': 'application/json'}
     }).success(function(data){
         $scope.myScopeData = data;
    }).error(function(data, status, headers, config){
        alert(data, status, headers, config);
    });
  
});