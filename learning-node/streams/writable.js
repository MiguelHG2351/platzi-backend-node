const { Writable } = require('stream')

const writable = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString())
        callback()
    }
})

process.stdin.pipe(writable)
