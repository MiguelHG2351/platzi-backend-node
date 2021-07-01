const http = require('http')
const server = http.createServer();
const PORT = process.env.PORT || 3000

server.on('request', (req, res) => {
    if(req.method === 'POST' && req.url === '/echo') {
        let body = []

        req.on('data', (chunk) => {
            body.push(chunk)
        })
        .on('end', () => {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            body = Buffer.concat(body).toString()
            res.end(body)
        })

    }  else {
        res.statusCode = 404
        res.end()
    }
})

server.listen(PORT, () => {
    console.log(`server on port: ${PORT}`)
})
