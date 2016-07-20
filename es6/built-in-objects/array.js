(function () {
	'use strict';

	/**
	 * ES6 brings many enhancements to the already built-in javascript objects.
	 * This series of tests will show you these additions and how to use them.
	 */
	describe('ES2015 Built-in Objects Enhancements', function () {

		/**
		 * The `Array` object
		 * These tests apply to both the `Array` object, `new Array()`, and the `array` object literal, `[]`.
		 *
		 * @see [MDN Reference: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
		 * @see [ECMA 262 Array Objects](https://tc39.github.io/ecma262/#sec-indexed-collections)
		 */
		describe('The Array object', function () {

			/**
			 * @see [find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
			 */
			describe('find() method', function () {
				it('`find()` returns the first matching element using a callback', function () {
					let match = [1, 2, 3, 4, 5].find(elem => elem > 3);
					expect(match).toBe(4);
				});
				it('`find()` returns the `undefined` when no matching element is found', function () {
					let match = [1, 2, 3, 4, 5].find(elem => elem > 10);
					expect(match).toBeUndefined();
				});
			});

			/**
			 * @see [findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
			 */
			describe('findIndex() method', function () {
				it('`findIndex()` returns the first index matching the condition supplied in the callback', function () {
					let match = [1, 2, 3, 4, 5].findIndex(elem => elem > 3);
					expect(match).toBe(3);
				});

				it('`findIndex()` returns `-1` when no match is found', function () {
					let match = [1, 2, 3, 4, 5].findIndex(elem => elem > 10);
					expect(match).toBe(-1);
				});
			});

			/**
			 * @see [fill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
			 */
			describe('fill() method', function () {
				it('`fill()` returns the modified array with all indices, from start (inclusive) to end (exclusive), filled with a static value', function () {
					let fill = [1, 2, 3, 4, 5].fill(2, 0, 5);
					expect(fill).toEqual([2, 2, 2, 2, 2]);
				});
				it('`fill()` fills all values given only a single argument', function () {
					let fill = [1, 2, 3, 4, 5].fill(4);
					expect(fill).toEqual([4, 4, 4, 4, 4]);
				});
				it('`fill()` fills all values with a starting index provided with 2 argument', function () {
					let fill = [1, 2, 3, 4, 5].fill(4, 2);
					expect(fill).toEqual([1, 2, 4, 4, 4]);
				});
				it('`fill()` cannot fill an empty array', function () {
					let fill = [].fill(2, 0, 5);
					expect(fill).toEqual([]);
				});

				it('`fill()` can fill any object with a `length` property creating an object dictionary', function () {
					let fill = [].fill.call({ length: 3, isDictionary: true, name: 'jason' }, 4);
					expect(fill).toEqual({ 0: 4, 1: 4, 2: 4, length: 3, isDictionary: true, name: 'jason' });
				});
			});

			/**
			 * Shallow copies portions of the array to another location within the same array without any
			 * modification to its size.
			 * <p> syntax:
			 * <code>
			 * arr.copyWithin(target[, start[, end]])
			 * </code>
			 * Where `target` equals the number of elements to copy
			 * `start` (optional) zero-based starting index. Defaults to the beggining of the array.
			 * `end` (optional) zero-based end index (exclusive -- up to, but not including. Defaults to the end of the array.
			 *
			 * @see [copyWithin](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)
			 */
			describe('copyWithin() method', function () {
				it('copies the first portion of the array with a starting index', function () {
					let copy = [1, 2, 3, 4, 5].copyWithin(2);
					expect(copy).toEqual([1, 2, 1, 2, 3]);
				});
				it('copies the first portion of the array using a negative index to start from the end of the array counting backwards', function () {
					let copy = [1, 2, 3, 4, 5].copyWithin(-2);
					expect(copy).toEqual([1, 2, 3, 1, 2]);
				});
				it('copies x starting from a', function () {
					let copy = [1, 2, 3, 4, 5].copyWithin(2, 1);
					expect(copy).toEqual([1, 2, 2, 3, 4]);
				});
				it('copies x starting from a and not going beyond element b', function () {
					let copy = [1, 2, 3, 4, 5].copyWithin(2, 1, 4);
					expect(copy).toEqual([1, 2, 2, 3, 4]);
				});
			});

			/**
			 * (MDN) The Array.of() method creates a new Array instance with a variable number of arguments,
			 * regardless of number or type of the arguments.
			 * <p>
			 * The difference between Array.of() and the Array constructor is in the handling of integer
			 * arguments: Array.of(42) creates an array with a single element, 42, whereas Array(42) creates
			 * an array with 42 elements, each of which is undefined.
			 *
			 * @see [of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of)
			 */
			describe('of() method', function () {
				it('creates a new instance containing a variable number of arguments', function () {
					expect(Array.of(999).length).toBe(1);
					expect(Array.of(1, 2, 3, 4, 5).length).toBe(5);
				});
			});

			/**
			 * (MDN) The Array.from() method creates a new Array instance from an array-like or iterable object.
			 * <p>
			 * In ES6, class syntax allows for the subclassing of both built-in and user defined classes;
			 * as a result, class-side static methods such as Array.from are "inherited" by subclasses of
			 * Array and create new instances of the subclass, not Array.
			 *
			 * @see [from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
			 */
			describe('from() method', function () {
				it('produces a new array instance by converting an array-like or iterable object', function () {
					expect(Array.from('jason')).toEqual(['j', 'a', 's', 'o', 'n']);
				});
			});

			/**
			 * Returns a new array iterator object containing a key/value pair for each index of the array.
			 *
			 * @see [entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)
			 */
			describe('entries() method', function () {
				it('returns a key/value pair', function () {
					let entries = ['a', 'b', 'c', 'd', 'e'].entries();

					// We access each entry with the `next()` method.
					let next = entries.next();
					expect(next.value).toEqual([0, 'a']);

					// We access each value in the entry with the `value` property.
					expect(next.value[0]).toEqual(0);
					expect(next.value[1]).toEqual('a');
				});
			});

			/**
			 * Returns an array iterator that contains only the keys of the array.
			 *
			 * @see [keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)
			 */
			describe('keys() method', function () {
				it('returns the keys of the array', function () {
					let keys = ['a', 'b', 'c', 'd', 'e'].keys();

					expect(keys.next()).toEqual({ value: 0, done: false });
					expect(keys.next()).toEqual({ value: 1, done: false });
				});
			});

		});

	});

})();
