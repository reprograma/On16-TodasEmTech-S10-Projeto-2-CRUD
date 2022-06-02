//const request = require('express/lib/request')
const controller = require('../controller/musicasController')

const express = require('express') // chamando express

const router = express.Router() // funcao de rotas de express

router.get("/catalogo", controller.getAllMusics)

router.get("/catalogo/:id", controller.getById)

router.get("/buscar/artists", controller.getByArtist)

router.post("/cadastrar", controller.addMusic)

router.put("/update/:id", controller.updateMusic)

router.delete("/delete/:id", controller.deleteMusic)

router.patch("/favoritar/:id", controller.favoritarMusic)



module.exports = router