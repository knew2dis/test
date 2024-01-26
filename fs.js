//const {readFileSync, writeFileSync} = require('fs')
//the above is called destructuring and does the same as the code commented out below
const fs = require('fs')
console.log('start')
const first = fs.readFileSync('./content/first.txt', 'utf8')
const second = fs.readFileSync('./content/second.txt', 'utf8')
//const first = readFileSync('./content/first.txt', 'utf8')
//const second = readFileSync('./content/second.txt', 'utf8')
//console.log(`${first}, ${second}`)
fs.writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'})
console.log('done with this task')
console.log('starting the next one')

/*const {readFileSync, writeFileSync} = require('fs')

const first = writeFileSync('./content/subfolder/someoddball.txt', 'This prolly will not work')*/

/*const apple = require('fs')
const first = apple.readFileSync('./content/subfolder/someoddball.txt', 'utf8')
console.log(first)*/
