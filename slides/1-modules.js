// http://www.2ality.com/2014/09/es6-modules-final.html

// AMD
define(['jQuery', 'lodash'], function($, _) {
  var module = {
    go: function() {
      _.each( $('foo'), function($foo) {
        // ..
      })
    }
  }

  return module
})




// CJS
var $ = require('jQuery')
var _ = require('lodash')

function go() {
  _.each( $('foo'), function($foo) {
    // ..
  })
}

module.exports = {
  go: go
}




// ES6 Modules

import $ from 'jQuery'
import _ from 'lodash'

function go() {
  _.each( $('foo'), function($foo) {
    // ..
  })
}

export default { go }




// ------ Imports --------------- //
import lodash from 'lodash'
import lodash as _ from 'lodash'
import * as _ from 'lodash'
import lodash, { version } from 'lodash'
import * as _, { version } from 'lodash'

// ------ Inline Exports -------- //

export let pie = 'delicious'
export const pie = 'immutably-delicious'
export function pie() { return 'delicious' }

// ------ Re-Naming ------------- //

const HALF_PI = Math.PI / 2
function foo() {}
export { HALF_PI as HP, foo as bar }

// ------ Re-Exporting ---------- //
export * from 'some/other/module'
export { foo, bar } from 'some/other/module'
export { foo as myFoo } from 'some/other/module'



