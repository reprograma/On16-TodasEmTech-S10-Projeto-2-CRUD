const controller = require('../controller/musicasController')
const express = require('express')


const router = express.Router()
router.get('/music', controller.getAllMusic)
router.get('/music/:id', controller.getMusicById)
router.get('/search/artist', controller.getByArtist)
router.post('/add', controller.addMusic)
router.put("/alterar/:id", controller.updateMusic)
router.delete("/deletar/:id", controller.deleteMusic)
router.patch("/favoritar/:id", controller.updateFavorited)








module.exports = router