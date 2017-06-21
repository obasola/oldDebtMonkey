(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:paymenyhistoryService
	 * @description
	 * # paymenyhistoryService
	 * Service of the app
	 */

  	angular
		.module('paymenyhistory')
		.factory('PaymenyhistoryService', Paymenyhistory);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Paymenyhistory.$inject = ['$http'];

		function Paymenyhistory ($http) {

		}

})();
