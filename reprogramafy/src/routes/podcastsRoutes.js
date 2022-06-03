//Chama o controller de podcasts
const controller = require('../controller/podcastsController')

//Chamando express
const express = require('express')

//Funcao de rotas de express
const router = express.Router()

//Router. metodo http (rota, funcao)
router.get("/biblioteca", controller.getAllPods)
router.get("/biblioteca/tema", controller.getTopics)
router.post("/adicionar", controller.addPodcasts)
router.patch("/atualizar/:id", controller.atualizarpodcasts)
router.delete("/delete/:id", controller.deletePods)

//Exportar para ser usado no app.js
module.exports = router