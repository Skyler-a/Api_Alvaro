const userRepository = require('../repository/userRepository')

class UserService {
    async createUser(payload) {
        const result = await userRepository.createUser(payload)
        return result
    }
}

module.exports = new UserService();