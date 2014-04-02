// var draftApp = angular.module('draftApp', []);
var draftControllers = angular.module('draftControllers', []);

draftControllers.controller('loginController', ['$scope', '$http', 'data',
	function($scope, $http, data) {
	}]
);

draftControllers.controller('draftController', ['$scope', '$http', 'data',
	function($scope, $http, data) {
		$scope.name = "Dave Moen";
		$scope.title = "The Draft App";
		$scope.qbs = data.quarterBacks();
	}]
);


