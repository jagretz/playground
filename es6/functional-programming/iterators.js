/**
 * @desc (MDN) An addition of ECMAScript 2015 (ES6) is not new syntax or a new built-in, but a protocol.
 * This protocol can be implemented by any object respecting some conventions.
 * There are two protocols: The iterable protocol and the iterator protocol.
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols">Iteration protocols</a>
 */
(function () {
	'use strict';

	/**
	 *
	 */

	/**
	 * The iterable protocol allows JavaScript objects to define or customize their iteration behavior, such
	 * as what values are looped over in a for..of construct. Some built-in types are built-in iterables
	 * with a default iteration behavior, such as Array or Map, while other types (such as Object) are not.
	 * <p>
	 * In order to be iterable, an object must implement the @@iterator method, meaning that the object
	 * (or one of the objects up its prototype chain) must have a property with a Symbol.iterator key: `[Symbol.iterator]`

 	 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Iterators">Iterators</a>
	 */
	describe('To be iterable, the object must supply an iterator', function () {


		xit('we can make our own iterables using an iterator', function () {
			let myVeryOwnIterable = {};
			myVeryOwnIterable.prototype[Symbol.iterator] = function() {
				let index = 0;
				// let data = this
				return
			}


			expect().toBe();
		});

		/**
		 * An `iterator` is an object that knows how to access elements from a collection while keeping track of it's
		 * current position inside the collection.
		 * <p>
	 	 */
		xit('provides a `next()` function returning the next value in the colleciton', function () {

		});

		// looping construct to loop over only the element values using an iterable
		xit('for of', function () {

		});

		xdescribe('', function () {

		});
	});

})();
