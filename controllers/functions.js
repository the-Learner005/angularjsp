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
}]).
controller('foreachExample',['$scope',function($scope){
	$scope.fruits = [{name:'Apple',season:'winter'},{name:'Mango',season:'summer'}];
	$scope.logs = [];
	angular.forEach($scope.fruits,function(value,key){

		this.push(value.name+" : "+value.season);
		console.log(value.name,"  ",key);
	},$scope.logs);

}]);



