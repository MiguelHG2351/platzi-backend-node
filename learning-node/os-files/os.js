const os = require('os')

// console.log(`CPUs:`)
// console.log(os.cpus())
console.log(os.networkInterfaces()['Wi-Fi 2'].map(l => l.address))
console.log('Free memory: ',os.freemem())
console.log('Type ', os.type())
console.log('SO version ', os.release())
console.log('User info: ', os.userInfo())