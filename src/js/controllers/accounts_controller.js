angular.module('Room8.controllers.Accounts', [
    'mobile-angular-ui.components.scrollable'
])

.controller('AccountsController', function($scope,$http,$location,$rootScope){

    if($rootScope.User.id_utilisateur != '0'){

        $http({
            method: 'GET',
            url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getSold?id=' + $rootScope.User.id_utilisateur,
            headers: {'Accept': 'application/json'}
        }).success(function(data){
            $scope.sold = data;
        }).error(function(data, status, headers, config){
            alert('Can\'t get Sold');
        });

        $http({
            method: 'GET',
            url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getAllTransfers?id=' + $rootScope.User.id_utilisateur,
            headers: {'Accept': 'application/json'}
        }).success(function(data){
            $scope.Liste = data;
        }).error(function(data, status, headers, config){
            alert('Can\'t get transfers');
        });

        $scope.isVisible = false;
        $scope.customStyle = {};
 		
 		$scope.toggle = function() {
            $scope.isVisible =! $scope.isVisible;
        }
        
		$scope.payer = function(transfer){
			if (transfer.nomRecoit == $rootScope.User.nom_utilisateur){
				return transfer.nomDoit;
			}
			else{
				return transfer.nomRecoit;
			}
		}

		$scope.color = function (transfer){
			if (transfer.nomRecoit == $rootScope.User.nom_utilisateur){
				return {"color":"green"};
			}
			else{
				return {"color":"red"};
			}
		}

		$scope.text = function (transfer){
			if (transfer.nomRecoit == $rootScope.User.nom_utilisateur){
				return "I've been paid";
			}
			else{
				return "I paid";
			}			
		}

    	$scope.newSpending = function() {
        	$location.path('/Spending').replace();
    	}

    	$scope.deleteTransfer = function(transfer) {
    		$http({
    			method: 'POST',
    			url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/deleteTransfer?idGet=' + transfer.idRecoit + '&idGive=' + transfer.idDoit + '&amount=' + transfer.amount,
    			headers: {'Accept': 'application/json'}
    		}).success(function(data){
    			if (data == 1){
    				alert('You announced a transfer');
    				$location.path('/Accounts').replace();
    			}
    			else if (data == 2){
    				alert('Error: your sold has not been updated');
    				$location.path('/Accounts').replace();
    			}
    			else if (data ==3){
    				alert('Error: transfer not announced');
    				$location.path('/Accounts').replace();
    			} 
    			else{
    				alert('Error');
    			}

    		}).error(function(data, status, headers, config){
    			alert('Can\'t post transfer');
    		});
        	
    	}

	}
	else{
		$location.path('/').replace();
	}

        /*$http({
            method: 'GET',
            url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getAllRoomates?id=' + $rootScope.User.id_colocation,
            headers: {'Accept': 'application/json'}
        }).success(function(data){
            $scope.Liste2 = data;
        }).error(function(data, status, headers, config){
            alert('Can\'t get transfers');
        });*/


        // I toggle the value of isVisible.

});