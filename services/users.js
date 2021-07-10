const MongoLib = require('../lib/mongo')
const bcrypt = require('bcrypt')

class UserDevice {
    constructor() {
        this.collection = 'users'
        this.mongoDB = new MongoLib()
    }

    async getUser({ email }) {
        const [ user ] = await this.mongoDB.getAll(this.collection, { email })
        // console.log(user)
        return user;
    }

    async createUser({ user }) {
        const { name, email, password } = user

        const hashPassword = await bcrypt.hash(password, 10)

        const createUserId = await this.mongoDB.create(this.collection, {
            name,
            email,
            password: hashPassword
        })

        return createUserId
    }
}

module.exports = UserDevice
