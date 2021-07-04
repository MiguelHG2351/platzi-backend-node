const moviesMock = [
    {
      "_id": "60e11bdfd933c031a8626de7",
      "title": "Adventures of the Wilderness Family, The",
      "year": 2003,
      "cover": "http://dummyimage.com/233x112.png/dddddd/000000",
      "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      "duration": 65,
      "contentRaiting": "G",
      "source": "http://google.fr/leo/rhoncus/sed/vestibulum/sit/amet.json",
      "tags": ["Crime|Drama", "Action|Drama"]
    },
    {
      "_id": "60e11c0dd933c031a8626de8",
      "title": "Paulette",
      "year": 2007,
      "cover": "http://dummyimage.com/199x105.png/5fa2dd/ffffff",
      "description": "Vestibulum quam sapien, varius ut, blandit non",
      "duration": 68,
      "contentRaiting": "NC-17",
      "source": "http://nhs.uk/enim/sit/amet/nunc/viverra/dapibus.html",
      "tags": ["Comedy|Crime|Drama", "Animation|Children|Comedy|Fantasy|Musical"]
    },
    {
      "_id": "60e11c72d933c031a8626de9",
      "title": "Summer Stock",
      "year": 1988,
      "cover": "http://dummyimage.com/149x126.png/ff4444/ffffff",
      "description": "Vestibulum quam sapien, varius ut, blandit",
      "duration": 98,
      "contentRaiting": "R",
      "source": "http://yahoo.co.jp/magna/bibendum/imperdiet/nullam.aspx",
      "tags": ["Horror|Sci-Fi", "Documentary", "Comedy"]
    },
    {
      "_id": "60e11c8ad933c031a8626dea",
      "title": "Sagebrush Trail",
      "year": 1995,
      "cover": "http://dummyimage.com/155x192.png/5fa2dd/ffffff",
      "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      "duration": 34,
      "contentRaiting": "NC-17",
      "source": "https://oakley.com/morbi/odio/odio/elementum/eu/interdum.json",
      "tags": ["Drama", "Action|Adventure|Drama", "Comedy|Fantasy"]
    },
    {
      "_id": "60e11ca3d933c031a8626deb",
      "title": "Sounder",
      "year": 1985,
      "cover": "http://dummyimage.com/229x140.png/ff4444/ffffff",
      "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "duration": 18,
      "contentRaiting": "NC-17",
      "source": "https://dedecms.com/ac/tellus/semper.png",
      "tags": ["Drama|Horror|Mystery|Thriller", "Drama"]
    },
    {
      "_id": "60e11d0ad933c031a8626dec",
      "title": "First Man, The (Le Premier Homme)",
      "year": 2006,
      "cover": "http://dummyimage.com/205x250.png/5fa2dd/ffffff",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique.",
      "duration": 55,
      "contentRaiting": "PG",
      "source": "http://ucla.edu/eget/congue/eget/semper/rutrum/nulla/nunc.jpg",
      "tags": ["Documentary", "Drama", "Comedy", "Comedy|Crime", "Documentary"]
    },
    {
      "_id": "60e11d21d933c031a8626ded",
      "title": "Without a Paddle: Nature's Calling",
      "year": 2006,
      "cover": "http://dummyimage.com/232x214.png/dddddd/000000",
      "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      "duration": 54,
      "contentRaiting": "PG",
      "source": "https://fotki.com/in/imperdiet/et/commodo/vulputate/justo/in.html",
      "tags": ["Comedy", "Comedy", "Action|Crime|Drama", "Comedy"]
    },
    {
      "_id": "60e11d37d933c031a8626dee",
      "title": "My Life So Far",
      "year": 1965,
      "cover": "http://dummyimage.com/178x145.png/dddddd/000000",
      "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      "duration": 19,
      "contentRaiting": "PG",
      "source": "http://java.com/sapien/ut/nunc/vestibulum/ante/ipsum/primis.aspx",
      "tags": ["Comedy|Drama", "Drama|Romance"]
    },
    {
      "_id": "60e11d5bd933c031a8626def",
      "title": "Russell Peters: Outsourced",
      "year": 1991,
      "cover": "http://dummyimage.com/132x235.png/5fa2dd/ffffff",
      "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      "duration": 99,
      "contentRaiting": "G",
      "source": "https://chron.com/eget/elit.png",
      "tags": [
        "Adventure|Children|Fantasy",
        "Horror",
        "Action|Sci-Fi|War",
        "Comedy",
        "Action|Adventure|Comedy"
      ]
    },
    {
      "_id": "60e11d73d933c031a8626df0",
      "title": "Take the Lead",
      "year": 2003,
      "cover": "http://dummyimage.com/197x109.png/5fa2dd/ffffff",
      "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      "duration": 43,
      "contentRaiting": "PG-13",
      "source": "http://mashable.com/in/tempor/turpis.png",
      "tags": ["Comedy"]
    }
  ]
  

function filteredMoviesMock(tag) {
    return moviesMock.filter(movie => movie.tags.includes(tag));
  }
  
  class MoviesServiceMock {
    async getMovies() {
      return Promise.resolve(moviesMock);
    }
  
    async createMovie() {
      return Promise.resolve(moviesMock[0]);
    }
  }

module.exports = {
    moviesMock,
    filteredMoviesMock,
    MoviesServiceMock
}
