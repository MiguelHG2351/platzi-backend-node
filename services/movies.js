const mongoLib = require('../lib/mongo')

class MovieServices {
    constructor() {
        this.collection = 'movies'
        this.mongoDB = new mongoLib()
    }

    async getMovies({ tags }) {
        const query = tags && {tags: {'$in': tags}}
        
        const movies = await this.mongoDB.getAll(this.collection, query)
        return movies || []
    }

    async getMovie({ movieId }) {

        const movie = await this.mongoDB.get(this.collection, movieId)
        return movie || {}
    }

    async createMovie({ movie }) {
        const createMovie = await this.mongoDB.create(this.collection, movie)
        return createMovie || {}
    }

    async updateMovie({ movieId, movie } = {}) {
        const updateMovies = await this.mongoDB.update(this.collection, movieId, movie)
        return updateMovies
    }

    async deleteMovie({ movieId }) {
        const deleteMovies = await this.mongoDB.delete(this.collection, movieId)
        return deleteMovies
    }
}

module.exports = { MovieServices }
