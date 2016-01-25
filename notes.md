### Modules

Previously we had AMD (asynchronous module definition, async, browser) and CJS (compact syntax, synchronous, node).

There are 2 components to ES6 modules: the declarative syntax for loading modules and a complementary programmatic loader API for configuring how modules are loaded and handling conditional loading. We're going to skip over the programmatic loader API in this discussion - let's look at the syntax for importing and exporting modules.

ES6 Modules are statically analyzable, have an even more compact syntax than both AMD and CJS, have better support for cyclic dependencies. Due to the static nature of name resolution, you get faster lookups for members of imported objects. Additionally, the fact that ES6 modules are statically analyzable prepares JavaScript to support macros and a proper type system in the future.

Caveats:
- Must be defined at top level indentation of file, but can appear anywhere within
- No Dynamic module resolution
- Syntax mistakes are common while learning the different syntax permutations




### Let/Const (block scoping, const conventions/semantics)

These new keywords are for declaring block-scoped bindings. `let` is the new `var` and `const` is single-assignment ("immutable"). Objects defined with `cosnt` do not prevent mutation of member properties. To create immutable objects use `Object.freeze`.

These new keywords eliminate some of the confusion and magic that happens behind the scenes with `var` (function scoped, hoisted).

Variables created by let are mutable, variables created by const are immutable.

Note that const does not affect whether the value of a constant itself is mutable or not: If a constant refers to an object, it will always refer to that object, but the object itself can still be changed (if it is mutable).

If you wanted obj to truly be a constant, you’d have to freeze its value, for example using Object.freeze.




### Arrow Fns (lexical scope)

Arrows are a function shorthand using the => syntax. They are syntactically similar to the related feature in C#, Java 8 and CoffeeScript. They support both statement block bodies as well as expression bodies which return the value of the expression.

Note: Arrow functions have different scope semantics than regular functions (named or anonymous). Specifically, they have what's called `lexical scope` which means that arrow functions do not create a new function scope with it's own `this` context. Instead, an arrow function is said to _inherit_ it's parent scope's `this` and `arguments` objects. In many cases this eliminates the need for traditional scope modification via `var self = this` or `.bind(this)`.




### Class (sugar over prototypal inheritance)

ES6 classes are a simple sugar over the prototype-based OO pattern. Having a single convenient declarative form makes class patterns easier to use, and encourages interoperability. Classes support prototype-based inheritance, super calls, instance and static methods and constructors.




### Default Params (again, incredibly useful)

There's a great deal more to know about default parameters than I would have guessed. One of the more important things to understand is when default parameters get selected over provided values. The rule is simple: if any argument is `undefined`, then it's default value is preferred. The same is not true for `null`. This further entrenches the role of undefined as indicating that something doesn’t exist, versus null indicating emptiness.

Order matters since a default parameter can reference the value of another parameter so long as it is after the param to which it refers.




### Destructuring Assignment (so useful, symmetries!)

Destructuring assignment is one of the most commonly used, loved, and abused features of ES6. It's syntax is at first very foreign to most JavaScript developers. Destructuring assignment is a shortcut for creating bindings and assigning values for one or more properties of an object or array.

This also applies to arrays.

Destructuring assignment can also be used in argument position, which is quite handy.

Have they gone too far?




### Rest/Spread (addresses a very common use case)

Rest and Spread can be a bit tricky to wrap your head around initially.

Rest is easy to think of as capturing the _rest_ of some list of things.

Spread is easy to think of as extracting the components of a thing (such as the members in an Array).

Interestingly, rest can completely replace JavaScripts special keyword `arguments` which we all know is a hassle to deal with primarily due to the fact that it is not a true Array.




### Template Strings (string interpolation, finally)

Finally, string interpolation!

The ${} syntax isn’t just variable interpolation. It’s expression interpolation. Anything that can be evaluated as an expression in JavaScript can be put inside ${}.

Tagged templates invite library designers to create powerful domain-specific languages.




### Array Methods (from, of, find, fill, findIndex, entries, keys, values)

Array.of(...values)     // addresses a quirk with Array constructor
Array.from(arrayLike)
Array.fill(value, start?, end?)
Array.find(value)
Array.findIndex(value)
Array.entries()         // nested array of key/value pairs
Array.keys()            // array of keys
Array.values()          // array of values




### Enhanced Object Literals (concise methods, computed properties, shorthand assignment)
