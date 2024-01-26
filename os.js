//we give const os all the methods and properties the 'os' module provides
const os = require('os')
//method about current user
const user = os.userInfo()
console.log(user)
//method that displays the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)