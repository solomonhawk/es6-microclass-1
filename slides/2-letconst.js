// http://www.2ality.com/2015/02/es6-scoping.html

function func() {
  if (true) {
    var tmp = 123     // function scope, hoisted
  }

  console.log(tmp)    // 123
}


function func() {
  if (true) {
    let tmp = 123
  }

  console.log(tmp)    // ReferenceError: tmp is not defined
}


function func() {
  let foo = 5

  if ( .. ) {
     let foo = 10     // shadows outer `foo`
     console.log(foo) // 10
  }

  console.log(foo)    // 5
}


// ES5
for (var i = 0; i < 10; i++) {
  setTimeout(function() { console.log(i) }, 100)
}


// ES6 with let
for (let i = 0; i < 10; i++) {
  setTimeout(function() { console.log(i) }, 100)
}
