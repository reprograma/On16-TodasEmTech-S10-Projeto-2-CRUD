// chama o controller de podcasts
const controller = require('../controller/podcastsController')

// chamando express
const express = require('express')

// funcao de rotas de express
const router = express.Router()

//router. metodo http(rota, funcao)
router.get("/biblioteca", controller.getAllPods);
router.get("/biblioteca/tema", controller.getTopics)
router.post("/adicionar", controller.addPods)
router.patch("/atualizar/:id", controller.atualizarPods)
router.delete("/delete/:id", controller.deletePods)



// exportar para ser usado no app.js
module.exports = router