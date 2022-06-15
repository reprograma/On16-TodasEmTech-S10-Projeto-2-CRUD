const controller = require('../controller/musicasController')


const express = require('express')


const router = express.Router()






router.get('/musics', controller.getAllMusics)
router.get('/musics/artist', controller.getArtist)
router.get('/musics/:id', controller.getMusic)
router.post('/musics/add', controller.createMusic)
router.put('/musics/update/:id', controller.updateMusic)
router.patch('/musics/update/:id/favorited', controller.updateFavorited)
router.delete('/musics/:id', controller.deleteMusic)







module.exports = router