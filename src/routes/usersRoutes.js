const {Router} = require('express')
const UsersController = require('../app/controler/userController')

const router = Router()

router
    .post('/api/v1/user', UsersController.createUser)
    .put('/api/v1/user/:id', UsersController.updateUser)
    .delete('/api/v1/user/:id', UsersController.deleteUser)
    .get('/api/v1/user', UsersController.getUser)
    .get('/api/v1/user/:id', UsersController.getUserById)

module.exports = router