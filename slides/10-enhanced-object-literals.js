let obj = {
  // __proto__
  __proto__: theProtoObj,

  // Shorthand for ‘handler: handler’
  handler,

  // Concise Methods
  toString() {
    // Super calls
    return 'd ' + super.toString()
  },

  // Computed (dynamic) property names
  [ 'prop_' + (() => 42)() ]: 42
}
