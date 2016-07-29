(function () {
	'use strict';

	/**
	 * ES6 brings many enhancements to the already built-in javascript objects.
	 * This series of tests will show you these additions and how to use them.
	 */
	describe('ES2015 Built-in Objects Enhancements', function () {
		/**
		 * The `Set` object is new to ES6, a collection, and allows you to store unique values whether
		 * they be primitives or object references.
		 *
		 * @see [MDN Reference: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
		 */
		describe('Set', function () {
			/**
			 * Sets are instantiated with the `new` operator and upon instantiation, may accept an optional
			 * iterable as an argument.
			 * `null` copied to the set is treated as `undefined`.
			 */
			it('when instantiated, takes an optional param for an iterable that will be copied.', function () {
				let toCopyIterable = [1, 2, 3, 4, 5];
				let mySet = new Set(toCopyIterable);
				expect(mySet.size).toEqual(5);
			});
			it('will not copy duplicate values', function () {
				let toCopyIterable = [1, 2, 4, 4, 4];
				let mySet = new Set(toCopyIterable);
				expect(mySet.size).toEqual(3);
			});
			/**
		 	 * @see [MDN Reference: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add)
			 */
			describe('add() prototype method', function () {
				it('', function () {
					expect().toBe();
				});
			});
			/**
		 	 * @see [MDN Reference: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear)
			 */
			describe(' prototype method', function () {
				it('', function () {
					expect().toBe();
				});
			});
			/**
		 	 * @see [MDN Reference: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete)
			 */
			describe(' prototype method', function () {
				it('', function () {
					expect().toBe();
				});
			});
			/**
		 	 * @see [MDN Reference: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/entries)
			 */
			describe(' prototype method', function () {
				it('', function () {
					expect().toBe();
				});
			});
			/**
		 	 * @see [MDN Reference: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach)
			 */
			describe(' prototype method', function () {
				it('', function () {
					expect().toBe();
				});
			});
			/**
		 	 * @see [MDN Reference: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has)
			 */
			describe(' prototype method', function () {
				it('', function () {
					expect().toBe();
				});
			});
			/**
		 	 * @see [MDN Reference: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values)
			 */
			describe(' prototype method', function () {
				it('', function () {
					expect().toBe();
				});
			});
			/**
		 	 * @see [MDN Reference: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator)
			 */
			describe(' prototype method', function () {
				it('', function () {
					expect().toBe();
				});
			});
		});

		// describe('', function() {
		// 	it('', function() {
		// 		expect().toBe();
		// 	});
		// });
	});
})();
