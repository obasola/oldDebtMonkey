(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:accounthistoryCtrl
	* @description
	* # accounthistoryCtrl
	* Controller of the app
	*/

  	angular
		.module('accounthistory')
		.controller('AccounthistoryCtrl', Accounthistory);

		Accounthistory.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Accounthistory() {
			/*jshint validthis: true */
			var vm = this;

		}

})();
