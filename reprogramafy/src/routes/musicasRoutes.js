const controller = require("../controller/musicasController")
const express = require("express")
const router = express.Router()

router.get("/playlist", controller.getAllMusic)
router.get("/musica", controller.getMusic)
router.get("/musica/artista", controller.getArtist)
router.post("/cadastrar", controller.cadastro)
router.put('/atualizar/:id', controller.update)
router.delete('/delete', controller.deleteMusic)
router.patch('/favorita/:id', controller.favorited)
module.exports = router