// var draftApp = angular.module('draftApp', []);
var draftControllers = angular.module('draftControllers', []);

draftControllers.controller('mainController', ['$scope', '$http', 'data',
	function($scope, $http, data) {
		$scope.name = "Dave Moen";
		$scope.title = "The Draft App";

		$scope.qbs = data.quarterBacks();


		console.log($scope.qbs);
	}]
);
