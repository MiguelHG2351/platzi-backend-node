const { moviesMock } = require('../utils/mocks/movies')

class MovieServices {
    async getMovies() {
        const movies = await Promise.resolve(moviesMock)
        return movies || []
    }

    async getMovie() {
        const movie = await Promise.resolve(moviesMock[0])
        return movie || {}
    }

    async createMovie() {
        const createMovie = await Promise.resolve(moviesMock[0].id)
        return createMovie
    }

    async updateMovie() {
        const updateMovies = await Promise.resolve(moviesMock[0].id)
        return updateMovies
    }

    async deleteMovie() {
        const deleteMovies = await Promise.resolve(moviesMock[0].id)
        return deleteMovies
    }
}

module.exports = { MovieServices }
