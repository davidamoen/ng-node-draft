var draftServices = angular.module('draftServices', ['ngResource']);
draftServices.factory('data', ['$resource', 
	function($resource) {
	    return $resource('data/nfl_qbs.json', {}, {
	      quarterBacks: {method:'GET', params:{phoneId:'phones'}, isArray:true}
	    });		
	}
])