/**
 * const keyword:
 * - Holds block scope like the keyword 'let'
 * - Is READONLY and cannot change
 * - Assignment of a 'const' will throw a SyntaxError. Browsers may have different implementations on how this error is handled.
 */
describe('using const', function () {

    it('creates a read-only variable; no re-assignment', function () {
        const TEN = 10;

        //TEN = 12; // throws a SyntaxError

        expect(TEN).toBe(10);
    });

    xit('has block scope', function() {
        if (true) {
            const TEN = 10;
        }

        // expect(TEN).toBeUndefined(); // throw ReferenceError
    });

    it('can shadow outer declarations', function () {
        const TEN = 10;

        function doWork() {
            var TEN = 12;
            return TEN;
        }

        var twelve = doWork();

        expect(TEN).toBe(10);
        expect(twelve).toBe(12);
    });

    it('can be defined as a modifiable object', function() {
        const car = {
            wheels: 4,
            seats: 2,
            sportsPackage: true
        }

        car.wheels = 3;
        expect(car.wheels).toBe(3);
    });

});



