(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:paymentsService
	 * @description
	 * # paymentsService
	 * Service of the app
	 */

  	angular
		.module('payments')
		.factory('PaymentsService', Payments);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Payments.$inject = ['$http'];

		function Payments ($http) {

		}

})();
