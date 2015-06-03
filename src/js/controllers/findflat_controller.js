angular.module('Room8.controllers.Findflat', [
	'mobile-angular-ui.components.scrollable'
	])

.controller('FindflatController', function($scope,$http,$location,$rootScope){
	
	if($rootScope.User.id_utilisateur == 0){
 		$location.path('/').replace();
 	}else if($rootScope.User.id_colocation !=0){
 		$location.path('/Newsfeed').replace();
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
			}
		}

		$scope.create = function() {
        	$location.path('/Flatcreation').replace();
    	}

    	$scope.join = function(id_colocation) {
    		
    		$http({
                method:'POST',  
                url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/joinFlat?flatId=' + id_colocation + '&userId=' + $rootScope.User.id_utilisateur,
                headers: {'Accept': 'application/json'}
            }).success(function(data){
                alert('You join the flat !');
                $rootScope.User.id_colocation=id_colocation;
                $location.path('/Newsfeed').replace();
            }).error(function(data){
                alert('Can\'t join the flat');
            });
    	}
	}

});
