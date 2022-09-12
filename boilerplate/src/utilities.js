//Named export
//Default export

console.log('utilities.js')

const add = (a, b) => a + b

const name = 'Andrew'

const square = (x) => x * x


export { add, name, square as default }