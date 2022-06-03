const controller = require('../controller/musicasController') //rota que acessa o arquivo controle dos Podcast
const express = require('express') //importa o express
const router = express.Router() //importa rotas do express

//Rotas Músicas
router.get('/musicbiblioteca', controller.getAllSongs)
router.get('/musicbiblioteca/artist', controller.getArtist)
router.get('/musicbiblioteca/:id', controller.getSong)
router.post("/addsong", controller.addSong)
router.put('/attsong/:id', controller.attSong)
router.delete("/delete/:id", controller.deleteSong)
router.patch('/favmusic/:id/song', controller.statusSong)


//Permite exportar
module.exports = router