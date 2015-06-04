angular.module('Room8.controllers.Flatcreation', [
	'mobile-angular-ui.components.scrollable'
])

.controller('FlatcreationController', function($scope,$http, $location, $rootScope){
	
	if($rootScope.User.id_utilisateur != 0){

		$scope.create = function(dataFlat) {

			$http({
				method:'POST', 	
				url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/createFlat?name='+ dataFlat.nom + '&id=' + $rootScope.User.id_utilisateur,
				headers: {'Accept': 'application/json'}
			}).success(function(data){
				if(data==1){
        			alert('Your flat has been created');
        			$http({
        				method:'GET',
        				url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getUserFlat?name='+ $rootScope.User.nom_utilisateur,
        				headers: {'Accept': 'application/json'}
        			}).success(function(data2){
        				$rootScope.User.id_colocation = data2;
        				$location.path('/Newsfeed').replace;
        			}).error(function(data, status, headers, config){
        				alert(data);
        			});
				}else if(data==0){
           			alert('This name is already being used');
        		}else{
           			alert('Try Again, something went wrong');
       			}
        	}).error(function(data, status, headers, config){
   				alert(data);
			});
    	}	

	}else{
		$location.path('/').replace();
	}

});
