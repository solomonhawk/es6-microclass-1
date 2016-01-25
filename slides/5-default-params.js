function toPrecision(number, precision = 1) {
  return Number(num).toFixed(precision)
}



function foo(x = 3, y = x) { .. }

foo()     // x = 3, y = 3
foo(7)    // x = 7, y = 7
foo(7, 2) // x = 7, y = 2
