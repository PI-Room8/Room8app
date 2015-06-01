angular.module('Room8.controllers.Findflat', [])

.controller('FindflatController', function($scope,$http,$location,$rootScope){

	if(! $rootScope.Connected){
 		$location.path('/Registration').replace();

	}else{
		$scope.search = function(flat) {
			if(flat.nom!=''){	
				$http({
					method:'GET', 	
					url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getFlatName?name='+ flat.nom ,
					headers: {'Accept': 'application/json'}
				}).success(function(data){
					$scope.Liste = data;
					console.log($scope.Liste);
        		}).error(function(data){
					alert(data);
				});

			}else{
				alert("Please enter a name flat"); 
				window.location.reload();
			}
		}

		$scope.create = function() {
        	window.location.href="/#/Flatcreation";
    	}

    	$scope.join = function(colocation) {
    		alert(colocation.nom);
    	}
	}

});