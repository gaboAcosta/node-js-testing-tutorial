
const express = require('express')
const router = new express.Router()
const controller = require('../controllers/health')

router.get('/', controller.getHealth)

module.exports = router
