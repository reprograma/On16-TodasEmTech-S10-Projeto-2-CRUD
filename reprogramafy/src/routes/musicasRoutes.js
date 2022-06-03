const controller = require('../controller/musicasController')

const express = require('express')

const router = express.Router()

router.get('/playlist', controller.getAllMusics)
router.get('/playlist/:id', controller.getMusicById)
router.get('/artist', controller.getMusicByArtist)
router.post('/register', controller.registerNewMusic)
router.put('/update/:id', controller.updateMusicById)
router.delete('/delete/:id', controller.deleteMusicById)
router.patch('/update/favorite/:id', controller.updateFav)

module.exports = router