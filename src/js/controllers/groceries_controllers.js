angular.module('Room8.controllers.Groceries', [
	'mobile-angular-ui.components.scrollable',
])

.controller('GroceriesController', function($scope,$http, $rootScope, $location){

	if($rootScope.User.id_utilisateur != '0'){
		if($rootScope.User.id_colocation=='0'){
			$location.path('/FindFlat').replace();
		}else{
        	$http({
                method: 'GET',
		        url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getAllProducts?id=' + $rootScope.User.id_colocation,
		        headers: {'Accept': 'application/json'}
	        }).success(function(data){
	            $scope.Liste = data;
	        }).error(function(data, status, headers, config){
	            alert('Can\'t get Products');
	        });

	        $scope.add = function(product) {
            	$http({
                	method:'POST',  
                	url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/addProduct?id='+ $rootScope.User.id_colocation + '&product=' + product.name,
                	headers: {'Accept': 'application/json'}
            	}).success(function(data){
                	alert('New mate added');
            	}).error(function(data){
                	alert('Can\'t add new mate');
            	});
        	}
		}
	}
    else{
        $location.path('/').replace();
    }

});

//Générer PDF

//Swipe