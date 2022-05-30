const controller = require("../controller/musicasController")
const express = require("express")
const router = express.Router()

router.get("/allmusics", controller.allMusics)
router.get("/musics/artists", controller.musicsByArtists)
router.get("/musics/:id", controller.musicsById)
router.post("/musics/add", controller.addMusic)
router.put("/musics/:id", controller.updateMusic)
router.patch("/musics/favorited/:id", controller.favoritedMusic)
router.delete("/musics/delete/:id", controller.deleteMusic)
















module.exports = router