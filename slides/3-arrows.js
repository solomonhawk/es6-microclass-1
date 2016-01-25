// Expression bodies (implied 'return')
let odds  = evens.map(v => v + 1)
let nums  = evens.map((v, i) => v + i)
let pairs = evens.map(v => ({even: v, odd: v + 1}))

// Statement bodies
let multiplesOfFive = nums.map(v => {
  return v % 5 === 0
})

// Lexical this
let jedi = {
  name: 'Obi Wan Kenobi',
  enemies: ['Darth Vader'],
  printFoes() {
    this.enemies.forEach(enemy =>
      console.log(this.name + ' despises ' + enemy)
    )
  }
}
