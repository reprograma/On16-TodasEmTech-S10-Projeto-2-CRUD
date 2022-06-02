//chama o controller de podcasts
const controller = require('../controller/musicasController')

//chamando express
const express = require('express')

// funcao de rotas de express
const router = express.Router()

// router, metodo http (rota, função)
router.get ("/playlist", controller.getAllSongs)
router.get("/playlist/listar/:id", controller.getSongbyID)
router.get("/playlist/artistas", controller.getArtists)
router.post("/playlist/adicionarMusica", controller.addSong)
router.patch("/playlist/favoritar/:id", controller.favoriteSong)
router.put("/playlist/atualizar/:id", controller.attSong)
router.delete("/playlist/deletar/:id", controller.deleteSong)
 

// exportar para seer usado no app.js
module.exports = router
