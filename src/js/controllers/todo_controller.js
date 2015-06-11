angular.module('Room8.controllers.ToDo', [
	'mobile-angular-ui.components.scrollable',
])

.controller('ToDoController', function($scope,$http, $rootScope, $location){
	$scope.isVisible = false;
    $scope.customStyle = {};

	if($rootScope.User.id_utilisateur != '0'){
		if($rootScope.User.id_colocation=='0'){
			$location.path('/FindFlat').replace();
		}else{
        	$http({
                method: 'GET',
                url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getTasks?id=' + $rootScope.User.id_colocation,
		        headers: {'Accept': 'application/json'}
	        }).success(function(data){
	            $scope.Tasks = data;
	        }).error(function(data, status, headers, config){
	            alert('Can\'t get the wainting tasks');
	        });

	        $http({
                method: 'GET',
                url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/getListe?id=' + $rootScope.User.id_colocation,
		        headers: {'Accept': 'application/json'}
	        }).success(function(data2){
	            $scope.Liste = data2;
	        }).error(function(data, status, headers, config){
	            alert('Can\'t get your usual tasks');
	        });
		}
	}
    else{
        $location.path('/').replace();
    }


		$scope.addTask = function(thechosen) {
            $http({
                method: 'POST',
                url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/addTask?idColoc=' + $rootScope.User.id_colocation + '&username=' + $rootScope.User.nom_utilisateur + '&idTache=' + thechosen.idTache,
                headers: {'Accept': 'application/json'}
            }).success(function(data3){
                if(data3==1){
                    alert('Your task has been asked well !');
                    $location.path('/ToDo').replace();
                }
                else{
                    alert('Can\'t post your task');
                }
               
            }).error(function(data3, status, headers, config){
                alert(data3, status, headers, config);
            });
        }

        $scope.newTask = function(newTask) {
            $http({
                method: 'POST',
                url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/newTask?idColoc=' + $rootScope.User.id_colocation + '&username=' + $rootScope.User.nom_utilisateur + '&text=' + newTask,
                headers: {'Accept': 'application/json'}
            }).success(function(data3){
                if(data3==1){
                    alert('Your task has been asked well !');
                    $location.path('/ToDo').replace();
                }
                else{
                    alert('Can\'t post your task');
                }
               
            }).error(function(data3, status, headers, config){
                alert(data3, status, headers, config);
            });
        }



        $scope.deleteTask = function(done) {
            $http({
                method: 'POST',
                url: 'http://room8env-vgps3jicwb.elasticbeanstalk.com/deleteTask?idColoc=' + $rootScope.User.id_colocation + '&username=' + $rootScope.User.nom_utilisateur + '&idTache=' + done.idTache,
                headers: {'Accept': 'application/json'}
            }).success(function(data4){
                if(data4==1){
                    alert('Task has been deleted');
                    $location.path('/ToDo').replace();
                }
                else{
                    alert('Can\'t delete your task');
                }
               
            }).error(function(data4, status, headers, config){
                alert(data4, status, headers, config);
            });
        }

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


