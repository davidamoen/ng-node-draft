var draftApp = angular.module('draftApp', [
	'ngRoute',
	'draftControllers',
	'draftServices'
]);

draftApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/', {
				controller: 'loginController',
				templateUrl: 'partials/login.html',
			}).
			when('/draft', {
				controller: 'draftController',
				templateUrl: 'partials/main.html',
			}).			
			otherwise({
				redirectTo: '/'
			});
	}]);


