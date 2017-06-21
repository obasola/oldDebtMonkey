(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:paymenyhistoryTest
	 * @description
	 * # paymenyhistoryTest
	 * Test of the app
	 */

	describe('paymenyhistory test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('debtmonkey');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('PaymenyhistoryCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
