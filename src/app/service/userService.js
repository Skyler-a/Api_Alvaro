const userRepository = require('../repository/userRepository')
const validateCpf = require('../utils/validateCpf')

class UserService {
    async createUser(payload) {
        const cpfValidation = await validateCpf(payload.cpf)
        if (cpfValidation === false) throw new Error('Invalid Cpf');
        const result = await userRepository.createUser(payload)
        return result
    }
    async getUser(){
        const result = await userRepository.getUser()
        return result
    }
    async getUserById(id){
        const result = await userRepository.getUserById(id)
        return result
    }
    async updateUser(payload, id){
        const result = await userRepository.updateUser(payload, id)
        return result
    }
    async deleteUser(id){
        const result = await userRepository.deleteUser(id)
        return result
    }
}

module.exports = new UserService();