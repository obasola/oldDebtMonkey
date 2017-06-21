(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:paymentsTest
	 * @description
	 * # paymentsTest
	 * Test of the app
	 */

	describe('payments test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('debtmonkey');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('PaymentsCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
