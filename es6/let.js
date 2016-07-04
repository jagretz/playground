/**
 * given the scenario x, the keyword var will allow the test to pass
 * due to the concept of hoisting.
 */
function test(foo) {
    if (foo) {
        var x = 5;
    }
    return x;
}

var y = test(false);
console.log(y); // will be 'undefined'

/**
 * but is we change the the variable declaration of x from 'var' to 'let', 
 * the test will fail with a 'ReferenceError' becuase 'x' has not been declared.
 */
function test(foo) {
    if (foo) {
        let x = 5;
    }
    return x; //ReferenceError
}

var y = test(false);
console.log(y);

/**
 * Moving the 'let' declaration outside of the the 'if' block scope will
 * allow the test to pass albeit still returning undefined.
 */
function test(foo) {
    let x;
    if (foo) {
        x = 5;
    }
    return x;
}

var y = test(false);
console.log(y); // will be undefined

describe('using let', function(){
    it('sample: it', function() {
        expect(true).toBe(true);
    });
});
