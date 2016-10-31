// load the modern build
const _ = require('lodash')

const a = _.chunk(['a', 'b', 'c', 'd'], 2)
// => [['a', 'b'], ['c', 'd']]
console.log(a)
_.chunk(['a', 'b', 'c', 'd'], 3)
// => [['a', 'b', 'c'], ['d']]

const b = _.intersection([1, 3], [4, 2], [2, 1])
console.log(b)

const c = _.groupBy([4.2, 6.1, 6.4], n => Math.floor(n))
console.log(c)

console.log(_.reduce([1, 2, 3, 5, 6], (total, n) => total + n))
