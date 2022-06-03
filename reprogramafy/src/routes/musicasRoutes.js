// chama o controller
const controller = require('../controller/musicasController')

//chama o express
const express = require('express')

//função de rotas do express
const router = express.Router()

//router metodo http
router.get("/musicas", controller.getAllMusics);
router.get("/musica/buscar/:id", controller.getMusicById);
router.get("/musica/artista", controller.getMusicByArtist);
router.post("/musicas", controller.createMusic);
router.put("/musica/:id", controller.updateMusica);
router.patch("/musica/:id/favoritada", controller.updateFavoritedStatus);
router.delete("/delete/:id", controller.deleteMusica)

module.exports = router



