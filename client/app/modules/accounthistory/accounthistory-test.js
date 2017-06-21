(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:accounthistoryTest
	 * @description
	 * # accounthistoryTest
	 * Test of the app
	 */

	describe('accounthistory test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('debtmonkey');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('AccounthistoryCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
