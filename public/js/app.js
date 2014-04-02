var draftApp = angular.module('draftApp', [
	'ngRoute',
	'draftControllers',
	'draftServices'
]);

draftApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/', {
				controller: 'mainController',
				templateUrl: 'partials/main.html',
			}).
			otherwise({
				redirectTo: '/'
			});
	}]);


