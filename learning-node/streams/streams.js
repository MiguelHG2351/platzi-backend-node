const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req, res) => {
    fs.readFile('./big', (err, data) => {
        if(err)
            return res.end(err);
        return res.end(data)
    })
})