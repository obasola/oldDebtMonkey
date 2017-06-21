(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:accounthistoryService
	 * @description
	 * # accounthistoryService
	 * Service of the app
	 */

  	angular
		.module('accounthistory')
		.factory('AccounthistoryService', Accounthistory);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Accounthistory.$inject = ['$http'];

		function Accounthistory ($http) {

		}

})();
