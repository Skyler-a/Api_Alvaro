const UserService = require('../service/userService')

class UserController {
    async createUser(req, res) {
        try {
            const createUser = await UserService.createUser(req.body)
            return res.status(200).json(createUser)
        } catch (error){
            console.log(error)
            return res.status(400).json(error);
        }
    }
    async getUser(req, res){
        try {
            const getUser = await UserService.getUser()
            return res.status(200).json(getUser)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
    async getUserById(req, res){
        try {
            const getUserById = await UserService.getUserById(req.params.id)
            return res.status(200).json(getUserById)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
    async updateUser(req, res){
        try {
            const updateUser = await UserService.updateUser(req.body, req.params.id)
            return res.status(200).json(updateUser)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
    async deleteUser(req, res){
        try {
            const deleteUser = await UserService.deleteUser(req.params.id, req.params.idAdmin)
            return res.status(200).json(deleteUser)
        } catch (error) {
            console.log(error)
            return res.status(400).json(error)
        }
    }

}
module.exports = new UserController();