const {Router} = require('express')
const UsersController = require('../app/controler/userController')

const router = Router()

router
    .post('/api/v1/user', UsersController.createUser)

module.exports = router