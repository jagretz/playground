(function () {
	'use strict';

	/**
	 * A `Generator` is an object that is returned by a `generator function` and conforms to both the iterable
	 * protocol and iterator protocol. In more simplistic terms, the `generator function` is a javascript
	 * function that will generate an `iterator` and provide us with a `generator` object that works with
	 * the `iterator`.
	 * <p>
	 * In that sense, a generator is both an `iterable` and and `iterator`.
	 *
 	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
	 */
	describe('Generator objects & the generator function:', function () {
		// let numbers;
		// let sum;
		// beforeEach(function() {
		// 	numbers = [1, 2, 3, 4];
		// 	sum = 0;
		// });

		//A generator object is both, iterator and iterable:
		it('generators are not cnostructable objects', function () {
			function* F() { }
			try {
				let o = new F(); // throws "TypeError: f is not a constructor"
			} catch (e) {
				console.log('Cannot construct a generator');
			}
			expect(F).toEqual(jasmine.any(Function));
		});

		/**
		 * `yield` is knid of like `return` and is used to pause and resume a `generator function`.
		 */
		it('can use a generator with the yield keyword', function () {
			let numbers = function* () {
				yield 1;
				yield 2;
				yield 3;
				yield 4;
			};
			let sum = 0;
			let iterator = numbers();
			let next = iterator.next();
			while (!next.done) {
				sum += next.value;
				next = iterator.next();
			}
			expect(sum).toBe(10);
		});

		it('use generator to create an iterable', function () {
			class ColorPallete {
				constructor(colors = []) {
					this.colors = colors;
				}
				// replaces a custom array iterator class with a simple generator; replace 15 lines for 3.
				// the (*) in front of the `[Symbol.iterator]` indicates this is a generator function.
				*[Symbol.iterator]() {
					for (let c of this.colors) {
						yield c;
					}
				}
			}

			let cp = new ColorPallete(['Purple', 'Green', 'yellow']);
			let iterator = cp.colors.values();
			expect(iterator.next().value).toEqual('Purple');
			expect(iterator.next().value).toBe('Green');
			iterator.next();
			expect(iterator.next().done).toBe(true);
		});


		/**
		 * An easier way to think about generators:
		 * It may help to think about the `for...of` looping construct as generating the code to work with
		 * an iterator; calling next() and setting the done flag (true/false).
		 * <p>
		 * We can think of the `generator function` as creating an `iterable` but with the `generator`
		 * allowing you to pause execution (with `yield`) and jump in and out of the code during iteration.
		 */
		describe('Generators:', function () {
			/**
			 * ColorPallete class that takes an array and creates an iterator making itself iterable.
			 */
			class ColorPallete {
				constructor(colors = []) {
					this.colors = colors;
				}
				*[Symbol.iterator]() {
					for (let c of this.colors) {
						yield c;
					}
				}
			}

			/**
			 * Generator function taking an array of items and a predicate function to use as the filtering mechanism.
			 * @param items {Iterable}
			 * @param predicate {function}
			 */
			let filter = function* (items, predicate) {
				for (let item of items) { // for every item in the array
					console.log('filter', item);
					if (predicate(item)) { // pass the item to the predicate function awaiting a true value, otherwise go to the next item in the array of items.
						yield item;
					}
				}
			};

			/**
			 * Generator function taking an array of items and a number that will only yield the given number
			 * of results. If number is reached, the generator will stop processing and return early.
			 * @param items {iterable}
			 * @param max {number expecting int}
			 */
			let take = function* (items, max) { // not null or undefined safe
				let count = 0;
				if (max < 1) return; // break early
				for (let item of items) {
					console.log('take', item);
					yield item;
					count++;
					if (count >= max) return;
				}
			};

			let cp;
			let count;
			// setup ran before each spec
			beforeEach(function () {
				cp = new ColorPallete(['Purple', 'Green', 'yellow', 'Paras', 'popple']);
				count = 0;
			});

			it('utlized in a funcitonal mannor, generators can greatly reduce code', function () {
				// iterate ONLY those colors that start with "p" case insensitive
				for (let color of filter(cp, c => c[0].toUpperCase() === 'P')) {
					count++;
				}
				expect(count).toBe(3);
			});
			it('Illustrate generators use of lazy evaluation to make efficient functions', function () {
				// iterate ONLY those colors that start with "p" case insensitive
				for (let color of take(filter(cp, c => c[0].toUpperCase() === 'P'), 2)) {
					count++;
				}
				expect(count).toBe(2);
			});

			/**
			 * Illustrates that you can, and how to, pass an argument to the `next()` function of the iterator.
			 */
			it('`next()` can take an argument and applied against yield value', function () {
				/**
				 * Generator function providing a range of numbers between two indices.
				 * @param start {number expected int}
				 * @param end {number expected int}
				 */
				let range = function* (start, end) {
					let current = start;
					while (current <= end) {
						let delta = yield current;
						current += delta || 0;
					}
				};

				let result = [];
				let iterator = range(1, 10);
				let next = iterator.next();
				while (!next.done) {
					result.push(next.value);
					next = iterator.next(2); // pass in an argument to the `iterator.next()` method.
				}
				expect(result).toEqual([1, 3, 5, 7, 9]);
			});

		});

	});

})();
