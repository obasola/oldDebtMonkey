'use strict';

/**
 * @ngdoc function
 * @name app.route:paymenyhistoryRoute
 * @description
 * # paymenyhistoryRoute
 * Route of the app
 */

angular.module('paymenyhistory')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.paymenyhistory', {
				url:'/paymenyhistory',
				templateUrl: 'app/modules/paymenyhistory/paymenyhistory.html',
				controller: 'PaymenyhistoryCtrl',
				controllerAs: 'vm'
			});

		
	}]);
