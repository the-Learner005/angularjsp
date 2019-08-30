angular.module('functions',[]).
controller('copyExample',['$scope',function($scope){
	$scope.leader = {};
	$scope.reset = function(){
		$scope.user = angular.copy($scope.leader);

	};
	$scope.update = function(user){
		angular.copy(user,$scope.leader);
	};
	$scope.reset();
}]);