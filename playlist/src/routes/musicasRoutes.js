const express = require('express')

const router = express.Router()

const controller = require('../controller/musicasController')

router.get('/todas', controller.getAllMusics)
router.get('/buscar/:id', controller.getIdMusics)
router.get('/biblioteca/artistas', controller.getArtist)
router.post('/adicionar', controller.postAddMusic)
router.put('/change/:id', controller.putUpdateMusics)
router.patch('/atualizar/:id', controller.patchUpdate)
router.delete("/delete/:id", controller.deleteMusics)

module.exports = router

// linha 3 função de rotas de express para isto foi usado o Router
