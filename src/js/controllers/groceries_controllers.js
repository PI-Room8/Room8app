angular.module('Room8.controllers.Groceries', [
	'mobile-angular-ui.components.scrollable',
])

.controller('GroceriesController', function($scope,$http, $rootScope, $location){

	if($rootScope.User.id_utilisateur != 0){
		if($rootScope.User.id_colocation == 0){
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
                	url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/addProduct?id='+ $rootScope.User.id_colocation + '&product=' + product.name + '&username=' + $rootScope.User.nom_utilisateur,
                	headers: {'Accept': 'application/json'}
            	}).success(function(data){
                	if(data == 1){
                		alert('Product added');
                		$location.path('/Groceries').replace();
                	} else if(data == 0){
                		alert('Error: product not added');
                	} else{
                		alert('Error SQL');
                	}
            	}).error(function(data){
                	alert('Can\'t POST');
            	});
        	}

        	$scope.delete = function(){
        		$http({
        			method:'POST',
        			url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/deleteAllProducts?id='+ $rootScope.User.id_colocation,
                	headers: {'Accept': 'application/json'}
        		}).success(function(data){
                	if(data == 1){
                		alert('Products deleted');
                		$location.path('/Groceries').replace();
                	} else if(data == 0){
                		alert('Error: products not deleted');
                	} else{
                		alert('Error SQL');
                	}
            	}).error(function(data){
                	alert('Can\'t POST');
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