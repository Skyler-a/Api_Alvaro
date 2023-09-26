const database = require('../../models')

class UserRepository {
    async createUser(payload) {
        return database.Users.create(payload)
    }
}
module.exports = new UserRepository();