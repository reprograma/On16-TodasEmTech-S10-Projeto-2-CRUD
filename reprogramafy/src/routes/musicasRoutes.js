const controller = require('../controller/musicasController')
const express = require('express')
const { Router } = require('express')

const router = express.Router()

router.get('/biblioteca', controller.getAllSongs)
router.get('/artista', controller.getArtista)
router.get('/buscarmusica/:id', controller.getMusic)
router.post('/cadastrar', controller.addSong)
router.put('/atualizar/:id', controller.updateSong)
router.delete('/deletar/:id', controller.deleteSong)
router.patch('/favoritar/:id', controller.updatefavorited)

module.exports = router