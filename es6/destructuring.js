
describe('using destructuring', function(){
    it('can destructure arrays', function() {
        let x = 3;
        let y = 5;

        /**
         * The left-hand side of this assignment is not an array, it is the syntax for destructuring
         * values into the variables indicated in the square brackets; x & y.
         * The right-hand side is an array containing the values to destructure into x & y.
         */
        [x, y] = [6, 10];

        expect(x).toBe(6);
        expect(y).toBe(10);
    });

    it('The right-hand side can destructure from any array, even an array returned from a function.', function() {
        function doWork() {
            return [6, 10];
        }

        [x, y] = doWork();
        expect(x).toBe(6);
        expect(y).toBe(10);
    });

    it('can skip values', function() {
        function doWork() {
            return [3, 6, 5, 10, 12, 20];
        }

        // just use a comma in places you want to skip!
        [, x, , y] = doWork();
        expect(x).toBe(6);
        expect(y).toBe(10);
    });
    
    it('can declare variables with destructuring syntax', function() {
        let [x, y] = [6, 10];

        expect(x).toBe(6);
        expect(y).toBe(10);
    });
    
    it('will use undefined in place of values that do not exist', function() {
        let [x, y, z] = [6, 10];

        expect(x).toBe(6);
        expect(y).toBe(10);
        expect(z).toBeUndefined();
    });
    
    it('can destructure objects', function() {
        /**
         * I know i know, this looks like an object literal but it isn't.
         * It is an object literal that gets assigned the values from variables returned from the getNames() function.
         * The more confusing part is the ordering of the assignment. Unlike the declaration of an object literal, 
         * the declaration is on the right-hand side and the variables to assign is on the left. i..e
         * {<variable with value(s) to assign> : <new variable to be assigned a value>}
         */
        let {jason: nameOne, ethan: nameTwo} = getNames();

        expect(nameOne).toBe('Jason');
        expect(nameTwo).toBe('Ethan');
    });
    
    it('destructure complext objects', function() {
        let {parent: {childB : child} } = getNames();

        expect(child).toBe('b');
    });
    
    it('requires only a single name if using same named vaiable declarations', function() {
        let {parent: {childB} } = getNames();

        expect(childB).toBe('b');
    });
    
    it('can destructure function parameters', function() {
        function doStuff(url, {data, config}) {
            return config;
        }

        let result = doStuff(
            'hello.url',
            {
                data: 'money!',
                config: 'abcdefg'
            }
        );

        expect(result).toBe('abcdefg');
    });
    
    // private functions used throughout specs
    function getNames() {
        return {
            jason: 'Jason',
            nathan: 'Nathan',
            ethan: 'Ethan',
            parent: {
                childA: 'a',
                childB: 'b'
            }
        }
    }

});