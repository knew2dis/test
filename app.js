const _ = require('lodash')

const items = new Array(1, [2,[3,[4]]])
const flat = _.flattenDeep(items)
console.log(flat)
