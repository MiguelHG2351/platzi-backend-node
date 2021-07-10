const express = require('express')
const passport = require('passport')
const boom = require('@hapi/boom')
const cookieParser = require('cookie-parser')
const axios = require('axios')

const config = require('./config')

const app = express()

// body parser
app.use(express.json())
app.use(cookieParser())

const THIRTY_DAYS_IN_SEC = 259200000
const TWO_HOURS_IN_SEC = 7200000

// basic strategies
require('./utils/auth/strategies/basic')

app.post('/auth/sign-in', (req, res, next) => {
    const { rememberMe } = req.body

    passport.authenticate('basic', function (err, data) {
        try {
            if (err) {
                return next(boom.unauthorized())
            }

            const { token, user } = data

            req.login(data, { session: false }, async function (err) {
                if (err) {
                    return next(err)
                }
                res.cookie('token', token, {
                    httpOnly: !config.isDev,
                    secure: !config.isDev,
                    maxAge: rememberMe ? THIRTY_DAYS_IN_SEC : TWO_HOURS_IN_SEC,
                })

                res.status(200).json(user)
            })
        } catch (err) {
            next(err)
        }
    })(req, res, next)
})

app.post('/auth/sign-up', async (req, res, next) => {
    const { body: user } = req

    try {
        await axios({
            url: `${config.apiUrl}/api/auth/sign-in`,
            method: 'post',
            data: user,
        })

        res.status(201).json({ message: 'user created created created' })
    } catch (err) {
        next(err)
    }
})

// app.get('/movies', async (req, res, next) => {})

app.post('/user-movies', async (req, res, next) => {
    try {
        const { body: userMovie } = req
        const { token } = req.cookies
        const { data, status } = await axios({
            url: `${config.apiUrl}/api/user-movies`,
            headers: { Authorization: `Bearer ${token}` },
            method: 'post',
            data: userMovie,
        })

        if (status !== 201) {
            return next(boom.badImplementation())
        }

        res.status(201).json(data)
    } catch (error) {
        next(error)
    }
})

app.delete('/user-movies/:userMovieId', async (req, res, next) => {
    try {
        const { userMovieId } = req.params
        const { token } = req.cookies

        const { data, status } = await axios({
            url: `${config.apiUrl}/api/user-movies/${userMovieId}`,
            headers: { Authorization: `Bearer ${token}` },
            method: 'delete',
        })

        if (status !== 200) {
            return next(boom.badImplementation())
        }

        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
})

app.listen(config.port, () => {
    // eslint-disable-next-line
    console.log(`Server on port ${config.port}`)
})
