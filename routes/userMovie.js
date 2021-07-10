const express = require('express')
const passport = require('passport')
const UserMovieService = require('../services/userMovies')
const validationHandler = require('../utils/middlewares/validationHandler')
const scopesValidationHandler = require('../utils/middlewares/scopesValidationHandler')

const { movieIdSchema } = require('../utils/schema/movies')
const { userIdSchema } = require('../utils/schema/user')
const { createUserMovieSchema } = require('../utils/schema/userMovies')

// JWT strategy
require('../utils/auth/strategies/jwt');

function userMovieApi(app) {
    const router = express.Router()
    app.use('/api/user-movies', router)

    const userMoviesService = new UserMovieService()

    router.get(
        '/',
        passport.authenticate('jwt', { session: false }),
        scopesValidationHandler(['read:user-movies']),
        validationHandler({ userId: userIdSchema }, 'query'),
        async (req, res, next) => {
            const { userId } = req.query
            try {
                const userMovie = await userMoviesService.getUserMovies({
                    userId,
                })

                res.status(200).json({
                    data: userMovie,
                    message: 'user movies listed',
                })
            } catch (err) {
                next(err)
            }
        }
    )

    router.post(
        '/',
        passport.authenticate('jwt', { session: false }),
        scopesValidationHandler(['create:user-movies']),
        validationHandler(createUserMovieSchema),
        async (req, res, next) => {
            const { body: userMovie } = req

            try {
                const createdUserMovieId =
                    await userMoviesService.createUserMovies({ userMovie })

                res.status(201).json({
                    data: createdUserMovieId,
                    message: 'user movie created',
                })
            } catch (err) {
                next(err)
            }
        }
    )

    router.delete(
        '/:userMovieId',
        passport.authenticate('jwt', { session: false }),
        scopesValidationHandler(['delete:user-movies']),
        validationHandler({ userMovieId: movieIdSchema }, 'params'),
        async (req, res, next) => {
            const { userMovieId } = req.params

            try {
                const deletedUserMovieId =
                    await userMoviesService.deleteUserMovies({ userMovieId })

                res.status(200).json({
                    data: deletedUserMovieId,
                    message: 'user movie deleted',
                })
            } catch (err) {
                next(err)
            }
        }
    )
}

module.exports = userMovieApi
