const controller = require("../controller/musicasController")
const express = require("express")
const router = express.Router()

router.get("/musics", controller.getAllMusics)
router.get("/musics/artists", controller.getMusicArtist)
router.get("/musics/:id", controller.getMusicId)
router.patch("/musics/:id/favorited", controller.updateMusicFavorito)
router.put("/musics/:id", controller.updateMusic)
router.post("/musics", controller.createMusic)
router.delete("/musics/:id", controller.deleteMusic)

module.exports = router