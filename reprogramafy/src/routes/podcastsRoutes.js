// Criando nossas rotas

const controller = require('../controller/podcastsController') // chama o controller de podcasts

const express = require('express') // chamando o express

// Função de rotas do express
const router = express.Router()

// router, metodo http (rota, função)
router.get("/biblioteca", controller.getAllPods)
router.get("/biblioteca/tema", controller.getTopics)
router.post("/adicionar", controller.addPods)
router.delete("/delete/:id", controller.deletePods)
router.patch("/atualizar/:id", controller.atualizarPods)


// Exportar para ser usado no app.js
module.exports = router