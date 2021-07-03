const express = require('express')
const app = express()

const { config } = require('./config')
const moviesApi = require('./routes/movies')

app.use(express.json())
moviesApi(app)

app.listen(config.port, () => {

    console.log(`server on port ${config.port}`)
})