/**
 * Javascript has always been a functional language but the release of ES6
 * improves the functional aspects of the language by adding new features such
 * as the arrow function, iterators, generators, and many more.
 */
(function () {
	'use strict';

	/**
	 * Arrow functions +always+ capture the `this` value of the context they are inside. In programming terms
	 * we would say that arrow functions always lexically bind to the `this` reference of the context they are in.
	 */
	describe('ES6 functional programming enhancemnts,', function () {
		/**
		 * The 'arrow' function is also commonly called the 'fat arrow' and 'lambda'
		 * but the correct name used by the specification is 'arrow function'
		 * Details:
		 * - lexically binds to the `this` reference of the context they are executed within
		 * - Can be written on a single line
		 * - Requires curly brackets when multiple lines are used.
		 * - Requires paranthesis when 2 or more function parameters are defined
		 * - Does not require paranthesis when only a single function parameter is defined
		 * - Requires paranthesis when zero function parameter are defined
		*/
		describe('Arrow functions:', function () {
			describe('Are lexically bound to the `this` reference:', function () {
				/*
				One caveat: for the `this` reference executed with in Jasmine will not point to global scope but
				some scope within the Jasmine test runner for this test function.
				*/
				describe('Without the arrow function', function () {
					it('the `this` reference changes inside `setTimeout()` callback; we lose the original `this` reference', function (done) {
						this.facePalm = 'face palm';
						setTimeout(function () {
							expect(this.facePalm).toBeUndefined();
							done();
						}, 15);
					});

					// We can get around this by using the top level variable we created called `self`.
					// This is because we initially set the value of `self` to reference `this` as soon as we enter the function.
					it('assignment of lexical `this` to internal variable `self` can be used to pass into callbacks for the original `this` reference', function (done) {
						var self = this;
						self.facePalm = 'face palm';
						setTimeout(function () {
							expect(self.facePalm).toBe('face palm');
							done();
						}, 15);
					});
				});

				describe('With the arrow function', function () {
					it('`this` lexically binds to the `this` reference of the context it is executed within', function (done) {
						this.facePalm = 'face palm';
						setTimeout(() => {
							expect(this.facePalm).toBe('face palm');
							done();
						}, 15);
					});
				});
			});

			/**
			 * @desc Describes syntax for passing multiple argumets to an arrow function.
			 */
			it('arrow syntax using multiple parameters and returning a result', function () {
				// prior ES5 and below syntax
				// function add(x, y) {return x + y;}

				// new ES6 arrow syntax achieving the same functionality
				let add = (x, y) => x + y;
				expect(add(1, 2)).toBe(3);
			});

			/**
			 * @desc Describes optinal syntax for passing a single argument to an arrow function.
			 */
			it('does not require parens with a single function parameter', function () {
				let add = x => x + x;
				expect(add(1)).toBe(2);
			});

			/**
			 * @desc Describes syntax when no arguments are passed to an arrow funtion.
			 */
			it('requires parens with no function parameters', function () {
				let result = () => 3;
				expect(result()).toBe(3);
			});

			/**
			 * @desc simple example of use with an array function.
			 */
			it('very usful for writing succinct array functions', function () {
				let result = 0;
				[1, 2, 3].forEach(elem => result += elem);
				expect(result).toEqual(6);
			});
		});
	});

})();
