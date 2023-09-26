const database = require('../../models')

class UserRepository {
    async createUser(payload) {
        return database.Users.create(payload)
    }
    async getUser(){
        return database.Users.findAll()
    }
    async getUserById(id){
        return database.Users.findByPk(id)
    }
    async updateUser(payload, id){
        return database.Users.update(payload, {
            where: {
                id: id
            }
        })
    }
    async deleteUser(id){
        return database.Users.destroy({
            where: {
                id: id
            }
        })
    }
}
module.exports = new UserRepository();