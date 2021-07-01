const { Readable } = require('stream')
const readable = new Readable({
    read(size) {
        setTimeout(() => {
            if(this.currentCharCode > 90) {
                this.push(null);
                return ;
            }
            this.push(String.fromCharCode(this.currentCharCode++))
        }, 100)
    }
});

readable.currentCharCode = 65
readable.pipe(process.stdout)
