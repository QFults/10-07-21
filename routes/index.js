const router = require('express').Router()

router.use('/api', require('./testRoutes.js'))

module.exports = router
