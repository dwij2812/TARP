const express = require('express')
const router = express.Router()
const main_controller = require('../controllers/main.controller')
router.get('/', main_controller.index)
module.exports = router
