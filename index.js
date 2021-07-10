const express = require('express')
const app = express()

const { config } = require('./config')
const moviesApi = require('./routes/movies')
const userMoviesApi = require('./routes/userMovie')
const authApi = require('./routes/auth')

const { logErrors, errorHandler, wrapError } = require('./utils/middlewares/errorHandlers')
const notFoundHandler = require('./utils/middlewares/notFoundHandler')

app.use(express.json())

authApi(app)
moviesApi(app)
userMoviesApi(app)
// Catch 404
app.use(notFoundHandler)

// Error handlers
app.use(logErrors)
app.use(wrapError)
app.use(errorHandler)

app.listen(config.port, () => {

    console.log(`server on port ${config.port}`)
})