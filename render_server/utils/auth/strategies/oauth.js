const passport = require('passport')
const axios = require('axios')
const { OAuth2Strategy } = require('passport-oauth')
const boom = require('@hapi/boom')

const config = require('../../../config')

const GOOGLE_AUTHORIZATION_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GOOGLE_URSERINFO_URL = 'https://openidconnect.googleapis.com/v1/userinfo';

const oAuthStrategy = new OAuth2Strategy({
    authorizationURL: GOOGLE_AUTHORIZATION_URL,
    tokenURL: GOOGLE_TOKEN_URL,
    clientID: config.googleClientId,
    clientSecret: config.googleSecretClient,
    callbackURL: '/auth/google-0Auth/callback'
}, async function(accessToken, refreshToken, profile, cb) {
    const { data, status } = await axios({
        url: `${config.apiUrl}/api/auth/sign-provider`,
        method: 'post',
        data: {
            name: profile.name,
            email: profile.email,
            password: profile.id,
            apiKeyToken: config.apiKeyToken
        }

    })

    if(!data || status !== 200) {
        return cb(boom.unauthorized())
    }

    return cb(null, data)
})

oAuthStrategy.userProfile = function (accessToken, done) {
    this._oauth2.get(GOOGLE_URSERINFO_URL, accessToken, (err, body) => {
        if(err) {
            return done(err)
        }
        try {
            const { sub, name, email } = JSON.parse(body)
            const profile = {
                id: sub,
                name,
                email
            }

            return done(null, profile)
        } catch(parseError) {
            done(parseError)
        }
    })
}

passport.use('google-oauth', oAuthStrategy)
