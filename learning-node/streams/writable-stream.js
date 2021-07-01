const { Readable } = require('stream')
const readable = new Readable();

readable.push(`${0/0}`.repeat(10).concat('Jupiiiiii!'))
readable.push(null)
readable.pipe(process.stdout)
