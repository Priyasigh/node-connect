const router = require('express').Router()
const {create} = require('../controller/blooddonor')

router.post('/create',create)
module.exports = router