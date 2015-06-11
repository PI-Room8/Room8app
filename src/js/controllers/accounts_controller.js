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
            url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getAllRoommates?id=' + $rootScope.User.id_colocation,
            headers: {'Accept': 'application/json'}
        }).success(function(data){
            $scope.Mate = data;
        }).error(function(data, status, headers, config){
            alert('Can\'t get Roommates');
        });


        $scope.isVisible = false;
        $scope.customStyle = {};
        $scope.transf = {
        	"idDoit": $rootScope.User.id_utilisateur,
        	"idRecoit":"0",
        	"amount":"0"
        };


        $scope.getAll = function() {
        	$http({
         	   	method: 'GET',
            	url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getAllTransfers?id=' + $rootScope.User.id_utilisateur,
        	    headers: {'Accept': 'application/json'}
      	  	}).success(function(data){
      	      	$scope.Liste = data;
      	      	$scope.isVisible =! $scope.isVisible;
       	 	}).error(function(data, status, headers, config){
            	alert('Can\'t get transfers');
        	});
    	}
        
		$scope.payer = function(nameget,namegive){
			if (nameget== $rootScope.User.nom_utilisateur){
				return namegive;
			}
			else{
				return nameget;
			}
		}

		$scope.color = function (name){
			if (name == $rootScope.User.nom_utilisateur){
				return {"color":"green"};
			}
			else{
				return {"color":"red"};
			}
		}

		$scope.colorSolde = function (solde){
			if (solde >= 0){
				return {"color":"green"};
			}
			else{
				return {"color":"red"};
			}
		}

		$scope.text = function (name){
			if (name == $rootScope.User.nom_utilisateur){
				return "I've been paid";
			}
			else{
				return "I paid";
			}			
		}

    	$scope.newSpending = function() {
		$scope.getAll();
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

});
