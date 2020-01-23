const express = require('express')
const api     = express.Router()
const routes = require('./index')

api.use('/api/v1/login', routes.login)

module.exports = api;
