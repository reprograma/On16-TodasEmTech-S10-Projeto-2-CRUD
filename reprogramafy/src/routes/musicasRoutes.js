const controller = require('../controller/musicasController')

const express = require('express')

const router = express.Router()

//router.metodo http (rota,função)
router.get('/playlist', controller.getAllMusics)
router.get('/playlist/buscar/:id', controller.getOneMusic)
router.get('/playlist/artista', controller.getByArtista)
router.post('/adicionar', controller.addMusicas)
router.patch('/atualizar/:id', controller.atualizaFavoritas)
router.delete('/delete/:id', controller.deleteMusica)
router.put('/change/:id', controller.updateMusica)

module.exports = router