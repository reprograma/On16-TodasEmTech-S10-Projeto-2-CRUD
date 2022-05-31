// Criando nossas rotas

const controller = require('../controller/musicasController') // chama o controller de musicas

const express = require('express') // chamando o express

// Função de rotas do express
const router = express.Router()

// router, metodo http (rota, função)
router.get("/musics", controller.getAllMusics)
router.get("/musics/:id", controller.getMusicId)
router.get("/musics/artists", controller.getMusicArtist)
router.post("/musics", controller.addMusic)
router.put("/musics/:id", controller.updateMusic)
router.delete("/musics/:id", controller.deleteMusic)
router.patch("/musics/:id/favorited", controller.favoritedMusic)

// Exportar para ser usado no app.js
module.exports = router