angular.module('Room8.controllers.News', [
	'mobile-angular-ui.components.scrollable'
])

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
	//scrollableContentController.scrollTo($scope.Liste);
    /* Test de POST fonctionnel
    var id_coloc = 1;
    var news = 'Yolo';

    $http({
        method: 'POST',
        url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/addNews?text=' + news + '&id_coloc=' + id_coloc,
        headers: {'Accept': 'application/json'}
     }).success(function(data){
         alert('Well done');
    }).error(function(data, status, headers, config){
        alert(data, status, headers, config);
    });*/
  
});
