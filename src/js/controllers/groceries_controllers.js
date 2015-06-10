angular.module('Room8.controllers.Groceries', [
	'mobile-angular-ui.components.scrollable',
	'mobile-angular-ui.gestures.swipe',
	'mobile-angular-ui.gestures.drag',
	
])

.controller('GroceriesController', function($scope,$http, $rootScope, $location, $drag, $element){
	
	$scope.showActions=false;
	$scope.cancel=function(){$scope.showActions=false};
	$scope.deleteOneProduct=function(product){
		$http({
			method: 'GET',
	        url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/deleteProduct?id=' + $rootScope.User.id_colocation +'&product='+ product.nom +'&username='+ $rootScope.User.nom_utilisateur,
	        headers: {'Accept': 'application/json'}
		}).success(function(data){
			if(data==1){
				alert(product.nom + " deleted");
				
			}else{
				console.log(product + "error");
			
			}
			$scope.getAllProducts();
		}).error(function(data, status, headers, config){
			alert('Can\'t delete Products');
		});
	
	};
	$scope.getAllProducts=function(){
		$http({
			method: 'GET',
	        url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getAllProducts?id=' + $rootScope.User.id_colocation,
	        headers: {'Accept': 'application/json'}
		}).success(function(data){
			$scope.Liste = data;
		}).error(function(data, status, headers, config){
			alert('Can\'t get Products');
		});
	}
	if($rootScope.User.id_utilisateur != 0){
		if($rootScope.User.id_colocation == 0){
			$location.path('/FindFlat').replace();
		}else{
			$scope.getAllProducts();

	        $scope.add = function(product) {
            	$http({
                	method:'POST',  
                	url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/addProduct?id='+ $rootScope.User.id_colocation + '&product=' + product.name + '&username=' + $rootScope.User.nom_utilisateur,
                	headers: {'Accept': 'application/json'}
            	}).success(function(data){
                	if(data == 1){
                		alert('Product added');
                		$scope.getAllProducts();
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
			
        	$scope.deleteProducts = function(){
        		$http({
        			method:'POST',
        			url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/deleteAllProducts?id='+ $rootScope.User.id_colocation+'&username='+$rootScope.User.nom_utilisateur,
                	headers: {'Accept': 'application/json'}
        		}).success(function(data){
                	if(data == 1){
                		alert('Products deleted');
                		$scope.getAllProducts();
                		$location.path('/Groceries').replace();
                	} else if(data == 0){
                		alert('Error: products not deleted');
                	} else{
                		alert('Error SQL');
                	}
            	}).error(function(data){
                	alert('Can\'t POST');
                	alert(data);
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
