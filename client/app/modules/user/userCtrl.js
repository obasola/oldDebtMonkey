(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:userCtrl
	* @description
	* # userCtrl
	* Controller of the app
	*/

  	angular
		.module('user')
		.controller('UserCtrl', User);

		User.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function User() {
			/*jshint validthis: true */
			var vm = this;

		}

})();
