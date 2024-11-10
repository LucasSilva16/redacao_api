const express = require('express')
const userController = require('../controllers/user_controller')

const router = express.Router()


router.post('/auth', userController.authUser)
router.post('/createUser', userController.createUser)

module.exports = router