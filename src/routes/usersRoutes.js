const {Router} = require('express')
const UsersController = require('../app/controler/userController')
const userPostMiddleware = require('../app/middlewares/userPostMiddleware')
const userPutMiddleware = require('../app/middlewares/userPutMiddleware')

const router = Router()

router
    .post('/api/v1/user', userPostMiddleware, UsersController.createUser)
    .put('/api/v1/user/:id', userPutMiddleware, UsersController.updateUser)
    .delete('/api/v1/user/:id/:idAdmin', UsersController.deleteUser)
    .get('/api/v1/user', UsersController.getUser)
    .get('/api/v1/user/:id', UsersController.getUserById)

module.exports = router