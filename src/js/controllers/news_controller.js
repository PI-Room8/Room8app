angular.module('Room8.controllers.News', [
	'mobile-angular-ui.components.scrollable'
])

.controller('NewsController', function($scope,$http, $rootScope){

    var FlatId;
    console.log($rootScope.Username);

    $http({
        method: 'GET',
        url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getUserFlat?name=' + $rootScope.Username ,    /* To Complete */
        headers: {'Accept': 'application/json'}
     }).success(function(data){
         FlatId = data;
         alert(FlatId);

        $http({
            method: 'GET',
            url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getAllNews?id=' + FlatId,
            headers: {'Accept': 'application/json'}
        }).success(function(data){
            $scope.Liste = data;
        }).error(function(data, status, headers, config){
            alert('Can\'t get News');
        });

    }).error(function(data, status, headers, config){
        alert('Can\'t get id_coloc');
    });


	//scrollableContentController.scrollTo($scope.Liste);

    /*Test de POST de news fonctionnel
    var id_coloc = 1;
    var news = 'JB est indecent a FIFA';

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
