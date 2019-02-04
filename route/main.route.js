const express = require('express')
const router = express.Router()
const main_controller = require('../controllers/main.controller')
router.get('/', main_controller.index)
router.post('/', main_controller.login)
router.post('/profile', main_controller.detail)
router.post('/register',main_controller.register)
router.post('/regular',main_controller.regular)
module.exports=router
