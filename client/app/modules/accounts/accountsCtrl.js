(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:accountsCtrl
	* @description
	* # accountsCtrl
	* Controller of the app
	*/

  	angular
		.module('accounts')
		.controller('AccountsCtrl', Accounts);

		Accounts.$inject = [$http];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Accounts($http) {
			/*jshint validthis: true */
			var vm = this;
			//$http({method: '', url : '', data : {} });
			//vm.accounts = ["Wayfair","First Savings Bank","City-Bank","CapitalOne M/C","CapitalOne QuickSilver"];
			$http.get('/accounts').then((response) => {
				vm.accounts = response.data;
			});
		}

})();
