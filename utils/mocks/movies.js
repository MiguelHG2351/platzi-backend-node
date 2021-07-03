const moviesMock = [
    {
        id: '82ca85dd-4444-4511-9022-510d8428e1be',
        title: 'Adventures of the Wilderness Family, The',
        year: 2003,
        cover: 'http://dummyimage.com/233x112.png/dddddd/000000',
        description:
            'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        duration: 2065,
        contentRaiting: 'G',
        source: 'http://google.fr/leo/rhoncus/sed/vestibulum/sit/amet.json',
        tags: ['Crime|Drama', 'Action|Drama'],
    },
    {
        id: 'da793d77-0fc2-4ca3-8833-5ed0210bf303',
        title: 'Paulette',
        year: 2007,
        cover: 'http://dummyimage.com/199x105.png/5fa2dd/ffffff',
        description:
            'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
        duration: 1968,
        contentRaiting: 'NC-17',
        source: 'http://nhs.uk/enim/sit/amet/nunc/viverra/dapibus.html',
        tags: [
            'Comedy|Crime|Drama',
            'Animation|Children|Comedy|Fantasy|Musical',
        ],
    },
    {
        id: 'babfc58a-fa84-40d6-908b-c105c5352116',
        title: 'Summer Stock',
        year: 1988,
        cover: 'http://dummyimage.com/149x126.png/ff4444/ffffff',
        description:
            'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
        duration: 1898,
        contentRaiting: 'R',
        source: 'http://yahoo.co.jp/magna/bibendum/imperdiet/nullam.aspx',
        tags: ['Horror|Sci-Fi', 'Documentary', 'Comedy'],
    },
    {
        id: '7c34befc-6b76-428a-91c6-b9b598ce1cba',
        title: 'Sagebrush Trail',
        year: 1995,
        cover: 'http://dummyimage.com/155x192.png/5fa2dd/ffffff',
        description:
            'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
        duration: 2034,
        contentRaiting: 'NC-17',
        source: 'https://oakley.com/morbi/odio/odio/elementum/eu/interdum.json',
        tags: ['Drama', 'Action|Adventure|Drama', 'Comedy|Fantasy'],
    },
    {
        id: '1bbe95dd-ace7-441b-adf1-4f33f8fef390',
        title: 'Sounder',
        year: 1985,
        cover: 'http://dummyimage.com/229x140.png/ff4444/ffffff',
        description:
            'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        duration: 2018,
        contentRaiting: 'NC-17',
        source: 'https://dedecms.com/ac/tellus/semper.png',
        tags: ['Drama|Horror|Mystery|Thriller', 'Drama'],
    },
    {
        id: 'c946e373-5a75-4310-b506-a72b6e610593',
        title: 'First Man, The (Le Premier Homme)',
        year: 2006,
        cover: 'http://dummyimage.com/205x250.png/5fa2dd/ffffff',
        description:
            'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
        duration: 2055,
        contentRaiting: 'PG',
        source: 'http://ucla.edu/eget/congue/eget/semper/rutrum/nulla/nunc.jpg',
        tags: ['Documentary', 'Drama', 'Comedy', 'Comedy|Crime', 'Documentary'],
    },
    {
        id: 'c5f01bc6-ef54-4d6d-bec8-94160f083203',
        title: "Without a Paddle: Nature's Calling",
        year: 2006,
        cover: 'http://dummyimage.com/232x214.png/dddddd/000000',
        description:
            'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
        duration: 1954,
        contentRaiting: 'PG',
        source: 'https://fotki.com/in/imperdiet/et/commodo/vulputate/justo/in.html',
        tags: ['Comedy', 'Comedy', 'Action|Crime|Drama', 'Comedy'],
    },
    {
        id: 'cfa5690f-d69e-4e0d-b6a5-1c59321b8cdf',
        title: 'My Life So Far',
        year: 1965,
        cover: 'http://dummyimage.com/178x145.png/dddddd/000000',
        description:
            'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
        duration: 1901,
        contentRaiting: 'PG',
        source: 'http://java.com/sapien/ut/nunc/vestibulum/ante/ipsum/primis.aspx',
        tags: ['Comedy|Drama', 'Drama|Romance'],
    },
    {
        id: '78cd8e40-bfcd-4688-b656-943d6c07c609',
        title: 'Russell Peters: Outsourced',
        year: 1991,
        cover: 'http://dummyimage.com/132x235.png/5fa2dd/ffffff',
        description:
            'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
        duration: 1999,
        contentRaiting: 'G',
        source: 'https://chron.com/eget/elit.png',
        tags: [
            'Adventure|Children|Fantasy',
            'Horror',
            'Action|Sci-Fi|War',
            'Comedy',
            'Action|Adventure|Comedy',
        ],
    },
    {
        id: 'ed825e8b-0a07-424e-a077-457abb45737f',
        title: 'Take the Lead',
        year: 2003,
        cover: 'http://dummyimage.com/197x109.png/5fa2dd/ffffff',
        description:
            'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
        duration: 2043,
        contentRaiting: 'PG-13',
        source: 'http://mashable.com/in/tempor/turpis.png',
        tags: ['Comedy'],
    },
]

module.exports = {
    moviesMock,
}
