const controller = require('../controller/musicasController')

const express = require('express')

const router = express.Router()

router.get("/musicas",controller.getAllMusicas)
router.get("/buscar/artista", controller.getPorArtista)
router.get("/buscar/:id", controller.getMusicasid)
router.post("/adicionar", controller.addMusicas)
router.put("/atualizar/:id", controller.updateMusica)
router.delete("/delete/:id", controller.deleteMusica)
router.patch("/:id/favoritos", controller.favoritedMusica)

module.exports = router


