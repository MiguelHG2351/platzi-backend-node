const express = require('express')
const { MovieServices } = require('../services/movies')

function moviesApi(app) {
    const router = express.Router()

    app.use('/api/movies', router)

    const movieServices = new MovieServices()

    router.get('/', async (req, res, next) => {
        const { tags  } = req.query
        
        try {
            const movies = await movieServices.getMovies({tags})
            console.log(movies)
            res.status(200).json({
                data: movies,
                message: 'movies listed'
            })
        } catch (err) {
            next(err)
        }
    })

    router.get('/:movieId', async (req, res, next) => {
        const movieId = req.params
        
        try {
            const movies = await movieServices.getMovie({ movieId })
            res.status(200).json({
                data: movies,
                message: 'movie retrieved'
            })
        } catch (err) {
            next(err)
        }
    })

    router.post('/', async (req, res, next) => {
        const { body: movie } = req
        
        try {
            const createdMovie = await movieServices.createMovie({movie})
            res.status(201).json({
                data: createdMovie,
                message: 'movie created'
            })
        } catch (err) {
            next(err)
        }
    })

    router.put('/:movieId', async (req, res, next) => {
        const { movieId } = req.params
        const { body: movie } = req
        
        try {
            const updatedMovieId = await movieServices.updateMovie({movieId, movie})
            res.status(200).json({
                data: updatedMovieId,
                message: 'movie updated'
            })
        } catch (err) {
            next(err)
        }
    })
    
    router.delete('/:movieId', async (req, res, next) => {
        const { movieId } = req.params
        
        try {
            const deletedMovieId = await movieServices.deleteMovie({ movieId })
            res.status(200).json({
                data: deletedMovieId,
                message: 'movie deleted'
            })
        } catch (err) {
            next(err)
        }
    })
    
}

module.exports= moviesApi