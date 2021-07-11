const express = require('express')
const passport = require('passport')
const boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')
const ApiKeysService = require('../services/apiKeys')
const UserService = require('../services/users')
const validationHandler = require('../utils/middlewares/validationHandler')

const { createUserSchema, createProviderUserSchema } = require('../utils/schema/user')

const { config } = require('../config')

require('../utils/auth/strategies/basic')

function authApi(app) {
    const router = express.Router()
    app.use('/api/auth', router)

    const apiKeysService = new ApiKeysService()
    const userServices = new UserService()

    router.post('/sign-in', async function (req, res, next) {
        const { apiKeyToken } = req.body
        
        if(!apiKeyToken) {
            return next(boom.unauthorized('apiKeyToken is required'))
        }
        passport.authenticate('basic', function (error, user) {
            try {
                if(error || !user) {
                    return next(boom.unauthorized())
                }
                
                req.login(user, { session: false }, async function (err) {
                    if(err) {
                        return next(err)
                    }
                    
                    const apiKey = await apiKeysService.getApiKey({ token: apiKeyToken })
                    
                    if(!apiKey) {
                        return next(err)
                    }

                    const { _id: id, name, email } = user

                    const payload = {
                        sub: id,
                        name,
                        email,
                        scopes: apiKey.scopes
                    }

                    const token = jwt.sign(payload, config.authJWTSecret, {
                        expiresIn: '10h'
                    })
                    
                    return res.status(200).json({ token, user: { id, name, email } })
                })
            } catch(err) {
                return next(err)
            }
        })(req, res, next)
    })

    router.post('/sign-up', validationHandler(createUserSchema), async (req, res, next) => {
        const { body: user } = req

        try {
            const createdUserId = await userServices.createUser({ user })

            res.status(201).json({
                data: createdUserId,
                message: 'user created'
            })
        } catch(err) {
            next(err)
        }
    })

    router.post('/sign-provider', validationHandler(createProviderUserSchema), async (req, res, next) => {
        const { apiKeyToken, ...user } = req.body
        if(!apiKeyToken) {
            return next(boom.unauthorized())
        }

        try {
            const queryUser = await userServices.getOrCreateUser({ user })
            const apiKey = await apiKeysService.getApiKey({ token: apiKeyToken })

            if(!apiKey) {
                return next(boom.unauthorized())
            }

            const { _id: id, name, email } = queryUser
            const payload = {
                id,
                name,
                email,
                scopes: apiKey.scopes
            }

            const token = jwt.sign(payload, config.authJWTSecret, {
                expiresIn: '10h'
            })

            res.status(200).json({ token, user: { id, name, email } })

        } catch(err) {
            next(err)
        }
    })
}

module.exports = authApi
