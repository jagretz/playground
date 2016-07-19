(function () {
	'use strict';

	/**
	 * Default function paramaters make javascript functions and methods easiers to read and understand
	 * without having to investigate the innards of a function to know if and/or when a default is set.
	 */
	describe('default function parameters', function () {

		it('can declare a default value', function () {
			expect(doStuff()).toBe('jason');
		});

		it('also works (ignores) with falsey values', function () {
			expect(doStuff(false)).toBe(false);
		});

		// i didn't feel like writing this test ;)
		// it('works with destructuring', function () {

		// });

		/**
		 * misc function to assist specs.
		 * @return {string} the value of the name param or the default value in function signature.
		 */
		function doStuff(name = 'jason') {
			return name;
		}
	});
})();
