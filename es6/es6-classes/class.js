/**
 * ES6 class syntax is essentially the same as creating a constructor function and
 * modifying the prototype object. Two things we have already been able to do for years.
 * However, the new ES6 class syntax is more clean, expressive, and intention revealing.
 * The syntax format also assists those who may be more familiar with other object-oriented
 * languages such as Java and C#.
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">MDN on Classes</a>
 * @author jagretz
 * @since
 */
describe('ES2015 Class definition', function () {
	'use strict';

	/**
	 * Tests the class definition and tests a function call using a 'new' object
	 * and the class objects prototype.
	 */
	it('can create a class', function () {
		class Person {
			getName() {
				return 'Jason';
			}
		}

		let jason = new Person();
		expect(jason.getName()).toBe('Jason');
		// Return the function and call the function passing in the object reference.
		expect(Person.prototype.getName.call(jason)).toBe('Jason');
	});

	/**
	 * Manage consistent state between objects of the same object prototype using the
	 * new `constructor` function. `constructor` is just a normal function as it was before ES2015
	 * but now it is provided as a class member to give the option of providing every class of
	 * a type with consistent state.
	 * When the new operator is used to construct an instance of a given object, the constructor function
	 * will be called automagically.
	 *
	 */
	it('can have a constructor', function () {
		class Person {
			constructor(name) {
				this.name = name;
			}
			getName() {
				return this.name;
			}
		}

		let jason = new Person('Jason'); // set the name from the constructor function
		expect(jason.getName()).toBe('Jason');
	});

	/**
	 * The `get` and `set` internal class methods are used to encapsulate the internal data on
	 * your object (to protect or hide object internals) but also for modification.
	 * Getters & setters are basically just wrapper functions for your object state but also provide
	 * you with the ability to add additional `get` and `set` functionality should you need it.
	 * <p>
	 * ! There is one important caveat with the `get` and `set` class methods:
	 *  if you want to store the internal data on the object and use the get/set internal methods, the variable must have a different textual
	 *  name. That is, if you want to use `foo` for your get/set methods, you cannot use the same
	 *  name for the internal store for that property. Doing so will eventually throw a `StackOverflowError`
	 *  due to `foo` referencing the getter or setter depending on how it is used. This is often why an
	 *  underscore is used to indicate private state. i.e
	 *	  `var _foo; // '_' indicates "private" state`
	 */
	describe('can have get and set methods', function () {

		class Person {
			constructor(name, age) {
				this._name = name;
				this._age = age;
			}

			/**
			 * @return {string} returns the value of _name in all caps.
			 */
			get name() {
				/**
				 * Modification of a property inside the internal `get` method goes against
			     * convention but is illustrated here to show the cababilities of get/set functionality.
				 */
				return this._name.toUpperCase();
			}

			/**
			 * Will "set" a value.
			 */
			set name(name) {
				this._name = name;
			}

			// returns the age value
			get age() {
				return this._age;
			}
		}

		let nathan = new Person('Nathan', 21);

		it('can have setters', function () {
			expect(nathan.name).toBe('NATHAN');
		});

		it('can have getters', function () {
			nathan.name = 'Nate';
			expect(nathan.name).toBe('NATE');
		});

		/**
		 * By limiting our variable to only a `get` method we essentially can create a read-only
		 * property.
		 * This adds a layor of security to our objects, but doesn't actually "protect" against
		 * inadverdent modification.
		 */
		it('By not creating the internal `set` method we create the illusion of a read-only property', function() {
			expect(nathan.age).toBe(21);
			try {
				nathan.age = 47; // throws TypeError
			} catch (e) {
				console.log('ERROR: age cannot be set!');
			}
		});

		/**
		 * If we know the internal property name of the variable we wish to modify, we can easily
		 * get around not have a `set` method by just modifying the property directly.
		 */
		it('Can set local property directly if internal name is known', function(){
			expect(nathan.age).toBe(21);
			nathan._age = 47;
			expect(nathan.age).toBe(47);
		});

		// false! this doesn't work :(
			/**
			 * REMOVED FROM THE ABOVE `describe` block
			*  We can get around this conflict by changing the names of our `get` and `set` functions.
			*  The OO-style naming convention is to place a "get" and "set" in front of the private
			*  variable you wish to interact with. In our example this would look like,
			*    `get getFoo() {}`
			*    `set setFoo(foo) {}`
			 */
		xdescribe('cannot change get/set function names so we can rename our private data without a leading underscore', function () {
			//IIFE enclosing example
			(function() {
				function Es5FooBar(foo) {
					// internal property: public, accessible & mutable
					this.foo = foo || 'no name';

					// property descriptor: public & immutable
					Object.defineProperty(this, 'privateFoo', {
						writable: false,
						value: 'private and immutable'
					});
					/* property descriptor: sudo-immutable but modifiable;
					We cannot change to a different reference but can change internals. ie
					  let e = new Es5FooBar();
					  e.modifiableObject = new Es5FooBar(); // Not allowed. Some interpreters may throw an error, but Chrome just eats it.
					  e.modifiableObject.modified = true; // allowed!
					*/
					Object.defineProperty(this, 'modifiableObject', {
						writable: false,
						value: {}
					});
					/* private property: truly private & truly immutable. ie
					  let e = new Es5FooBar();
					  e.p // 'private'
					  e.p = 'not private' // not allowed, swallows error
					  e._p = 'new internal property'; // allowed but isn't the same as what e.p returns.
					  e.p; // 'private' --> still private, still immutable
					*/
					var _p = 'private';
					Object.defineProperty(this, 'p', {
						get: function getP() {
							return _p;
						}
					});
				}
			})();

			class FooBar {
				constructor(foo) {
					this.foo = foo;
				}
				get getFoo() { return this.foo; }
				set setFoo(foo) {
					this.foo = foo;
					return this.foo;
				}
			}

			// Create our object
			let fooBar = new FooBar('little foo');

			it('can access private variable', function () {
				expect(fooBar.foo).toBe('little foo');
			});

			it('set method does not interfere with private variable', function () {
				fooBar.setFoo('BIG foo');
				expect(fooBar.foo).toBe('BIG foo');
			});

			xit('get method does not interfere with private variable', function () {
				let fooBar = new FooBar('little foo');
				expect(fooBar.getFoo).toBe('little foo');
				expect(fooBar.foo).toBe('little foo');
			});
		});
	});

	/**
	 * Describes how to use inheritence with the class syntax.
	 * Inheritence is nothing new. You could have used traditional inheritence by
	 * manipulating the prototype references or using third party libraries, but the
	 * class syntax provides a much cleaner and more understandable approach.
	 * <p>
	 * Inheritence is achieved using the 'extends' keyword. ie
	 *   class Student extends Person {}
	 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends">MDN extends</a>
	 */
	describe('can have inheritence using extends', function () {

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
			doStuff() {
				return 'pro bono';
			}
			walk() {
				return 'is walking';
			}
		}

		/**
		 * The `extends` keyword is used to inherit from the `Person` class.
		 */
		class Student extends Person {
			constructor(id, name) {
				super(name);
				this.id = id;
			}
			doStuff(proBono) {
				return 'paid';
			}
			walk() {
				return super.walk() + ' and reading';
			}
		}

		it('can have a super, or parent, class using super', function () {
			let jacob = new Student('001', 'Jacob');

			expect(jacob.id).toBe('001');
			expect(jacob.doStuff()).toBe('paid');
			expect(jacob.name).toBe('Jacob');
		});

		/**
		 * Extending a superclass requires a call to `super()`. `super()` must appear alone and
		 * must be used before the `this` operator can be used.
		 * <p>
		 * The subclass doesn't require a constructor. If no constructor is provided the interpreter
		 * will place a call to super() for you. However, if you provide a constructor it must
		 * explicitly make the call to super() or the subclass will not call the parent constructor
		 * but instead through a reference error at runtime.
		 *
		 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super">MDN super</a>
		 */
		it('can extend built-in objects', function() {
			class DateExtends extends Date {
				constructor() {
					super();
				}
			}

			expect(new DateExtends()).toEqual(jasmine.any(Date));
			expect(DateExtends.prototype).toEqual(jasmine.any(Object));
		});

		/**
		 * This may seem like something you shouldn't do but it is allowed. Extending `null` works
		 * the same as extending a normal class except that the prototype will not inherit from
		 * `Object.prototype`.
		 */
		it('can extend null', function() {
			class NullExtends extends null {
				// empty object
			}

			expect(Object.getPrototypeOf(NullExtends.prototype)).toBe(null);
		});

		/**
		 * The Student doStuff() function overrides its parent Person doStuff() function.
		 */
		it('can override super class methods', function () {
			let jacob = new Student('001', 'Jacob');
			let calie = new Person('Calie');

			expect(jacob.doStuff()).toBe('paid');
			expect(calie.doStuff()).toBe('pro bono');
		});

		it('can use super inside any method to call the overriden super (parent) method matching the same method name', function () {
			/**
			 * To achieve this use the super() method and that will invoke the parent objects
			 * overriden method; ie
			 *   walk() {
			 *       super();
			 *   }
			 */
			let jacob = new Student('001', 'Jacob');
			expect(jacob.walk()).toBe('is walking and reading');
		});

		xit('can use super to invoke any function on the parent class', function () {
			/**
			 * to achieve this you would simple add functionality to the Objects method as such:
			 *      doStuff() {
			 *          super.foo();
			 *      }
			 */
		});

		it('instanceof matches correct object type', function () {
			let jacob = new Student('001', 'Jacob');
			let calie = new Person('Calie');

			expect(jacob instanceof Student).toBeTruthy();
			expect(jacob instanceof Person).toBeTruthy();
			expect(calie instanceof Person).toBeTruthy();
		});
		xit('', function () {

		});
	});


	xit('', function () {

	});
	xit('', function () {

	});
});






