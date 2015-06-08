angular.module('Room8.controllers.Accounts', [
    'mobile-angular-ui.components.scrollable',
    'Room8.directives.ngConfirmBoxClick'
])

.controller('AccountsController', function($scope,$http,$location,$rootScope){

    if($rootScope.User.id_utilisateur != '0'){

		$scope.isVisible = false;
        $scope.customStyle = {};

        // I toggle the value of isVisible.
        $scope.toggle = function() {
            $scope.isVisible = ! $scope.isVisible;
        };
        
		$scope.color = function (amount){

			if(amount>=0){
				return {"color":"green"};
			}
			else{
				return {"color":"red"};
			}
    			
		}

		$scope.text = function (amount){

			if(amount>=0){
				return "He paid";
			}
			else{
				return "I paid";
			}
    			
		}

    	$scope.newSpending = function() {
        	$location.path('/Spending').replace();
    	}

	}
	else{
		$location.path('/').replace();
	}

});