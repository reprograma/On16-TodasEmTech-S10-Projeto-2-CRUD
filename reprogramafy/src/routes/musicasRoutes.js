const controller = require('../controller/musicasController')
const express = require('express')
const router = express.Router()

    router.get('/playlist', controller.getAllSongs)
    router.get('/playlist/buscar/:id', controller.getSong)
    router.get('/playlist/artista', controller.getByArtist)
    router.post('/adicionar', controller.addSong)
    router.put('/playlist/:id', controller.updateSong)
    router.patch('/favoritos/:id', controller.favoritedSong)
    router.delete('/delete/:id', controller.deleteSong)

module.exports = router