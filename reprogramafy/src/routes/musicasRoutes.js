const controller = require('../controller/musicasController')

const express = require('express') // chamando express

// funcao de rotas do express
const router = express.Router()

// router. metodo http (rota, funcao)
router.get('/musics', controller.getAllMusics)

module.exports = router