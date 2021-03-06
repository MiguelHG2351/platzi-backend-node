const passport = require('passport')
const { Strategy, ExtractJwt } = require('passport-jwt')
const boom = require('@hapi/boom')

const UsersServices = require('../../../services/users')
const { config } = require('../../../config/')

passport.use(new Strategy({
    secretOrKey: config.authJWTSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}, async function (tokenPayload, cb) {
    const usersServices = new UsersServices()
    try {
        const user = await usersServices.getUser({ email: tokenPayload.email })
        
        if(!user) {
            return cb(boom.unauthorized(), false)
        }
        
        delete user.password
        
        return cb(null, {...user, scopes: tokenPayload.scopes})
    } catch(err) {
        return cb(err)
    }
}))
