//chamando o controller de músicas
const controller = require('../controller/musicasController')

//chamando o express
const express = require('express')

//função de rotas de express
const router = express.Router()

//router.metodo http (rota, função)

router.get("/musicoteca", controller.getAllMusics)
router.get("/musicoteca/artistas", controller.getByArtists) 
router.get("/musicoteca/buscar/:id", controller.getById)
router.post("/musicoteca", controller.createMusic)
router.patch("/update/:id/favorited", controller.updateFavorited)
router.delete("/delete/:id", controller.deleteById)
router.put("atualiza/:id", controller.updateById)


//exportar para ser usado no app.js
module.exports = router