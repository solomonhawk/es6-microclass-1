// http://www.2ality.com/2014/05/es6-array-methods.html

/**
 * Class Methods (of, from)
 **/

Array.of(1, null, 'foo')
// => [1, null, 'foo']


let buttons = document.querySelectorAll('button')
Array.from(buttons).forEach(button => console.log(button))
// => logs DOM nodes


/**
 * Prototype Methods (find, findIndex, entries, keys, values)
 **/

Array.fill(value, start?, end?)
let fives = new Array(2).fill(5)
// => [5, 5]

let haystack = ['hay', 'hay', 'hay', 'needle', 'hay']
let found = haystack.find(x => x.length > 3)
// => 'needle'

haystack.findIndex('needle')
// => 4

haystack.entries()
// => [[0, 'hay'], [1, 'hay'], [2, 'hay'], [3, 'neelde'], [4, 'hay']]

haystack.keys()
// => [0, 1, 2, 3, 4]

haystack.values()
// => ['hay', 'hay', 'hay', 'needle', 'hay']
