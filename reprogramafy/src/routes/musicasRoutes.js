const controller = require("../controller/musicasController")

const express = require("express")

const router = express.Router()

router.get("/biblioteca", controller.getAllMusic)
router.get("/biblioteca/:id", controller.getMusicById)
router.get("/biblioteca/artistas", controller.getMusicByArtist)
router.post("/biblioteca", controller.postNewMusic)
router.put("/biblioteca/:id", controller.updateMusic)
router.delete("/biblioteca/:id", controller.deleteMusic)
router.patch("/biblioteca/:id/favoritas", controller.favMusic)

module.exports = router