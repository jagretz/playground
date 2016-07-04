/**
 * ES6 class syntax is essentially the same as creating a constructor function and 
 * modifying the prototype object. Two things we have already been able to do for years.
 * However, the new ES6 class syntax is more ckean, expressive, and intention revealing.
 * The syntax format also assists those who may be more familiar with other object-orientedlanguages 
 * such as Java and C#.
 * 
 */
describe('ES6 Class', function() {
    /**
     * Tests the class definition and tests a function call using a 'new' object 
     * and the class objects prototype. 
     */
    it('can create a class', function() {
        class Person {
            getName() {
                return 'Jason';
            }
        }

        let jason = new Person();
        expect(jason.getName()).toBe('Jason');
        expect(Person.prototype.getName.call(jason)).toBe('Jason');
    });

    /**
     * Manage consistent state between objects of the same object prototype using the
     * new ES6 constructor function. 'constructor' is just a normal function but is 
     * provided as a class memeber to give the option of providing every class of 
     * a type with consistent state.
     */
    it('can have a constructor', function() {
        class Person {
            constructor(name) {
                this.name = name;
            }
            getName() {
                return this.name;
            }
        }

        let jason = new Person('Jason');
        expect(jason.getName()).toBe('Jason');
        expect(Person.prototype.getName.call(jason)).toBe('Jason');
    });

    /**
     * Using get and set internal class methods to encapsulate the internal data on your object; 
     * to protect or hide object internals.
     * Getters & setters are basically just wrapper functions for your object state which also 
     * provide you with the ability to add additional get and set functionality should you need it.
     * ! There is one important caveat with getters and setters:
     *      if you want to store the data one the object, the variable must have a different textual
     *      name. That is, if you want to use 'name' for your get/set methods, you cannot use the same
     *      name for the internal store for that property. Doing so will eventually throw a StackOverflowError 
     *      due to 'name' referencing the getter or setter depending on how it is used. This is often why an 
     *      underscore is used to indicate private state. i.e
     * 
     */
    describe('can have getters and setters', function() {

        class Person {
            constructor(name) {
                this._name = name;
            }
            get name() {
                return this._name;
            }
            set name(name) {
                this._name = name;
            }
        }

        it('can have setters', function() {
            let nathan = new Person('Nathan');
            expect(nathan.name).toBe('Nathan');
        });

        it('can have getters', function() {
            let nathan = new Person('Nathan');
            nathan.name = 'Nate';
            expect(nathan.name).toBe('Nate');
        });
    });

    /**
     * Describes how to use inheritence with the class syntax.
     * Inheritence is nothing new. You could have used traditional inheritence by
     * manipulating prototype references or using third party libraries, but the 
     * class syntax provides a much cleaner and more understandable approach.
     * <p>
     * Inheritence is achieved using the 'extends' keyword. ie 
     *      class Student extends Person {}
     */
    describe('can have inheritence using extends', function() {
    
        class Person {
            constructor(name) {
                this._name = name;
            }
            get name() {
                return this._name;
            }
            set name(name) {
                this._name = name;
            }
            doWork() {
                return 'pro bono';
            }
        }

        class Student extends Person {
            constructor(id, name) {
                super(name);
                this.id = id;
            }
            doWork(proBono) {
                return 'paid';
            }
        }

        it('can have a super, or parent, class using super', function() {
            let jacob = new Student('001', 'Jacob');
            expect(jacob.id).toBe('001');
            expect(jacob.doWork()).toBe('paid');
            expect(jacob.name).toBe('Jacob');
        });

        /**
         * The Student doWork() function overrides its parent Person doWork() function. 
         */
        it('can override super class methods', function() {
            let jacob = new Student('001', 'Jacob');
            let calie = new Person('Calie');

            expect(jacob.doWork()).toBe('paid');
            expect(calie.doWork()).toBe('pro bono');
        });

        xit('can use super inside any method to call the overriden super (parent) method matching the same method name', function() {
            /**
             * To achieve this use the super() method and that will invoke the parent objects overriden method; ie
             *      doWork() {
             *          super();
             *      }
             */
            // let jacob = new Student('001', 'Jacob');
            // expect(jacob.doWork(true)).toBe('pro bono');
        });

        xit('can use super to invoke any function on the parent class', function() {
            /**
             * to achieve this you would simple add functionality to the Objects method as such:
             *      doWork() {
             *          super.foo();
             *      }
             */
        });
        
        it('instanceof matches correct object type', function() {
            let jacob = new Student('001', 'Jacob');
            let calie = new Person('Calie');

            expect(jacob instanceof Student).toBeTruthy();
            expect(jacob instanceof Person).toBeTruthy();
            expect(calie instanceof Person).toBeTruthy();
        });
        xit('', function() {

        });
    });

        
    xit('', function() {

    });
    xit('', function() {

    });
});






