(function () {
	'use strict';

	/**
	 * ES6 brings many enhancements to the already built-in javascript objects.
	 * This series of tests will show you these additions and how to use them.
	 */
	describe('ES2015 Built-in Objects Enhancements', function () {

		describe('The Number object', function () {
			// We could have also used the `parseInt()` global function in these scenarios or the `Number` object,
			// or even the `Number.parse*` functions: `parseInt()` & `parseFloat()`.
			// It is generally easier to use the lowercase pattern when defining number types.

			/**
			 * Hexadecimal numbers are prefixed with a '0x' case insensitive.
			 */
			it('supports hexadecimal number', function () {
				expect(0x48).toBe(72);
				expect(0X48).toBe(72);
				expect(parseInt(0x48)).toBe(72);
				expect(Number(0x48)).toBe(72);
				expect(Number.parseInt(0x48)).toBe(72);
			});
			it('can parse hexadecimal from string values', function () {
				expect(Number('0x48')).toBe(72);
			});

			/**
			 * Octal numbers are prefixed with a zero and letter '0o' case insensitive.
			 */
			it('supports octal number', function () {
				// We could have also used the `parseInt()` global function
				expect(0o110).toBe(72);
				expect(0O110).toBe(72);
				expect(parseInt(0o110)).toBe(72);
				expect(Number(0o110)).toBe(72);
			});
			it('can parse octal from string values', function () {
				expect(Number('0o110')).toBe(72);
			});

			/**
			 * Binary numbers are prefixed with a leading '0b' case insensitive.
			 */
			it('supports binary literals', function () {
				expect(0b01001000).toBe(72);
				expect(0B01001000).toBe(72);
				expect(parseInt(0b01001000)).toBe(72);
				expect(Number(0b01001000)).toBe(72);
			});
			it('can parse binary from string values', function () {
				expect(Number('0b01001000')).toBe(72);
			});

			it('`Number.isFinite()` method will not coerce string values to numbers unlike the global `isFinite()` function', function () {
				expect(isFinite('11')).toBe(true);
				expect(Number.isFinite('11')).toBe(false);
			});
			it('`Number.isNaN()` method will not coerce string values to numbers unlike the global `isNaN()` function', function () {
				expect(isNaN('NaN')).toBe(true);
				expect(Number.isNaN('NaN')).toBe(false);
			});

			it('correctly detects integer numbers with the `isInteger()` method', function () {
				expect(Number.isInteger(1)).toBe(true);
				expect(Number.isInteger(1.0)).toBe(true);
				expect(Number.isInteger(1.5)).toBe(false);
			});
			it('correctly detects min & max safe integer constants', function () {
				// Notice the `Math.pow()` method incorrectly matches different numbers based on their internal representation.
				expect(Math.pow(2, 53)).toBe(Math.pow(2, 53) + 1);
				// We can avoid this discrepency by using Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER
				expect(Number.MIN_SAFE_INTEGER).toBe(Math.pow(2, 53) * -1 + 1);
				expect(Number.MAX_SAFE_INTEGER).toBe(Math.pow(2, 53) - 1);
			});
			it('correctly detects safe integers within bounds', function () {
				expect(Number.isSafeInteger(9007199254740991)).toBe(true); // maximum integer allowed in javascript
				expect(Number.isSafeInteger(9007199254740991 + 1)).toBe(false); // max plus 1
			});
			it('', function () {
				expect(isNaN('NaN')).toBe(true);
				expect(Number.isNaN('NaN')).toBe(false);
			});
			it('', function () {
				expect(isNaN('NaN')).toBe(true);
				expect(Number.isNaN('NaN')).toBe(false);
			});
		});

		// xdescribe('', function () {
		// 	xit('', function () {
		// 		// expect(result).toBe(');
		// 	});
		// });
	});
})();


// xit('', function () {
// 	// expect(result).toBe(');
// });