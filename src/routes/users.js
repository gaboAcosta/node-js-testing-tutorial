
const express = require('express')
const router = new express.Router()
const controller = require('../controllers/users')

router.get('/', controller.listUsers)
router.post('/', controller.createUser)

module.exports = router
