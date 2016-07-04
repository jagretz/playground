/**
 * Rest parameters is essentially a replacement for the 'arguments' object when
 * there is a need to specify a variable number of function args. If you are familiar with
 * the Java language this is similar to 'varargs'.
 * The downfall to the 'arguments' object is that although it is array-like, it is not 
 * actually an array and therefore does not hold the same functionaility as you would 
 * expect from an array. A rest param on the otherhand is a true array object.
 * There can only be one rest param and it must be the last param in the function/method signature.
 * When an argument is not supplied for a rest param, the value will be an empty array  
 */
describe('Rest parameters',function () {
    // it('is an array', function() {
        
    // });
    
    it('can be past a variable number of arguments. Similar to Javas varargs', function() {
        let result = doStuff('jason', 1,2,3);
        expect(result).toBe(6);
    });

    it('when an argument is not supplied for the rest param, the value will be an empty array', function() {
        let result = doStuff('jaosn');
        expect(result).toBe(0);
    });

    function doStuff(a, ...b) {
        let result = 0;
        b.forEach(function(elem) {
            result += elem;
        });
        return result;
    }
})