angular.module('Room8.controllers.ToDo', [
	'mobile-angular-ui.components.scrollable',
])

.controller('ToDoController', function($scope,$http, $rootScope, $location){
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

});




