const controller = require('../controller/musicasController')
const express = require('express')

const router = express.Router()

router.get('/biblioteca', controller.getAllSongs)

module.exports = router