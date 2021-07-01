// const fs = require('fs')

// try {
//     const file = process.argv[2]
//     const content = fs.readFileSync(file).toString()
//     const lines = content.split('\n').length
//     console.log(lines)
// } catch (err) {
//     console.error(err)
// }

const fs = require('fs')

const file = process.argv[2]
if(!file) {
    throw new Error('Se te olvido ingresar la url del archivo')
}

    const content = fs.readFile(file, function(err, content) {
        if(err) {
            return console.error(err);
        }
        
        const lines = content.toString().split('\n').length
        console.log(lines)
    })
