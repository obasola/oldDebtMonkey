(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:userService
	 * @description
	 * # userService
	 * Service of the app
	 */

  	angular
		.module('user')
		.factory('UserService', User);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		User.$inject = ['$http'];

		function User ($http) {

		}

})();
