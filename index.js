const express = require('express')
const app = express()

const { config } = require('./config')
const moviesApi = require('./routes/movies')

const { logErrors, errorHandler, wrapError } = require('./utils/middlewares/errorHandlers')
const notFoundHandler = require('./utils/middlewares/notFoundHandler')

app.use(express.json())
moviesApi(app)
// Catch 404
app.use(notFoundHandler)

// Error handlers
app.use(logErrors)
app.use(wrapError)
app.use(errorHandler)

app.listen(config.port, () => {

    console.log(`server on port ${config.port}`)
})