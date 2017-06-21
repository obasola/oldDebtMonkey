'use strict';

/**
 * @ngdoc function
 * @name app.route:accounthistoryRoute
 * @description
 * # accounthistoryRoute
 * Route of the app
 */

angular.module('accounthistory')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.accounthistory', {
				url:'/accounthistory',
				templateUrl: 'app/modules/accounthistory/accounthistory.html',
				controller: 'AccounthistoryCtrl',
				controllerAs: 'vm'
			});

		
	}]);
