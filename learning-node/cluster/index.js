const cluster = require('cluster')
const http = require('http')

const numCPUs = require('os').cpus().length

if(cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    for(let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', (worker) => {
        console.log(`worker ${worker.process.pid} is dead`)
    });
} else {
    http.createServer((req, res) => {
        res.writeHead(200)
        res.end('Hello world');
        
    }).listen(3000)

    console.log(`Worker ${process.pid} is started`)
}

