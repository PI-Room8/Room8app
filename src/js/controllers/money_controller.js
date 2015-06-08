angular.module('Room8.controllers.Money', [
	'mobile-angular-ui.components.scrollable'
    ])

.controller('MoneyController', function($scope,$http, $rootScope, $location){

	$http({
                	method:'GET',  
                	url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getAllsoldes?id=' + $rootScope.User.id_collocation,
                	headers: {'Accept': 'application/json'}
            	}).success(function(data){
                	$scope.Solde = data;
            	}).error(function(data){
                	alert('Can\'t retrieve data');
            	});
	

});
