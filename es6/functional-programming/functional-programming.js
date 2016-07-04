/**
 * Javascript has always been a functional language but the release of ES6
 * improves the functional aspects of the language by adding new features such
 * as the arrow function, iterators, generators, and many more.
 */
describe('ES6 functional programming enhancemnts using arrow functions', function() {
    /**
     * The 'arrow' function is also commonly called the 'fat arrow' and 'lambda'
     * but the correct name used by the specification is 'arrow function'
     * Details:
     * - Can be written on a single line
     * - Requires curly brackets when multiple lines are used.
     * - Requires paranthesis when 2 or more function parameters are defined
     * - Does not require paranthesis when only a single function parameter is defined
     * - Requires paranthesis when zero function parameter are defined
     * - 
     */
    describe('arrow functions', function() {
        it('arrow syntax using multiple parameters and returning a result', function () {
            // prior ES5 and below syntax
            // function add(x, y) {return x + y;}

            // new ES6 arrow syntax achieving the same functionality
            let add = (x, y) => x + y;
            expect(add(1, 2)).toBe(3);
        });

        it('does not require parens with a single function parameter', function () {
            let add = x => x + x;
            expect(add(1)).toBe(2);
        });
        
        it('requires parens with no function parameters', function () {
            let result = () => 3;
            expect(result()).toBe(3);
        });

        it('very usful for writing succinct array functions', function () {
            let result = 0; 
            [1, 2, 3].forEach(elem => result += elem);
            expect(result).toEqual(6);
        });
    });

    /**
     * Using arrow functions with asynchronous callback functionality.
     */
    describe('arrow functions with asynchronous callback functionality', function() {
        /**
         * Allows you to remove the work around reference to this:
         *      var self = this;
         * Which creates a self closure wrapping the this reference.
         * <p>
         * Instead, arrow functions will always capture the this value of the context they are inside.
         * We call this, lexically binding to this. In other words, the this reference is not lost
         * when executing code inside the arrow function.
         */
        // We must pass in a function, in this instancedone(), to let Jasmine know when our asynchronous code is done running.
        it('lexically binds to the this reference', function (done) {
            // this inside our jasmine specs does not reference the global scope but an object jasmine creates for running our specs.
            let self = this;
            this.name = 'Jason';
            // this would fail 
            // setTimeout(function() {
            //     expect(this.name).toBe('Jason'); // fails with the this reference, must use a this closure such as 'var self = this'
            //     done();
            // }, 5);
            setTimeout( () => {
                expect(this.name).toBe('Jason');
                done();
            }, 5);
        });
        
        xit('', function () {
            
        });
    });
        
    xit('', function () {
        
    });
    xit('', function () {
        
    });
    xit('', function () {
        
    });
    xdescribe('', function() {
        
    });
});