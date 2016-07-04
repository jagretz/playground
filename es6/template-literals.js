/**
 * Template literals are a way to more easily achieve string concatenation.
 * Template literals are defined using back ticks (``).
 * Placeholders are indicated by using a ${variable}
 * Function tags are used to reference functions. Tags are a very handy featurs as they can
 * be used to protect against cross-site scripting by html encoding, tags to support localization, etc
 */
describe('template literals', function() {
    it('can use placeholders', function() {
        let a = 'hello';
        let b = 'world';

        let result = `${a} ${b}`;
        console.log(result);
        expect(result).toBe('hello world');
    });

    it('can use function tags', function() {
        function doStuff(...words) {
            let text = '';
            words.forEach(function(word) {
                text += `${word} `;
            });
            return text.toUpperCase();
        }

        let result = doStuff('hello', 'world');

        console.log(result);
        expect(result).toBe('HELLO WORLD ');
    });
});


// describe('spread operator', function() {
//     it('', function() {

//     });

//     it('', function() {
        
//     });
// });