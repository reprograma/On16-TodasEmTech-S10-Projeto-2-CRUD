const controller = require ('../controller/musicasController.js')
const express = require('express')

const router = express.Router()

router.get('/musics', controller.getAllMusics) //retorna todas as músicas
router.get('/musics/:id', controller.getMusic)// retorna música por id
router.get('/musics/artist', controller.getMusicByArtist) // retorna músicas dos artistas
router.post('/add/music', controller.addMusic) //
router.put('/update/:id', controller.atualizarMusic)
router.delete('/musics/:id', controller.deleteMusic)
router.patch('/musics/:id/favorited', controller.rateMusic)

module.exports = router