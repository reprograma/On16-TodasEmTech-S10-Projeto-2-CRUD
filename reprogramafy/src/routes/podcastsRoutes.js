//chama o controller de podcast
const req = require('express/lib/request')

const controller = require('../controller/podcastsController')

//chamando express
const express = require('express')

//função de rotas de express
const router = express.Router()

//router, metodo, http (rota,função)
router.get("/biblioteca", controller.getAllPods)
router.get("/biblioteca/tema", controller.getTopics)
router.post("/adicionar", controller.addPods)
router.patch("/atualizar/:id", controller.atualizarPods)
router.delete("/delete/:id", controller.deletePods) 


//exportar para ser usado no app.jd
module.exports = router