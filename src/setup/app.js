const express = require('express')
var bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

//This will execute the db connect script. We don't need to wait
//for the connection, Mongoose handles that on the models
require('./db')

const routes = {
  '/health': require('../routes/health'),
  '/users': require('../routes/users')
}

Object.keys(routes).forEach((route) => {
  app.use(route, routes[route])
})

module.exports = app
