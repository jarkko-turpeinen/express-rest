var router = require('express').Router()
router.get('/', require('./get'))
router.get('/dtu/:id', require('./dtu'))
router.get('/cpu/:id', require('./cpu'))
module.exports = router