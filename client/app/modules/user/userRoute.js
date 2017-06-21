'use strict';

/**
 * @ngdoc function
 * @name app.route:userRoute
 * @description
 * # userRoute
 * Route of the app
 */

angular.module('user')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.user', {
				url:'/user',
				templateUrl: 'app/modules/user/user.html',
				controller: 'UserCtrl',
				controllerAs: 'vm'
			});

		
	}]);
