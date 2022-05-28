const controller = require('../controller/podcastsController')
const express = require('express')

const router = express.Router()

router.get('/biblioteca', controller.getAllPods)

module.exports = router