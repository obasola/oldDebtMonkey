(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('debtmonkey')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
					{
						link: 'accounts',
							name: 'Accounts'
					},
			    
					{
						link: 'accounthistory',
							name: 'Accounthistory'
					},
			    
					{
						link: 'user',
							name: 'User'
					},
			    
					{
						link: 'payments',
							name: 'Payments'
					},
			    
					{
						link: 'paymenyhistory',
							name: 'Paymenyhistory'
					},
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();
