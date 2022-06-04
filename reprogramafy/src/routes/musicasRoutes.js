const controller = require('../controller/musicasController.js')
const express = require('express')

const routerMusica = express.Router()

routerMusica.get('/songs', controller.getSongs)
routerMusica.get('/songs/:id', controller.getMusic)
routerMusica.get('/songs/artist', controller.getMusicByArtist)
routerMusica.post('/add/song', controller.addMusic)
routerMusica.put('/update/:id', controller.atualizarMusic)
routerMusica.delete('/songs/:id', controller.deleteMusic)
routerMusica.patch('/songs/:id/favorited', controller.rateMusic)

module.exports = routerMusica