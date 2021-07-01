const fs = require('fs')

fs.copyFile(__dirname + '/naranja.txt', __dirname + '/limon.txt', err => {
    if(err)
    return console.log(err)

    console.log('Naranja.txt fue copiado como limon.txt')
})