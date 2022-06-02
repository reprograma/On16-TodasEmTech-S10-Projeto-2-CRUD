const controller = require('../controller/musicasController')

const express = require('express')

const router = express.Router()


router.get('/listAll', controller.getAllMusics)
router.get('/getMusic/:id', controller.getMusic)
router.get('/getArtist', controller.getArtist)
router.post('/adicionar', controller.addMusics)
router.put('/attMusic/:id', controller.attMusic)
router.delete('/deletar/:id', controller.deleteMusic)
router.patch('/favoritar/:id', controller.favoriteMusic)
// router.patch('/atualizar/:id', controller.atualizarPods)

module.exports = router