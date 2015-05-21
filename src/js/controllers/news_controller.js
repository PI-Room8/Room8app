angular.module('Room8.controllers.News', [])

.controller('NewsController', function($scope,$http){

    var id = 1;

	$http({
        method: 'GET',
        url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getAllNews?id=' + id,
        headers: {'Accept': 'application/json'}
     }).success(function(data){
         $scope.Liste = data;
    }).error(function(data, status, headers, config){
        alert(data, status, headers, config);
    });

    /*var id_coloc = 1;
    var news = 'Elle me trouvait le plus beau de saint jean';

    $http({
        method: 'POST',
        url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/addNews?news=' + news + '&id_coloc=' + id_coloc,
        headers: {'Accept': 'application/json'}
     }).success(function(data){
         alert('Well done');
    }).error(function(data, status, headers, config){
        alert(data, status, headers, config);
    });*/

  
});