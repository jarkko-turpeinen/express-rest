const routes = require('express').Router()
routes.get('/', require('./get'))
module.exports = routes