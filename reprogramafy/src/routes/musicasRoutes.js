const express = require("express")
const router = express.Router()
const controller = require("../controllers/musicasController")

router.get("/musicas", controller.getAllMusic)
router.get("/musica/buscar/:id", controller.getMusic)
router.get("/musica/artista", controller.getArtist)
router.post("/musicas", controller.addMusic)
router.put("/musica/:id", controller.updateMusic)
router.patch("/musica/:id/favoritada", controller.updateFav)
router.delete("/delete/:id", controller.deleteMusic)

module.exports = router;



