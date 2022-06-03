const controller = require ('../controller/podcastsController') // chama o controller de podcats (aonde vai encontrar as funções que vai usar)

const express = require('express') // chamando express

const router = express.Router() // função de rotas de espress

router.get("/biblioteca", controller.getAllPods) // router.metodo  (rota, função)
router.get("/biblioteca/tema", controller.getTopics) 
router.post("/adicionar", controller.addPods) 
router.patch("/atualizar/:id", controller.atualizarPods) 
//router.delete("/delete/:id", controller.deletePods)


module.exports = router // exportar para ser usado no app.js