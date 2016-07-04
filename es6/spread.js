/**
 * Similar to the rest operator but instead of assigning mutiple arguments toan array, 
 * spread spreads an array across multiple parameters still using the '...' syntax.
 */
describe('spread operator', function() {
    it('spreads an array across multiple parameters', function() {
        let result = doStuff(...[1,2,3]);
        expect(result).toBe(6);
    });

    it('can build into an existing array', function() {
        let a = [1, 2, 3];
        let result = [...a, 4, 5, 6];
        expect(result).toEqual([1,2,3,4,5,6]);        
    });

    function doStuff(a, b, c) {
        let result = 0;
        result = a + b + c;
        return result;
    }
})
