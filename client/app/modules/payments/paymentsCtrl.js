(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:paymentsCtrl
	* @description
	* # paymentsCtrl
	* Controller of the app
	*/

  	angular
		.module('payments')
		.controller('PaymentsCtrl', Payments);

		Payments.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Payments() {
			/*jshint validthis: true */
			var vm = this;

		}

})();
