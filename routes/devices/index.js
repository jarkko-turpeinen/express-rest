const routes = require('express').Router()
routes.get('/', require('./get'))
routes.use('/:id/cpu', require('./cpu'))
routes.use('/:id/dtu', require('./dtu'))
module.exports = routes