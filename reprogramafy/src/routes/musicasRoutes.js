const req = require('express/lib/request')

const controller = require('../controller/musicasController')

const express = require('express')

const router = express.Router()


router.get("/catalogo", controller.getAllMusicas)
router.get("/catalogo/:id", controller.musicaPorId)
router.get("/buscar/artists", controller.musicaArtist)
router.post("/cadastrar", controller.addMusicas)
router.put("/update/:id", controller.updateMusic)
router.delete("/delete/:id", controller.deleteMusic)
router.patch("/favoritar/:id", controller.favoritarMusic)

//exportar para ser usado no app.jd

module.exports = router