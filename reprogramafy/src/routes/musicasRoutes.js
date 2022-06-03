const controller = require("../controller/musicasController")
const express = require("express")
const router = express.Router()

router.get("/playlist", controller.getAllMusic)
router.get("/musica", controller.getMusic)
router.get("/musica/artista", controller.getArtist)
// router.post("/cadastar", controller.cadastro)
// router.put('/atulizar/:id', controler.update)
// router.delete('/delete', controller.deleteMusic)
// router.patch('/favorita/:id', controller.favorited)
module.exports = router