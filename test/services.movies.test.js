const assert = require('assert').strict
const proxyquire = require('proxyquire')

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib')

describe('services - movies', function() {
    const MoviesServices = proxyquire('../services/movies', {
        '../lib/mongo': MongoLibMock
      });

    const movieService = new MoviesServices.MovieServices()

    describe('when getMovies method is called', async function() {
        it('should call the getall mongoLib method', async function() {
            await movieService.getMovies({})
            assert.deepStrictEqual(getAllStub.called, true)
        })
    })
})
