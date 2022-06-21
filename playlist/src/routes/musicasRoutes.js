const express = require('express')

const router = express.Router()

const controller = require('../controller/musicasController')

router.get('/todas', controller.getAllMusics)
router.get('/buscar/:id', controller.getIdMusics)
router.post('/adicionar', controller.postAddMusic)
module.exports = router

// linha 3 função de rotas de express para isto foi usado o Router
