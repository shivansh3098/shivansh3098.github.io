var app=angular.module('qwe',['ngStorage']);

app.controller('cv',function($scope,$localStorage,$sessionStorage){
		$scope.$storage=$sessionStorage;
	
	$scope.Calendar=true;
	if(!$scope.$storage.Details.startmonth2){
		$scope.Calendar=false;
	}
	$scope.print=function(){
	window.print();
		return false;
	};
});

