'use strict';

/**
 * @ngdoc function
 * @name app.route:paymentsRoute
 * @description
 * # paymentsRoute
 * Route of the app
 */

angular.module('payments')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.payments', {
				url:'/payments',
				templateUrl: 'app/modules/payments/payments.html',
				controller: 'PaymentsCtrl',
				controllerAs: 'vm'
			});

		
	}]);
