//npm install -g babel-cli@6.26.0
//npm init
//npm install babel-preset-env@1.6.1
//babel input.js --out-file output.js

import otherSquare, { add, name } from './utilities'
import screamName from './scream'

console.log(add(32, 1))
console.log(screamName(name))
console.log(otherSquare(10))

