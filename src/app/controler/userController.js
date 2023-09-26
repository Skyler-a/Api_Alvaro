const UserService = require('../service/userService')

class UserController {
    async createUser(req, res) {
        try {
            const createUser = await UserService.createUser(req.body)
            return res.status(200).json(createUser)
        } catch (error){
            return res.status(500).json(error)
        }
    }
}
module.exports = new UserController();