const express = require('express')

const app = express()
const healthController = require('./controllers/health')

app.get('/health', healthController.getHealth)

module.exports = app
