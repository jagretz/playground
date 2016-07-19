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
	 * as what values are looped over in a `for..of` construct. Some built-in types are built-in iterables
	 * with a default iteration behavior, such as Array or Map, while other types (such as Object) are not.
	 * <p>
	 * In order to be iterable, an object must implement the @@iterator method, meaning that the object
	 * (or one of the objects up its prototype chain) must have a property with a Symbol.iterator key: `[Symbol.iterator]`

 	 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Iterators">Iterators</a>
	 */
	describe('Iterables & Iterator:', function () {

		let numbers;
		let sum;

		beforeEach(function() {
			numbers = [1, 2, 3, 4];
			sum = 0;
		});

		describe('To be iterable, the object must supply an iterator.', function () {
			/**
			 * This is the complex way to create a custom iterator if you need this type of flexibility with
			 * your custom iterator. For example, you could add sort functionality or create a more advanced
			 * data structure for your array.
			 */
			it('can create our own `iterator`', function(){
				class ArrayIterator {
					// accept an array argument
					constructor(array) {
						this.array = array;
						this.index = 0;
					}
					//supply a `next()` method for array iteration.
					next() {
						let result = {value: undefined, done: true}; // default on entry
						if (this.index < this.array.length) {
							result.value = this.array[this.index];
							result.done = false;
							this.index += 1;
						}
						return result;
					}
				}

				//FIXME
				expect(1).toBe(1);
			});

			/**
			 * An `iterator` is an object that knows how to access elements from a collection while keeping track
			 * of it's current position inside the collection. That means supplying it with a `next()` method that
			 * returns a value for properties `value` and `done`.
			 */
			it('we can make our own iterable object using a simple in-line iterator', function () {
				class MyVeryOwnIterable {
					constructor(array = []) {
						this.array = array;
						this.index = 0;
					}

					next() {
						return this.index < this.array.length ?
							{ value: this.array[this.index++], done: false } :
							{ done: true };
					}
				}

				let myIterable = new MyVeryOwnIterable(['jason', 'gretz']);
				expect(myIterable.next().value).toEqual('jason');
				expect(myIterable.next().value).toBe('gretz');
				expect(myIterable.next().done).toBe(true);
			});

			/**
			 * Extend our custom iterator object to iterate an array.
			 */
			it('we can make our own iterable object using a custom iterator', function () {
				// Pulled from spec above...
				class ArrayIterator {
					constructor(array) {
						this.array = array;
						this.index = 0;
					}
					//supply a `next()` method for array iteration.
					next() {
						let result = {value: undefined, done: true}; // default on entry
						if (this.index < this.array.length) {
							result.value = this.array[this.index];
							result.done = false;
							this.index += 1;
						}
						return result;
					}
				}

				class MyVeryOwnIterable {
					constructor(array = []) {
						this.array = array;
					}
					[Symbol.iterator]() {
						return new ArrayIterator(this.array);
					}
				}

				let myIterable = new MyVeryOwnIterable(['jason', 'gretz']);
				let iterator = myIterable.array.values();
				expect(iterator.next().value).toEqual('jason');
				expect(iterator.next().value).toBe('gretz');
				expect(iterator.next().done).toBe(true);
			});
		});

		/**
		 * Use `values()` method to return the array iterator.
		 */
		it('can use iterator from a simple array using `next()`', function(){
			let iterator = numbers.values();
			let next = iterator.next();
			while (!next.done) {
				sum += next.value;
				next = iterator.next();
			}

			expect(sum).toBe(10);
		});

		/**
		 * Instead of using `values()` to return the iterator, we grab it directly with `[Symbol.iterator]`.
		 */
		it('can pull the iterator object directly using `Symbol.iterator`', function () {
			let iterator = numbers[Symbol.iterator]();
			let next = iterator.next();
			while (!next.done) {
				sum += next.value;
				next = iterator.next();
			}

			expect(sum).toBe(10);
		});

		/**
		 * loop over only vaues..cant loop keys with an iterator; for of - only vales, no index or keys
		 * The `for...of` is similar to how the `for...in` looping construct loops over enumerable properties
		 * of an object, but instead iterating over iterable objects.
		 * <p>
		 * The `for...of` will only return values with no reference to the value key or the value index.
		 */
		it('can use `for...of` constructor to iterate values. This does not have access to the key or index', function () {
			for (let n of numbers) {
				sum += n;
			}
			expect(sum).toBe(10);
		});

		/**
		 * More examples of constructs requiring an iterable are:
		 * <ul>
		 * <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator">spread operator</a></li>
		 * <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield">yeild operator</a></li>
		 * <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">deconstruction</a></li>
		 * </ul>
		 */
	});

})();
