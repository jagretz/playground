// (function () {
// 	'use strict';

// 	/**
// 	 * As noted by MDN, comprehensions are non-standards and are likely not to be added to the ECMAScript specification.
// 	 * Use generators instead.
// 	 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Array_comprehensions">MDN: Array comprehensions</a>
// 	 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Generator_comprehensions">MDN: Generator comprehensions</a>
// 	 */
// 	xdescribe('Comprehensions', function () {
// 		/**
// 	 	 * (MDN) The array comprehension syntax is a JavaScript expression which allows you to quickly
// 		 * assemble a new array based on an existing one.
// 		 * <p>
// 		 * Notiice array comprehensions use square brackets `[]` just like an array. This is an important
// 		 * disctinction from generator comprehenisons which use parenthesis `()`.
// 		 */
// 		xdescribe('-> Array Comprehensions: ', function () {
// 			xit('can use `for...of` construct inside comprehension', function () {
// 				// `let` is implied on `n`, therefore `n` is scope to the inside of the expression.
// 				var numbers = [1, 2, 3, 4];
// 				var doubled = [for (n of numbers) n * 2];
// 				expect(numbers).toEqual([2, 4, 6, 8]);

// 				// This is equivalent ot the map() function provided the same function argument
// 				doubled = numbers.map(n => n * 2);
// 				expect(numbers).toEqual([2, 4, 6, 8]);
// 			});

// 			xit('can use `if` construct inside comprehension', function () {
// 				var numbers = [1, 2, 3, 4];
// 				var doubled = [for(n of numbers) if (n > 2) n * 2];
// 				expect(numbers).toEqual([6, 8]);
// 			});
// 		});

// 		/**
// 		 * (MDN) The generator comprehension syntax is a JavaScript expression which allows you to quickly
// 		 * assemble a new generator function based on an existing iterable object.
// 		 * <p>
// 		 * Notiice generator comprehensions use parenthesis `()`. This is an important
// 		 * disctinction from array comprehenisons which use square brackets `[]` .
// 		 */
// 		xdescribe('-> Generator Comprehensions: ', function () {
// 			xit('can use `for...of` construct inside comprehension', function () { });
// 			xit('can use `if` construct inside comprehension', function () { });
// 		});

// 	}); // end describe `Comprehensions`

// })();
